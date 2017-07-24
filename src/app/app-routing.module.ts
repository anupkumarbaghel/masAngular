import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { IndentComponent } from './component/indent/indent.component';
import { MeasurementbookComponent } from './component/measurementbook/measurementbook.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'indent', component: IndentComponent },
  { path: 'measurementbook', component: MeasurementbookComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }