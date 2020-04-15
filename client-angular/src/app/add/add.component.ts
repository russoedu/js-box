import { Component, OnInit } from '@angular/core';
import { Item } from '../api-service/item';
import { ApiService } from '../api-service/api.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  providers: [ApiService],
})
export class AddComponent implements OnInit {
  item: Item

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.item = {
      desc: ''
    }
  }

  handleSubmit(): void {
    console.log('item', this.item)
    this.apiService
      .add(this.item)
      .subscribe(result => {
        console.log(result)
      })
    this.router.navigate(['/']);
  }
}
