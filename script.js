// Funktion für Kommentare
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

// Lade gespeicherte Kommentare beim Laden der Seite
document.addEventListener('DOMContentLoaded', () => {
    const commentForms = document.querySelectorAll('.comment-form textarea');
    commentForms.forEach(textarea => {
        const savedComment = localStorage.getItem(textarea.id);
        if (savedComment) {
            textarea.value = savedComment;
        }
    });
});