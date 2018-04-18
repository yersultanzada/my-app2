import { Component } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  template: `
    <div class="col-md-12">
      <h1>{{ asyncTitle | async }}</h1>
      <input type="text" class="form-control" [(ngModel)]="searchCar">
      <hr>
      <button class="btn btn-primary" (click)="addCar()">Добавить</button>
      <hr>
      <ul class="list-group">
        <li class="list-group-item" *ngFor = "let car of cars | carFilter: searchCar: 'name'; let i = index">
          <b>{{ i+1 }}</b> {{ car.name }} <i>{{ car.desc }}</i>
        </li>
      </ul>
    </div>
  `
})
export class AppComponent {
  searchCar = '';
  cars = [
    { name: 'Ford', desc: 'WFM 1' },
    { name: 'Mers', desc: 'WFM 2' },
    { name: 'BMW', desc: 'WFM 3' },
    { name: 'Mazda', desc: 'WFM 4' },
    { name: 'Ferrari', desc: 'WFM 5' },
    { name: 'Audi', desc: 'WFM 6' }
  ];

  asyncTitle = Observable.of('Async title 3 seconds').delay(3000);

  addCar() {
    this.cars.push({
      name: 'New',
      desc: 'WFM'
    });
  }

}
