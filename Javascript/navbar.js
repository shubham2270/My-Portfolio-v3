const navbtn = document.getElementById('navbtn');
const navbar = document.getElementById('nav');
const menubackdrop = document.getElementById('Menubackdrop');

// Toggles the navigation on mobile view
let toggle = true;
const toggleMenu = () => {
    if (toggle) {
        menubackdrop.style.display = 'block';
        navbar.style.clipPath = 'circle(17em at 150px 0px)'
        toggle = !toggle;
    } else {
        menubackdrop.style.display = 'none';
        navbar.style.clipPath = 'circle(0em at 150px 0px)'
        toggle = !toggle;
    }
}


//Sets the menu button position to fixed on scroll, and adds keyframe animations
const setMenuBtnPosition = () => {
    if(window.scrollY > 150) {
        navbtn.style.position = 'fixed';
        navbtn.style.top = '15px'
        navbtn.style.right = '15px'
        navbtn.classList.add('popIn');
        navbtn.classList.remove('popOut');
   
    } else if (window.screenY < 150) {
         navbtn.classList.add('popOut');
         navbtn.classList.remove('popIn');
         setTimeout(() => {
            navbtn.style.position = 'inherit';
         }, 150); 
    }
}

menubackdrop.addEventListener('click', toggleMenu);
window.addEventListener('scroll', setMenuBtnPosition)
navbtn.addEventListener('click', toggleMenu)