import { Component, ChangeDetectionStrategy, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UniDialogRef, UniInputComponent } from 'uniform';
import { BehaviorSubject } from 'rxjs';

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

  constructor(private readonly _dialogRef: UniDialogRef) { }

  ngOnInit() {
    this.control.valueChanges.pipe(

    ).subscribe(() => console.log('changed'));
  }

  ngAfterViewInit() {
    this.input.focus();
  }
}
