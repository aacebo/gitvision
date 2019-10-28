import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score',
})
export class ScorePipe implements PipeTransform {
  transform(score: number) {
    return Math.round(score * 100).toFixed();
  }
}
