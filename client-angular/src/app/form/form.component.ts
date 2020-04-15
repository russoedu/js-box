import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() title: string;
  @Input() submitTitle: string;
  @Input() desc: string;
  @Output() handleSubmit = new EventEmitter();
  // @Input() onChange;

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.desc)
    this.handleSubmit.emit(this.desc);
  }

}
