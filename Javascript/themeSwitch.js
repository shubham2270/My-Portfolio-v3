const icon = document.querySelectorAll('.sun')
const html = document.getElementById('html');
//for social icons in header
const tweeter = document.getElementsByClassName('tweeter')[0];
const linkdin = document.getElementsByClassName('linkdin')[0];
const github = document.getElementsByClassName('github')[0];

//for social icons in footer
const tweeter1 = document.getElementsByClassName('tweeter')[1];
const linkdin1 = document.getElementsByClassName('linkdin')[1];
const github1 = document.getElementsByClassName('github')[1];

const sun = './assets/assets/sun.svg';
const moon = './assets/assets/moon.svg';
const shadow = '#E5E5E5 0 0 25px';

//variables for social icons
const socialLight = 'url("/assets/assets/social-icons-light.svg") left top no-repeat';
const socialDark = 'url("/assets/assets/social-icons-dark.svg") left top no-repeat';
const socialSize = '10em';



const socialIconsCss = () => {
    //for social icons in header
    tweeter.style.backgroundSize = socialSize
    tweeter.style.backgroundPositionX = '0px'

   
    linkdin.style.backgroundSize = socialSize
    linkdin.style.backgroundPositionX = '-4.1em'

    
    github.style.backgroundSize = socialSize
    github.style.backgroundPositionX = '-8.1em'

    //for social icons in footer
    tweeter1.style.background = socialLight;
    tweeter1.style.backgroundSize = socialSize
    tweeter1.style.backgroundPositionX = '0px'

    linkdin1.style.background = socialLight;
    linkdin1.style.backgroundSize = socialSize
    linkdin1.style.backgroundPositionX = '-4.1em'

    github1.style.background = socialLight;
    github1.style.backgroundSize = socialSize
    github1.style.backgroundPositionX = '-8.1em'

}






//Switch theme between dark and light
let themeStatus = true;
const themeSwitcher = (el) => {
    socialIconsCss()
  
    if (themeStatus) {
        html.setAttribute('data-theme', 'dark')
        el.src = moon; //Changes icon between sun and moon
        nav.style.boxShadow = 'none'; //toggle shadow of nav bar and button
        navbtn.style.boxShadow = 'none';
        tweeter.style.background = socialLight; //sets social icons to light
        linkdin.style.background = socialLight;
        github.style.background = socialLight;
        themeStatus = !themeStatus;
        socialIconsCss()
        el.classList.add('jump')
        
        //removes jump class
        setTimeout(() => {
            el.classList.remove('jump')
        }, 750);


    } else {
        html.setAttribute('data-theme', 'light')
        el.src = sun;
        nav.style.boxShadow = shadow;
        navbtn.style.boxShadow = shadow;
        tweeter.style.background = socialDark;
        linkdin.style.background = socialDark;
        github.style.background = socialDark;
        themeStatus = !themeStatus;
        socialIconsCss()
        el.classList.add('jump')

         //removes jump class
         setTimeout(() => {
            el.classList.remove('jump')
        }, 750);
    }
   
   
  
}

icon.forEach(el => {
    el.addEventListener('click', () => themeSwitcher(el))
})

