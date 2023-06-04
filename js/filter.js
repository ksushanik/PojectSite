function filterCards(filterValue) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (card.classList.contains(filterValue) || filterValue === 'all') {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

window.onload = function () {
    const filters = document.querySelectorAll('.filter');

    filters.forEach(filter => {
        filter.addEventListener('click', () => {
            const filterValue = filter.getAttribute('data-filter');
            if (window.location.pathname === '/') {
                filterCards(filterValue);
            } else {
                window.location.href = '/';
                window.addEventListener('load', () => {
                    filterCards(filterValue);
                });
            }
        });
    });

    if (window.location.pathname === '/') {
        const filterValue = document.querySelector('.filter.active').getAttribute('data-filter');
        filterCards(filterValue);
    }
};