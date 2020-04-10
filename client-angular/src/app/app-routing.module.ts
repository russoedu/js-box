import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';
import { AddComponent } from './add/add.component';


const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'update/:id', component: UpdateComponent },
  { path: 'add', component: AddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
