document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");

    
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
        themeToggle.checked = true;
        applyDarkThemeToElements();
    }

    themeToggle.addEventListener("change", () => {
        if (themeToggle.checked) {
            document.body.classList.add("dark-theme");
            applyDarkThemeToElements();
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark-theme");
            removeDarkThemeFromElements();
            localStorage.setItem("theme", "light");
        }
    });
});

function applyDarkThemeToElements() {
    document.querySelector(".navbar").classList.add("dark-theme");
    document.querySelector(".hero-section").classList.add("dark-theme");
    document.querySelector(".categories").classList.add("dark-theme");
    document.querySelector(".live-votes").classList.add("dark-theme");
    document.querySelector("footer").classList.add("dark-theme");

    const dropdown = document.getElementById("profileDropdown");
    if (dropdown) dropdown.classList.add("dark-theme");

    document.querySelectorAll(".question-card").forEach(card => {
        card.classList.add("dark-theme");
    });
}

function removeDarkThemeFromElements() {
    document.querySelector(".navbar").classList.remove("dark-theme");
    document.querySelector(".hero-section").classList.remove("dark-theme");
    document.querySelector(".categories").classList.remove("dark-theme");
    document.querySelector(".live-votes").classList.remove("dark-theme");
    document.querySelector("footer").classList.remove("dark-theme");

    const dropdown = document.getElementById("profileDropdown");
    if (dropdown) dropdown.classList.remove("dark-theme");

    document.querySelectorAll(".question-card").forEach(card => {
        card.classList.remove("dark-theme");
    });
}

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
    window.location.href = 'index.html';
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
    { category: "Sport", choice: "Football", user: "Sai" },
    { category: "Programming", choice: "Python", user: "Soumyaditya" },
    { category: "Music", choice: "Rock", user: "Ananya" },
    { category: "Food", choice: "Italian", user: "Chaitanya" },
    { category: "Color", choice: "Blue", user: "Kanishka" },
    { category: "Hobby", choice: "Gaming", user: "Sandeep" }
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