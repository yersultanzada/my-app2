import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CarsPageComponent } from './cars-page/cars-page.component';
import { CarPageComponent } from './car-page/car-page.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AuthGuard} from './auth-guard.service';
import {NewPageComponent} from './new-page/new-page.component';

const appRoutes: Routes = [
  // localhost:4200/cars
  { path: '', component: HomePageComponent},
  { path: 'cars', component: CarsPageComponent, canActivate: [AuthGuard], children: [
      { path: ':id/:name', component: CarPageComponent}
    ] },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found' },
  { path: 'new', component: NewPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
