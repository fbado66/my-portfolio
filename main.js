
    let sideMenu = document.querySelector('.menu-btn')
    let responsiveMenu = document.querySelector('.menu')
    let menuIcon = document.querySelector('#side-menu-icon')

sideMenu.addEventListener('click', () => {
    responsiveMenu.classList.add('active')
    menuIcon.className = "fas fa-times"
        
        menuIcon.addEventListener('click', () => {
            sideMenu.className = "fas fa-bars"
            responsiveMenu.remove('.active')
        })
})



