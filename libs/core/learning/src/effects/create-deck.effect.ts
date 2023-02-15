import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { createDeckRequested } from '../actions/create-deck-requested.action';
import { deckCreated } from '../actions/internal/deck-created.action';
import { rosterFlashCardDeckSelector } from '../selectors/roster-flash-card-deck.selector';

@Injectable()
export class CreateDeckEffect {
  constructor(private actions$: Actions, private store$: Store) {}
  public effect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createDeckRequested),
      concatLatestFrom((action) =>
        this.store$.select(rosterFlashCardDeckSelector(action.settings))
      ),
      map(([, deck]) => deckCreated({ deck }))
    )
  );
}
