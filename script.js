
function searchTopics() {
    const input = document.getElementById('searchBox').value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(input) ? "block" : "none";
    });
}
