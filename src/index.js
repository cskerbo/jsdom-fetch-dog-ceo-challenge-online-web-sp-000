console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const imageLocation = document.getElementById('dog-image-container')

function fetchDogs() {
  fetch(imgUrl)
  .then(function(response) {
  return response.json();
  })
.then(function(json) {
  dogPictures(json)
});
}

function dogPictures(json) {
  pictureArray = json.message
  for (const element of pictureArray) {
    function insertPictures(element) {
      newImage = document.createElement('img')
      newImage.setAttribute('src', element)
      imageLocation.appendChild(newImage)
    }
  }
}

document.addEventListener("DOMContentLoaded", function() {

});
