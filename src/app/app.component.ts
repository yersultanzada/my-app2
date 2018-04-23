import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .has-error input{
      border: 1px solid red;
    }
  `]
})
export class AppComponent {
  @ViewChild('form') form: NgForm;

  answers = [{
    type: 'yes',
    text: 'Да'
  }, {
    type: 'no',
    text: 'Нет'
  }];

  defaultAnswer = 'no';
  defaultCountry = 'ru';

  formData = {};
  isSubmitted = false;

  addRandEmail() {
    const randEmail = 'test@mail.ru';
      this.form.form.patchValue({
        user: { email: randEmail }
      });
  }

  submitForm() {
    this.isSubmitted = true;
    this.formData = this.form.value;
    this.form.reset();
  }
}
