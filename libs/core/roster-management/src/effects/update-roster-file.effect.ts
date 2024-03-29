import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { rosterSelector } from '@battle-scribe-tools/data-access/rosters';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { concatMap, first, from, map, NEVER, switchMap } from 'rxjs';
import { rosterParsedFromUpdate } from '../actions/internal/roster-parsed-from-update.action';
import { rosterUpdateRequested } from '../actions/roster-update-requested.action';
import { convertRoster } from '../rules/convert-roster.rule';
import { parseRosterFile } from '../rules/parse-roster-file.rule';

@Injectable()
export class UpdateRosterFile {
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store$: Store
  ) {}

  public effect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(rosterUpdateRequested),
      switchMap((action) =>
        this.store$.select(rosterSelector(action.id)).pipe(
          first(),
          concatMap((roster) =>
            roster?.roszUrl
              ? this.http.get(roster.roszUrl, {
                  responseType: 'blob',
                })
              : NEVER
          ),
          switchMap((blob) =>
            from(parseRosterFile(new File([blob], 'downloaded.rosz')))
          ),
          map((bsRoster) => convertRoster(bsRoster)),
          map((roster) => rosterParsedFromUpdate({ roster, id: action.id }))
        )
      )
    )
  );
}
