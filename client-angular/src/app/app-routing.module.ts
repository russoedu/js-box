import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ListRowComponent } from './list-row/list-row.component';


const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'edit', component: ListRowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
