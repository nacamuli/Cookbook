// JavaScript Document

//LAteral panel scroller
var my2way;

//Roulette scrollers
var myScroll;
var myScroll2;
var myScroll3;

//Y Position of roulette strip
var ypos;




function loaded() {
//Initiate scrollers
	//2 Way scroller (have mofifed line 265 to disable vertical scrolling on the first panel)
	my2way = new TWIS('#wrapper2way');
	myScroll = new iScroll('wrapper1',{
		vScrollbar: false,bounce:false,snap: 'li', 
	onScrollMove: function() {moving();}, 
		onScrollEnd: function() {ended();},
	 });
    myScroll2 = new iScroll('wrapper2',{vScrollbar: false,bounce:false,snap: 'li' });
    myScroll3 = new iScroll('wrapper3',{vScrollbar: false,bounce:false,snap: 'li' });


/*
	// Test scrollY and scrollTorecipe
	setTimeout(function () {
		myScroll.scrollTorecipe(3, 500);
	}, 1000);

	setTimeout(function () {
		myScroll.scrollY(-1000, 1500);
	}, 2000);
*/

	// Free some mem
	window.removeEventListener('load', loaded, false);
}


/**
Get y pos of a roulette
**/

function readY(){
	ypos = matrixToArray($("#wrapper1 .scroller").css("-webkit-transform"));
 return parseInt(ypos);
}


/**
Set y pos of a roulette
**/

function writeY(yvalue){
$('#wrapper1 .scroller').css("-webkit-transform","translate(-00px, "+yvalue+"px)");	
}

/**
Check y pos of roulette and reset it to enable infinite scroll
**/

function checkY(){
	if(readY()>=-100){
		writeY(readY()-500);
	}
	if(readY()<=-800){
		writeY(readY()+(500));
	}	
	$("#info").html(readY());
}


/**
Roulette events
**/

function ended(column){
	console.log("ended:"+readY());
	checkY();
}

function moving(column){
	console.log("moving:"+readY());
	checkY();

}


/**
Get the y cordinates of an itme using CSS transforms
**/
function matrixToArray(matrix) {
	var yy= matrix.substr(7, matrix.length - 8).split(', ');
	var yyy=yy[5];
	return yyy;
}



document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
window.addEventListener('load', loaded, false);