// File: assets/js/auth.js
let users = JSON.parse(localStorage.getItem('users')) || [];

function login() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    window.location.href = 'dashboard.html';
  } else {
    alert('Invalid email or password!');
  }
}

function signup() {
  const name = document.getElementById('signup-name').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  if (users.some(u => u.email === email)) {
    alert('Email already exists!');
  } else {
    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Account created! Please log in.');
    showLogin();
  }
}

function logout() {
  localStorage.removeItem('currentUser');
  window.location.href = 'index.html';
}

// Toggle forms
function showSignup() {
  document.getElementById('login-form').style.display = 'none';
  document.getElementById('signup-form').style.display = 'block';
}

function showLogin() {
  document.getElementById('signup-form').style.display = 'none';
  document.getElementById('login-form').style.display = 'block';
}