import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesRosterComponent } from './pages-roster.component';

describe('PagesRosterComponent', () => {
  let component: PagesRosterComponent;
  let fixture: ComponentFixture<PagesRosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagesRosterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PagesRosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
