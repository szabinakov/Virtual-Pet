const Pet = require('../src/pet');

describe('constructor', () => {
  it('sets the name property', () => {
    const pet = new Pet('Goose');

    expect(pet.name).toEqual('Goose');
    expect(pet.age).toEqual(0);
  });



});
describe('growUp', () => {
  it('increments the age by 1 hunger by 5 and reduce fitness by 3', () => {
    const pet = new Pet('Goose');

    pet.growUp();

    expect(pet.age).toEqual(1);
    expect(pet.hunger).toEqual(5);
    expect(pet.fitness).toEqual(7);
  });
  it('checks the error message when pet is dead', () =>{
    const pet = new Pet('Goose');
    pet.age = 31;
    expect(()=>pet.growUp()).toThrowError('Your pet is no longer alive :(');
  })
});




describe('walk', () => {
  it('increases fitness by 4', () => {
    const pet = new Pet('Goose');
    pet.fitness = 4;
    pet.walk();
    expect(pet.fitness).toEqual(8);
  });
  it('increases fitness by to a maximum of 10', () => {
    const pet = new Pet('Goose');
    pet.fitness = 8;
    pet.walk();

    expect(pet.fitness).toEqual(10);
  });
  it('checks the error message when pet is dead', () =>{
    const pet = new Pet('Goose');
    pet.age = 31;
    expect(()=>pet.walk()).toThrowError('Your pet is no longer alive :(');
  });
});



describe('feed', () => {
  it('decreases hunger level by 3', () => {
    const pet = new Pet('Goose');
    pet.hunger = 5;
    pet.feed();
    expect(pet.hunger).toEqual(2);
    pet.hunger = 2;
    pet.feed();
    expect(pet.hunger).toEqual(0);
  });
  it('checks the error message when pet is dead', () =>{
    const pet = new Pet('Goose');
    pet.age = 31;
    expect(()=>pet.feed()).toThrowError('Your pet is no longer alive :(');
  })
});


describe('checkUp', () => {
  it('Tells you if it is hungry', () => {
    const pet = new Pet('Goose');
    pet.hunger = 6;
    pet.checkUp();
    expect(pet.checkUp()).toBe('I am hungry');
  });
  it('Tells you if it needs to walk', () => {
    const pet = new Pet('Goose'); 
    pet.fitness = 2;
    pet.checkUp();
    expect(pet.checkUp()).toBe('I need a walk');
  });
  it('Tells you it needs walking and feeding', () => {
    const pet = new Pet('Goose'); 
    pet.fitness = 1;
    pet.hunger = 7;
    pet.checkUp();
    expect(pet.checkUp()).toBe('I am hungry AND I need a walk');
  });
  it('Tells you if he feels great', () => {
    const pet = new Pet('Goose'); 
    pet.fitness = 5;
    pet.hunger = 2
    pet.checkUp();
    expect(pet.checkUp()).toBe('I feel great!');
  });
  it('Tells you it is no longer alive', () => {
    const pet = new Pet('Goose'); 
    pet.age = 31
    pet.checkUp();
    expect(pet.checkUp()).toBe('Your pet is no longer alive :(');
  });

});




describe('isAlive', () => {
  it('Tells you if it is alive', () => {
    const pet = new Pet('Goose');
    pet.age = 31;
    expect(pet.isAlive).toBe(false);
    pet.age = 26;
    expect(pet.isAlive).toBe(true);
  });
});


