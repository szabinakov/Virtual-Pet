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
  it('Tells you if it is hungry', () => {
    const pet = new Pet('Fido');
    pet.hunger = 6;
    pet.checkUp();
    expect(pet.checkUp()).toBe('I am hungry');
  });
  it('Tells you if it needs to walk', () => {
    const pet = new Pet('Fido'); 
    pet.fitness = 2;
    pet.checkUp();
    expect(pet.checkUp()).toBe('I need a walk');
  });
  it('Tells you it needs walking and feeding', () => {
    const pet = new Pet('Fido'); 
    pet.fitness = 1;
    pet.hunger = 7;
    pet.checkUp();
    expect(pet.checkUp()).toBe('I am hungry AND I need a walk');
  });
  it('Tells you if he feels great', () => {
    const pet = new Pet('Fido'); 
    pet.fitness = 5;
    pet.hunger = 2
    pet.checkUp();
    expect(pet.checkUp()).toBe('I feel great!');
  });
});
