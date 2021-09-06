function init(){
    const toggles = document.querySelectorAll('.toggle');
    const fast = document.getElementById('fast');
    const good = document.getElementById('good');
    const cheap = document.getElementById('cheap');

    toggles.forEach( toggle => toggle.addEventListener('change', ( e ) => getSlideToggle( e.target ) ) );

    function getSlideToggle( clickedOne ) {
        if( good.checked && cheap.checked && fast.checked ) {

            if( good === clickedOne ) {
                fast.checked =  false;

            }else  if( cheap === clickedOne ) {
                good.checked = false;

            }else  if( fast === clickedOne ) {
                cheap.checked = false;
            }
        }
    }
}

init()