function removeElement(string, item) {
    let result = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] != item) {
            result += string[i];
        }
    }
    return result;
}

let inputString = prompt("Enter a string:");
let itemToRemove = prompt("Enter characters to remove:");

let resultString = removeElement(inputString, itemToRemove);
console.log("Result:", resultString);