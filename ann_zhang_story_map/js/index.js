import { SlideDeck } from './slidedeck.js';

const map = L.map('map').setView([0, 0], 0);

// ## The Base Tile Layer
const baseTileLayer = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}@2x.png', {
  maxZoom: 20,
  attribution: '&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/about" target="_blank">OpenStreetMap</a> contributors', 
}).addTo(map);



// ## Interface Elements
const slides = document.querySelectorAll('.slide');
const slidePrevButton = document.querySelector('#prev-slide');
const slideNextButton = document.querySelector('#next-slide');

// ## The SlideDeck object
const deck = new SlideDeck(slides, map);

slidePrevButton.addEventListener('click', () => deck.goPrevSlide());
slideNextButton.addEventListener('click', () => deck.goNextSlide());

deck.preloadFeatureCollections();
deck.showCurrentSlide();



var plainIcon = L.icon({
  iconUrl: 'data/marker.jpg',
  iconSize: [40, 40],
  iconAnchor: [15, 40],
  popupAnchor: [0, -40]
});

map.eachLayer(function(layer) {
  if( layer instanceof L.Marker ) {
    layer.setIcon(plainIcon);
   }
});

