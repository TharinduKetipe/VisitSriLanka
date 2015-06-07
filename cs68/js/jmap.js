	jQuery(window).ready(function(){
          g_initialize();
        });
        
        function g_initialize() {
          
          var google_tile = "http://maps.google.com/maps/api/staticmap?sensor=false&center=7.7248346,80.794215&zoom=7&size=300x400"
          var canvas = document.getElementById("myCanvas");
          var context = canvas.getContext("2d");   
          var imageObj = new Image();
          imageObj.src = google_tile;
          
          imageObj.onload = function(){
            context.drawImage(imageObj, 0, 0);
          }
        }
