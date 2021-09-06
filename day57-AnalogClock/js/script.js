( function () {

    // HTML references
    const hourHand = document.querySelector('.hh');
    const minHand = document.querySelector('.mn');
    const secHand = document.querySelector('.ss');

    function getActualTime() {
      const now = new Date();
      const hour = now.getHours();
      const mins = now.getMinutes();
      const secs = now.getSeconds();

      // get degress about our time
      let hourDeg = (( hour / 12) * 360 ) + 90;
      let minDeg = (( mins / 60 ) * 360 ) + 90;
      let secDeg = (( secs / 60 ) * 360 ) + 90;

      hourHand.style.transform = `rotate( ${ hourDeg }deg )`;
      minHand.style.transform = `rotate( ${ minDeg }deg )`;
      secHand.style.transform = `rotate( ${ secDeg }deg )`;
    }

    setInterval( getActualTime, 1000 )
})()