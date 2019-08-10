const graphicBackdrop = document.getElementById('graphicModelBackdrop');
const graphicModelImage = document.getElementById('viewImage');
// const graphicModel = document.getElementById('graphic_model');
const graphicImages = document.querySelectorAll('.graphic_images img')


//close model on clicking backdrop
const closeGraphicModel = (event) => {
   
    if (event.target === graphicBackdrop) {
        graphicBackdrop.style.display = 'none';
    }
}

//Sets graphic work images to modal image
const viewLargeImage = (el, i) => {
    graphicBackdrop.style.display = 'flex';
    graphicModelImage.src = el.src
}


//loops through the list of graphic images and return element and index to viewLargeImage function
graphicImages.forEach((el, i) => {
    el.addEventListener('click', () => viewLargeImage(el, i))
})

graphicBackdrop.addEventListener('click', closeGraphicModel)




    

