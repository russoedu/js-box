import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { ListComponent } from './list/list.component';
import { ListRowComponent } from './list-row/list-row.component';
import { FormComponent } from './form/form.component';
import { UpdateComponent } from './update/update.component';

@NgModule({
   declarations: [
      AppComponent,
      HeadComponent,
      ListComponent,
      ListRowComponent,
      FormComponent,
      UpdateComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
