import { Component } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import {changeWidthTrigger, divTrigger} from './app.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [divTrigger, changeWidthTrigger]
})
export class AppComponent {
  isVisible = false;
}
