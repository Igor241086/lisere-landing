const number = prompt('Enter a three-digit number');

if (number >=100 && number <=999) {
    const digit1 = (number - (number % 100)) / 100;
    const digit2 = ((number % 100) - (number % 10)) / 10
    const digit3 = number % 10;

    if (digit1 === digit2 && digit2 === digit3) {
        alert('All digits are the same');
    } else if (digit1 === digit2 || digit1 === digit3 || digit2 === digit3) {
        alert('There are repeated digits');
    } else {
        alert('All digits are different');
    }
} else {
    alert('This is not a three-digit number');
}

