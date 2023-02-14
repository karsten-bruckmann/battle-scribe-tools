import { Injectable } from '@angular/core';
import { addRosterAction } from '@battle-scribe-tools/data-access/rosters';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, map, switchMap } from 'rxjs';
import { rosterFileAdded } from '../actions/roster-file-uploaded.action';
import { convertRoster } from '../rules/convert-roster.rule';
import { parseRosterFile } from '../rules/parse-roster-file.rule';

@Injectable()
export class ParseRosterFile {
  constructor(private actions$: Actions) {}

  public effect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(rosterFileAdded),
      switchMap((action) => from(parseRosterFile(action.file))),
      map((bsRoster) => convertRoster(bsRoster)),
      map((roster) => addRosterAction({ roster }))
    )
  );
}
