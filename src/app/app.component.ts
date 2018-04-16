import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="col-md-12">
      <h2>{{ num }}</h2>
      <h2>{{ num | appPow: 3 }}</h2>
    </div>
  `
})
export class AppComponent {
  num = 2;

}
