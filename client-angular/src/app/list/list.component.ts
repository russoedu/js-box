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
    this.getItems();
  }

  getItems(): void {
    this.apiService.all()
      .subscribe(items => {
        return (this.list = items)
      });
  }

  addItem() {
    this.router.navigate(['/add']);
  }

  deleteItem(item): void {
    const id = item._id;
    this.apiService
      .delete(id)
      .subscribe(result => {
        this.getItems();
      })
  }

  updateItem(item): void {
    const id = item._id;
    this.router.navigate(['/update/', id]);
  }
}
