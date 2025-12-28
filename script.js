document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const genreButtons = document.querySelectorAll('.genre-filter-btn');
    const cards = document.querySelectorAll('.book-card');

    let activeGenre = 'all';

    function filterBooks() {
        const searchTerm = searchInput.value.toLowerCase();

        cards.forEach(card => {
            const title = card.dataset.title.toLowerCase();
            const genres = card.dataset.genre.toLowerCase();

            const matchesTitle = title.includes(searchTerm);
            const matchesGenre =
                activeGenre === 'all' || genres.includes(activeGenre);

            if (matchesTitle && matchesGenre) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }

    searchInput.addEventListener('input', filterBooks);

    genreButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            genreButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            activeGenre = btn.dataset.genre;
            filterBooks();
        });
    });
});
