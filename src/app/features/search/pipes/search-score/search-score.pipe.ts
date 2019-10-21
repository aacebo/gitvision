import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchScore',
})
export class SearchScorePipe implements PipeTransform {
  transform(score: number) {
    return Math.round(score * 100).toFixed();
  }
}
