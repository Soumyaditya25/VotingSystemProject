document.getElementById('poll1Form').addEventListener('submit', function(e) {
    e.preventDefault();


    const userEmail = localStorage.getItem('userEmail');
    const selectedSport = document.querySelector('input[name="sport"]:checked')?.value;


    if (!selectedSport) {
        alert('Please select an option!');
        return;
    }

    const userData = JSON.parse(localStorage.getItem('userPollData')) || {};
 

    if (!userData[userEmail]) {
        userData[userEmail] = { pollResponses: {} };
    }

    userData[userEmail].pollResponses['poll1'] = selectedSport;

    localStorage.setItem('userPollData', JSON.stringify(userData));

    alert('Your vote has been submitted!');
    window.location.href = 'mainPage.html'; 
});

document.getElementById('view-results').addEventListener('click',function(e) {
    window.location.href = 'results.html'; 
})
