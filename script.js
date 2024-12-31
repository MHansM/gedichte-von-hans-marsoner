
// Funktion zum Verwalten der Like-Buttons
document.addEventListener('DOMContentLoaded', () => {
    const likeButtons = document.querySelectorAll('.like-btn');

    likeButtons.forEach(button => {
        const poemId = button.getAttribute('data-id');
        const likeCount = document.getElementById(`${poemId}-count`);
        
        // Lade gespeicherte Likes
        const storedLikes = localStorage.getItem(poemId);
        if (storedLikes) {
            likeCount.textContent = storedLikes;
        }

        button.addEventListener('click', () => {
            let currentLikes = parseInt(likeCount.textContent, 10);
            currentLikes++;
            likeCount.textContent = currentLikes;
            localStorage.setItem(poemId, currentLikes);
        });
    });
});
