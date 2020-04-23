import { Component, OnInit } from '@angular/core';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public client = '';
  public env = '';

  constructor() {
    this.client = environment.JS_BOX_CLIENT.charAt(0).toUpperCase() + environment.JS_BOX_CLIENT.substring(1)
    this.env = environment.JS_BOX_ENVIRONMENT;
  }

  ngOnInit() { }

}
