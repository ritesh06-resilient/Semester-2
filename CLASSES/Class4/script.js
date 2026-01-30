
const searchButton = document.getElementById('search');
const locationInput = document.getElementById('inpt');

searchButton.addEventListener('click', () => {
    
    const searchTerm = locationInput.value;

    console.log(searchTerm);
});