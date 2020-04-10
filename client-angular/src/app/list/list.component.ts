import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { list } from './list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  list = list;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  add() {
    this.router.navigate(['/add']);
  }

}
