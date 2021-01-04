const init = () => {
  // Get the current HTML elements
  const innerHours = document.querySelector(".hour");
  const innerMinutes = document.querySelector(".minutes");
  const innerSeconds = document.querySelector(".seconds");
  const innerTime = document.querySelector(".time");
  const innerDate = document.querySelector(".date");
  const toggle = document.querySelector(".toggle");

  // Store the current days and months
  const DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const MONTHS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  toggle.addEventListener("click", (e) => {
    const html = document.querySelector("html");

    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      e.target.innerHTML = "Dark Mode";
    } else {
      html.classList.add("dark");
      e.target.innerHTML = "Light Mode";
    }
  });

  // Building our setTime function
  function setTime() {
    const now = new Date();
    const day = now.getDay();
    const date = now.getDate();
    const month = now.getMonth();
    const hour = now.getHours();
    const reminderClock = hour % 12;
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();

    const ampm = hour >= 12 ? "PM" : "AM";

    // Rotate HTML elements per grades
    innerHours.style.transform = `translate(-50%,-100%) rotate(${scale(
      reminderClock,
      0,
      11,
      0,
      360
    )}deg)`;
    innerMinutes.style.transform = `translate(-50%,-100%) rotate(${scale(
      minutes,
      0,
      59,
      0,
      360
    )}deg)`;
    innerSeconds.style.transform = `translate(-50%,-100%) rotate(${scale(
      seconds,
      0,
      59,
      0,
      360
    )}deg)`;

    //   Store the current time in our declared variables
    innerTime.innerHTML = `${reminderClock}:${
      minutes < 10 ? `0${minutes} ` : minutes
    } ${ampm}`;
    innerDate.innerHTML = `${DAYS[ day ]}, ${MONTHS[ month ]} <span class="circle">${ date }</span>`;
  };


  // StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
  const scale = ( num, in_min, in_max, out_min, out_max ) => {
    return ( num - in_min ) * ( out_max - out_min ) / ( in_max - in_min ) + out_min;
  };

  setTime();
  setInterval( setTime, 1000 )
}

init()