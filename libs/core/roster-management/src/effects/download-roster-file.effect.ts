import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, from, map, switchMap } from 'rxjs';
import { rosterParsedFromDownload } from '../actions/internal/roster-parsed-from-download.action';
import { rosterDownloadRequested } from '../actions/roster-download-requested.action';
import { convertRoster } from '../rules/convert-roster.rule';
import { parseRosterFile } from '../rules/parse-roster-file.rule';

@Injectable()
export class DownloadRosterFile {
  constructor(private actions$: Actions, private http: HttpClient) {}

  public effect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(rosterDownloadRequested),
      concatMap((action) =>
        this.http.get(action.url, {
          responseType: 'blob',
        })
      ),
      switchMap((blob) =>
        from(parseRosterFile(new File([blob], 'downloaded.rosz')))
      ),
      map((bsRoster) => convertRoster(bsRoster)),
      map((roster) => rosterParsedFromDownload({ roster }))
    )
  );
}
