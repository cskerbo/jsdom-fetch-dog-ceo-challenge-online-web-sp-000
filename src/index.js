console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

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
  pictureArray = [json.message]
  console.log(pictureArray)
}

document.addEventListener("DOMContentLoaded", function() {

});
