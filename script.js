function showSideNav() {
    const sidebar = document.querySelector('.side-nav')
    sidebar.style.display = 'flex'
}

function hideSideNav() {
    const sidebar = document.querySelector('.side-nav')
    sidebar.style.display = 'none'
}

///when the user scrolls down, change the background color

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar-bg").style.background = " #292929";
        document.getElementById("navbar-bg-noir").style.background = "#ccc8ae";
    } else {
        document.getElementById("navbar-bg").style.background = "none";
        document.getElementById("navbar-bg-noir").style.background = "none";        
    }
}

function changeTheme() {
    let element = document.body;
    element.classList.toggle("noir-mode");
}