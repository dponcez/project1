(() => {
    const tabs = document.querySelectorAll('li a');
    const panels = document.querySelectorAll('article');

    tabs.forEach( ( tab, index ) => {
        createTabPanel( tab, index)
    })

    function createTabPanel( tab, posTabs ){
        tab.addEventListener('click', () => {
            tabs.forEach( setTab => {
                setTab.classList.remove('active')
            })

            tab.classList.add('active');

            panels.forEach( panel => {
                panel.classList.remove('active--panel');
            })

            panels[ posTabs ].classList.add('active--panel');
        })
    }
})()