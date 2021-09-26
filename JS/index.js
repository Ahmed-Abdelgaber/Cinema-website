let openMenuButton = document.getElementById('open')
let menuButtons = document.getElementById('menu-btn')
let navBar = document.getElementById('sidenav')

menuButtons.onclick = function() {
    if (navBar.style.right === "-250px") {
        navBar.style.right = "0";
        openMenuButton.src = "images/menuclose.png"
    } else {
        navBar.style.right = "-250px"
        openMenuButton.src = "images/menuopen.png"
    }
}

var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true
});