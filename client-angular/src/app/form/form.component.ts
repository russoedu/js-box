import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() task;
  @Input() action;
  @Input() text;
  // @Input() onSubmit;
  // @Input() hidden;
  // @Input() onChange;
  // @Input() cancel;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  cancel(): void {
    this.router.navigate(['/']);
  }

}
