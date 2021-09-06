// Store the current HTML element to const variables
const liters = document.getElementById('liters');
const remained = document.getElementById('remained');
const percentage = document.getElementById('percentage');

const smallCups = document.querySelectorAll('.small--cup');

// iterate over the smallCups array
smallCups.forEach( ( cup, idx ) => { 
    cup.addEventListener('click', () => highlightCups( idx ) )
})

function highlightCups( idx ) {

    // Compare if the current smallCup contains a full class element
    if( smallCups[ idx ].classList.contains( 'full') && !smallCups[ idx ].nextElementSibling.classList.contains( 'full' ) ) {
        idx--
    }

    smallCups.forEach( ( cup, idx2 ) => {
        // compare if the value 2 is less than or equal to value 1
        if( idx2 <= idx ) {
            cup.classList.add('full')
        }else {
            cup.classList.remove('full')
        }

        // call the updateBigCup function 
        updateBigCup()
    })
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.small--cup.full').length;
    const totalCups = smallCups.length;

    if( fullCups === 0 ) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = 'visible';
        percentage.style.height = `${ fullCups / totalCups * 33 }rem`;
        percentage.innerText = `${ fullCups / totalCups * 100 }%`
    }

    if( fullCups === totalCups ) {
        remained.style.visibility = 'hidden';
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible';
        liters.innerText = `${ 2 - ( 250 * fullCups / 1000 )}L`
    }
}