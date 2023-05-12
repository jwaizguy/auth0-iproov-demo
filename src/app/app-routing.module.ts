import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IproovComponent } from './components/iproov/iproov.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'iproov-auth',
    component: IproovComponent,
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
