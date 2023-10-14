/// previous
window.onscroll = function () { onScroll() };

let heaNavbar = $('.js-header__navbar');

// hiển thị navbar từ từ
heaNavbar.css('animation', 'navY 1s ease forwards');
$('.heading__foreground').css('animation', 'headingX 1.3s ease forwards'); 

setTimeout(function() {    
  $('.heading__foreground > h2').css('animation', 'fadeIn 0.5s ease forwards'); 
}, 900);

setTimeout(function() {    
  $('#header > span').css('animation', 'fadeIn 1s ease forwards'); 
}, 1700);

// mô phỏng enum
const iD = {
  HOME: 0,
  CHICKEN: 1,
  EGG: 2,
  CHICKEN_RECIPES: 3,
  EGG_RECIPES: 4,
  CONTACT: 5
};

// lấy tọa độ các id
let getId = ["header", "chicken", "egg", "chicken-recipes", "egg-recipes", "footer"];
let idPos = new Array();

for(let i = 0; i < getId.length; ++i) {  
  idPos.push(document.getElementById(getId[i]).offsetTop);
}

// hover các id
let heaNavLis = $('.header__navbar-list li');
let arrNav = new Array(heaNavLis.length);
let indexOld = 0;

for (let i = 0; i < arrNav.length; ++i) {
  arrNav[i] = heaNavLis[i].querySelector('a');
}

function hoverArrNav(index) {
  $(arrNav[indexOld]).css('backgroundImage', 'none');
  $(arrNav[index]).css('backgroundImage', 'linear-gradient(to right, #fa9e1b, #8d4fff)');  
  indexOld = index;
}

//
function onScroll() {
  const scrollPosition = window.pageYOffset;  
  const heightView = window.outerHeight; // Lấy chiều cao của cửa sổ trình duyệt

  // nền navbar trong suốt
  if (scrollPosition < idPos[iD.CHICKEN]
   && heaNavbar.css('backgroundColor') != "rgba(0, 0, 0, 0)") 
  {
    heaNavbar.css('animation', 'navFadeIn 1s ease forwards');    
    $('.title').css('animation', 'darken 1s ease forwards');    
  } 
  else if (scrollPosition >= idPos[iD.CHICKEN]) {
    heaNavbar.css('animation', 'navGradually 1s ease forwards');    
    $('.title').css('animation', 'fadeIn 1s ease forwards');    
  }

  // hover id
  if (scrollPosition >= idPos[iD.CONTACT]) {
    hoverArrNav(iD.CONTACT);    
    $('.title').text('CONTACT');
  } 
  else if (scrollPosition >= idPos[iD.EGG_RECIPES]) {
    hoverArrNav(iD.EGG_RECIPES);    
    $('.title').text('EGG  RECIPES');
  } 
  else if (scrollPosition >= idPos[iD.CHICKEN_RECIPES]) {
    hoverArrNav(iD.CHICKEN_RECIPES);    
    $('.title').text('CHICKEN  RECIPES');
  } 
  else if (scrollPosition >= idPos[iD.EGG]) {
    hoverArrNav(iD.EGG);    
    $('.title').text('EGG');
  }  
  else if (scrollPosition >= idPos[iD.CHICKEN]) {
    hoverArrNav(iD.CHICKEN);
    $('.title').text('CHICKEN');
  }   
  else if (scrollPosition >= idPos[iD.HOME]) {
    hoverArrNav(iD.HOME);    
    $('#header > a').css('display', 'none');        
  }

  if (scrollPosition > (idPos[iD.CHICKEN] - heightView /2) && scrollPosition < idPos[iD.EGG]) {
    $('.chicken__image').css('animation', 'headingX 1s ease forwards');

    // lấy chiều rộng của một phần tử trên trang web.
    if($(window).width() >  768) {
      $('.chicken__content').css('animation', 'XChiCon 1s ease forwards');
      SetTimeOut(0, 500);
      SetTimeOut(1, 1000);
      SetTimeOut(2, 1500);
      SetTimeOut(3, 2000);
    }
  } 

  if (scrollPosition > (idPos[iD.CHICKEN] - heightView /2)) {
    $('#header > a').css('display', 'block');
  }

  if (scrollPosition > (idPos[iD.EGG] - heightView /2) && scrollPosition < idPos[iD.CHICKEN_RECIPES]) {
    $('.egg__one').css('animation', 'oneEggY 1s ease forwards');
    $('.egg__two').css('animation', 'headingX 1s ease forwards');        
    $('.egg__three').css('animation', 'threeEggY 1s ease forwards');    
  }
}

// Thứ tự hiển thị .content--text
function SetTimeOut( index, time) {
  // gọi một hàm sau một số mili giây.
  setTimeout(function() {    
    $('.js-content:eq(' + index + ')').css('animation', 'XChiCon 1.5s ease forwards');
  }, time);
}

//
let chiRecLefForIndex = 0;
let chiRecCenForIndex = 0;
let chiRecRigForIndex = 0;

function chiRecLCRForward(classLCR) {
  let index = 0;

  if (classLCR == '.chicken-recipes__left') {
    ++chiRecLefForIndex;
    chiRecLefForIndex %= 4;
    index = chiRecLefForIndex;
  } else if (classLCR == '.chicken-recipes__center') {
    ++chiRecCenForIndex;
    chiRecCenForIndex %= 4;
    index = chiRecCenForIndex;
  } else if (classLCR == '.chicken-recipes__right') {
    ++chiRecRigForIndex;
    chiRecRigForIndex %= 4;
    index = chiRecRigForIndex;
  }

  switch (index) {
    case 0:
      $(classLCR + '--four').css('display', 'none');
      $(classLCR + '--one').css('display', 'block');
      break;
    case 1:
      $(classLCR + '--one').css('display', 'none');
      $(classLCR + '--two').css('display', 'block');
      break;
    case 2:
      $(classLCR + '--two').css('display', 'none');
      $(classLCR + '--three').css('display', 'block');
      break;
    case 3:
      $(classLCR + '--three').css('display', 'none');
      $(classLCR + '--four').css('display', 'block');
  }
}

// egg-recipes
function btnRota(index) {
  $('#slide' + index + ' .flip-box-inner').toggleClass('rota');
}

// navbar
function toggler() {  
  $('#header').toggleClass('open');
}
