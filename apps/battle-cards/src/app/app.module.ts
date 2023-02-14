import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    StoreModule.forRoot(),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 50 }),
    RouterModule.forRoot([
      {
        path: '',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('@battle-scribe-tools/pages/main-menu').then(
                (m) => m.MainMenuComponent
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
                        (m) => m.RosterComponent
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
                              ).then((m) => m.BattleCardComponent),
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            path: 'flash-card-lesson/:lesson-index',
            loadComponent: () =>
              import('@battle-scribe-tools/pages/flash-card-lesson').then(
                (m) => m.FlashCardLessonComponent
              ),
          },
        ],
      },
    ]),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
