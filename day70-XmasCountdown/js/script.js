(() => {
    // create an undefined global variable
    let interval;

    function getXmasDate() {
        
        // create custom variables
        const dataDays = document.querySelector('[data-days]');
        const dataHour = document.querySelector('[data-hours]');
        const dataMins = document.querySelector('[data-mins]');
        const dataSecs = document.querySelector('[data-secs]');
    
        // create custom time objects
        const times = {
            year: "2021",
            day: "24",
            month: "December",
            time: "00:01:00"
        }
    
        // destructuring objects
        const { year, day, month, time } = times;
    
        // create new Date method
        const xmasDate = new Date(`${month} ${year} ${day} ${time}`);
        const now = new Date();
    
        const diff = xmasDate.getTime() - now.getTime();
    
        if( diff <= 0 ) {
            clearInterval( interval );
            createAlert()
        }
    
        let seconds = Math.floor( diff / 1000 );
        let minutes = Math.floor( seconds / 60 );
        let hours = Math.floor( minutes / 60 );
        let days = Math.floor( hours / 24 );
    
        seconds %= 60;
        minutes %= 60;
        hours %= 24;

        dataDays.innerHTML = days;
        dataHour.innerHTML = hours;
        dataMins.innerHTML = minutes;
        dataSecs.innerHTML = seconds;

    }

    function createAlert() {
      const container = document.querySelector(".container");

      // create new element
      const alert = document.createElement("div");

      alert.className = "alert";
      alert.innerHTML = `
                <div class='alert--container'>
                    <div class="box">
                        <p class="paragraph">Xmas is here!</p>
                        <h1 class="heading">merry christmas!</h1>
                    </div>
                    <button class="close--alert">x</button>
                </div>
            `;

      // add node to the end of the specified container
      container.appendChild(alert);

      const closeBtn = document.querySelector(".close--alert");

      closeBtn.addEventListener("click", () => {
        alert.style.display = "none";
      });
    }

    interval = setInterval( getXmasDate, 1000 );

})()