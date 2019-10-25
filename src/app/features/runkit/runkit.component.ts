import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-runkit',
  templateUrl: './runkit.component.html',
  styleUrls: ['./runkit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RunkitComponent implements AfterViewInit {
  @Input() source: string;
  @Input() readonly = false;
  @Input() mode: string;
  @Input() nodeVersion: string;
  @Input() env: string[] = [];
  @Input() title: string;
  @Input() minHeight: string;
  @Input() packageTimestamp: string;
  @Input() preamble: string;

  @Output() loaded = new EventEmitter<any>();
  @Output() urlChanged = new EventEmitter<any>();
  @Output() evaluated = new EventEmitter<any>();

  @ViewChild('embedRunkit', { static: false }) embedRunkit: ElementRef<HTMLDivElement>;

  notebook: any;

  ngAfterViewInit() {
    this.notebook = window['RunKit'].createNotebook({
      element: this.embedRunkit.nativeElement,
      source: this.source,
      readOnly: this.readonly,
      mode: this.mode,
      nodeVersion: this.nodeVersion,
      env: this.env,
      title: this.title,
      minHeight: this.minHeight,
      packageTimestamp: this.packageTimestamp,
      preamble: this.preamble,
      onLoad: this.loaded.emit.bind(this.loaded),
      onURLChanged: this.urlChanged.emit.bind(this.urlChanged),
      onEvaluate: this.evaluated.emit.bind(this.evaluated),
    });
  }
}
