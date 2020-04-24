import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Item } from '../api-service/item';
import { ApiService } from '../api-service/api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  providers: [ApiService],
})
export class AddComponent implements OnInit {
  item: Item

  constructor(
    private router: Router,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.item = new Item('')
  }

  addItem(): void {
    this.apiService
      .add(this.item)
      .subscribe(result => {
        this.router.navigate(['/']);
      })
  }
}
