const birthYear = prompt('Enter your year of birth', 'Year of birth');
const nameOfCity = prompt('Enter the name of the city', 'Name of the city');
const favSport = prompt('Enter your favorite sport', 'Favorite sport');

if (birthYear === null || nameOfCity === null || favSport === null) {
    alert('Too bad you didn`t want to enter some information'); 
} else {
    const age = 2024 - birthYear;
    let cityMessage;

    if (nameOfCity === 'Kiev' || nameOfCity === 'London' || nameOfCity === 'Washington') {
        cityMessage = 'You live in the capital ' + nameOfCity + '!'; 
    } else {
        cityMessage = 'You live in the city ' + nameOfCity + '!';
    }
    
    alert("Your age: " + age + "\n" + cityMessage);

    let sportMessage;
    
    if (favSport === 'Basketball') {
        sportMessage = 'Cool! Do you want to become Michael Jordan?';
    } else if(favSport === 'Football') {
        sportMessage = 'Cool! Do you want to become Cristiano Ronaldo?';
    } else if(favSport === 'Car races') {
        sportMessage = 'Cool! Do you want to become Michael Schumacher?';
    } else {
        sportMessage = 'That`s cool!'
    }
    
    alert(sportMessage);
}