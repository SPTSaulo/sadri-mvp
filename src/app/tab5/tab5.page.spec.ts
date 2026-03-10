import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AlertController, ModalController, LoadingController, ToastController } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of, throwError } from 'rxjs';
import { Tab5Page } from './tab5.page';
import { StoryService } from './services/story.service';
import { StorageService } from './services/storage.service';
import { ImageOptimizerService } from './services/image-optimizer.service';
import { Story } from './models/story.model';
import { StoryCreationModalComponent } from './components/story-creation-modal/story-creation-modal.component';

describe('Tab5Page', () => {
  let component: Tab5Page;
  let fixture: ComponentFixture<Tab5Page>;
  let storyServiceSpy: jasmine.SpyObj<StoryService>;
  let storageServiceSpy: jasmine.SpyObj<StorageService>;
  let imageOptimizerServiceSpy: jasmine.SpyObj<ImageOptimizerService>;
  let routerSpy: jasmine.SpyObj<Router>;
  let alertControllerSpy: jasmine.SpyObj<AlertController>;
  let modalControllerSpy: jasmine.SpyObj<ModalController>;
  let loadingControllerSpy: jasmine.SpyObj<LoadingController>;
  let toastControllerSpy: jasmine.SpyObj<ToastController>;

  const mockStories: Story[] = [
    {
      id: '1',
      title: 'Test Story 1',
      coverUrl: 'https://example.com/cover1.jpg',
      coverStorageType: 'cloudinary',
      photoCount: 5,
      createdAt: new Date('2024-01-15'),
      updatedAt: new Date('2024-01-15'),
      photos: [],
    },
    {
      id: '2',
      title: 'Test Story 2',
      coverUrl: 'https://example.com/cover2.jpg',
      coverStorageType: 'cloudinary',
      photoCount: 3,
      createdAt: new Date('2024-01-10'),
      updatedAt: new Date('2024-01-10'),
      photos: [],
    },
  ];

  beforeEach(async () => {
    const storyServiceMock = jasmine.createSpyObj('StoryService', ['getAll', 'delete', 'create']);
    const storageServiceMock = jasmine.createSpyObj('StorageService', ['uploadPhoto']);
    const imageOptimizerServiceMock = jasmine.createSpyObj('ImageOptimizerService', ['compressImage', 'generateThumbnail']);
    const routerMock = jasmine.createSpyObj('Router', ['navigate']);
    const alertControllerMock = jasmine.createSpyObj('AlertController', ['create']);
    const modalControllerMock = jasmine.createSpyObj('ModalController', ['create']);
    const loadingControllerMock = jasmine.createSpyObj('LoadingController', ['create']);
    const toastControllerMock = jasmine.createSpyObj('ToastController', ['create']);

    await TestBed.configureTestingModule({
      declarations: [Tab5Page],
      providers: [
        { provide: StoryService, useValue: storyServiceMock },
        { provide: StorageService, useValue: storageServiceMock },
        { provide: ImageOptimizerService, useValue: imageOptimizerServiceMock },
        { provide: Router, useValue: routerMock },
        { provide: AlertController, useValue: alertControllerMock },
        { provide: ModalController, useValue: modalControllerMock },
        { provide: LoadingController, useValue: loadingControllerMock },
        { provide: ToastController, useValue: toastControllerMock },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    storyServiceSpy = TestBed.inject(StoryService) as jasmine.SpyObj<StoryService>;
    storageServiceSpy = TestBed.inject(StorageService) as jasmine.SpyObj<StorageService>;
    imageOptimizerServiceSpy = TestBed.inject(ImageOptimizerService) as jasmine.SpyObj<ImageOptimizerService>;
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    alertControllerSpy = TestBed.inject(AlertController) as jasmine.SpyObj<AlertController>;
    modalControllerSpy = TestBed.inject(ModalController) as jasmine.SpyObj<ModalController>;
    loadingControllerSpy = TestBed.inject(LoadingController) as jasmine.SpyObj<LoadingController>;
    toastControllerSpy = TestBed.inject(ToastController) as jasmine.SpyObj<ToastController>;

    storyServiceSpy.getAll.and.returnValue(of(mockStories));

    fixture = TestBed.createComponent(Tab5Page);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should load stories on initialization', () => {
      fixture.detectChanges(); // Triggers ngOnInit
      
      expect(storyServiceSpy.getAll).toHaveBeenCalled();
      expect(component.stories).toEqual(mockStories);
      expect(component.isLoading).toBe(false);
    });

    it('should handle errors when loading stories', () => {
      storyServiceSpy.getAll.and.returnValue(throwError(() => new Error('Load error')));
      spyOn(console, 'error');

      fixture.detectChanges(); // Triggers ngOnInit

      expect(component.isLoading).toBe(false);
      expect(console.error).toHaveBeenCalledWith('Error loading stories:', jasmine.any(Error));
    });
  });

  describe('openStory', () => {
    it('should navigate to story viewer with story ID', () => {
      component.openStory('story123');

      expect(routerSpy.navigate).toHaveBeenCalledWith(['/tabs/tab5/viewer', 'story123']);
    });
  });

  describe('editStory', () => {
    it('should navigate to story editor with story ID', () => {
      component.editStory('story456');

      expect(routerSpy.navigate).toHaveBeenCalledWith(['/tabs/tab5/editor', 'story456']);
    });
  });

  describe('deleteStory', () => {
    it('should show confirmation dialog before deleting', async () => {
      const alertMock = {
        present: jasmine.createSpy('present'),
      };
      alertControllerSpy.create.and.returnValue(Promise.resolve(alertMock as any));

      await component.deleteStory('story789');

      expect(alertControllerSpy.create).toHaveBeenCalledWith(
        jasmine.objectContaining({
          header: 'Confirmar eliminación',
          message: jasmine.any(String),
          buttons: jasmine.any(Array),
        })
      );
      expect(alertMock.present).toHaveBeenCalled();
    });

    it('should delete story when confirmed', async () => {
      storyServiceSpy.delete.and.returnValue(Promise.resolve());
      
      const alertMock = {
        present: jasmine.createSpy('present'),
      };
      
      // Capture the handler for the delete button
      let deleteHandler: any;
      alertControllerSpy.create.and.callFake((config: any) => {
        const destructiveButton = config.buttons.find((b: any) => b.role === 'destructive');
        if (destructiveButton) {
          deleteHandler = destructiveButton.handler;
        }
        return Promise.resolve(alertMock as any);
      });

      await component.deleteStory('story789');
      
      // Execute the delete handler if it was captured
      if (deleteHandler) {
        await deleteHandler();
        expect(storyServiceSpy.delete).toHaveBeenCalledWith('story789');
      } else {
        fail('Delete handler was not found');
      }
    });

    it('should handle delete errors', async () => {
      storyServiceSpy.delete.and.returnValue(Promise.reject(new Error('Delete error')));
      spyOn(console, 'error');
      
      const alertMock = {
        present: jasmine.createSpy('present'),
      };
      
      let deleteHandler: any;
      alertControllerSpy.create.and.callFake((config: any) => {
        const destructiveButton = config.buttons.find((b: any) => b.role === 'destructive');
        if (destructiveButton) {
          deleteHandler = destructiveButton.handler;
        }
        return Promise.resolve(alertMock as any);
      });

      await component.deleteStory('story789');
      
      if (deleteHandler) {
        await deleteHandler();
        expect(console.error).toHaveBeenCalledWith('Error deleting story:', jasmine.any(Error));
      } else {
        fail('Delete handler was not found');
      }
    });
  });

  describe('handleRefresh', () => {
    it('should reload stories and complete refresh event', (done) => {
      const mockEvent = {
        target: {
          complete: jasmine.createSpy('complete'),
        },
      };

      storyServiceSpy.getAll.and.returnValue(of(mockStories));

      component.handleRefresh(mockEvent);

      setTimeout(() => {
        expect(storyServiceSpy.getAll).toHaveBeenCalled();
        expect(component.stories).toEqual(mockStories);
        expect(mockEvent.target.complete).toHaveBeenCalled();
        done();
      }, 100);
    });

    it('should complete refresh event even on error', (done) => {
      const mockEvent = {
        target: {
          complete: jasmine.createSpy('complete'),
        },
      };

      storyServiceSpy.getAll.and.returnValue(throwError(() => new Error('Refresh error')));
      spyOn(console, 'error');

      component.handleRefresh(mockEvent);

      setTimeout(() => {
        expect(mockEvent.target.complete).toHaveBeenCalled();
        expect(console.error).toHaveBeenCalled();
        done();
      }, 100);
    });
  });

  describe('createStory', () => {
    it('should open story creation modal', async () => {
      const modalMock = {
        present: jasmine.createSpy('present'),
        onWillDismiss: jasmine.createSpy('onWillDismiss').and.returnValue(
          Promise.resolve({ data: null, role: 'cancel' })
        ),
      };
      
      modalControllerSpy.create.and.returnValue(Promise.resolve(modalMock as any));

      await component.createStory();

      expect(modalControllerSpy.create).toHaveBeenCalledWith({
        component: StoryCreationModalComponent,
      });
      expect(modalMock.present).toHaveBeenCalled();
    });

    it('should handle modal dismissal with cancel role', async () => {
      const modalMock = {
        present: jasmine.createSpy('present'),
        onWillDismiss: jasmine.createSpy('onWillDismiss').and.returnValue(
          Promise.resolve({ data: null, role: 'cancel' })
        ),
      };
      
      modalControllerSpy.create.and.returnValue(Promise.resolve(modalMock as any));

      await component.createStory();

      // Should not call any services when cancelled
      expect(imageOptimizerServiceSpy.compressImage).not.toHaveBeenCalled();
      expect(storageServiceSpy.uploadPhoto).not.toHaveBeenCalled();
      expect(storyServiceSpy.create).not.toHaveBeenCalled();
    });

    it('should create story with compressed image and upload to storage', async () => {
      const mockData = {
        title: 'Test Story',
        coverImageFile: new Blob(['test'], { type: 'image/jpeg' }),
        coverImageUrl: 'data:image/png;base64,test',
      };

      const modalMock = {
        present: jasmine.createSpy('present'),
        onWillDismiss: jasmine.createSpy('onWillDismiss').and.returnValue(
          Promise.resolve({ data: mockData, role: 'create' })
        ),
      };

      const loadingMock = {
        present: jasmine.createSpy('present'),
        dismiss: jasmine.createSpy('dismiss'),
      };

      const toastMock = {
        present: jasmine.createSpy('present'),
      };

      modalControllerSpy.create.and.returnValue(Promise.resolve(modalMock as any));
      loadingControllerSpy.create.and.returnValue(Promise.resolve(loadingMock as any));
      toastControllerSpy.create.and.returnValue(Promise.resolve(toastMock as any));

      const compressedBlob = new Blob(['compressed'], { type: 'image/jpeg' });
      const thumbnailBlob = new Blob(['thumbnail'], { type: 'image/jpeg' });

      imageOptimizerServiceSpy.compressImage.and.returnValue(Promise.resolve(compressedBlob));
      imageOptimizerServiceSpy.generateThumbnail.and.returnValue(Promise.resolve(thumbnailBlob));

      storageServiceSpy.uploadPhoto.and.returnValue(of({
        photoId: 'test-id',
        fileName: 'cover.jpg',
        progress: 100,
        status: 'complete',
        url: 'https://cloudinary.com/test.jpg',
        storageType: 'cloudinary',
      }));

      storyServiceSpy.create.and.returnValue(Promise.resolve('new-story-id'));
      storyServiceSpy.getAll.and.returnValue(of(mockStories));

      await component.createStory();

      expect(imageOptimizerServiceSpy.compressImage).toHaveBeenCalledWith(
        jasmine.any(File),
        1920,
        0.85
      );
      expect(imageOptimizerServiceSpy.generateThumbnail).toHaveBeenCalledWith(
        jasmine.any(File),
        300
      );
      expect(storageServiceSpy.uploadPhoto).toHaveBeenCalled();
      expect(storyServiceSpy.create).toHaveBeenCalledWith(
        jasmine.objectContaining({
          title: 'Test Story',
          coverUrl: 'https://cloudinary.com/test.jpg',
          coverStorageType: 'cloudinary',
          photoCount: 0,
          photos: [],
        })
      );
      expect(loadingMock.dismiss).toHaveBeenCalled();
      expect(toastControllerSpy.create).toHaveBeenCalledWith(
        jasmine.objectContaining({
          message: 'Historia creada exitosamente',
          color: 'success',
        })
      );
    });

    it('should handle upload errors and show retry option', async () => {
      const mockData = {
        title: 'Test Story',
        coverImageFile: new Blob(['test'], { type: 'image/jpeg' }),
        coverImageUrl: 'data:image/png;base64,test',
      };

      const modalMock = {
        present: jasmine.createSpy('present'),
        onWillDismiss: jasmine.createSpy('onWillDismiss').and.returnValue(
          Promise.resolve({ data: mockData, role: 'create' })
        ),
      };

      const loadingMock = {
        present: jasmine.createSpy('present'),
        dismiss: jasmine.createSpy('dismiss'),
      };

      const alertMock = {
        present: jasmine.createSpy('present'),
      };

      modalControllerSpy.create.and.returnValue(Promise.resolve(modalMock as any));
      loadingControllerSpy.create.and.returnValue(Promise.resolve(loadingMock as any));
      alertControllerSpy.create.and.returnValue(Promise.resolve(alertMock as any));

      const compressedBlob = new Blob(['compressed'], { type: 'image/jpeg' });
      const thumbnailBlob = new Blob(['thumbnail'], { type: 'image/jpeg' });

      imageOptimizerServiceSpy.compressImage.and.returnValue(Promise.resolve(compressedBlob));
      imageOptimizerServiceSpy.generateThumbnail.and.returnValue(Promise.resolve(thumbnailBlob));

      storageServiceSpy.uploadPhoto.and.returnValue(of({
        photoId: 'test-id',
        fileName: 'cover.jpg',
        progress: 0,
        status: 'error',
        error: 'Upload failed',
      }));

      spyOn(console, 'error');

      await component.createStory();

      expect(loadingMock.dismiss).toHaveBeenCalled();
      expect(alertControllerSpy.create).toHaveBeenCalledWith(
        jasmine.objectContaining({
          header: 'No se pudo crear la historia',
          buttons: jasmine.any(Array),
        })
      );
      expect(console.error).toHaveBeenCalled();
    });
  });
});
