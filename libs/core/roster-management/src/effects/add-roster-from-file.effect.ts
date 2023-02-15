import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, map, switchMap } from 'rxjs';
import { rosterParsedFromFile } from '../actions/internal/roster-parsed-from-file.action';
import { rosterFileAdded } from '../actions/roster-file-added.action';
import { convertRoster } from '../rules/convert-roster.rule';
import { parseRosterFile } from '../rules/parse-roster-file.rule';

@Injectable()
export class AddRosterFromFile {
  constructor(private actions$: Actions) {}

  public effect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(rosterFileAdded),
      switchMap((action) => from(parseRosterFile(action.file))),
      map((bsRoster) => convertRoster(bsRoster)),
      map((roster) => rosterParsedFromFile({ roster }))
    )
  );
}
