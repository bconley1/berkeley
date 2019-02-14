
// Hamburger Menu revealed ON SCROLL


$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 800) {
    $('.hamburger_menu a').fadeIn();
  } else {
    $('.hamburger_menu a').fadeOut();
  }
});



// // Hamburger Line Animation - DESKTOP

var FirstBar = document.getElementById('bc_first');
var SecondBar = document.getElementById('bc_second');
var ThirdBar = document.getElementById('bc_third');

var menuOn = false;

function hamburger_animation (){
	event.preventDefault();

	if(menuOn){
		FirstBar.style.transform = 'rotate(0deg)';
		SecondBar.style.opacity = 1;
		ThirdBar.style.transform = 'rotate(0deg)';

		document.getElementById("mySidenav").style.width = "0px";

		menuOn = false;

	}else{
		FirstBar.style.transform = 'rotate(45deg)';
		SecondBar.style.opacity = 0;
		ThirdBar.style.transform = 'rotate(-45deg)';

		document.getElementById("mySidenav").style.width = "440px";

		menuOn = true;
	}
}

// Hamburger Line Animation - TABLET

var FourthBar = document.getElementById('bc_fourth');
var FifthBar = document.getElementById('bc_fifth');
var SixthBar = document.getElementById('bc_sixth');

function hamburger_animation_tablet (){
	event.preventDefault();

	if(menuOn){
		FourthBar.style.transform = 'rotate(0deg)';
		FifthBar.style.opacity = 1;
		SixthBar.style.transform = 'rotate(0deg)';

		document.getElementById("mySidenavTablet").style.width = "0px";

		menuOn = false;

	}else{
		FourthBar.style.transform = 'rotate(45deg)';
		FifthBar.style.opacity = 0;
		SixthBar.style.transform = 'rotate(-45deg)';

		document.getElementById("mySidenavTablet").style.width = "440px";

		menuOn = true;
	}
}

// Hamburger Line Animation - MOBILE

var SeventhBar = document.getElementById('bc_seventh');
var EighthBar = document.getElementById('bc_eighth');
var NinthBar = document.getElementById('bc_ninth');

function hamburger_animation_mobile (){
	event.preventDefault();

	if(menuOn){
		SeventhBar.style.transform = 'rotate(0deg)';
		EighthBar.style.opacity = 1;
		NinthBar.style.transform = 'rotate(0deg)';

		document.getElementById("mySidenavMobile").style.width = "0px";

		menuOn = false;

	}else{
		SeventhBar.style.transform = 'rotate(45deg)';
		EighthBar.style.opacity = 0;
		NinthBar.style.transform = 'rotate(-45deg)';

		document.getElementById("mySidenavMobile").style.width = "100%";

		menuOn = true;
	}
}

$('.hamburger_menu').click(hamburger_animation);
$('.hamburger_menu_tablet').click(hamburger_animation_tablet);
$('.hamburger_menu_mobile').click(hamburger_animation_mobile);



// Map Animation

var MapIcon = document.getElementById('sidemenu_map');
var MapIconTablet = document.getElementById('sidemenu_map_tablet');
var MapIconMobile = document.getElementById('sidemenu_map_mobile');
var sideDrawerOn = false;

function map_drawer_animation (){
	event.preventDefault();

	if(sideDrawerOn){
		MapIcon.style.fill = 'black';
		MapIcon.style.background = '#79BDE8';
		MapIconTablet.style.fill = 'black';
		MapIconTablet.style.background = '#79BDE8';
		MapIconMobile.style.fill = 'black';
		MapIconMobile.style.background = 'none';

		document.getElementById("sidedrawerMap").style.width = "0px";
		document.getElementById("sidedrawerMapTablet").style.width = "0px";
		document.getElementById("sidedrawerMapMobile").style.width = "0px";

		sideDrawerOn = false;

	}else{
		MapIcon.style.fill = 'black';
		MapIcon.style.background = 'white';
		MapIconTablet.style.fill = 'black';
		MapIconTablet.style.background = 'white';
		MapIconMobile.style.fill = 'black';
		MapIconMobile.style.background = 'white';

		document.getElementById("sidedrawerMap").style.width = "726px";
		document.getElementById("sidedrawerMapTablet").style.width = "726px";
		document.getElementById("sidedrawerMapMobile").style.width = "100%";


		sideDrawerOn = true;
	}
}

$('#sidemenu_map').click(map_drawer_animation);
$('#sidemenu_map_tablet').click(map_drawer_animation);
$('#sidemenu_map_mobile').click(map_drawer_animation);



// News Animation

var NewsIcon = document.getElementById('sidemenu_news');
var NewsIconTablet = document.getElementById('sidemenu_news_tablet');
var NewsIconMobile = document.getElementById('sidemenu_news_mobile');

function news_drawer_animation (){
	event.preventDefault();

	if(sideDrawerOn){
		NewsIcon.style.fill = 'black';
		NewsIcon.style.background = '#79BDE8';
		NewsIconTablet.style.fill = 'black';
		NewsIconTablet.style.background = '#79BDE8';
		NewsIconMobile.style.fill = 'black';
		NewsIconMobile.style.background = '#79BDE8';

		document.getElementById("sidedrawerNews").style.width = "0px";
		document.getElementById("sidedrawerNewsTablet").style.width = "0px";
		document.getElementById("sidedrawerNewsMobile").style.width = "0px";

		sideDrawerOn = false;

	}else{
		NewsIcon.style.fill = 'black';
		NewsIcon.style.background = 'white';
		NewsIconTablet.style.fill = 'black';
		NewsIconTablet.style.background = 'white';
		NewsIconMobile.style.fill = 'black';
		NewsIconMobile.style.background = 'white';

		document.getElementById("sidedrawerNews").style.width = "458px";
		document.getElementById("sidedrawerNewsTablet").style.width = "458px";
		document.getElementById("sidedrawerNewsMobile").style.width = "100%";

		sideDrawerOn = true;
	}
}

$('#sidemenu_news').click(news_drawer_animation);
$('#sidemenu_news_tablet').click(news_drawer_animation);
$('#sidemenu_news_mobile').click(news_drawer_animation);


