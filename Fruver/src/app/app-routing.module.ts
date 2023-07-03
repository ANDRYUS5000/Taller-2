import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  {path:'productos',component:MainComponent},
  {path:'productos/:id',component:DetailsComponent},
  {path:'**',redirectTo:'/productos',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
