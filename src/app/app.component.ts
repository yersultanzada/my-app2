import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="col-md-12">
      <h2>{{ name }}</h2>
      <h2>{{ name | uppercase }}</h2>
      <h2>{{ name | slice:0:3 }}</h2>
      <hr>
      <h2>{{ pi }}</h2>
      <h2>{{ pi | number }}</h2>
      <h2>{{ pi | number:'2.2-2' }}</h2>
      <hr>
      <h2>{{ money | currency:'USD' }}</h2>
      <hr>
      <h2>{{ date }}</h2>
      <h2>{{ date | date }}</h2>
      <h2>{{ date | date: 'fullDate' }}</h2>
      <hr>
      <h2>{{ amount | percent }}</h2>
      <h2>{{ object }}</h2>
      <h2><pre>{{ object | json }}</pre></h2>
    </div>
  `
})
export class AppComponent {
  name = 'WebForMyself';
  pi = Math.PI;
  money = 350;
  date = new Date();
  amount = 0.45;
  object = {
    foo: 'bar',
    baz: 'qux',
    nested:
      {
        xyz: 3,
        numbers: [1, 2, 3]
      }
  };

}
