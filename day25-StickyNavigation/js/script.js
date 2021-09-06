function scrollHeight() {
    // const height = window.innerHeight;
    const navigation = document.querySelector('.navigation')
    window.addEventListener('scroll', fixScrollHeight) 
    
    function fixScrollHeight() {
        const scrollHeight = window.scrollY;
        if( scrollHeight > navigation.offsetHeight + 150 ){
            navigation.classList.add('active')
        }else {
            navigation.classList.remove('active')
        }
    }
}
scrollHeight()