import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="col-md-12">
      <ul class="list-group">
        <li class="list-group-item" *ngFor = "let car of cars; let i = index">
          <b>{{ i+1 }}</b> {{ car.name }}
        </li>
      </ul>
    </div>
  `
})
export class AppComponent {
  cars = [
    { name: 'Ford' },
    { name: 'Mers' },
    { name: 'BMW' },
    { name: 'Mazda' },
    { name: 'Ferrari' },
    { name: 'Audi' }
  ];

}
