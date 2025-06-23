const langToggle = document.getElementById('lang-toggle');
function setLanguage(lang) {
  document.documentElement.lang = lang;
  langToggle.textContent = lang === 'en' ? 'ES' : 'EN';
  document.querySelectorAll('[lang="en"]').forEach(el => {
    el.style.display = lang === 'en' ? '' : 'none';
  });
  document.querySelectorAll('[lang="es"]').forEach(el => {
    el.style.display = lang === 'es' ? '' : 'none';
  });
}
// Initialize on page load
setLanguage(document.documentElement.lang || 'en');
if (langToggle) {
  langToggle.addEventListener('click', () => {
    const newLang = document.documentElement.lang === 'en' ? 'es' : 'en';
    setLanguage(newLang);
  });
}

const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    themeToggle.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
  });
}

const search = document.getElementById('search');
if (search) {
  search.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(query) ? '' : 'none';
    });
  });
}

const sort = document.getElementById('sort');
const itemsContainer = document.getElementById('items');
if (sort && itemsContainer) {
  sort.addEventListener('change', function() {
    const items = Array.from(document.querySelectorAll('.item'));
    const sortBy = this.value;
    items.sort((a, b) => {
      const aText = a.textContent.toLowerCase();
      const bText = b.textContent.toLowerCase();
      return sortBy === 'asc' ? aText.localeCompare(bText) : bText.localeCompare(aText);
    });
    itemsContainer.innerHTML = '';
    items.forEach(item => itemsContainer.appendChild(item));
  });
}