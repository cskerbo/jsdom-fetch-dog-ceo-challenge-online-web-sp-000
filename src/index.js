const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function fetchDogs() {
  fetch(imgUrl)
  .then(function(response) {
  return response.json();
  })
.then(function(json) {
  dogPictures(json)
});
};

function fetchBreeds() {
  fetch(breedUrl)
  .then(function(response) {
  return response.json();
  })
.then(function(json) {

  dogBreeds(json)
});
};

function dogBreeds(json) {
  breedsHash = json.message
  const breedContainer = document.getElementById('dog-breeds')
  for (const key in breedsHash) {
    newLi = document.createElement('li')
    newLi.setAttribute('data-info', 'breed')
    newLi.innerText = key
    subBreeds = breedsHash[key]
    if (subBreeds.length > 0) {
      newTypeUl = document.createElement('ul')
      newTypeLi = document.createElement('li')
      newTypeLi.setAttribute('data-info', 'sub-breed')
      newTypeLi.innerText = subBreeds
      newTypeUl.appendChild(newTypeLi)
      newLi.appendChild(newTypeUl)
    }
    breedContainer.appendChild(newLi)
  }
}

function dogPictures(json) {
  pictureArray = json.message
  const imgContainer = document.getElementById('dog-image-container')
  for (const element of pictureArray) {
    newImage = document.createElement('img')
    newImage.setAttribute('src', element)
    imgContainer.appendChild(newImage);
  }
}




document.addEventListener("DOMContentLoaded", function(){
  console.log('%c HI', 'color: firebrick');
  fetchDogs()
  fetchBreeds()

  let dogUL = document.querySelector("#dog-breeds")
  dogUL.addEventListener("click", function(event){
      if (event.target.dataset.info === "breed") {
        event.target.style.color = "green"
        event.target.lastChild.style.color = "red"
      }
      else if (event.target.dataset.info === "sub-breed") {
        event.target.style.color = "red"
        event.target.parentNode.parentNode.style.color = "red"
      }
    })
});
