import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule, ActionSheetController } from '@ionic/angular';

import { StoryCardComponent } from './story-card.component';
import { Story } from '../../models/story.model';

describe('StoryCardComponent', () => {
  let component: StoryCardComponent;
  let fixture: ComponentFixture<StoryCardComponent>;
  let actionSheetController: jasmine.SpyObj<ActionSheetController>;

  const mockStory: Story = {
    id: 'story-1',
    title: 'Summer Vacation',
    coverUrl: 'https://example.com/cover.jpg',
    coverStorageType: 'cloudinary',
    photoCount: 5,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
    photos: []
  };

  beforeEach(waitForAsync(() => {
    const actionSheetSpy = jasmine.createSpyObj('ActionSheetController', ['create']);

    TestBed.configureTestingModule({
      declarations: [ StoryCardComponent ],
      imports: [IonicModule.forRoot()],
      providers: [
        { provide: ActionSheetController, useValue: actionSheetSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(StoryCardComponent);
    component = fixture.componentInstance;
    actionSheetController = TestBed.inject(ActionSheetController) as jasmine.SpyObj<ActionSheetController>;
    
    component.story = mockStory;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display story cover image', () => {
    const imgElement = fixture.nativeElement.querySelector('ion-img');
    expect(imgElement).toBeTruthy();
    expect(imgElement.src).toBe(mockStory.coverUrl);
    expect(imgElement.alt).toBe(mockStory.title);
  });

  it('should display story title as overlay', () => {
    const titleElement = fixture.nativeElement.querySelector('.story-title');
    expect(titleElement).toBeTruthy();
    expect(titleElement.textContent.trim()).toBe(mockStory.title);
  });

  it('should display photo count badge', () => {
    const badgeElement = fixture.nativeElement.querySelector('.photo-count-badge');
    expect(badgeElement).toBeTruthy();
    expect(badgeElement.textContent.trim()).toContain(mockStory.photoCount.toString());
  });

  it('should emit tap event when card is clicked', () => {
    spyOn(component.tap, 'emit');
    
    const cardElement = fixture.nativeElement.querySelector('ion-card');
    cardElement.click();
    
    expect(component.tap.emit).toHaveBeenCalledWith(mockStory.id);
  });

  it('should show action sheet with edit and delete options on long press', async () => {
    const mockActionSheet = {
      present: jasmine.createSpy('present')
    };
    actionSheetController.create.and.returnValue(Promise.resolve(mockActionSheet as any));

    await component.onLongPress();

    expect(actionSheetController.create).toHaveBeenCalledWith(
      jasmine.objectContaining({
        header: mockStory.title,
        buttons: jasmine.arrayContaining([
          jasmine.objectContaining({ text: 'Edit', icon: 'create-outline' }),
          jasmine.objectContaining({ text: 'Delete', icon: 'trash-outline', role: 'destructive' }),
          jasmine.objectContaining({ text: 'Cancel', icon: 'close', role: 'cancel' })
        ])
      })
    );
    expect(mockActionSheet.present).toHaveBeenCalled();
  });

  it('should emit edit event when edit action is selected', async () => {
    spyOn(component.edit, 'emit');
    
    let editHandler: Function | undefined;
    const mockActionSheet = {
      present: jasmine.createSpy('present')
    };
    
    actionSheetController.create.and.callFake((options: any) => {
      const editButton = options.buttons.find((b: any) => b.text === 'Edit');
      editHandler = editButton?.handler;
      return Promise.resolve(mockActionSheet as any);
    });

    await component.onLongPress();
    
    if (editHandler) {
      editHandler();
    }
    
    expect(component.edit.emit).toHaveBeenCalledWith(mockStory.id);
  });

  it('should emit delete event when delete action is selected', async () => {
    spyOn(component.delete, 'emit');
    
    let deleteHandler: Function | undefined;
    const mockActionSheet = {
      present: jasmine.createSpy('present')
    };
    
    actionSheetController.create.and.callFake((options: any) => {
      const deleteButton = options.buttons.find((b: any) => b.text === 'Delete');
      deleteHandler = deleteButton?.handler;
      return Promise.resolve(mockActionSheet as any);
    });

    await component.onLongPress();
    
    if (deleteHandler) {
      deleteHandler();
    }
    
    expect(component.delete.emit).toHaveBeenCalledWith(mockStory.id);
  });

  it('should display loading placeholder while image loads', () => {
    const skeletonElement = fixture.nativeElement.querySelector('ion-skeleton-text');
    expect(skeletonElement).toBeTruthy();
    expect(skeletonElement.classList.contains('image-placeholder')).toBe(true);
  });
});
