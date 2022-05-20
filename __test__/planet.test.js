import { Planets } from "../src/planet";

describe('Planets', () => {
  
  test('should create a planets object with difference value', () => {
    let newPlanets = new Planets(4.14, 1.62, .53, .08, 74)
    expect(newPlanets.mercury).toEqual(4.14);
    expect(newPlanets.venus).toEqual(1.62);
    expect(newPlanets.mars).toEqual(.53);
    expect(newPlanets.jupiter).toEqual(.08);
    expect(newPlanets.average).toEqual(74);
  });

  test('should correctly determine the users age on mercury', () => {
    const age = 37;
    const mercury = 4.14;
    expect(age.mercury).toEqual(153.18);
  });

});