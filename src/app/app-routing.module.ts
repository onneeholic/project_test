import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterComponent } from './filter/filter.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [

  { path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},
  { path: 'home', component: MainComponent },
  { path: 'fildata', component: FilterComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
