import { Planets } from "../src/planet";

describe('Planets', () => {
  let newPlanets;
  beforeEach(() => {
    newPlanets = new Planets(4.14, 1.62, .53, .08, 0, 0);
  });
   

  test('should create a planets object with difference value', () => {
    expect(newPlanets.mercury).toEqual(4.14);
    expect(newPlanets.venus).toEqual(1.62);
    expect(newPlanets.mars).toEqual(.53);
    expect(newPlanets.jupiter).toEqual(.08);
    expect(newPlanets.average).toEqual(0);
    expect(newPlanets.age).toEqual(0);
  });

  test('should correctly determine the users age on mercury', () => {
    newPlanets.ageOnMercury(37)
    expect(newPlanets.age).toEqual(153.17999999999998);
  });

  test('should correctly determine the users age on venus', () => {
    newPlanets.ageOnVenus(37)
    expect(newPlanets.age).toEqual(59.940000000000005);
  });

  test('should correctly determine the users age on mars', () => {
    newPlanets.ageOnMars(37)
    expect(newPlanets.age).toEqual(19.61);
  });

  test('should correctly determine the users age on jupiter', () => {
    newPlanets.ageOnJupiter(37)
    expect(newPlanets.age).toEqual(2.96);
  });

  test('should correctly determine the users remaining years of life', () => {
    newPlanets.lifeExpectOnMercury(74)
    expect(newPlanets.average).toEqual(2.96);
  });

});