import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

import { IScore } from '../../../../resources';

@Component({
  selector: 'app-score-icon',
  templateUrl: './score-icon.component.html',
  styleUrls: ['./score-icon.component.scss'],
  host: {
    '[class.has-popover]': 'hasPopover',
    '[class.success]': 'score.final >= 0.67',
    '[class.warning]': 'score.final > 0.34 && score.final < 0.67',
    '[class.danger]': 'score.final <= 0.34',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScoreIconComponent {
  @Input() score: IScore;
  @Input()
  get hasPopover() { return this._hasPopover; }
  set hasPopover(v: boolean) {
    this._hasPopover = coerceBooleanProperty(v);
  }
  private _hasPopover = false;
}
