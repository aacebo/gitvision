import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { ISearchResult } from '../../../../resources/search';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
  host: {
    '[class.success]': 'value.score.final >= 0.67',
    '[class.warning]': 'value.score.final > 0.34 && value.score.final < 0.67',
    '[class.danger]': 'value.score.final <= 0.34',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultComponent {
  @Input() value: ISearchResult;
}
