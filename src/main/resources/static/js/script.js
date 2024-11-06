document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('calculateButton');

    if (button) {
        button.addEventListener('mouseover', () => {
            button.style.transform = 'scale(1.1)';
            button.style.transition = 'transform 0.3s ease';
        });

        button.addEventListener('mouseout', () => {
            button.style.transform = 'scale(1)';
        });

        button.addEventListener('click', () => {
            button.style.animation = 'buttonClick 0.3s ease';
        });

        button.addEventListener('animationend', () => {
            button.style.animation = '';
        });
    }

    const link = document.querySelector('.container a');

    if (link) {
        link.addEventListener('mouseover', () => {
            link.style.transform = 'scale(1.1)';
            link.style.transition = 'transform 0.3s ease';
        });

        link.addEventListener('mouseout', () => {
            link.style.transform = 'scale(1)';
        });
    }
});

@keyframes buttonClick {
    0% { transform: scale(1); }
    50% { transform: scale(0.9); }
    100% { transform: scale(1); }
}
