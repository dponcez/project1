// Create a function to run immediately after its built,
// use an IIFE function to make this purpose
(() => {
  // hold our global variables
  let started = false;
  let isReady = true;
  let interval = undefined;
  let time = 0;
  let numCompleted = 0;
  let emptyArray = [];

  // get HTML references
  const gridTable = document.querySelector(".grid");
  const description = document.querySelector(".timer");
  const restartBtn = document.querySelector(".restart");

  // Execute setUp() function
  setUp();

  // function definition
  // randomArray function
  function randomAnswer() {
    const randomArray = [ 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12 ];

    randomArray.sort(() => {
      return 0.5 - Math.random();
    });

    return randomArray;
  };

  // hide function
  function hide( cell ) {
    cell.clicked = false;
    cell.innerHTML = "";
    cell.style.backgroundColor = "#2c3e50";
  };

  // complete function
  function complete( cell ){
    numCompleted++;
    cell.completed = true;
    cell.style.backgroundColor = "#ddf34f";
  };

  // reveal function
  function reveal( cell ) {
    cell.clicked = true;
    cell.innerHTML = cell.value;
    cell.style.backgroundColor = "#3498db";
  };
  // startTimer function
  function startTimer() {
    if ( started === false ) {
      interval = setInterval(() => {
        time++;
        description.innerHTML = `Time Elapsed: ${ time }`;
      }, 1000);

      started = true;
    }
  };

  // setUp function
  function setUp() {
    const grid = document.querySelectorAll(".item");
    const answer = randomAnswer();

    // iterate over the grid elements
    for ( let i = 0; i < grid.length; i++ ) {
      const cell = grid[ i ];
      cell.completed = false;
      cell.clicked = false;
      cell.value = answer[ i ];

      // Event handler
      cell.addEventListener("mouseenter", function() {
        if ( this.completed === false && this.clicked === false ) {
          this.style.backgroundColor = "#3498db";
        }
      });

      cell.addEventListener("mouseleave", function() {
        if ( this.completed === false && this.clicked === false ) {
          this.style.backgroundColor = "#2c3e50";
        }
      });

      cell.addEventListener("click", function() {
        if ( isReady === false ) return;

        // Execute startTimer() function
        startTimer();

        if ( this.clicked === false && this.completed === false ) {
          emptyArray.push( this );
          reveal( this );
        }

        if ( emptyArray.length == 2 ) {
          // if a matching pair is found
          if ( emptyArray[ 0 ].value == emptyArray[ 1 ].value ) {
            complete( emptyArray[ 0 ] );
            complete( emptyArray[ 1 ] );

            emptyArray = [];

            if ( numCompleted == 24 ) {
              alert(`You won in ${ time } seconds`);
              clearInterval( interval );
            }
          } else {
            // if a matching pair is not found
            isReady = false;
            gridTable.style.border = "0.375rem solid rgba(44,62,80,0.75)";

            setTimeout(() => {
              // after 500ms delay
              hide( emptyArray[ 0 ] );
              hide( emptyArray[ 1 ] );

              emptyArray = [];

              isReady = true;
              gridTable.style.border = "0.375rem solid #ecf0f1";
            }, 500);
          }
        }
      });
    }

    // Event handler
    document.addEventListener("keydown", function( e ) {
      if ( e.key > 0 && e.key < 10 ) {
        grid[ e.key - 1 ].click();
      }
    });

    // reload the function when the matching pair is completed
    restartBtn.addEventListener("click", function() {
      location.reload();
    });
  };
})()
