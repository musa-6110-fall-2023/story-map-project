/* === These are my slides === */
/* my thought is to use index to loop through coordinates. in the features? like index 0 = slide 0 */


/*const myslides = [slide_0, slide_1, slide_2, slide_3, slide_4,
  slide_5, slide_6, slide_7, slide_8, slide_9, slide10]
  
    slide_temp = {
    title:'',
    content: '',
    coords: ' '
  }
  */  
  

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
  

var cameraIcon = L.icon({
  iconUrl: 'img/marker5.png',
  iconSize: [70, 70],
  iconAnchor: [0, 0],
  popupAnchor: [35, 5]
});  
var nopdIcon = L.icon({
  iconUrl: 'img/nopd.png',
  iconSize: [40, 40],
  iconAnchor: [0, 0],
  popupAnchor: [-3, -10]
});

/*
# Landing page
We are helping community groups reduce gun crime in Philadelphia by intervening in vacant properties.

# Gun Crime Context
Philadelphia has a gun violence problem. 
[chart of gun crime]
[on map: shootings since the start of 2023, as orange dots]

# Vacancy Context
Philadelphia has 40,000 vacant properties. These are associated with all kinds of issues.
[Map vacancy]

# Research Context
Research shows...
[Include picture from Dr. South's research]
[Map PHS land care parcels]

# Desired outcomes
Content...
[Map all properties, then have high priority ones show up on click]

# Site 1

    ## Picture

    ## Characteristics

    ## Recommended Actions

# Site 2

    ## Picture

    ## Characteristics

    ## Recommended Actions

# Site 3

    ## Picture

    ## Characteristics

    ## Recommended Actions

# Get involved

If you want to help us build this project, consider joining [our Code for Philly project]. (link)
Currently, we are looking for developers (React + Next.JS) and data engineers (Python)


*/


const slide_00 = {
  title:"Clean & Green Philly",
  slide: 'slide_00',
  icon: plainIcon,
  dataUse: 'None',
  autobounds: 'no',
  img: 'yes',
  content: 'We are helping community groups reduce gun crime in Philadelphia by intervening in vacant properties.',
};

const slide_0 = {
    title:'Gun Crime in Philly',
    slide: 'slide_0',
    dataUse: 'gunCrimes', 
    icon:  plainIcon,
    autobounds: 'no',
    img: 'no',
    content: 'Philadelphia has a gun violence problem. Homicides have been on the rise since 2013. The past three years—2020, 2021, and 2022—have been the deadliest on record, with a high of 562 homicides in 2021. Community members need solutions, but many city-run initiatives are frustratingly slow or inadequate. Nearly 80% of the city’s anti-violence spending focuses on long-term violence reduction without any clear, immediate impact.', 
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
    showpopups: 'yes',
    caption: '<h3> Former Mayor Landrieu (front) and current Mayor Cantrell (to the right of Landrieu) </h3>',
    img: '<img src = "img/mayors.jpg" height="198px" width="300px" />',
    content: 'Research shows that greening and cleaning vacant and abandoned parcels is one of the most impactful, cost-effective interventions available to reduce gun violence in a neighborhood. Drs. Eugenia South and Charles Branas have led several studies that demonstrate that greening vacant lots in Philadelphia reduced gun violence by as much as 29% in the surrounding area. Similarly, cleaning and lightly repairing vacant houses led a 13% drop in gun assaults compared to nearby blocks. These “greening and cleaning” interventions not only reduce gun violence but also provide other benefits, such as reducing the urban heat island effect, lowering residents’ stress levels, and contributing to lower levels of depression among residents.',
  };

const slide_3 = {
    title: 'How Clean & Green Philly Helps',
    slide: 'slide_3',
    icon: plainIcon,
    autobounds: 'yes',
    dataUse: 'None',
    showpopups: 'yes',
    content: 'There are roughly 40,000 vaccant properties in Philadelphia. Identifying the highest-priority vacant properties will allow community groups to invest their limited resources where they will have the biggest impact. Combining various public data, this dashboard helps users identify the properties that are ideal for them to intervene in. It also offers additional information about each property to facilitate interventions and indicates the best possible route to cleaning up the property.'
};

const slide_4 = {
    title: 'Site 1',
    slide: 'slide_4',
    dataUse: 'None',
    autobounds: 'no',
    showpopups: 'yes', 
    img: 'yes',
    showimg: 'yes',
    icon: plainIcon,
    content: '<p>The use of facial recognition tech in the New Orleans Police Department was a surprise for many. Outrage and concern led to Eye on Surveillance’s proposed ban being adopted at the end of the year. Though the ordinance was successfully passed, a new ordinance was recently introduced that would undo the bans and gains made by Eye on Surveillance and the previous City Council. The ordinance to reverse the bans is supported by both the Mayor and police superintendent, Shaun Ferguson. </p><p>Now, EOS and others are continuing the fight against harmful surveillance, for the reasons stated in their press release:</p><p style= font-style: italic;>“In December 2020, New Orleans City Council banned the use of facial recognition and three other surveillance technologies, in large part because they have been proven rife with racial bias and have resulted in the wrongful arrest and imprisonment of people of color across the country. They also continue to distract from addressing the root causes of crime; these tools don’t prevent crime, yet we continue to pour money into them instead of affordable housing, job training, nutritious food options, and better schools.” <a href= “https://eye-on-surveillance.webflow.io//blog/surveillance-ordinance-amendment-response”> Eye on Surveillance Press Release Feb. 3 2022 </a></p> '
  };
  
const slide_5 = {
    title: 'Site 2',
    slide: 'slide_5',
    dataUse: 'None',
    autobounds: 'no',
    showpopups: 'yes', 
    img: 'yes',
    showimg: 'yes',
    icon: plainIcon,
    content: '<p>The use of facial recognition tech in the New Orleans Police Department was a surprise for many. Outrage and concern led to Eye on Surveillance’s proposed ban being adopted at the end of the year. Though the ordinance was successfully passed, a new ordinance was recently introduced that would undo the bans and gains made by Eye on Surveillance and the previous City Council. The ordinance to reverse the bans is supported by both the Mayor and police superintendent, Shaun Ferguson. </p><p>Now, EOS and others are continuing the fight against harmful surveillance, for the reasons stated in their press release:</p><p style= font-style: italic;>“In December 2020, New Orleans City Council banned the use of facial recognition and three other surveillance technologies, in large part because they have been proven rife with racial bias and have resulted in the wrongful arrest and imprisonment of people of color across the country. They also continue to distract from addressing the root causes of crime; these tools don’t prevent crime, yet we continue to pour money into them instead of affordable housing, job training, nutritious food options, and better schools.” <a href= “https://eye-on-surveillance.webflow.io//blog/surveillance-ordinance-amendment-response”> Eye on Surveillance Press Release Feb. 3 2022 </a></p> '
  };
  
  const slide_6 = {
    title: 'Site 3',
    slide: 'slide_6',
    icon: markerCustom,
    img: 'yes',
    dataUse: 'None',
    autobounds: 'no', 
    content: '<p>Looking just at affordable housing, what are the state of things?</p><p>The state of affordable housing for Homeowners is not as bad as it is for renters. Shown here is a map highlighting an estimate of the percentage of homeowners with debt that spend half or more of their income on housing by block group.</p><table class="cuteTable"><tr><th>% Income Spent on Homeownership</th><th>Number of Block Groups Is Majority</th><th>% of Block Groups is Majority</th></tr><tr><td>50% or More</td><td>131</td><td>26.4%</td></tr><tr><td>40 to 49%</td><td>27</td><td>5.4%</td></tr><tr><td>35 to 39%</td><td>19</td><td>3.8%</td></tr><tr><td>30 to 34%</td><td>24</td><td>4.8%</td></tr><tr><td>25 to 29%</td><td>38</td><td>7.6%</td></tr><tr><td>20 to 24%</td><td>49</td><td>9.9%</td></tr><tr><td>15 to 19%</td><td>74</td><td>14.9%</td></tr><tr><td>10 to 15%</td><td>63</td><td>12.7%</td></tr><tr><td>Less than 10%</td><td>44</td><td>8.9%</td></tr><tr><td>Not Computed</td><td>44</td><td>8.9%</td></tr></table>Source: US Census (5YR ACS)',
  };
  const slide_7 = {
    title: 'Get Involved',
    slide: 'slide_6',
    icon: markerCustom,
    dataUse: 'None',
    autobounds: 'no', 
    content: '<p>Looking just at affordable housing, what are the state of things?</p><p>The state of affordable housing for Homeowners is not as bad as it is for renters. Shown here is a map highlighting an estimate of the percentage of homeowners with debt that spend half or more of their income on housing by block group.</p><table class="cuteTable"><tr><th>% Income Spent on Homeownership</th><th>Number of Block Groups Is Majority</th><th>% of Block Groups is Majority</th></tr><tr><td>50% or More</td><td>131</td><td>26.4%</td></tr><tr><td>40 to 49%</td><td>27</td><td>5.4%</td></tr><tr><td>35 to 39%</td><td>19</td><td>3.8%</td></tr><tr><td>30 to 34%</td><td>24</td><td>4.8%</td></tr><tr><td>25 to 29%</td><td>38</td><td>7.6%</td></tr><tr><td>20 to 24%</td><td>49</td><td>9.9%</td></tr><tr><td>15 to 19%</td><td>74</td><td>14.9%</td></tr><tr><td>10 to 15%</td><td>63</td><td>12.7%</td></tr><tr><td>Less than 10%</td><td>44</td><td>8.9%</td></tr><tr><td>Not Computed</td><td>44</td><td>8.9%</td></tr></table>Source: US Census (5YR ACS)',
  };



const slides = [slide_00, slide_0, slide_1, slide_2, slide_3, slide_4, slide_5, slide_6, slide_7]