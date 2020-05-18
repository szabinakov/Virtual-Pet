
const Initial_AGE = 0;
const Initial_HUNGER = 0;
const Initial_FITNESS = 10;
const MINIMUM_FITNESS = 0;
const MAXIMUM_HUNGER = 10;
const DEATH_MESSAGE = 'Your pet is no longer alive :('


function Pet(name) {
    this.name = name;
    this.age = Initial_AGE;
    this.hunger = Initial_HUNGER;
    this.fitness = Initial_FITNESS;
    this.children = [];
};

Pet.prototype = {
    get isAlive () {
    return this.age < 30 && this.hunger < MAXIMUM_HUNGER && this.fitness > MINIMUM_FITNESS;
    }
};

Pet.prototype.growUp = function() {
    if (this.isAlive === false) {
        throw new Error (DEATH_MESSAGE);}
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
};

Pet.prototype.walk = function() {
    if (this.isAlive === false) {
        throw new Error (DEATH_MESSAGE); 
    } else if ((this.fitness + 4) <= Initial_FITNESS) {
    this.fitness += 4;
    } else {
    this.fitness = Initial_FITNESS;
    }
};


Pet.prototype.feed = function () {
    if (this.isAlive === false) {
        throw new Error (DEATH_MESSAGE);
    } else if ((this.hunger) - 3 >= Initial_HUNGER) {
        this.hunger -= 3;
    } else { 
        this.hunger = Initial_HUNGER;
    }
};  

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
};

Pet.prototype.adoptChild = function (child) {
    this.children.push(child);
}

module.exports = Pet;