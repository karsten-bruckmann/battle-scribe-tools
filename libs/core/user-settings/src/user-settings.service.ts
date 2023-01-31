import { Injectable } from '@angular/core';
import { setUserSetting } from '@battle-scribe-tools/data-access/user-settings';
import { Store } from '@ngrx/store';
import { listViewSelector } from './selectors/list-view.selector';

@Injectable({ providedIn: 'root' })
export class UserSettingsService {
  constructor(private store$: Store) {}

  public get listView$() {
    return this.store$.select(listViewSelector);
  }

  public setListView(view: 'list' | 'grid'): void {
    this.store$.dispatch(setUserSetting({ key: 'list-view', value: view }));
  }
}
