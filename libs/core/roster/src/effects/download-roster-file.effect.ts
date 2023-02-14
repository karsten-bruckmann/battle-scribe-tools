import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { addRosterAction } from '@battle-scribe-tools/data-access/rosters';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, from, map, switchMap } from 'rxjs';
import { rosterUrlAdded } from '../actions/roster-url-added.action';
import { convertRoster } from '../rules/convert-roster.rule';
import { parseRosterFile } from '../rules/parse-roster-file.rule';

@Injectable()
export class DownloadRosterFile {
  constructor(private actions$: Actions, private http: HttpClient) {}

  public effect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(rosterUrlAdded),
      concatMap((action) =>
        this.http.get(action.url, {
          responseType: 'blob',
        })
      ),
      switchMap((blob) =>
        from(parseRosterFile(new File([blob], 'downloaded.rosz')))
      ),
      map((bsRoster) => convertRoster(bsRoster)),
      map((roster) => addRosterAction({ roster }))
    )
  );
}
