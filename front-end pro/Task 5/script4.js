let number = prompt("Enter an integer:");

number = Number(number);

if (isNaN(number) || number < 2 || !Number.isInteger(number)) {
    alert("Enter an integer greater then 1");
} else {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        alert(`${number} is a prime number.`);
    } else {
        alert(`${number} is not a prime number.`);
    }
}