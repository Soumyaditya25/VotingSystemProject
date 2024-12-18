

document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem("users")) || [];
    console.log(users);
    
})