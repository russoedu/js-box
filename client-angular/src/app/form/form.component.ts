import { Component, EventEmitter, OnInit, Input, Output, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

  constructor(
    private el: ElementRef
    ) { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    console.log(this.descInput.nativeElement.value);
    this.descInput.nativeElement.focus();
  }

  save(): void {
    this.handleSubmit.emit();
  }

}
