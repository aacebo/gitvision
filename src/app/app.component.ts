import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ISidenavItem } from './features/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  readonly navItems: ISidenavItem[] = [
    { icon: 'fa-stream', tooltip: 'Dashboard', route: '/dashboard' },
  ];
}
