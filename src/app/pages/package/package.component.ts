import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PackageService } from '../../resources/package';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PackageComponent {
  constructor(readonly pkg: PackageService) { }
}
