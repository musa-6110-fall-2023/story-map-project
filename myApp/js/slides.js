var markerCustom = L.icon({
  iconUrl: 'img/marker8b.png',
  iconSize: [8, 8],
  iconAnchor: [0, 0],
  popupAnchor: [2, 8]
});

var plainIcon = L.icon({
  iconUrl: 'img/marker10.png',
  iconSize: [40, 40],
  iconAnchor: [15, 40],
  popupAnchor: [0, -40]
});
  

const slide_00 = {
  title:"Clean & Green Philly",
  slide: 'slide_00',
  icon: plainIcon,
  dataUse: 'None',
  autobounds: 'no',
  img: 'no',
  content: 'We are helping community groups reduce gun crime in Philadelphia by intervening in vacant properties.',
};

const slide_0 = {
    title:'Gun Crime in Philly',
    slide: 'slide_0',
    dataUse: 'gunCrimes', 
    icon:  plainIcon,
    autobounds: 'yes',
    content: 
    `
    Philadelphia has a gun violence problem. Homicides have been on the rise since 2013. 
    The past three years—2020, 2021, and 2022—have been the deadliest on record, with a high of 562 homicides in 2021. 
    Community members need solutions, but many city-run initiatives are frustratingly slow or inadequate. 
    Nearly 80% of the city’s anti-violence spending focuses on long-term violence reduction without any clear, immediate impact. 
    <img src = "img/annual_guncrimes_plot.png" alt="Gun crimes chart" style="margin-top: 20px; max-width: 100%"/>
    `
  };
  
const slide_1 = {
    title: 'Vacancy in Philly',
    slide: 'slide_1',
    dataUse: 'vacancy',
    icon: plainIcon,
    autobounds: 'no',
    content: 'Here are all the publicly owned surveillance cameras that stream their live feed straight to the RTCC. In total there are 555 city owned cameras, but this does not include the 420 cameras owned by residents that have agreed to share their data with the center. Due to privacy concerns, the city declined to make available the location of the resident owned cameras. But in general, the city has not been forthcoming about the location of cameras that they own and operate. This map was only made possible by the outcome of a lawsuit, in which the city was sued in a successful demand for access to the location of the city’s surveillance cameras.',
  };

const slide_2 = {
    title: 'The Vacancy-Gun Crime Connection',
    slide: 'slide_2',
    dataUse: 'landCareLots', 
    icon: plainIcon,
    autobounds: 'yes',
    content: 
    `
    <p>
      Research shows that greening and cleaning vacant and abandoned parcels is one of the most impactful, cost-effective interventions available to reduce gun violence in a neighborhood.
      <br> <br>
      Drs. Eugenia South and Charles Branas have led several studies that demonstrate that greening vacant lots in Philadelphia reduced gun violence by as much as 29% in the surrounding area. 
      Similarly, cleaning and lightly repairing vacant houses led a 13% drop in gun assaults compared to nearby blocks. These “greening and cleaning” interventions not only reduce gun violence but also provide other benefits, 
      such as reducing the urban heat island effect, lowering residents’ stress levels, and contributing to lower levels of depression among residents.
      <br> <br>
      <img src="img/main_article_summary.png" alt="Article abstract" style="margin-top: 20px; max-width: 100%" />
    </p>
    `
   };


// have high-priority sites show up on click  
const slide_3 = {
    title: 'How Clean & Green Philly Helps',
    slide: 'slide_3',
    icon: plainIcon,
    autobounds: 'yes',
    dataUse: 'None',
    showpopups: 'yes',
    content:
    `
    <p>
      By identifying the highest-priority vacant properties, this project will allow community groups to invest their limited resources where they will have the biggest impact.
      <br> <br>
      We combine public data on gun crime, vacancy, and other information in order to identify high, medium, and low priority properties.
      We also incorporate information on property ownership to help stakeholders identify the best way to intervene.
    </p>
    `
  };

  const slide_4 = {
    title: 'Case Study #1',
    slide: 'slide_4',
    dataUse: 'None',
    autobounds: 'yes',
    showpopups: 'yes',
    img: 'yes',
    showimg: 'yes',
    icon: plainIcon,
    content: 
    `
      <p style="font-size: 1em; font-weight: bold; margin-bottom: 10px;">1844 W Sedgley Avenue</p>
      <p>This parcel at 1844 W SEDGLEY AVE is privately owned by TEMPLETOWN SEDGLEY LLC; 3045 WEST JEFF LP. It is a building worth $627500.0. The gun crime rate at this site is in the top 5% citywide, and it is in the top 10% for tree canopy coverage, which makes it a high priority site for intervention.</p>
      <p style="font-size: 0.8em; font-style: italic;">Photo: Street view of 1844 W Sedgley Avenue. Nov. 22, 2022.</p>
      <p style="font-size: 0.8em; font-style: italic;">Credit: cyclomedia.phila.gov</p>
    `
  };
  
  
const slide_5 = {
    title: 'Case Study #2',
    slide: 'slide_5',
    dataUse: 'None',
    autobounds: 'yes',
    showpopups: 'yes', 
    img: 'yes',
    showimg: 'yes',
    icon: plainIcon,
    content: 
    `
      <p style="font-size: 1em; font-weight: bold; margin-bottom: 10px;">2426 N. 13th Street</p>
      <p>This parcel at 2141 N 19TH ST is owned by the City of Philadelphia. It is a lot worth $51700.0, but you should be able to receive a deed from the City for $1. 
      To do so, you will need to contact the Councilmember from District 5 and also the relevant RCO, which is Temple Area Property Association (TAPA); 1639 N. Hancock Street, Suite 307 Philadelphia Philadelphia, PA 19122 United States; peter.redpike@gmail.com; 2158963863. 
      The gun crime rate at this site is in the top 10% citywide, and it is in the top 50% for tree canopy coverage, which makes it a high priority site for intervention.</p>
      <p style="font-size: 0.8em; font-style: italic;">Photo: Street view of 2141 N. 19th Street, Jan. 21, 2023.</p>
      <p style="font-size: 0.8em; font-style: italic;">Credit: cyclomedia.phila.gov</p>
    `
  };
  
  const slide_6 = {
    title: 'Case Study #3',
    slide: 'slide_6',
    dataUse: 'None',
    autobounds: 'yes',
    showpopups: 'yes', 
    img: 'yes',
    showimg: 'yes',
    icon: plainIcon,
    content: `
    <p style="font-size: 1em; font-weight: bold; margin-bottom: 10px;">2141 N. 19th Street</p>
    <p>This parcel at 2426 N 13TH ST is privately owned by RFUND INVESTMENTS LLC. It is a lot worth $38000.0. The gun crime rate at this site is in the top 25% citywide, and it is in the bottom 50% for tree canopy coverage, which makes it a high priority site for intervention.</p>
    <p style="font-size: 0.8em; font-style: italic;">Photo: Street view of 2141 N. 19th Street, Nov. 22, 2022.</p>
    <p style="font-size: 0.8em; font-style: italic;">Credit: cyclomedia.phila.gov</p>
  `
 };

const slides = [slide_00, slide_0, slide_1, slide_2, slide_3, slide_4, slide_5, slide_6]