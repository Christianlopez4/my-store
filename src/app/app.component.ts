import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Christian';
  age = 23;
  btnDisabled = true;
  person = {
    name: 'Felipe',
    age: 25,
  };
}
