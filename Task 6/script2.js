function calculateAverage() {
    let sum = 0;
    let count = 0;
    
      let input = prompt("Enter numbers separated by commas:");
  
    if (input) {
      let elements = input.split(',');
  
      for (let i = 0; i < elements.length; i++) {
        let num = parseFloat(elements[i].trim()); 
  
        if (!isNaN(num)) {
          sum += num;
          count++;
        }
      }
  
      alert(sum / count);
    } else {
      alert("You didn`t enter any data.");
    }
  }
  
  calculateAverage();