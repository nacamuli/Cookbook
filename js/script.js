


var w0,w1,w2;
var ws=new Array();
$(document).ready(function(){
   w0=$('#w0');
   w1=$('#w1');
   w2=$('#w2');
   ws=[w0,w1,w2];
   buildWheels();
   
   /*
   Orientation
   */

   
   
   /*
   Set Scroll
   */
   document.addEventListener("touchmove", function(evt){
		evt.preventDefault();
	}, false);   
   	var container = document.getElementById("w0");
	container.addEventListener("touchmove", function(evt){
		evt.stopPropagation();
	}, false);
	   container = document.getElementById("w1");
	container.addEventListener("touchmove", function(evt){
		evt.stopPropagation();
	}, false);
	container = document.getElementById("w2");
	container.addEventListener("touchmove", function(evt){
		evt.stopPropagation();
	}, false);
});//Docuemnt.ready()




function buildWheels(){
	for(var i=0;i<3;i++){
	for(var j=0;j<20;j++){
		$('<img src="img/star.svg"/>').appendTo(ws[i]);

	}
	}
}
window.onresize = function(event) {
 setpos();
}

function setpos(){
readDeviceOrientation();
}

console.log(w);
 
 
 
function closewheels(){
//$('#wheels').animate({ marginLeft: '-500' },300,'linear',true);
//$('#display').animate({ marginLeft: '-500'  },300,'linear',true);
$('#wheels').animate({ width: '0' },300,'linear',true);
} 

function openwheels(){
	
	
}
 
 
 var numOrientationChanges = 0,
    lastOrientation,
    startTime = + new Date(),
    timer;
                 		
function readDeviceOrientation() {

    var orientationLabel,
    	curTime = + new Date() - startTime;
                 		
    if (Math.abs(window.orientation) === 90) {
        // Landscape
    document.getElementById("display").innerHTML = "lllllllll";
    closewheels();
 
    } else {
    	// Portrait
    	document.getElementById("display").innerHTML = "pppppppppp";
 
    }
    
    if (lastOrientation !== window.orientation) {
        
        if (numOrientationChanges === 0) {
            document.getElementById("first").innerHTML = 
                orientationLabel + " (" + curTime + " ms)";
        } else if (numOrientationChanges === 1) {
            document.getElementById("second").innerHTML = 
                orientationLabel + " (" + curTime + " ms)";
            clearInterval(timer);
        }
        lastOrientation = window.orientation;
        numOrientationChanges += 1;
    }
}

window.onorientationchange = readDeviceOrientation;

window.onload = function () {
	readDeviceOrientation();
	document.getElementById("display").innerHTML = 
		(+ new Date() - startTime) + " ms";
};

readDeviceOrientation();
timer = setInterval(readDeviceOrientation, 1/60);