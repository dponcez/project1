function init() {
    const result = document.getElementById('result');
    const filter = document.getElementById('filter');
    const userList = [];

    getData();

    filter.addEventListener('input', ( e ) => filterData( e.target.value ))

    async function getData() {
        const response = await fetch("https://randomuser.me/api?results=50");

        const { results } = await response.json();

        // Clear result
        result.innerHTML = '';

        results.forEach( user => {
            const li = document.createElement('li');

            userList.push( li );
            li.innerHTML = `
                <img src="${ user.picture.large }" alt="${ user.name.first }">
                <div class="user--info">
                    <h4>${ user.name.first } ${ user.name.last }</h4>
                    <p>${ user.location.city }, ${ user.location.country }</p>
                </div>
            `;

            result.appendChild( li )
        })
    }

    function filterData( searchTerms ) {
        userList.forEach( item => {
            const isIncluded = item.innerHTML.toLowerCase().includes( searchTerms.toLowerCase()) ? item.classList.remove('hide') : item.classList.add('hide');
        })
    }
}

init();