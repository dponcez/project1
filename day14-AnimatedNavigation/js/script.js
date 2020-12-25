document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('toggle');
    const navigation = document.getElementById('nav');

    toggle.addEventListener('click', () => navigation.classList.toggle('active') );
})