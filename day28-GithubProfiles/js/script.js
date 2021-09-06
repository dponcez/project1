function init(){
    // get users API
    const API = 'https://api.github.com/users/';

    // get HTML references
    const main = document.getElementById('main');
    const form = document.getElementById('form');
    const search = document.getElementById('search');

    async function getUser( username ) {
        try {
            const { data } = await axios( API + username );

            createUserCard( data );
            getRepos( username );
        } catch( error ) {
            if( error.response.status == 404 ) {
                createErrorCard('No profile with this username');
            }
        }
    }

    async function getRepos( username ) {
        try {
            const { data } = await axios( API + username + '/repos?sort=created');

            addReposToCard( data )
        } catch( error ){
            createErrorCard('Problem fetching repos')
        }
    }

    function createUserCard( user ){
        const cardHTML = `
        <div class="card">
                <div class="avatar--container">
                    <img src="${ user.avatar_url }" alt="${ user.name }" class="avatar">
                </div>
                <div class="user--info">
                    <h2 class="name">${ user.name }</h2>
                    <p class="bio">${ user.bio }</p>
                    <ul class="info">
                        <li>${ user.followers } <strong>followers</strong></li>
                        <li>${ user.following } <strong>followings</strong></li>
                        <li>${ user.public_repos } <strong>repos</strong></li>
                    </ul>

                    <div id="repos">repos</div>
                </div>
            </div>
        `;

        main.innerHTML = cardHTML;
    }

    function createErrorCard( msg ){
        const cardHTML = `
            <div class="card">
                <h1>${ msg }</h1>
            </div>
        `;

        main.innerHTML = cardHTML;
    }

    function addReposToCard( repos ) {
        const reposEl = document.getElementById('repos');

        repos.slice(0, 5)
            .forEach( repo => {
                const repoEl = document.createElement('a');
                repoEl.classList.add('repo');
                repoEl.href = repo.html_url;
                repoEl.target  = '_blank';
                repoEl.innerText = repo.name;

                reposEl.appendChild( repoEl )
            })
    }

    form.addEventListener('submit', ( e ) => {
        e.preventDefault();

        const user = search.value;

        if( user ) {
            getUser( user );

            search.value = ''
        }
    })
}

init()