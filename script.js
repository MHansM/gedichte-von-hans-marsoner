// Like-Funktion
document.addEventListener('DOMContentLoaded', () => {
    const likeButtons = document.querySelectorAll('.like-btn');

    likeButtons.forEach(button => {
        const poemId = button.getAttribute('data-id');
        const likeCount = document.getElementById(`${poemId}-count`);
        
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

// Kommentar-Funktion
function submitComment(commentId) {
    const textarea = document.getElementById(commentId);
    const comment = textarea.value.trim();

    if (comment) {
        alert(`Kommentar gespeichert: ${comment}`);
        localStorage.setItem(commentId, comment);
        textarea.value = ''; // Eingabefeld leeren
    } else {
        alert('Bitte gib einen Kommentar ein!');
    }
}

// Lade gespeicherte Kommentare
document.addEventListener('DOMContentLoaded', () => {
    const commentForms = document.querySelectorAll('.comment-form textarea');
    commentForms.forEach(textarea => {
        const savedComment = localStorage.getItem(textarea.id);
        if (savedComment) {
            textarea.value = savedComment;
        }
    });
});