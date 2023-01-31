import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';

import { RouterModule } from '@angular/router';
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
    RouterModule.forRoot([
      {
        path: '',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('@battle-scribe-tools/pages/main-menu').then(
                (m) => m.SettingsComponent
              ),
          },
          {
            path: 'roster/:roster-index',
            children: [
              {
                path: '',
                children: [
                  {
                    path: '',
                    loadComponent: () =>
                      import('@battle-scribe-tools/pages/roster').then(
                        (m) => m.PagesRosterComponent
                      ),
                  },
                  {
                    path: 'detachment/:detachment-index',
                    children: [
                      {
                        path: 'unit/:unit-index',
                        children: [
                          {
                            path: '',
                            loadComponent: () =>
                              import(
                                '@battle-scribe-tools/pages/battle-card'
                              ).then((m) => m.CardComponent),
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
