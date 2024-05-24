// Создаем элемент audio динамически
const audio = new Audio('strashnye-zvuki-sirena.mp3');
audio.loop = true;

// Управляем звуком с помощью кнопки
const playButton = document.querySelector('.play-button');
playButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playButton.textContent = 'Остановить звук';
    } else {
        audio.pause();
        playButton.textContent = 'Продолжить звук';
    }
});

// Автоматически запускаем звук при загрузке страницы
audio.play();

const comments = document.querySelector('.comments');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const comment = document.querySelector('textarea').value;
    const newComment = document.createElement('p');
    newComment.textContent = comment;
    comments.appendChild(newComment);
    document.querySelector('textarea').value = '';
});

