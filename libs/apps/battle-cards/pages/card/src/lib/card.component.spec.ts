import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsBattleCardsPagesCardComponent } from './apps-battle-cards-pages-card.component';

describe('AppsBattleCardsPagesCardComponent', () => {
  let component: AppsBattleCardsPagesCardComponent;
  let fixture: ComponentFixture<AppsBattleCardsPagesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppsBattleCardsPagesCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppsBattleCardsPagesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
