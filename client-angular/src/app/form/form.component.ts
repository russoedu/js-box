import { Component, EventEmitter, OnInit, Input, Output, ElementRef, ViewChild } from '@angular/core';
import { Router } from "@angular/router";

import { Item } from '../api-service/item';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() title: string;
  @Input() submitTitle: string;
  @Input() item: Item;
  @Output() handleSubmit: EventEmitter<Item> = new EventEmitter<Item>();
  @ViewChild('descInput') descInput: ElementRef;
  alert: boolean

  constructor(
    private router: Router,
    private el: ElementRef
    ) {}

  ngOnInit(): void {
    this.alert = false;
  }

  ngAfterViewInit() {
    this.focusOnDesc();
  }

  submit(): void {
    if (this.item.desc.trim() === '') {
      this.alert = true;
      this.focusOnDesc();
  } else {
      this.handleSubmit.emit();
    }
  }

  closeAlert(): void {
    this.alert = false;
    this.focusOnDesc();
  }

  cancel() {
    this.router.navigate(['/']);
  }

  focusOnDesc(): void {
    this.descInput.nativeElement.focus();

  }

}
