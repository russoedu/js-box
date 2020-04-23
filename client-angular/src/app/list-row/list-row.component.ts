import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() onDelete: EventEmitter<any> = new EventEmitter<any>();
  @Output() onUpdate: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private router: Router,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
  }

  delete(): void {
    this.onDelete.emit();
  }

  update(): void {
    this.onUpdate.emit();
  }
}
