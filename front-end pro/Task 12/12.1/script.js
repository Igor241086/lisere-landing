let savedLink = '';

const saveLinkButton = document.getElementById('saveLinkButton');
const goToLinkButton = document.getElementById('goToLinkButton');

function isValidUrl(string) {
    try {
        new URL(string);
        return true;
    } catch {
        return false;
    }
}

saveLinkButton.addEventListener('click', function() {
    const link = prompt('Enter link (URL):');
    if (link) {
        if (isValidUrl(link)) {
            savedLink = link;
            alert('Link saved!')
        } else {
            alert('Invalid URL entered. Try again.');
        }
    } else {
        alert('Link not entered.');
    }
});

goToLinkButton.addEventListener('click', function() {
    if (savedLink) {
        window.location.href = savedLink;
    } else {
        alert('The link was not saved. Click "Enter link" and try again.');
    }
});