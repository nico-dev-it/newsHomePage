const menuButton = document.querySelector('#hamburger')
const menuContainer = document.querySelector('#mobileMenu')
const closeMenu = document.querySelector('#close')

menuButton.addEventListener('click', () => {
    menuContainer.style.zIndex = '1'
    menuContainer.style.display = 'flex'
})

closeMenu.addEventListener('click', () => {
    menuContainer.style.display = 'none'
})
