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
  console.log(breedsHash)
  const breedContainer = document.getElementById('dog-breeds')
  for (const key in breedsHash) {
    newLi = document.createElement('li')
    newTypeUl = document.createElement('ul')
    newTypeLi = document.createElement('li')
    newLi.innerText = key
    subBreeds = breedsHash[key]
    console.log(subBreeds)
    if (subBreeds.length > 0) {
      newTypeUl.innerText = "Types"
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
console.log('The DOM HAS LOADED');
fetchDogs()
fetchBreeds()
});
