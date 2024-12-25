function getCurrentUserData() {
    const userEmail = localStorage.getItem('userEmail');
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    const currentUser = users.find(user => user.email === userEmail);
    
    if (currentUser) {
        document.getElementById('currentUserName').textContent = currentUser.name;
        document.getElementById('currentUserEmail').textContent = currentUser.email;
    } else {
        window.location.href = 'Login.html';
    }
}

window.addEventListener('load', getCurrentUserData);

function toggleDropdown() {
    const dropdown = document.getElementById('profileDropdown');
    dropdown.classList.toggle('show');
}

document.addEventListener('click', function(event) {
    const profile = document.querySelector('.profile-container');
    const dropdown = document.getElementById('profileDropdown');
    if (!profile.contains(event.target)) {
        dropdown.classList.remove('show');
    }
});

function handleLogout() {
    localStorage.removeItem('userEmail'); 
    window.location.href = 'Login.html';
}

function toggleDropdown() {
    const dropdown = document.getElementById('profileDropdown');
    dropdown.classList.toggle('show');

    document.addEventListener('click', function(event) {
        const profile = document.querySelector('.profile-container');
        if (!profile.contains(event.target)) {
            dropdown.classList.remove('show');
        }
    });
}

const mockVotes = [
    { category: "Sport", choice: "Football", user: "Alex" },
    { category: "Programming", choice: "Python", user: "Sarah" },
    { category: "Music", choice: "Rock", user: "Mike" },
    { category: "Food", choice: "Italian", user: "Emma" },
    { category: "Color", choice: "Blue", user: "John" },
    { category: "Hobby", choice: "Gaming", user: "Lisa" }
];

function addVote() {
    const container = document.getElementById('live-votes-container');
    const randomVote = mockVotes[Math.floor(Math.random() * mockVotes.length)];
    
    const voteElement = document.createElement('div');
    voteElement.className = 'vote-item';
    voteElement.innerHTML = `
        <span>${randomVote.user} voted for ${randomVote.choice} in ${randomVote.category}</span>
        <span>${new Date().toLocaleTimeString()}</span>
    `;
    
    container.insertBefore(voteElement, container.firstChild);
    
    if (container.children.length > 5) {
        container.removeChild(container.lastChild);
    }
}

for (let i = 0; i < 5; i++) {
    addVote();
}

setInterval(addVote, 5000);

function resetResponse() {
    localStorage.setItem('userPollData', JSON.stringify({}));
    alert('Results have been reset successfully!');
}