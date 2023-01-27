import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureTranslatableComponent } from './feature-translatable.component';

describe('FeatureTranslatableComponent', () => {
  let component: FeatureTranslatableComponent;
  let fixture: ComponentFixture<FeatureTranslatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureTranslatableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureTranslatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
