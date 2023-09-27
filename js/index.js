import { SlideDeck } from './slidedeck.js';

const map = L.map('map', { scrollWheelZoom: false });

map.setView([39.96, -75.15], 6);

// ## The Base Tile Layer
L.tileLayer('https://api.mapbox.com/styles/v1/xiaofan-98/clmy5hn01025m01rf2ze2hpmq/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoieGlhb2Zhbi05OCIsImEiOiJjbG1tYTUyeDYwZ3Z0MnJsMXp5bzlhbmhuIn0.o4NFKmmhKwaWErRm16MjHA', {
  maxZoom: 6,
  attribution: 'Map tiles by <a href="https://www.mapbox.com/about/maps/">©Mapbox</a> <a href="http://www.openstreetmap.org/about/">©OpenStreetMap</a> <a href="https://www.mapbox.com/map-feedback/#/-74.5/40/10">Improve this map</a>',
}).addTo(map);

// ## Interface Elements
const slides = document.querySelectorAll('.slide');

// ## The SlideDeck object
const deck = new SlideDeck(slides, map);

document.addEventListener('scroll', () => deck.calcCurrentSlideIndex());

deck.preloadFeatureCollections();
deck.syncMapToCurrentSlide();

