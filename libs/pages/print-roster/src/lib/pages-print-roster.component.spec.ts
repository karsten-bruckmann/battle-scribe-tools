import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesPrintRosterComponent } from './pages-print-roster.component';

describe('PagesPrintRosterComponent', () => {
  let component: PagesPrintRosterComponent;
  let fixture: ComponentFixture<PagesPrintRosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagesPrintRosterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PagesPrintRosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
