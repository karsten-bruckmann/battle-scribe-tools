import { Injectable } from '@angular/core';
import {
  addRosterAction,
  deleteRosterAction,
  selectedRosterSelector,
  selectRosterAction,
} from '@battle-scribe-tools/data-access/rosters';
import { Store } from '@ngrx/store';
import { createRoster } from './create-roster';
import { rosterTitlesSelector } from './selectors/roster-titles.selector';

@Injectable({ providedIn: 'root' })
export class RosterService {
  constructor(private store$: Store) {}

  public get list$() {
    return this.store$.select(rosterTitlesSelector);
  }

  public get selected$() {
    return this.store$.select(selectedRosterSelector);
  }

  public async addRoster(file: File): Promise<void> {
    const roster = await createRoster(file);
    this.store$.dispatch(addRosterAction({ roster }));
  }

  public async deleteRoster(index: number): Promise<void> {
    this.store$.dispatch(deleteRosterAction({ index }));
  }

  public async selectRoster(index: number): Promise<void> {
    this.store$.dispatch(selectRosterAction({ index }));
  }
}
