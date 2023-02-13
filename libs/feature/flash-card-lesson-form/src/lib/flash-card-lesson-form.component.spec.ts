import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureFlashCardLessonFormComponent } from './feature-flash-card-lesson-form.component';

describe('FeatureFlashCardLessonFormComponent', () => {
  let component: FeatureFlashCardLessonFormComponent;
  let fixture: ComponentFixture<FeatureFlashCardLessonFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureFlashCardLessonFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureFlashCardLessonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
