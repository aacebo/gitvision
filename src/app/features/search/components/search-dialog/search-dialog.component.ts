import { Component, ChangeDetectionStrategy, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UniDialogRef, UniInputComponent } from 'uniform';
import { BehaviorSubject } from 'rxjs';
import { tap, startWith, debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { SearchService, SearchType } from '../../../../resources/search';

@Component({
  selector: 'app-search-dialog',
  templateUrl: './search-dialog.component.html',
  styleUrls: ['./search-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchDialogComponent implements OnInit, AfterViewInit {
  @ViewChild(UniInputComponent, { static: false }) input: UniInputComponent;

  readonly control = new FormControl();
  readonly focused$ = new BehaviorSubject(true);

  constructor(
    private readonly _dialogRef: UniDialogRef,
    readonly search: SearchService,
  ) { }

  ngOnInit() {
    this.control.valueChanges.pipe(
      startWith(''),
      distinctUntilChanged(),
      debounceTime(500),
      tap((text: string) => {
        if (text) {
          this.search.search(text, [SearchType.User, SearchType.Repository]);
        }
      }),
    ).subscribe();
  }

  ngAfterViewInit() {
    this.input.focus();
  }

  onClear(e: Event) {
    e.stopImmediatePropagation();
    this.search.clear();
  }
}
