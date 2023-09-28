import { SlideDeck } from './slidedeck.js';

const map = L.map('map', {scrollWheelZoom: false}).setView([0, 0], 0);

// ## The Base Tile Layer
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 20
}).addTo(map);

// ## Interface Elements
const slides = document.querySelectorAll('.slide');



// ## The SlideDeck object
const deck = new SlideDeck(slides, map);

document.addEventListener('scroll', () => deck.calcCurrentSlideIndex());

deck.preloadFeatureCollections();
deck.syncMapToCurrentSlide();
