function User(name, surname, age, location) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.location = location;
}

User.prototype.getInfo = function() {
    return `name: ${this.name} ${this.surname}, age: ${this.age}, location: ${this.location}`;
};

const user1 = new User("Ivan", "Ivanov", 30, "Odesa");
const user2 = new User("Anna", "Petrova", 25, "Kiev");

console.log(user1.getInfo());
console.log(user2.getInfo());