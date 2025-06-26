// File: assets/js/dashboard.js
document.addEventListener('DOMContentLoaded', () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  if (!currentUser) window.location.href = 'index.html';
  
  document.querySelector('header h1').textContent += ` - Welcome, ${currentUser.name}`;
});

function transferStyle(style) {
  const resultImg = document.getElementById('result-image');
  resultImg.src = `assets/images/${style}.jpg`; // Matches exact filenames
  resultImg.style.display = 'block';
}