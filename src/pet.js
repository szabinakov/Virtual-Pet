function Pet(name,age) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
    this.growUp = function() {
        this.age += 1;
        this.hunger += 5;
        this.fitness -= 3;
    };
}

module.exports = Pet;