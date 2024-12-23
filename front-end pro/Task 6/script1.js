function removeChars(string, charsToRemove) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
      let include = false;
      for (let j = 0; j < charsToRemove.length; j++) {
          if (string[i] === charsToRemove[j]) {
              include = true;
              break;
          }
      }
      if (!include) {
          result += string[i];
      }
  }
  return result;
}

let userString = prompt("Enter a string:");
if (userString !== null) {
  let charsToRemoveInput = prompt("Enter the characters to remove:");
  if (charsToRemoveInput !== null) {
      let charsToRemove = charsToRemoveInput.split('');
      console.log(removeChars(userString, charsToRemove));
  } else {
      console.log("Operation canceled: no characters to remove provided.");
  }
} else {
  console.log("Operation canceled: no input string provided.");
}