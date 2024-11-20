let N = prompt('Enter an integer N');

N = Number(N);

if (isNaN(N) || N < 1) {
    alert('You have entered an invalid number. Make sure it is an integer greater then 0');
} else {
    let result = "";
    for (let i = 1; i <= 100; i++) {
      if (i * i <= N) {
        result += i + " ";
        } else {
          break;
        }
    }
    alert(`Enter an integer between 1 and 100, whose square does not exceed the limit ${N}: ${result}`);
}