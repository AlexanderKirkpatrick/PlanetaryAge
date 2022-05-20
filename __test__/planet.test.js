import { Planets } from "../src/planet";

describe('Planets', () => {
  let newPlanets;
  beforeEach(() => {
    newPlanets = new Planets(4.14, 1.62, .53, .08, 74)
  });

  test('should create a planets object with difference value', () => {

    expect(newPlanets.mercury).toEqual(4.14);
    expect(newPlanets.venus).toEqual(1.62);
    expect(newPlanets.mars).toEqual(.53);
    expect(newPlanets.jupiter).toEqual(.08);
    expect(newPlanets.average).toEqual(74);
  });

});