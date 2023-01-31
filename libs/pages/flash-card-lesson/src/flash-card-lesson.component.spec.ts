import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashCardLessonComponent } from './flash-card-lesson.component';

describe('FlashCardLessonComponent', () => {
  let component: FlashCardLessonComponent;
  let fixture: ComponentFixture<FlashCardLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlashCardLessonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlashCardLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
