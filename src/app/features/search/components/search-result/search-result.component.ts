import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import * as qs from 'qs';

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
export class SearchResultComponent implements OnInit {
  @Input() value: ISearchResult;

  urlFriendlyName: string;

  ngOnInit() {
    this.urlFriendlyName = qs.stringify({ name: this.value.package.name }).replace('name=', '');
  }
}
