const user = {
    name: "Ivan",
    age: 30,
    location: "Odesa",
    getInfo() {
        return `name: ${this.name}, age: ${this.age}, location: ${this.location}`;
    }
};

console.log(user.getInfo());