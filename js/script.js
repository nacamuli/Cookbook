// JavaScript Document
var my2way;
var myScroll;
var myScroll2;
var myScroll3;

function loaded() {
	my2way = new TWIS('#wrapper2way');
	myScroll = new iScroll('wrapper1',{vScrollbar: false,bounce:false,snap: 'li' });
    myScroll2 = new iScroll('wrapper2',{vScrollbar: false,bounce:false,snap: 'li' });
    myScroll3 = new iScroll('wrapper3',{vScrollbar: false,bounce:false,snap: 'li' });
		$('.wrapper').css("-webkit-transform","translate(-00px, -30px)");
		console.log($('.wrapper').css("-webkit-transform"));
matrix = matrixToArray($(".wrapper").css("-webkit-transform"));
console.log(matrix);
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
document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
window.addEventListener('load', loaded, false);


function moving(column){
	console.log("moving:"+column.y);
	$('.wrapper').css('y',-70);
}

function matrixToArray(matrix) {
var yy= matrix.substr(7, matrix.length - 8).split(', ');
var yyy=yy[5];
return yyy;
}