import { Component, OnInit } from '@angular/core';
import { list } from './list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  list = list;

  constructor() { }

  ngOnInit(): void {
  }

  add(): void {
    alert('add')
  }

}
