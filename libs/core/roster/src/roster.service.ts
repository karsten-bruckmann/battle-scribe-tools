import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  deleteRosterAction,
  Detachment,
  detachmentSelector,
  Unit,
  unitSelector,
} from '@battle-scribe-tools/data-access/rosters';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RosterService {
  constructor(private store$: Store, private http: HttpClient) {}

  public detachment$(
    rosterIndex: number,
    detachmentIndex: number
  ): Observable<Detachment | null> {
    return this.store$.select(detachmentSelector(rosterIndex, detachmentIndex));
  }

  public unit$(
    rosterIndex: number,
    detachmentIndex: number,
    unitIndex: number
  ): Observable<Unit | null> {
    return this.store$.select(
      unitSelector(rosterIndex, detachmentIndex, unitIndex)
    );
  }

  public async deleteRoster(index: number): Promise<void> {
    this.store$.dispatch(deleteRosterAction({ index }));
  }
}
