import { SlideDeck } from './slidedeck.js';

const map = L.map('map').setView([0, 0], 0);

// ## The Base Tile Layer
const baseTileLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});
baseTileLayer.addTo(map);

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
