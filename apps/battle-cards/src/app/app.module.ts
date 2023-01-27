import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';

import { CardComponent } from '@battle-scribe-tools/apps/battle-cards/pages/card';
import { SettingsComponent } from '@battle-scribe-tools/apps/battle-cards/pages/settings';
import { UnitListComponent } from '@battle-scribe-tools/apps/battle-cards/pages/unit-list';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    StoreModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 50 }),
    CardComponent,
    UnitListComponent,
    SettingsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
