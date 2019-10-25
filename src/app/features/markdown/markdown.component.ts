import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as marked from 'marked';

@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarkdownComponent implements OnInit {
  @Input() markdown: string;

  readonly html$ = new BehaviorSubject<string>(undefined);

  ngOnInit() {
    this.html$.next(marked(this.markdown));
  }
}
