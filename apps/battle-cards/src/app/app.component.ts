import { Component, EnvironmentInjector } from '@angular/core';

@Component({
  selector: 'bc-root',
  template:
    '<ion-app><ion-router-outlet [environmentInjector]="environmentInjector"></ion-router-outlet></ion-app>',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public environmentInjector: EnvironmentInjector) {}
}
