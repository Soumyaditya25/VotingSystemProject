document.getElementById('poll5Form').addEventListener('submit', function(e) {
    e.preventDefault();

    const userEmail = localStorage.getItem('userEmail');
    const selectedColor = document.querySelector('input[name="color"]:checked')?.value;


    if (!selectedColor) {
        alert('Please select an option!');
        return;
    }


    const userData = JSON.parse(localStorage.getItem('userPollData')) || {};

    if (!userData[userEmail]) {
        userData[userEmail] = { pollResponses: {} };
    }

    userData[userEmail].pollResponses['poll5'] = selectedColor;

    localStorage.setItem('userPollData', JSON.stringify(userData));

    alert('Your vote has been submitted!');
    window.location.href = 'mainPage.html'; 
});
