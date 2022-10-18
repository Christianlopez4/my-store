const username:string = 'Christian';
const sum = (a: number, b: number) => {
  return a + b;
}
sum(1,2);

class Person {
  age: number;
  lastName: string;

  constructor(age: number, lastName:string) {
    this.age = age;
    this.lastName = lastName;
  }
}

class Carro {
  constructor(public modelo: number, public marca: string) {
  }
}

const persona = new Person(23, 'Christian');
