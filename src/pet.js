function Pet(name,age) {
    this.name = name;
    this.age = 0;
    this.growUp = function() {
        this.age += 1;
    };
}

module.exports = Pet;