document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const openBtn = document.getElementById('open');
    const closeBtn = document.getElementById('close');
    let isActive = false;
    openBtn.addEventListener('click', () => {
        if(!isActive)
            container.classList.add('show-nav');
            isActive = true
    })

    closeBtn.addEventListener("click", () => {
        if(isActive)
            container.classList.remove("show-nav");
            isActive = false;
    });
})