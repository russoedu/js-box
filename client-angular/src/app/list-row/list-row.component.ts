import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-list-row',
  templateUrl: './list-row.component.html',
  styleUrls: ['./list-row.component.scss']
})
export class ListRowComponent implements OnInit {

  @Input() item;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  delete(): void {
    alert('delete ' + this.item._id)
  }

  update() {
    this.router.navigate(['/update', this.item._id]);
  }

}
