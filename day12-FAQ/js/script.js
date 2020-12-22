const init = () => {
    const handleToggle = ( toggles ) => {
        toggles = document.querySelectorAll('.faq--toggle');
        let isActive = false;

        toggles.forEach( btn => {
            btn.addEventListener('click', () => {

                if( !isActive ) {
                    btn.parentNode.classList.add('active');
                    isActive = true
                }else {
                    btn.parentNode.classList.remove('active');
                    isActive = false
                }
            })
        });
    }

    handleToggle()
}

document.addEventListener('DOMContentLoaded', init)