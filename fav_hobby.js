document.getElementById('poll6Form').addEventListener('submit', function(e) {
    e.preventDefault();

    const userEmail = localStorage.getItem('userEmail');
    const selectedHobby = document.querySelector('input[name="hobby"]:checked')?.value;


    if (!selectedHobby) {
        alert('Please select an option!');
        return;
    }



    const userData = JSON.parse(localStorage.getItem('userPollData')) || {};

    if (!userData[userEmail]) {
        userData[userEmail] = { pollResponses: {} };
    }

    userData[userEmail].pollResponses['poll6'] = selectedHobby;

    localStorage.setItem('userPollData', JSON.stringify(userData));

    alert('Your vote has been submitted!');
    window.location.href = 'mainPage.html'; 
});
