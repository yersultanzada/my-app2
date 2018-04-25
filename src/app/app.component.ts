import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .has-error input{
      border: 1px solid red;
    }
      `]
})
export class AppComponent implements OnInit {
  answers = [{
    type: 'yes',
    text: 'Да'
  }, {
    type: 'no',
    text: 'Нет'
  }];

  form: FormGroup;
  charsCount = 5;

  ngOnInit() {
    this.form = new FormGroup({
      user: new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email], this.checkForEmail),
        pass: new FormControl('', [Validators.required, this.checkForLength.bind(this)]),
      }),
      country: new FormControl('ru'),
      answer: new FormControl('no'),
    });
  }

  onSubmit() {
    console.log('submitted', this.form);
  }

  checkForLength(control: FormControl) {
     if (control.value.length <= this.charsCount) {
       return {
         'lengthError': true
       };
     }
     return null;
  }

  checkForEmail(control: FormControl): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@mail.ru') {
          resolve({
            'emailIsUsed': true
          });
        } else {
          resolve(null);
        }
      }, 3000);
    });
  }
}
