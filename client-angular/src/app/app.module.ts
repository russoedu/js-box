import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { ListComponent } from './list/list.component';
import { ListRowComponent } from './list-row/list-row.component';
import { FormComponent } from './form/form.component';
import { ConfigComponent } from './config/config.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    ListComponent,
    ListRowComponent,
    FormComponent,
    ConfigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
