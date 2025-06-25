function toggleTheme() {
  const body = document.body;
  const icon = document.getElementById('theme-icon');
  const currentTheme = body.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  body.setAttribute('data-theme', newTheme);
  icon.className = newTheme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
}

function showPage(pageId) {
  const pages = ['home', 'about'];
  pages.forEach(id => {
    document.getElementById(id).style.display = (id === pageId) ? 'block' : 'none';
  });
}

document.addEventListener("DOMContentLoaded", () => showPage('home'));
