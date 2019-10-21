import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { UNI_HOST_COLORS } from '../core/constants';
import { UniColor } from '../core/enums';

@Component({
  moduleId: module.id,
  selector: 'uni-pill',
  exportAs: 'uniPill',
  templateUrl: './pill.component.html',
  styleUrls: ['./pill.component.scss'],
  host: {
    class: 'uni-pill',
    ...UNI_HOST_COLORS,
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UniPillComponent {
  @Input() color?: UniColor;
}
