import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { first, map, switchMap } from 'rxjs';
import { createDeckRequested } from '../actions/create-deck-requested.action';
import { deckCreated } from '../actions/internal/deck-created.action';
import { rosterFlashCardDeckSelector } from '../selectors/roster-flash-card-deck.selector';

@Injectable()
export class CreateDeckEffect {
  constructor(private actions$: Actions, private store$: Store) {}
  public effect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createDeckRequested),
      switchMap((action) =>
        this.store$.select(rosterFlashCardDeckSelector(action.settings))
      ),
      first(),
      map((deck) => deckCreated({ deck }))
    )
  );
}
