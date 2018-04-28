import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CarsPageComponent } from './cars-page/cars-page.component';
import { CarPageComponent } from './car-page/car-page.component';

const appRoutes: Routes = [
  // localhost:4200/cars
  { path: '', component: HomePageComponent},
  { path: 'cars', component: CarsPageComponent},
  { path: 'cars/:id/:name', component: CarPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
