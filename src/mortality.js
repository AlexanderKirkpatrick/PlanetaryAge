export class Mortality {
  constructor (mercuryLife, venusLife, marsLife, jupiterLife, remainder) {
    this.mercuryLife = 306.35999999999996;
    this.venusLife = 119.88000000000001;
    this.marsLife = 39.22;
    this.jupiterLife = 5.92;
    this.remainder = 0;
    this.over = 0;
  }

  lifeLeftOnMercury (number) {
    this.remainder = (this.mercuryLife) - number;
  }

  lifeLeftOnVenus (number) {
    this.remainder = (this.venusLife) - number;
  }

  lifeLeftOnMars (number) {
    this.remainder = (this.marsLife) - number;
  }

  lifeLeftOnJupiter (number) {
    this.remainder = (this.jupiterLife) - number;
  }

  lifeOverOnMercury (number) {
    this.over = number - (this.mercuryLife);
  }
}