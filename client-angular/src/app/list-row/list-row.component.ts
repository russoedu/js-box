import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Router } from "@angular/router";

import { ApiService } from '../api-service/api.service';

@Component({
  selector: 'app-list-row',
  templateUrl: './list-row.component.html',
  styleUrls: ['./list-row.component.scss'],
  providers: [ApiService],
})
export class ListRowComponent implements OnInit {

  @Input() item;

  constructor(
    private router: Router,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
  }

  delete(): void {
    console.log('delete ' + this.item._id)
    this.apiService
      .delete(this.item._id)
      .subscribe(result => {
        this.router.navigate(['/']);
      })
  }
}
