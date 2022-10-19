import { Component } from '@angular/core';
import { Product } from './product.model';

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

  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ];

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
