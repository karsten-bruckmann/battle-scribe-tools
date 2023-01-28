import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 50 }),
    RouterModule.forRoot(
      [
        {
          path: '',
          loadComponent: () =>
            import('@battle-scribe-tools/pages/flash-cards/index').then(
              (m) => m.IndexComponent
            ),
        },
        {
          path: 'lesson/:index',
          loadComponent: () =>
            import('@battle-scribe-tools/pages/flash-cards/lesson').then(
              (m) => m.LessonComponent
            ),
        },
      ],
      {
        useHash: true,
      }
    ),
    IonicModule.forRoot({}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
