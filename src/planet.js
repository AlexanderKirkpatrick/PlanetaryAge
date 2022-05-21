export class Planets {
  constructor (mercury, venus, mars, jupiter, average, age,) {
    this.mercury = 4.14;
    this.venus = 1.62;
    this.mars = .53;
    this.jupiter = .08;
    this.average = 0;
    this.age = 0;
  }

  ageOnMercury(number) {
   this.age = (this.mercury) * number;
  }

  ageOnVenus(number) {
    this.age = (this.venus) * number;
   }

  ageOnMars(number) {
    this.age = (this.mars) * number;
  }

  ageOnJupiter(number) {
    this.age = (this.jupiter) * number;
  }

  lifeExpectOnMercury(number) {
    this.average = (this.mercury) * number;
  }

  lifeExpectOnVenus(number) {
    this.average = (this.venus) * number;
  }

  lifeExpectOnMars(number) {
    this.average = (this.mars) * number;
  }

  lifeExpectOnJupiter(number) {
    this.average = (this.jupiter) * number;
  }

  
}

