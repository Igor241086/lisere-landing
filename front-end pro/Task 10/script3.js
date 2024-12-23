const book = {
    contacts: [
        {
            name: "Serhii",
            phone: "+380999999999",
            email: "example@email.com",
        },
    ],
    find(name) {
        return this.contacts.find(contact => contact.name === name) || "Contact not found";
    },
    add(contact) {
        this.contacts.push(contact);
    },
};

book.add({ name: "Anna", phone: "+380123456789", email: "anna@email.com" });
console.log(book.find("Serhii"));
console.log(book.find("Anna"));
console.log(book.find("Ivan"));