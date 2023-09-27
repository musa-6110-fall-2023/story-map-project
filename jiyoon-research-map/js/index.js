import { SlideDeck } from './slidedeck.js';

const map = L.map('map', {scrollWheelZoom: false}).setView([0, 0], 0);

// ## The Base Tile Layer
// Change the baseTileLayer Using Opensource (Edited by JY)
const baseTileLayer = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png?api_key=8e6bb800-0aee-4eaa-a3ef-55d5c9c6695d', {
	minZoom: 1,
	maxZoom: 9,
	attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	ext: 'png'

}).addTo(map);


// ## Interface Elements
const slides = document.querySelectorAll('.slide');

// ## The SlideDeck object
const deck = new SlideDeck(slides, map);

document.addEventListener('scroll', () => deck.calcCurrentSlideIndex());

deck.preloadFeatureCollections();
deck.syncMapToCurrentSlide();


// smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});


// NeoBrick Slider

var slideIndex = 1;
showDivs(slideIndex);

// NeoBrick Slider Button

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

window.plusDivs = plusDivs;

// HoloWall Slider Button

showDivsHolo(slideIndex);

function plusDivsHolo(n) {
  showDivsHolo(slideIndex += n);
}

function showDivsHolo(n) {
  var i;
  var x = document.getElementsByClassName("mySlides_02");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

window.plusDivsHolo = plusDivsHolo;

// TD2 Slider Button

showDivsTd2(slideIndex);

function plusDivsTd2(n) {
  showDivsTd2(slideIndex += n);
}

function showDivsTd2(n) {
  var i;
  var x = document.getElementsByClassName("mySlides_03");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

window.plusDivsTd2 = plusDivsTd2;

// Weeping Brick Slider Button
showDivsWeeping(slideIndex);

function plusDivsWeeping(n) {
  showDivsWeeping(slideIndex += n);
}

function showDivsWeeping(n) {
  var i;
  var x = document.getElementsByClassName("mySlides_04");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

window.plusDivsWeeping = plusDivsWeeping;




