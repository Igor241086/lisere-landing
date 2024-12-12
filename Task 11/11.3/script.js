const textBlock = document.getElementById('text-block');
const colorButton = document.getElementById('color-button');

const originalColor = 'black';
const newColor = 'red';

let isColorChanged = false;

colorButton.addEventListener('click', () => {
    if (isColorChanged) {
        textBlock.style.color = originalColor;
    } else {
        textBlock.style.color = newColor;
    }
    isColorChanged = !isColorChanged;
});