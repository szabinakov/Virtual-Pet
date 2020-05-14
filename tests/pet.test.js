const Pet = require('../src/pet');

describe('constructor', () => {
  it('sets the name property', () => {
    const pet = new Pet('Fido');

    expect(pet.name).toEqual('Fido');
    expect(pet.age).toEqual(0);
  });
});
describe('growUp', () => {
  it('increments the age by 1', () => {
    const pet = new Pet('Fido');

    pet.growUp();

    expect(pet.age).toEqual(1);
    expect(pet.hunger).toEqual(5);
    expect(pet.fitness).toEqual(7);
  });
});
describe('walk', () => {
  it('increases fitness by 4', () => {
    const pet = new Pet('Fido');
    pet.fitness = 4;
    pet.walk();

    expect(pet.fitness).toEqual(8);
  });
  it('increases fitness by to a maximum of 10', () => {
    const pet = new Pet('Fido');
    pet.fitness = 8;
    pet.walk();

    expect(pet.fitness).toEqual(10);
});
});
describe('feed', () => {
  it('decreases hunger level by 3', () => {
    const pet = new Pet('Fido');
    pet.hunger = 5;
    pet.feed();
    expect(pet.hunger).toEqual(2);
    pet.hunger = 2;
    pet.feed();
    expect(pet.hunger).toEqual(0);
  });
});
describe('checkUp', () => {
  it('Tells you how it feels', () => {
    const pet = new Pet('Fido');
    
    pet.checkUp();
    expect().toBe('I need a walk');
    pet.hunger = 5;
    pet.checkUp();
    expect().toBe('I am hungry');

  });
});

/*if the pet's fitness is 3 or less, it should return 'I need a walk'.

if the pet's hunger is 5 or more, it should return 'I am hungry'.

if both of the above are true, it should return 'I am hungry AND I need a walk'

if neither of the above are true, it should return 'I feel great!'

*/