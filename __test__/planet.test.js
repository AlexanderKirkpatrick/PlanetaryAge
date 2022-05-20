import { Planets } from "../src/planet";

describe('Planets', () => {
  let newPlanets;
  beforeEach(() => {
    newPlanets = new Planets(4.14, 1.62, .53, .08, 74, 0);
  });
   

  test('should create a planets object with difference value', () => {
    expect(newPlanets.mercury).toEqual(4.14);
    expect(newPlanets.venus).toEqual(1.62);
    expect(newPlanets.mars).toEqual(.53);
    expect(newPlanets.jupiter).toEqual(.08);
    expect(newPlanets.average).toEqual(74);
    expect(newPlanets.age).toEqual(0);
  });

  test('should correctly determine the users age on mercury', () => {
    newPlanets.ageOnMercury(37)
    expect(newPlanets.age).toEqual(153.17999999999998);
  });

  test('should correctly determine the users age on venus', () => {
    newPlanets.ageOnVenus(37)
    expect(newPlanets.age).toEqual(153.17999999999998);
  });

});