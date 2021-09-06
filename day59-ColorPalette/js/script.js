// Returns a function that as long as continues it's execution to be invoked.
// This function will be called after being stops it's execution for 'n' milliseconds,
// preventing immediately a fire handling events by the  user
function debounce( func, wait, immediate ) {
  let timer = null;
  return ( ...args ) => {
    args = arguments;
    let context = this;
    let later = () => {
      if( !immediate ) { func.apply( context, args ) }
    }

   clearTimeout( timer );
   timer = setTimeout( later, wait );
   const callNow = immediate && !timer;
   if( callNow ) { func.apply( context, args ) }
  }
}

// The code below is from dcode YouTube channel,
// go to see his channel to get more information about how to use / implement the code snippet

/**
 * Create elements based on the tags and classes
 * 
 * @param { string } tagName: Tag name of the elements i.e (div, span, img)
 * @param { string } classes: Set the class attribute on the elements
 * @returns { HTMLElement }
 */

function createElementClass( tagName, classes ) {
  const element = document.createElement( tagName );

  element.setAttribute('class', classes );
  return element;
}

/**
 * Create a palette color
 * 
 * @param { string } color The value of the color
 * @param { string } description The information about the color name
 * @returns { HTMLElement }
 */

function createColorItem( color, description ) {
  // palette content
  const paletteItem = createElementClass('div', 'palette--item');
  const paletteColor = createElementClass('div', 'palette--color');
  const paletteInfo = createElementClass('input', 'palette--info');
  const paletteCopyButton = createElementClass('button', 'copy');
  const descriptionContainer = createElementClass('div', 'description--container');
  const colorDescription = createElementClass('p', 'palette--color__description');
  const alertBox = createElementClass('div', 'alert');
  const box = createElementClass('div', 'box');
  const message = createElementClass('p', 'message');
  const closeAlert = createElementClass('button', 'close');

  const audio = createElementClass('audio', 'player');

  // Set the value of the given colors
  paletteColor.style.backgroundColor = color;
  paletteInfo.value = color;
  paletteInfo.disabled = true;
  paletteCopyButton.textContent = 'copy color';
  colorDescription.textContent = description;

  const container = document.querySelector('.palette--container');

  // Event handler
  paletteCopyButton.addEventListener('click', debounce( async () => {
    await navigator.clipboard.writeText( paletteInfo.value );
    
    message.innerText = 'copied!';
    closeAlert.innerText = 'x';

    box.appendChild( message );
    box.appendChild( closeAlert );
    alertBox.appendChild( audio )
    alertBox.appendChild( box );

    audio.src = './sound/sound.mp3'
    if( alertBox.classList.contains('alert') ) {
      alertBox.style.display = 'block';
      audio.play()
    }

    container.appendChild( alertBox );
  }, false ));

  closeAlert.addEventListener('click', debounce(() => {
    if( alertBox.classList.contains('alert') ) {
      alertBox.style.display = 'none';
      audio.pause()
    }
  }))

  // Append elements
  descriptionContainer.appendChild( colorDescription );
  paletteColor.appendChild( paletteInfo );
  paletteColor.appendChild( paletteCopyButton );
  paletteItem.appendChild( paletteColor );
  paletteItem.appendChild( descriptionContainer );

  container.appendChild( paletteItem )

  return paletteItem;

}

function fetchData() {
  const url = "./json/index.json";
  fetch( url )
    .then( response => {
      return response.json()
    })
    .then( data => {
      for( const { color, description } of data ) {
        createColorItem( color, description );
      }
    })
    .catch( error => {
      console.log( `There's something went wrong when we try to get the response ${ error }`)
    })
}

fetchData()