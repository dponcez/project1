function setup() {
    function updateContent() {
        const header = document.getElementById('header');
        const title = document.getElementById('title');
        const excerpt = document.getElementById('excerpt');
        const profile_img = document.getElementById('profile_img');
        const name = document.getElementById('name');
        const date = document.getElementById('date');

        // Animation
        const animated_bg = document.querySelectorAll('.animated-bg');
        const animated_bg_text = document.querySelectorAll('.animated-bg-text');
        const timeout = 2500;

        setTimeout(setDate, timeout);

        function setDate() {
            header.innerHTML = `<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" " alt="coding">`;
            title.innerHTML = `Lorem ipsum dolor sit amet`;
            excerpt.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis`;
            profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="author">`;
            name.innerHTML = 'John Doe';
            date.innerHTML = '11/01/2020'

            animated_bg.forEach( bg => bg.classList.remove('animated-bg') );
            animated_bg_text.forEach( bg => bg.classList.remove('animated-bg-text') );
        }
    }
    updateContent()
}

setup()