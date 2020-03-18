
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const imgContainer = document.querySelector('dog-image-container');

function fetchDogs() {
  fetch(imgUrl)
  .then(function(response) {
  return response.json();
  })
.then(function(json) {
  dogPictures(json)
});
};

function dogPictures(json) {
  pictureArray = json.message
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
});
