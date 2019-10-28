import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { IPackage } from '../../../../resources/package';

@Component({
  selector: 'app-package-general',
  templateUrl: './package-general.component.html',
  styleUrls: ['./package-general.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PackageGeneralComponent {
  @Input() package: IPackage;
}
