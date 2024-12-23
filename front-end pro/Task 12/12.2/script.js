const container = document.getElementById('button-container');

container.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const buttonName = event.target.getAttribute('data-name');
        console.log(`You pressed the button: ${buttonName}`);
    }
});