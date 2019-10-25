import { Pipe, PipeTransform } from '@angular/core';
import * as md5 from 'md5';
import {
  differenceInYears,
  differenceInMonths,
  differenceInWeeks,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
} from 'date-fns';

import { ISearchPackage } from '../../../../resources/search';

@Pipe({
  name: 'searchLastUpdated',
})
export class SearchLastUpdatedPipe implements PipeTransform {
  transform(pkg: ISearchPackage) {
    const now = new Date();
    const date = new Date(pkg.date);

    const years = differenceInYears(now, date);
    const months = differenceInMonths(now, date);
    const weeks = differenceInWeeks(now, date);
    const days = differenceInDays(now, date);
    const hrs = differenceInHours(now, date);
    const mins = differenceInMinutes(now, date);
    let dateStr = '';

    if (years >= 1) {
      dateStr = `${years} year${this.getPlural(years)} ago`;
    } else if (months >= 1) {
      dateStr = `${months} month${this.getPlural(months)} ago`;
    } else if (weeks >= 1) {
      dateStr = `${weeks} week${this.getPlural(weeks)} ago`;
    } else if (days >= 1) {
      dateStr = `${days} day${this.getPlural(days)} ago`;
    } else if (hrs >= 1) {
      dateStr = `${hrs} hour${this.getPlural(hrs)} ago`;
    } else if (mins >= 1) {
      dateStr = `${mins} minute${this.getPlural(mins)} ago`;
    } else {
      dateStr = 'now';
    }

    const gravatar = md5(pkg.publisher.email.trim());

    return `
      Updated ${dateStr} by
      <a target="_blank" href="https://www.npmjs.com/~${pkg.publisher.username}">
        <img class="avatar round" src="https://s.gravatar.com/avatar/${gravatar}?size=20&default=retro" />
        ${pkg.publisher.username}
      </a>
    `;
  }

  private getPlural(v: number) {
    return v > 1 ? 's' : '';
  }
}
