import { Component, OnInit, ChangeDetectionStrategy, Input, ViewEncapsulation, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as marked from 'marked';

declare var hljs: any;

@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.scss'],
  host: { class: 'app-markdown' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarkdownComponent implements OnInit, AfterViewInit {
  @Input() markdown: string;
  @ViewChild('code', { static: false }) readonly code: ElementRef<HTMLDivElement>;

  readonly html$ = new BehaviorSubject<string>(undefined);

  ngOnInit() {
    this.html$.next(marked(this.markdown));
  }

  ngAfterViewInit() {
    this.code.nativeElement.querySelectorAll('pre code').forEach(b => {
      hljs.highlightBlock(b);
    });
  }
}
