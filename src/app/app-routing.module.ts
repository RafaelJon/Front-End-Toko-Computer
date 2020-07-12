import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComputerComponent } from './view-computer/view-computer.component';
import { InsertComputerComponent } from './insert-computer/insert-computer.component';


const routes: Routes = [
  {path:"", redirectTo:"/manage", pathMatch: 'full'},
  {path:"manage", component: ViewComputerComponent},
  {path:"insert", component: InsertComputerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
