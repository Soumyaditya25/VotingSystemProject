document.getElementById('poll4Form').addEventListener('submit', function(e) {
    e.preventDefault();

    const userEmail = localStorage.getItem('userEmail');
    const selectedFood = document.querySelector('input[name="food"]:checked')?.value;


    if (!selectedFood) {
        alert('Please select an option!');
        return;
    }



    const userData = JSON.parse(localStorage.getItem('userPollData')) || {};

    if (!userData[userEmail]) {
        userData[userEmail] = { pollResponses: {} };
    }

    userData[userEmail].pollResponses['poll4'] = selectedFood;

    localStorage.setItem('userPollData', JSON.stringify(userData));

    alert('Your vote has been submitted!');
    window.location.href = 'mainPage.html'; 
});
