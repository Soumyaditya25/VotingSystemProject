document.getElementById('poll2Form').addEventListener('submit', function(e) {
    e.preventDefault();

    const userEmail = localStorage.getItem('userEmail');
    const selectedLanguage = document.querySelector('input[name="language"]:checked')?.value;


    if (!selectedLanguage) {
        alert('Please select an option!');
        return;
    }


    const userData = JSON.parse(localStorage.getItem('userPollData')) || {};

    if (!userData[userEmail]) {
        userData[userEmail] = { pollResponses: {} };
    }

    userData[userEmail].pollResponses['poll2'] = selectedLanguage;

    localStorage.setItem('userPollData', JSON.stringify(userData));

    alert('Your vote has been submitted!');
    window.location.href = 'mainPage.html'; 
});
