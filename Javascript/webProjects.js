//Data for Website projects
const webData = [
    {
        id: 0,
        image: './assets/website-images/book-store.jpg',
        alt: 'cat finder app thumbnail',
        desc: 'A full-stack web application for searching Books fetched using Google books API, It has a UI built with React, a RESTful Node/Express server and a PostgreSQL database. It lets users have their own accounts through the Sign-Up and Sign-In features.',
        url: 'https://shubham2270.github.io/book-store-app/',
        github: 'https://github.com/shubham2270/book-store-app',
    },
    {
        id: 1,
        image: './assets/website-images/smart-brain.jpg',
        alt: 'smart brain app thumbnail',
        desc: 'Smart-Brain is a full-stack web application that detects face on any image using a Machine Learning API. It has a UI built with React, a RESTful Node/Express server and a PostgreSQL database. It lets users have thier own accounts through the Sign-Up and Sign-In features.',
        url: 'https://smartbrain-front.herokuapp.com/',
        github: 'https://github.com/shubham2270/smart-brain',
    },
    {
        id: 2,
        image: './assets/website-images/christmas-light.jpg',
        alt: 'cat finder app thumbnail',
        desc: 'A replica of Christmas lights created using HTML, CSS and Vanilla JavaScript, different color of light glows with certain speed which can be increased or decreased as well',
        url: 'https://shubham2270.github.io/christmas-lights/',
        github: 'https://github.com/shubham2270/christmas-lights',
    },
    {
        id: 3,
        image: './assets/website-images/cat-finder.jpg',
        alt: 'cat finder app thumbnail',
        desc: 'Cat Pics Finder is a image API based pic finder website for finding Cat pictures in different image formats : jpeg, png and gif, created using HTML, CSS and Javascript',
        url: 'https://shubham2270.github.io/cat-finder/',
        github: 'https://github.com/shubham2270/cat-finder',
    },
    {
        id: 4,
        image: './assets/website-images/realestate.jpg',
        alt: 'astrology website thumbnail',
        desc: 'A RealEstate responsive website created using Bootstrap 4',
        url: 'https://shubham2270.github.io/realestate-website/',
        github: 'https://github.com/shubham2270/realestate-website',
    },
    {
        id: 5,
        image: './assets/website-images/astro.jpg',
        alt: 'astrology website thumbnail',
        desc: 'Astro World is a astrology themed website created by just using HTML and CSS 3 is Not Responsive',
        url: 'https://shubham2270.github.io/astro-website/',
        github: 'https://github.com/shubham2270/astro-website',
    },

]



//Renders the website project
const websiteSpace = document.getElementById('webarea');
websiteSpace.innerHTML = `${webData.map((el) => {
    return `
        <div class="gallery_card">
        <img src="${el.image}" alt="smart brain app thumbnail">
        <div class="overlay">
            <button id="work-btn" class="work-btn" type="button">Details</button>
        </div>
        </div>
    `
}).join('')}`


const openModelButton = document.getElementsByClassName('work-btn');
const modelContent = document.getElementById('model_content');

//Loops through list of buttons and display details corresponding to that website (button)
Array.from(openModelButton).forEach((item, index) => {

    const renderCorrespondingDetails = () => {
        //Matches the data id with index of website div. for displaying details corresponding to that div
        const result = webData.find((items) => {
            return items.id === index
        })

        modelContent.innerHTML = `
        <img src=" ${result.image}" alt="${result.alt}">
        <div class="model_desc">
            ${result.desc}
        </div>
        <div class="model_buttons">
            <a href=" ${result.url}" target='_blank'><button type="button">Demo</button></a> 
            <a href=" ${result.github} "target='_blank'><button type="button">Github</button></a> 
        </div>`;
    }
    item.addEventListener('click', renderCorrespondingDetails)
})

