
const MAXIMUM_HUNGER = 10;
const MINIMUM_HUNGER = 0;
const MAXIMUM_FITNESS = 10;
const MINIMUM_FITNESS = 0;

const DEATH_MESSAGE = 'Your pet is no longer alive :('


function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = MINIMUM_HUNGER;
    this.fitness = MAXIMUM_FITNESS;
}
Pet.prototype = {
    get isAlive () {
    return this.age < 30 && this.hunger < MAXIMUM_HUNGER && this.fitness > MINIMUM_FITNESS;
}
}
Pet.prototype.growUp = function() {
    if (this.isAlive === false) {
        throw new Error (DEATH_MESSAGE);}
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
}
    Pet.prototype.walk = function() {
        if (this.isAlive === false) {
            throw new Error (DEATH_MESSAGE); 
        } else if ((this.fitness + 4) <= MAXIMUM_FITNESS) {
        this.fitness += 4;
        } else {
        this.fitness = MAXIMUM_FITNESS;
      };
    };


    Pet.prototype.feed = function () {
        if (this.isAlive === false) {
            throw new Error (DEATH_MESSAGE);
        } else if ((this.hunger) - 3 >= MINIMUM_HUNGER) {
            this.hunger -= 3;
        } else { 
            this.hunger = MINIMUM_HUNGER;
        }
    }  

    Pet.prototype.checkUp = function() { 
        if (this.isAlive === false) {
            return (DEATH_MESSAGE)} 
        if((this.fitness <= 3) && (this.hunger >= 5)) {
            return 'I am hungry AND I need a walk'}
        if(!(this.fitness <= 3) && !(this.hunger >= 5)) {
            return 'I feel great!' }
        if(this.fitness <= 3) {
            return 'I need a walk'}
        if(this.hunger >= 5) {
            return 'I am hungry'}      
    }

module.exports = Pet;