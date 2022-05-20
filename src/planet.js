export class Planets {
  constructor (mercury, venus, mars, jupiter, average, age) {
    this.mercury = 4.14;
    this.venus = 1.62;
    this.mars = .53;
    this.jupiter = .08;
    this.average = 74;
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
}