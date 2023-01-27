import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { State } from './models/state.model';
import { userSettingsReducer } from './reducers/user-settings.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature<State>('user-settings', userSettingsReducer),
  ],
})
export class UserSettingsModule {}
