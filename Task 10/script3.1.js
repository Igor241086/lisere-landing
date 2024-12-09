function Contact({ id, name, phone, email }) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.email = email;
}

function Book(contacts = []) {
    this._contacts = contacts;
}

Object.defineProperty(Book.prototype, "contacts", {
    get() {
        return this._contacts;
    },
    set(newContacts) {
        if (Array.isArray(newContacts)) {
            this._contacts = newContacts.map(contact => new Contact(contact));
        } else {
            throw new Error("Contacts must be an array of objects");
        }
    },
});

Object.defineProperty(Book.prototype, "find", {
    value: function (name) {
        return this._contacts.find(contact => contact.name === name) || "Contact not found";
    },
});

Object.defineProperty(Book.prototype, "add", {
    value: function (contact) {
        if (contact.name && contact.phone && contact.email) {
            this._contacts.push(new Contact({ ...contact, id: Date.now() }));
        } else {
            throw new Error("The contact must contain the name, phone number and email");
        }
    },
});

Object.defineProperty(Book.prototype, "remove", {
    value: function (id) {
        const index = this._contacts.findIndex(contact => contact.id === id);
        if (index !== -1) {
            this._contacts.splice(index, 1);
            return "Contact deleted";
        }
        return "Contact not found";
    },
});

Object.defineProperty(Book.prototype, "update", {
    value: function (id, updatedContact) {
        const contact = this._contacts.find(contact => contact.id === id);
        if (contact) {
            Object.assign(contact, updatedContact);
            return "Contact updated";
        }
        return "Contact not found";
    },
});

const contacts = [
    { id: 1, name: "Serhii", phone: "+380999999999", email: "example@email.com" },
];

const book = new Book(contacts);

console.log(book.contacts);

book.contacts = [
    { id: 2, name: "Anna", phone: "+380123456789", email: "anna@email.com" },
];

console.log(book.contacts);

book.add({ name: "Oleh", phone: "+380777777777", email: "oleh@email.com" });
console.log(book.contacts);

console.log(book.find("Anna"));
console.log(book.find("Oleh"));

book.update(2, { phone: "+380123456789" });
console.log(book.find("Anna"));

console.log(book.remove(2));
console.log(book.contacts);