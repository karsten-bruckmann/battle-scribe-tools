import { NgModule } from '@angular/core';
import { FlashCardsModule } from '@battle-scribe-tools/data-access/flash-cards';
import { RostersModule } from '@battle-scribe-tools/data-access/rosters';

@NgModule({
  imports: [RostersModule, FlashCardsModule],
})
export class RosterModule {}
