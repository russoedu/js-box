import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
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

  constructor(private router: ActivatedRoute, private apiService: ApiService) {
  }

  ngOnInit() {
    this.id = this.router.snapshot.paramMap.get('id');
    this.get(this.id)
  }

  get(id: string): void {
    this.item = undefined;

    if (id) {
      this.apiService
        .get(id)
        .subscribe(items => (this.item = items));
    }
  }

}
