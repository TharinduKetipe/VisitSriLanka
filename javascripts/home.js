// direction = boolean value: true or false. If true, go to NEXT slide; otherwise go to PREV slide
function toggleSlide(direction) {
    var elements = document.getElementsByClassName("hideable"); // gets all the "slides" in our slideshow
    // Find the LI that's currently displayed
    var visibleID = getVisible(elements);
    elements[visibleID].style.display = "none"; // hide the currently visible LI
    if(!direction) {
        var makeVisible = prev(visibleID, elements.length); // get the previous slide
    } else {
        var makeVisible = next(visibleID, elements.length); // get the next slide
    }
    elements[makeVisible].style.display = "block"; // show the previous or next slide
}
function getVisible(elements) {
    var visibleID = -1;
    for(var i = 0; i < elements.length; i++) {
        if(elements[i].style.display == "block") {
            visibleID = i;
        }
    }
    return visibleID;
}
function prev(num, arrayLength) {
    if(num == 0) return arrayLength-1;
    else return num-1;
}
function next(num, arrayLength) {
    if(num == arrayLength-1) return 0;
    else return num+1;
}
var interval = 200; // You can change this value to your desired speed. The value is in milliseconds, so if you want to advance a slide every 5 seconds, set this to 5000.
var switching = setInterval("toggleSlide(true)", interval);
window.paused = false;

/* Search */

var placesApp = angular.module("PlacesApp",[]);
  placesApp.controller("plcCtrl",function($scope){
    $scope.query = {}
    $scope.queryBy = '$'
    $scope.places = [
      {
        "name" : "Yala National Park",
        "type" : "Wildl Life",
        "location" : "Yala"
      },
      {
        "name" : "Wilpattu National Park",
        "type" : "Wildl Life",
        "location" : "Wilpattuwa"
      },
      {
        "name" : "Boondala National Park",
        "type" : "Boondala",
        "location" : "Yala"
      },
      {
        "name" : "Arugam Bay",
        "type" : "Coastal region",
        "location" : "Arugambay"
      },
       {
        "name" : "Hikkaduwa",
        "type" : "Coastal region",
        "location" : "Hikkaduwa"
      },
       {
        "name" : "Unawatuna",
        "type" : "Coastal region",
        "location" : "Unawatuna"
      },
      {
        "name" : "Galle",
        "type" : "Historical",
        "location" : "Galle"
      },
      {
        "name" : "Kandy",
        "type" : "Historical",
        "location" : "Kandy"
      },
      {
        "name" : "Dambulla",
        "type" : "Historical",
        "location" : "Dambulla"
      }
     
     
    ];
    $scope.orderProp="name";                
  });

