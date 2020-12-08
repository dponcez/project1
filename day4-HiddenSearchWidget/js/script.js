document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.querySelector('.search--btn');
    const input = document.querySelector('.search');
    let isActive = false;

    searchBtn.addEventListener('click', () => {
        if( !isActive ){
            input.classList.add('active');
            input.focus();
            isActive = true
        }else {
            input.classList.remove('active');
            isActive = false;
        }
    })
})