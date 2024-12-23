let n = prompt('Enter a five-digit number');
let result = "";
while (n > 0) {
    result = (n % 10) + " " + result;
    n = Math.floor(n / 10);
}
console.log(result.trim());