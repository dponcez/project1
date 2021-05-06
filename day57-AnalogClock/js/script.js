( function () {

    // HTML references
    const hourHand = document.querySelector('.hr');
    const minHand = document.querySelector('.min');
    const secHand = document.querySelector('.sec');

    function getActualTime() {
      const now = new Date();
      const hour = now.getHours();
      const mins = now.getMinutes();
      const secs = now.getSeconds();

      // get degress about our time
      let hourDeg = (( hour / 12) * 360 ) + 90;
      let minDeg = (( mins / 60 ) * 360 ) + 90;
      let secDeg = (( secs / 60 ) * 360 ) + 90;
    }
})()