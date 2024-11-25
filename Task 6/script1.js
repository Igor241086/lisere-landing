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
  let charsToRemoveInput = prompt("Enter the characters to remove:");
  
  let charsToRemove = charsToRemoveInput.split('');
  
  console.log(removeChars(userString, charsToRemove));