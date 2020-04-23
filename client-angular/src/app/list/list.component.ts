import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Item } from '../api-service/item';
import { ApiService } from '../api-service/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [ApiService],
})
export class ListComponent implements OnInit {
  list: Item[];

  constructor(
    private router: Router,
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
    this.fillData();
  }

  fillData(): void {
    this.apiService.all()
      .subscribe(items => {
        return (this.list = items)
      });
  }

  add() {
    this.router.navigate(['/add']);
  }
}
