
// Top Add Slider 

var image1=new Image()
image1.src="images/ac1.jpg"
var image2=new Image()
image2.src="images/ac2.jpg"
var image3=new Image()
image3.src="images/ac3.jpg"
var image4=new Image()
image4.src="images/ac4.jpg"
var step=1
function slideit(){
document.images.slide.src=eval("image"+step+".src")
if(step<4)
step++
else
step=1
setTimeout("slideit()",2500)
}
//Down aside
$(document).ready(function() {
            $('div').hover(
               function () {
                  $(this).css({"background-color":"blue"});
               }, 
        
               function () {
                  $(this).css({"background-color":"#82CAFA"});
               }
            );
         });
    
    