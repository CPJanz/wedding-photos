import * as firebase from "firebase";

var storage = firebase.storage();
var pathReference = storage.ref("samplePicture.jpg");
pathReference
  .getDownloadURL()
  .then(function(url) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = "blob";
    xhr.onload = function(event) {
      var blob = xhr.response;
    };
    xhr.open("GET", url);
    xhr.send();

    // Or inserted into an <img> element:
    console.log(url);
  })
  .catch(function(error) {
    // Handle any errors
  });
