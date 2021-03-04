function init(){
    const codes = document.querySelectorAll('.code');
    codes[0].focus();

    codes.forEach( ( code, index ) => {
        code.addEventListener('keypress', ( e ) => {
            if( e.key >= 0 && e.key <= 9 ){
                codes[ index ].value = '';
                setTimeout(() => codes[ index + 1].focus(), 10 )
            }else {
                setTimeout(() => codes[ index - 1]. focus(), 10 )
            }
        })
    })
}