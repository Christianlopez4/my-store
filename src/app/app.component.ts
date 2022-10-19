import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newName: string = '';
  name = 'Christian';
  age = 23;
  btnDisabled = true;
  person = {
    name: 'Felipe',
    age: 25,
  };

  names: string[] = ['juan', 'manuel', 'natalia', 'isabel'];

  public toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  public increaseAge() {
    this.age++;
  }

  public addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  public removeName(index: number) {
    this.names.splice(index, 1);
  }

}
