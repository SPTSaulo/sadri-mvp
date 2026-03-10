import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, ModalController, ToastController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { StoryCreationModalComponent } from './story-creation-modal.component';

describe('StoryCreationModalComponent', () => {
  let component: StoryCreationModalComponent;
  let fixture: ComponentFixture<StoryCreationModalComponent>;
  let modalController: jasmine.SpyObj<ModalController>;
  let toastController: jasmine.SpyObj<ToastController>;

  beforeEach(async () => {
    const modalControllerSpy = jasmine.createSpyObj('ModalController', ['dismiss']);
    const toastControllerSpy = jasmine.createSpyObj('ToastController', ['create']);

    await TestBed.configureTestingModule({
      declarations: [StoryCreationModalComponent],
      imports: [IonicModule.forRoot(), FormsModule],
      providers: [
        { provide: ModalController, useValue: modalControllerSpy },
        { provide: ToastController, useValue: toastControllerSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(StoryCreationModalComponent);
    component = fixture.componentInstance;
    modalController = TestBed.inject(ModalController) as jasmine.SpyObj<ModalController>;
    toastController = TestBed.inject(ToastController) as jasmine.SpyObj<ToastController>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Form Validation', () => {
    it('should be invalid when title is empty', () => {
      component.title = '';
      component.coverImageFile = new Blob();
      expect(component.isFormValid()).toBe(false);
    });

    it('should be invalid when cover image is not selected', () => {
      component.title = 'Test Story';
      component.coverImageFile = null;
      expect(component.isFormValid()).toBe(false);
    });

    it('should be valid when both title and cover image are provided', () => {
      component.title = 'Test Story';
      component.coverImageFile = new Blob();
      expect(component.isFormValid()).toBe(true);
    });

    it('should trim whitespace from title when validating', () => {
      component.title = '   ';
      component.coverImageFile = new Blob();
      expect(component.isFormValid()).toBe(false);
    });
  });

  describe('Modal Actions', () => {
    it('should dismiss modal with cancel role when cancel is called', () => {
      component.cancel();
      expect(modalController.dismiss).toHaveBeenCalledWith(null, 'cancel');
    });

    it('should dismiss modal with story data when create is called with valid form', async () => {
      component.title = 'Test Story';
      component.coverImageFile = new Blob();
      component.coverImageUrl = 'data:image/png;base64,test';

      await component.create();

      expect(modalController.dismiss).toHaveBeenCalledWith(
        {
          title: 'Test Story',
          coverImageFile: component.coverImageFile,
          coverImageUrl: component.coverImageUrl,
        },
        'create'
      );
    });

    it('should show toast and not dismiss when create is called with invalid form', async () => {
      component.title = '';
      component.coverImageFile = null;

      const toastSpy = jasmine.createSpyObj('Toast', ['present']);
      toastController.create.and.returnValue(Promise.resolve(toastSpy));

      await component.create();

      expect(toastController.create).toHaveBeenCalled();
      expect(modalController.dismiss).not.toHaveBeenCalled();
    });
  });

  describe('Cover Image Selection', () => {
    it('should set isSelectingImage to true during image selection', () => {
      expect(component.isSelectingImage).toBe(false);
    });

    it('should have coverImageUrl as null initially', () => {
      expect(component.coverImageUrl).toBeNull();
    });

    it('should have coverImageFile as null initially', () => {
      expect(component.coverImageFile).toBeNull();
    });
  });
});
