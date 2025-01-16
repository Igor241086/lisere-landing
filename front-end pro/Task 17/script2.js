class Coach {
    constructor(name, specialization, rating) {
      this._validateRating(rating);
      this.name = name;
      this.specialization = specialization;
      this.rating = rating;
    }
  
    displayInfo = () => {
      console.log(`Coach: ${this.name}, Specialization: ${this.specialization}, Rating: ${this.rating}`);
    };
  
    _validateRating = (rating) => {
      if (typeof rating !== 'number' || rating < 0 || rating > 5) {
        throw new Error("The rating must be a number ranging from 0 to 5");
      }
    };
  }
  
  const coach1 = new Coach("John Doe", "Fitness", 4.7);
  const coach2 = new Coach("Alice Smith", "Yoga", 4.9);
  
  coach1.displayInfo();
  coach2.displayInfo();
  
  try {
    const coach3 = new Coach("Invalid Coach", "Dance", 6);
  } catch (error) {
    console.error(error.message);
  }
  
  try {
    const coach4 = new Coach("Another Invalid", "Pilates", "5");
  } catch (error) {
    console.error(error.message);
  }