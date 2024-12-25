document.getElementById('poll3Form').addEventListener('submit', function(e) {
    e.preventDefault();

    const userEmail = localStorage.getItem('userEmail');
    const selectedMusic = document.querySelector('input[name="music"]:checked')?.value;


    if (!selectedMusic) {
        alert('Please select an option!');
        return;
    }


    const userData = JSON.parse(localStorage.getItem('userPollData')) || {};

    if (!userData[userEmail]) {
        userData[userEmail] = { pollResponses: {} };
    }

    userData[userEmail].pollResponses['poll3'] = selectedMusic;

    localStorage.setItem('userPollData', JSON.stringify(userData));

    alert('Your vote has been submitted!');
    window.location.href = 'mainPage.html'; 
});
