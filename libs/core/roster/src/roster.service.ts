import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  addRosterAction,
  deleteRosterAction,
  Detachment,
  detachmentSelector,
  overwriteRosterAction,
  Roster,
  rosterSelector,
  Unit,
  unitSelector,
} from '@battle-scribe-tools/data-access/rosters';
import { Store } from '@ngrx/store';
import { firstValueFrom, NEVER, Observable, switchMap } from 'rxjs';
import { convertRoster } from './rules/convert-roster.rule';
import { parseRosterFile } from './rules/parse-roster-file.rule';
import { rosterListSelector } from './selectors/roster-list.selector';

@Injectable({ providedIn: 'root' })
export class RosterService {
  constructor(private store$: Store, private http: HttpClient) {}

  public get list$() {
    return this.store$.select(rosterListSelector);
  }

  public getRosterFromRoute$(
    activatedRoute: ActivatedRoute
  ): Observable<Roster> {
    return activatedRoute.paramMap.pipe(
      switchMap((paramMap) => {
        const indexParam = paramMap.get('roster-index');
        if (!indexParam) {
          return NEVER;
        }
        const index = parseInt(indexParam);
        return this.store$.select(rosterSelector(index));
      })
    );
  }

  public getDetachmentFromRoute$(
    activatedRoute: ActivatedRoute
  ): Observable<Detachment | null> {
    return activatedRoute.paramMap.pipe(
      switchMap((paramMap) => {
        const rosterIndexParam = paramMap.get('roster-index');
        const detachmentIndexParam = paramMap.get('detachment-index');
        if (!rosterIndexParam || !detachmentIndexParam) {
          return NEVER;
        }
        const rosterIndex = parseInt(rosterIndexParam);
        const detachmentIndex = parseInt(detachmentIndexParam);
        return this.store$.select(
          detachmentSelector(rosterIndex, detachmentIndex)
        );
      })
    );
  }

  public getUnitFromRoute$(
    activatedRoute: ActivatedRoute
  ): Observable<Unit | null> {
    return activatedRoute.paramMap.pipe(
      switchMap((paramMap) => {
        const rosterIndexParam = paramMap.get('roster-index');
        const detachmentIndexParam = paramMap.get('detachment-index');
        const unitIndexParam = paramMap.get('unit-index');
        if (!rosterIndexParam || !detachmentIndexParam || !unitIndexParam) {
          return NEVER;
        }
        const rosterIndex = parseInt(rosterIndexParam);
        const detachmentIndex = parseInt(detachmentIndexParam);
        const unitIndex = parseInt(unitIndexParam);
        return this.store$.select(
          unitSelector(rosterIndex, detachmentIndex, unitIndex)
        );
      })
    );
  }

  public async addRoster(file: File): Promise<void> {
    const roster = convertRoster(await parseRosterFile(file));
    this.store$.dispatch(addRosterAction({ roster }));
  }

  public async addRosterFromUrl(roszUrl: string): Promise<void> {
    const blob = await firstValueFrom(
      this.http.get(roszUrl, {
        responseType: 'blob',
      })
    );
    const file = new File([blob], 'downloaded.rosz');
    const roster = convertRoster(await parseRosterFile(file));
    this.store$.dispatch(addRosterAction({ roster: { ...roster, roszUrl } }));
  }

  public async updateRoster(index: number) {
    const current = await firstValueFrom(
      this.store$.select(rosterSelector(index))
    );
    if (!current.roszUrl) {
      return;
    }
    const blob = await firstValueFrom(
      this.http.get(current.roszUrl, {
        responseType: 'blob',
      })
    );
    const file = new File([blob], 'downloaded.rosz');
    const roster = convertRoster(await parseRosterFile(file));
    this.store$.dispatch(
      overwriteRosterAction({ roster: { ...current, ...roster }, index })
    );
  }

  public async deleteRoster(index: number): Promise<void> {
    this.store$.dispatch(deleteRosterAction({ index }));
  }
}
