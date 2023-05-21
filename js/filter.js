window.onload = function() {
  const filters = document.querySelectorAll('.filter');
  const cards = document.querySelectorAll('.card');

  filters.forEach(filter => {
    filter.addEventListener('click', () => {
      const filterValue = filter.getAttribute('data-filter');
      cards.forEach(card => {
        if (card.classList.contains(filterValue) || filterValue === 'all') {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}
