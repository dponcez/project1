function createHTMLElement( id, heading, folder_name, image ) {
  const main_container = document.querySelector('.content');
  const main_section = document.createElement('section');
  main_container.id = "main";
  main_section.classList.add('section');

  main_section.innerHTML = `
      <h1 class="heading">${ heading }</h1>
      <img class="image" src="../day${ id }-${ folder_name }/image/${ image }.png" alt="${ heading }" />
      <a class="link" href="../day${ id }-${ folder_name }/index.html" target="_blank">${ heading }</a>
  `

  main_container.appendChild( main_section );
}

export async function fetchElementsFromData() {
  const requestURL = "./json/index.json";
  const response = await fetch( requestURL );
  const data = await response.json();

  for( const { id, heading, folder_name, image } of data ) {
    createHTMLElement( id, heading, folder_name, image );
  }
}