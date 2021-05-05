( function() {
    const hourText = document.querySelector('.hr time');
    const minText = document.querySelector('.min time');
    const secText = document.querySelector('.sec time');

    function getActualTime() {
        let now = new Date();
        let hour = now.getHours();
        let mins = now.getMinutes();
        let secs = now.getSeconds();

        // get degress about our time
        let hourDeg = (( hour / 12) * 360 ) + 90;
        let minDeg = (( mins / 60 ) * 360 ) + 90;
        let secDeg = (( secs / 60 ) * 360 ) + 90;

        // statements
    }
})()