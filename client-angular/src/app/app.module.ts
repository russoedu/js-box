import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ListRowComponent } from './list-row/list-row.component';
import { FormComponent } from './form/form.component';
import { UpdateComponent } from './update/update.component';
import { AddComponent } from './add/add.component';
import { HeaderComponent } from './header/header.component';

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
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
