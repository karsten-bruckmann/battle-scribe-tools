import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { lessonsSelector } from './selectors/lessons.selector';

@Injectable({ providedIn: 'root' })
export class LearningService {
  constructor(private store$: Store) {}

  public get lessons$() {
    return this.store$.select(lessonsSelector);
  }
}
