import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';

import { Item } from '../api-service/item';
import { ApiService } from '../api-service/api.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
  providers: [ApiService],
})
export class UpdateComponent implements OnInit {
  item: Item
  public id: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id')
    });
    this.get(this.id)
  }

  get(id: string): void {
    this.item = undefined;

    if (id) {
      this.apiService
        .get(id)
        .subscribe(res => {
          return this.item = new Item(res.desc)
        });
    }
  }

  updateItem(): void {
    this.apiService
      .update(this.item, this.id)
      .subscribe(result => {
        this.router.navigate(['/']);
      })
  }

}
