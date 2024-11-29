// (function main() {
//     const promptUser = (message) => () => {
//       const input = prompt(message);
//       return parseFloat(input);
//     };
  
//     const isValidNumber = (number) => number > 100;
  
//     const processInput = (maxIterations) => (callback) => {
//       let lastInput;
  
//       for (let i = 0; i < maxIterations; i++) {
//         const userInput = callback(`Enter a number greater than 100, (attempt ${i + 1} out of ${maxIterations}):`)();
//         if (isNaN(userInput)) {
//           alert("This is not a number. Try again.");
//           continue;
//         }
  
//         lastInput = userInput;
  
//         if (isValidNumber(userInput)) {
//           console.log("The loop was terminated early.");
//           break;
//         }
//       }
  
//       console.log("The user's last input:", lastInput);
//     };
  
//     processInput(10)(promptUser);
//   })();