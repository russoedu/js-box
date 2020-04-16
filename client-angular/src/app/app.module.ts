import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ListRowComponent } from './list-row/list-row.component';
import { FormComponent } from './form/form.component';
import { UpdateComponent } from './update/update.component';
import { AddComponent } from './add/add.component';
import { HeaderComponent } from './header/header.component';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from '../message.service';
import { ApiService } from './api-service/api.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListRowComponent,
    FormComponent,
    UpdateComponent,
    AddComponent,
    HeaderComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    HttpErrorHandler,
    MessageService,
    ApiService,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
