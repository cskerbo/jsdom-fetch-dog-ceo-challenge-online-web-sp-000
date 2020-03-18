console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
let imgContainer = document.querySelector('dog-image-container');

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
    newImage = document.createElement('img')
    newImage.setAttribute('src', `${element}`)
    imgContainer.append(newImage)
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const imgLocation = document.getElementById('dog-image-container');
});
