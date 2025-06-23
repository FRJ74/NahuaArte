document.getElementById('lang-toggle').addEventListener('click', () => {
  document.documentElement.lang = document.documentElement.lang === 'en' ? 'es' : 'en';
  document.getElementById('lang-toggle').textContent = document.documentElement.lang.toUpperCase() === 'EN' ? 'ES' : 'EN';
});
document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDarkMode = document.body.classList.contains('dark-mode');
  document.getElementById('theme-toggle').textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
}); 
document.getElementById('search').addEventListener('input', function() {
  const query = this.value.toLowerCase();
  const items = document.querySelectorAll('.item');
  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(query) ? '' : 'none';
  });
}); 
document.getElementById('sort').addEventListener('change', function() {
  const items = Array.from(document.querySelectorAll('.item'));
  const sortBy = this.value;
  items.sort((a, b) => {
    const aText = a.textContent.toLowerCase();
    const bText = b.textContent.toLowerCase();
    return sortBy === 'asc' ? aText.localeCompare(bText) : bText.localeCompare(aText);
  });
  const container = document.getElementById('items');
  container.innerHTML = '';
  items.forEach(item => container.appendChild(item));
});