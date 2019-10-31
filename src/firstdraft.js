// console.log('%c HELLO!', 'color: firebrick')

getImages();
getBreeds();
dropdownSelection();
// colorClick();



function getImages() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(data => addImageElements(data.message));
}

function addImageElements(data) {
    const imageContainer = document.querySelector("#dog-image-container");
    data.forEach(link => { 
        const img = document.createElement("img");
        img.src=`${link}`
        imageContainer.appendChild(img)
     })
}

function getBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(data => {
        addBreedElements(data);
    });
}


function addBreedElements(data) {
    const breedContainer = document.querySelector("ul#dog-breeds");
    const breedNames = Object.keys(data.message);
    console.log(breedNames);
    breedNames.forEach(dog => { 
        let breedList = document.createElement("li");
        breedList.innerText = dog;
        breedContainer.appendChild(breedList);
        breedList.addEventListener('click', function(event) {
            event.target.style.color = 'red'
            
        })
    })

}

function dropdownSelection() {
    const dropdown = document.getElementById('breed-dropdown')
    const breedContainer = document.querySelector("ul#dog-breeds");

    dropdown.addEventListener('change', event =>  {
        let breedList = document.querySelectorAll("li");
        let newArray = []
        
        for (let i = 0; i <= breedList.length-1; i++) {
                if (breedList[i].innerText[0] != event.target.value) {
                  breedList[i].style.display = 'none';
                } else {
                  breedList[i].style.display = '';
                }
            }
        } //END of function passed to below
    ) //END of dropdown.addEventListener
}
