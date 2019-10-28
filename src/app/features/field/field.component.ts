import { Component, ChangeDetectionStrategy, Input, HostListener } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { UniToastService, UniToastType, UniToastPosition } from 'uniform';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldComponent {
  @Input() label: string;
  @Input() value: string | number;
  @Input()
  get link() { return this._link; }
  set link(v: boolean) {
    this._link = coerceBooleanProperty(v);
  }
  private _link = false;

  constructor(private readonly _toast: UniToastService) { }

  @HostListener('click')
  onClick() {
    if (!this.link) {
      navigator.clipboard.writeText(`${this.value}`);
      this._toast.open({
        duration: 5000,
        message: 'Copied to Clipboard!',
        type: UniToastType.Success,
        position: UniToastPosition.BottomRight,
      });
    }
  }
}
