import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Table1dataComponent } from './table1data/table1data.component';

const routes: Routes = [
  {path:'',component:Table1dataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
