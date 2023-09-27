let map = L.map('map').setView([39.952405, -75.163744], 13);

const cartopositron = 'https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png'

L.tileLayer(cartopositron, {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.',
}).addTo(map);

let layerGroup = L.layerGroup().addTo(map)

let secondlayerGroup = L.layerGroup()

var overlayMaps = {
  "Gun Crimes": secondlayerGroup
};

L.control.layers(overlayMaps).addTo(map);

const gunCrimes = 'https://phl.carto.com/api/v2/sql?q=SELECT+*+FROM+shootings&filename=shootings&format=geojson&skipfields=cartodb_id'
const vacancy = 'https://opendata.arcgis.com/datasets/f7ed68293c5e40d58f1de9c8435c3e84_0.geojson'
const landCareLots = 'https://opendata.arcgis.com/datasets/370e90f4f3044170a85f098facb9684c_0.geojson' 

/* === These are my vars for my functions to fill the slides === */
const slideTitleDiv = document.querySelector('.slide-title');
const slideContentDiv = document.querySelector('.slide-content');
const slidePrevButton = document.querySelector('#prev-slide');
const slideNextButton = document.querySelector('#next-slide');

/* == Set the slide == */
let slideToShow = { features: [] };
let currentSlideIndex = 0;


function getData(callback) {
  fetch('js/locations.json')
  .then(resp => resp.json())
  .then(data => { 
    slideToShow = data;
    if (callback){
      callback();
    };
  })
  }; 


function makeDataCollection(slide_number) {
    return {
      type: 'FeatureCollection',
      features: slideToShow.features.filter(f => f.properties.slide === slide_number),
    };
  }


function initialSlide() {
  const slideNOW = slides[0];
  fillSlide(slideNOW);
  let mapToShow = makeDataCollection(slideNOW.slide);
  updateMap(mapToShow, slideNOW)
  let layer = updateMap(mapToShow, slideNOW);
  if (slideNOW.showimg) {
    layer.eachLayer(l => {
      l.bindPopup(l => l.feature.properties.img, {
        maxWidth : 560} ) 
      l.openPopup();
    });
  }; 
  if (slideNOW.autobounds === 'no') {
    map.flyTo([39.952405, -75.163744], 12); 
  } else {
    map.flyToBounds(layer.getBounds());
  }
  return layer
};

function showCurrentSlide() {
  const slideNOW = slides[currentSlideIndex];
  fillSlide(slideNOW);
  let mapToShow = makeDataCollection(slideNOW.slide);  
  updateMap(mapToShow, slideNOW);
  let layer = updateMap(mapToShow, slideNOW);
  if (slideNOW.autobounds === 'no') {
    map.flyTo([39.952405, -75.163744], 12);
  } else {
    map.flyToBounds(layer.getBounds());
  };
  if (slideNOW.showpopups) {
    layer.eachLayer(l => {
      l.bindTooltip(l.feature.properties.label, { permanent: true });
      l.openTooltip();
    });
  }; 
  if (slideNOW.showimg) {
    layer.eachLayer(l => {
      l.bindPopup(l => l.feature.properties.img, {
        maxWidth : 560
      });
      l.openPopup();
    });
  };
  
};


function fillSlide(slide) {
  const converter = new showdown.Converter({ smartIndentationFix: true });

  slideTitleDiv.innerHTML = `<h2>${slide.title}</h2>`;
  slideContentDiv.innerHTML = converter.makeHtml(slide.content);
};


function updateMap(mapToShow, slide) {
  layerGroup.clearLayers();
  iconuse = slide.icon;

  if (slide.dataUse === "gunCrimes") {
    fetch(gunCrimes)
      .then(resp => resp.json())
      .then(data => {
        L.geoJSON(data, {
          pointToLayer: function (feature, latlng) {
            // Customize the marker for each point feature
            return L.marker(latlng, {
              icon: L.divIcon({ className: 'custom-icon' }),
              // Add other options like icon size, color, etc.
            });
          },
          onEachFeature: function (feature, layer) {
            // Add interactions, popups, etc. for each point feature
            layer.bindPopup('This is a point!');
          }
        }).addTo(layerGroup); // Add the geoJSON layer to your layerGroup
      });
  }
  

  if (slide.dataUse === "vacancy") {
    fetch(vacancy)
    .then(resp => resp.json())
    .then(data => {
      L.geoJSON(data, {
        onEachFeature: function(feature, layer) {
          if (feature.geometry.type === "Polygon") {
            // Style or modify the polygon layer as needed.
            layer.setStyle({
              color: '#ff7800',   // Change to the desired stroke color.
              weight: 2,          // Change to the desired stroke weight.
              opacity: 0.35       // Change to the desired opacity.
            });
  
            // If you wish to bind popup or do other interactions, you can add here.
            // Example: layer.bindPopup('This is a polygon!');
  
            layerGroup.addLayer(layer);
          }
        }
      });
    });
  }  

  if (slide.dataUse === "landCareLots") {
    fetch(landCareLots)
    .then(resp => resp.json())
    .then(data => {
      L.geoJSON(data, {
        onEachFeature: function(feature, layer) {
          if (feature.geometry.type === "Polygon") {
            // Style or modify the polygon layer as needed.
            layer.setStyle({
              color: '#00a40c',   // Change to the desired stroke color.
              weight: 2,          // Change to the desired stroke weight.
              opacity: 0.35       // Change to the desired opacity.
            });
  
            // If you wish to bind popup or do other interactions, you can add here.
            // Example: layer.bindPopup('This is a polygon!');
  
            layerGroup.addLayer(layer);
          }
        }
      });
    });
  }  

  else {
    if (slide.icon && slide.img) {
      const geoJsonLayer = L.geoJSON(mapToShow, { pointToLayer: (p, latlng) => L.marker(latlng, 
        {icon: iconuse}) })
        /* .bindTooltip(l => l.feature.properties.label, { permanent: true }) */
        .bindPopup(l => l.feature.properties.img, {
          maxWidth : 560} ) 
        .addTo(layerGroup).openPopup();

        return geoJsonLayer;
    } 
    if (slide.icon && !slide.img) {
      const geoJsonLayer = L.geoJSON(mapToShow, { pointToLayer: (p, latlng) => L.marker(latlng, 
        {icon: iconuse}) }).addTo(layerGroup)/*
        .bindTooltip(l => l.feature.properties.label, { permanent: true })
        .addTo(layerGroup).openTooltip();*/

        return geoJsonLayer;
    } 
    if (slide.img && !slide.icon) {
      const geoJsonLayer = L.geoJSON(mapToShow, { pointToLayer: (p, latlng) => L.marker(latlng) })
        .bindTooltip(l => l.feature.properties.label, { permanent: true })
        .bindPopup( l => l.feature.properties.img, {
          maxWidth : 450}  )  /*getCaption(slide) +  getIMG(slide) */
        .addTo(layerGroup).openPopup();

        return geoJsonLayer;
    } else {
      const geoJsonLayer = L.geoJSON(mapToShow, { pointToLayer: (p, latlng) => L.marker(latlng) })
        .bindTooltip(l => l.feature.properties.label, { permanent: true })
        .addTo(layerGroup).openTooltip();

        return geoJsonLayer;
    }

  
    
  };

}

function getIMG(slide) {
  let image = slide.img;
  return image;
}

function getIMG2(mapToShow) {
  let image = slide.img;
  return image;
}


function getCaption(slide) {
  let caption = slide.caption;
  return caption;
}

let clickedPastFinalSlide = false;

// Variables for Popup and Overlay
var overlay = document.getElementById("overlay");
var popup = document.getElementById("popup");
var closePopupButton = document.getElementById("popupclose");

// Function to Show Popup
function showPopup(content) {
  overlay.style.display = 'block';
  popup.style.display = 'block';
  popup.innerHTML = content;
}

// Function to Close Popup
function closePopup() {
  overlay.style.display = 'none';
  popup.style.display = 'none';
}

// Assign the Close Popup Function to the Close Button
closePopupButton.onclick = closePopup;

// Assuming you have a next button with id 'next-slide'
var nextButton = document.getElementById("next-slide");

function nextSlide() {
  // Increment the current slide index.
  currentSlideIndex++;

  // If it is after the last slide, show the final popup.
  if (currentSlideIndex === slides.length) {
    const finalPopupContent = `
    <div id="popupclose" onclick="closePopup()">X</div>
    <p>Get Involved Content Here!</p>
    <button id="startOverButton" class="slide-butt" onclick="location.reload()">Start Over</button>`;
    showPopup(finalPopupContent);
    nextButton.disabled = true; // Disable the next button
    nextButton.style.opacity = 0.5; // Fade out the next button
  } else {
    map.removeControl(legend);
    map.removeControl(legend2);
    showCurrentSlide();
    nextButton.disabled = false; // Enable the next button
    nextButton.style.opacity = 1; // Make the next button fully visible
  }
}

function prevSlide() {
  currentSlideIndex--;

  if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
  }
  map.removeControl(legend);
  map.removeControl(legend2);
  showCurrentSlide();
}

window.onload = function() {
  // Initially set display to none for overlay and popup.
  overlay.style.display = 'none';
  popup.style.display = 'none';

  // Content for the initial popup
  const initialPopupContent = `
    <div id="popupclose" onclick="closePopup()">X</div>
    <div class="popupcontent">
      <h1 style="padding-top: 3rem; padding-left: 3rem;">How We're Helping</h1>
      <p style="padding-left: 3rem; padding-right: 3rem">
        We're helping fight gun violence in Philadelphia by empowering community groups to take action where it will have the most impact.
        <br> <br>
        Based on research by Dr. Eugenia South, this project uses public data to help residents identify and intervene in vacant properties
        with the highest rates of gun crime.
        <br> <br>
        (Disclaimer: This project is an adaptation of <a href="https://github.com/CodeForPhilly/vacant-lots-proj">Clean & Green Philly</a>, an ongoing civic tech project led by Nissim Lebovits.
        The work shown here, however, is for a class project and does not accurately reflect real data or the current state of Clean & Green Philly.)</p>`;
  
  // Show the initial popup.
  showPopup(initialPopupContent);
};

slidePrevButton.addEventListener('click', prevSlide);
slideNextButton.addEventListener('click', nextSlide);

getData(initialSlide);
console.log("data in");
console.log('is there stuff on the map');

