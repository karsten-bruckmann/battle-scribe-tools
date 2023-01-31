import { Component, EnvironmentInjector, Optional } from '@angular/core';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { filter } from 'rxjs';

@Component({
  selector: 'bc-root',
  template:
    '<ion-app><ion-router-outlet [environmentInjector]="environmentInjector"></ion-router-outlet></ion-app>',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    public environmentInjector: EnvironmentInjector,
    @Optional() updates?: SwUpdate
  ) {
    updates?.versionUpdates
      .pipe(
        filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY')
      )
      .subscribe(() => {
        if (confirm('Neue App-Version verfügbar. Jetzt neu laden?')) {
          updates.activateUpdate().then(() => document.location.reload());
        }
      });
  }
}
