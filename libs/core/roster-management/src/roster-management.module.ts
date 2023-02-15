import { NgModule } from '@angular/core';
import { FlashCardsModule } from '@battle-scribe-tools/data-access/flash-cards';
import {
  rostersCoreReducerRegistry,
  RostersModule,
} from '@battle-scribe-tools/data-access/rosters';
import { EffectsModule } from '@ngrx/effects';
import { AddRosterFromFile } from './effects/add-roster-from-file.effect';
import { DownloadRosterFile } from './effects/download-roster-file.effect';
import { UpdateRosterFile } from './effects/update-roster-file.effect';
import { rostersReducer } from './reducers/rosters.reducer';

@NgModule({
  imports: [
    RostersModule,
    FlashCardsModule,
    EffectsModule.forFeature([
      AddRosterFromFile,
      DownloadRosterFile,
      UpdateRosterFile,
    ]),
  ],
})
export class RosterManagementModule {
  constructor() {
    rostersCoreReducerRegistry.add(rostersReducer);
  }
}
