import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UniDialogService } from 'uniform';

import { SearchDialogComponent } from '../search-dialog';
import { SearchService } from '../../../../resources/search';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInputComponent {
  constructor(
    private readonly _dialog: UniDialogService,
    readonly search: SearchService,
  ) { }

  onClick() {
    this._dialog.open(SearchDialogComponent, {
      panelClass: 'uni-dialog-transparent-panel',
      top: '50px',
    });
  }

  onClear(e: Event) {
    e.stopImmediatePropagation();
    this.search.clear();
  }
}
