// JavaScript Document

//LAteral panel scroller
var twisScroller;
var currentPanel=0;
//Roulette scrollers
var iscroller1,iscroller2,iscroller3,iscroller4,iscroller5,iscroller6;

//Y Position of roulette strip
var ypos;

var strips = new Array();


function loaded() {
	makeScrollers();
	initButtons();
	
}

function makeScrollers(){
	populateRouletteStrips();
	twisScroller = new TWIS('#wrapper2way',{bounce:true});
	iscroller1 = new iScroll('wrapper1',{vScrollbar: false,bounce:false,snap: 'li' });
	iscroller2 = new iScroll('wrapper2',{vScrollbar: false,bounce:false,snap: 'li' });
    iscroller3 = new iScroll('wrapper3',{vScrollbar: false,bounce:false,snap: 'li' });
	iscroller4 = new iScroll('wrapper4',{vScrollbar: false,bounce:false,snap: 'li' });
	iscroller5 = new iScroll('wrapper5',{vScrollbar: false,bounce:false,snap: 'li' });
	iscroller6 = new iScroll('wrapper6',{vScrollbar: false,bounce:false,snap: 'li' });	
	window.removeEventListener('load', loaded, false);
}


function populateRouletteStrips(){
	strips[0]=$('#wrapper1 ul');
	strips[1]=$('#wrapper2 ul');
	strips[2]=$('#wrapper3 ul');
	for(i=0;i<3;i++){
		for(j=0;j<20;j++){
			$(strips[i]).append('<li></li>');	
			var li='#wrapper'+(i+1)+' ul li:last';
			$(li).css({'height':$(li).width()+'px'});
			$(li).css('background-image','url(img/icons/Icon-'+Math.floor(Math.random()*5)+'.svg)');
			
			
		}
	}
	$('#wrapper1 .scroller').clone().appendTo('#roulette2 #wrapper4');
	$('#wrapper2 .scroller').clone().appendTo('#roulette2 #wrapper5');
	$('#wrapper3 .scroller').clone().appendTo('#roulette2 #wrapper6');
}


function initButtons(){
	
	}

function storyUp(){
console.log("story up");	
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