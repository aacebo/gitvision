import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';

import { ISearchUser, ISearchRepository, SearchType } from '../../../../resources/search';

@Component({
  selector: 'app-search-item-card',
  templateUrl: './search-item-card.component.html',
  styleUrls: ['./search-item-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchItemCardComponent implements OnInit {
  @Input() value: ISearchUser | ISearchRepository;
  @Input() type: SearchType;

  title: string;
  text: string;
  icon: string;

  private get _user() {
    return this.value as ISearchUser;
  }

  private get _repository() {
    return this.value as ISearchRepository;
  }

  ngOnInit() {
    if (this.type === SearchType.User) {
      this.title = this._user.login;
      this.text = this._user.html_url;
      this.icon = 'fa-user';
    } else {
      this.title = this._repository.name;
      this.text = this._repository.html_url;
      this.icon = 'fa-book';
    }
  }
}
