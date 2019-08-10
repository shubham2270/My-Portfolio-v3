const workBtn = document.querySelectorAll('.work-btn');
const model = document.getElementById('model');
const modelBackdrop = document.getElementById('Modelbackdrop');


//Opens the website model on clicking Details button on website div hover
const openModel = () => {
    modelBackdrop.style.display = 'flex';
    model.style.display = 'block';
}

//closes the model on clicking on backdrop
const closeModel = (event) => {
    if (event.target === modelBackdrop) {
        modelBackdrop.style.display = 'none';
            model.style.display = 'none';
    }
}



modelBackdrop.addEventListener('click', closeModel);
workBtn.forEach((el) => { //loops through all the 'Details' named button on website div
    el.addEventListener('click', openModel)
})