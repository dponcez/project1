( function() {
    const hourHand = document.querySelector('.hr .time');
    const minHand = document.querySelector('.min .time');
    const secHand = document.querySelector('.sec .time');
    const ampm = document.querySelector('.desc')

    function getActualTime() {
        let now = new Date();
        let hour = now.getHours();
        let mins = now.getMinutes();
        let secs = now.getSeconds();

        // get degress about our time
        // let hourDeg = (( hour / 12) * 360 ) + 90;
        // let minDeg = (( mins / 60 ) * 360 ) + 90;
        // let secDeg = (( secs / 60 ) * 360 ) + 90;

        let hour_text;
        // statements
        if( hour > 12 ) {
            hour_text = ( hour - 12 );
            ampm.innerHTML = 'p.m'
        }else {
            hour_text = hour;
            ampm.innerHTML = 'a.m'
        }

        let min_text = ( mins < 10 ) ? '0' + mins : mins;
        let sec_text = ( secs < 10 ) ? '0' + secs : secs;

        hourHand.innerHTML = `${ hour_text }`;
        minHand.innerHTML = `${ min_text }`;
        secHand.innerHTML = `${ sec_text }`
        
    }

    setInterval( getActualTime, 1000 )
})()