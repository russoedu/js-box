import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Router } from "@angular/router";
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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.router.navigate(['/']);
  }

  submit() {
    console.log(this.desc)
    this.handleSubmit.emit(this.desc);
  }

}
