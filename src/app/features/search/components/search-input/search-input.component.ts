import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UniDialogService } from 'uniform';

import { SearchDialogComponent } from '../search-dialog';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInputComponent {
  constructor(private readonly _dialog: UniDialogService) { }

  onClick() {
    this._dialog.open(SearchDialogComponent, {
      panelClass: 'uni-dialog-transparent-panel',
    });
  }
}
