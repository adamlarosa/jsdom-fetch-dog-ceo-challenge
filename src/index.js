const imageContainer = document.querySelector("#dog-image-container");
const breedContainer = document.querySelector("ul#dog-breeds");
const dropdown = document.getElementById('breed-dropdown')

fetch("https://dog.ceo/api/breeds/image/random/4")
.then(response => response.json())
.then(data => {
	data.message.forEach(link => { 
		const img = document.createElement("img");
		img.src=`${link}`
		imageContainer.appendChild(img)
	})
});

fetch('https://dog.ceo/api/breeds/list/all')
.then(response => response.json())
.then(data => {
    const breedNames = Object.keys(data.message);
    breedNames.forEach(dog => { 
        let breedList = document.createElement("li");
        breedList.innerText = dog;
        breedContainer.appendChild(breedList);
        breedList.addEventListener('click', event => {
            event.target.style.color = 'red'
        })
    })
});

dropdown.addEventListener('change', event =>  {
	let breedList = document.querySelectorAll("li");	
	for (let i = 0; i <= breedList.length-1; i++) {
		if (breedList[i].innerText[0] != event.target.value) {
			breedList[i].style.display = 'none';
		} else {
			breedList[i].style.display = '';
		}
	}
})