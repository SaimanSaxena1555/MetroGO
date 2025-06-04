const toggleButton = document.getElementById("toggle-dark-mode");
const iconImg = document.getElementById("toggle-dark-mode-img");

// 🌙 Toggle dark mode
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");
  iconImg.src = isDark
    ? "../assets/dark mode/light_mode_sun.png"
    : "../assets/dark mode/dark_mode_moon.png";

});


window.addEventListener("DOMContentLoaded", () => {});

// 🧠 Station list
const stationList = ["shaheed sthal (new bus adda)", "hindon river", "arthala", "mohan nagar", "shyam park",
  "major mohit sharma rajendra nagar", "raj bagh", "shaheed nagar", "dilshad garden",
  "jhilmil", "mansarovar park", "shahdara", "welcome", "seelampur", "shastri park",
  "kashmere gate", "tis hazari", "pulbangash", "pratap nagar", "shastri nagar",
  "inderlok", "kanhaiya nagar", "keshav puram", "netaji subhash place", "kohat enclave",
  "pitampura", "rohini east", "rohini west", "rithala","samaypur badli", "rohini sector - 18, 19", "haiderpur badli mor", "jahangirpuri",
  "adarsh nagar", "azadpur", "model town", "guru teg bahadur nagar", "vishwavidyalaya",
  "vidhan sabha", "civil lines", "kashmere gate", "chandni chowk", "chawri bazar",
  "new delhi (yellow & airport line)", "rajiv chowk", "patel chowk", "central secretariat",
  "udyog bhawan", "lok kalyan marg", "jor bagh", "dilli haat - ina", "aiims", "green park",
  "hauz khas", "malviya nagar", "saket", "qutab minar", "chhatarpur", "sultanpur",
  "ghitorni", "arjan garh", "guru dronacharya", "sikanderpur", "m.g. road",
  "iffco chowk", "millennium city centre gurugram",  "dwarka sector - 21", "dwarka sector - 8", "dwarka sector - 9", "dwarka sector - 10",
  "dwarka sector - 11", "dwarka sector - 12", "dwarka sector - 13", "dwarka sector - 14",
  "dwarka", "dwarka mor", "nawada", "uttam nagar west", "uttam nagar east", "janakpuri west",
  "janakpuri east", "tilak nagar", "subhash nagar", "tagore garden", "rajouri garden",
  "ramesh nagar", "moti nagar", "kirti nagar", "shadipur", "patel nagar", "rajendra place",
  "karol bagh", "jhandewalan", "ramakrishna ashram marg", "rajiv chowk", "barakhamba road",
  "mandi house", "supreme court", "indraprastha", "yamuna bank",  "yamuna bank", "akshardham", "mayur vihar -i", "mayur vihar extension", "new ashok nagar",
  "noida sector-15", "noida sector-16", "noida sector-18", "botanical garden", "golf course",
  "noida city centre", "sector - 34 noida", "sector - 52 noida", "sector - 61 noida",
  "sector - 59 noida", "sector - 62 noida", "noida electronic city",  "yamuna bank", "laxmi nagar", "nirman vihar", "preet vihar", "karkarduma",
"anand vihar isbt", "kaushambi", "vaishali", "kirti nagar", "satguru ram singh marg", "inderlok", "ashok park main", "punjabi bagh",
"punjabi bagh west", "shivaji park", "madipur", "paschim vihar east", "paschim vihar west",
"peeragarhi", "udyog nagar", "maharaja surajmal stadium", "nangloi", "nangloi railway station",
"rajdhani park", "mundka", "mundka industrial area (mia)", "ghevra metro station",
"tikri kalan", "tikri border", "pandit shree ram sharma", "bahadurgarh city",
"brig. hoshiar singh","kashmere gate", "lal quila", "jama masjid", "delhi gate", "ito", "mandi house",
  "janpath", "central secretariat", "khan market", "jln stadium", "jangpura",
  "lajpat nagar", "moolchand", "kailash colony", "nehru place", "kalkaji mandir",
  "govind puri", "harkesh nagar okhla", "jasola-apollo", "sarita vihar",
  "mohan estate", "tughlakabad station", "badarpur border", "sarai",
  "nhpc chowk", "mewala maharajpur", "sector-28", "badkal mor", "old faridabad",
  "neelam chowk ajronda", "bata chowk", "escorts mujesar", "sant surdas (sihi)",
  "raja nahar singh (ballabhgarh)","majlis park", "azadpur", "shalimar bagh", "netaji subhash place", "shakurpur",
  "punjabi bagh west", "esi-basai darapur", "rajouri garden", "mayapuri", "naraina vihar",
  "delhi cantt.", "durgabai deshmukh south campus", "sir m. vishweshwaraiah moti bagh",
  "bhikaji cama place", "sarojini nagar", "dilli haat - ina", "south extension",
  "lajpat nagar", "vinobapuri", "ashram", "sarai kale khan - nizamuddin", "mayur vihar -i",
  "mayur vihar pocket-1", "trilokpuri-sanjay lake", "east vinod nagar-mayur vihar -ii",
  "mandawali - west vinod nagar", "i.p. extension", "anand vihar isbt", "karkarduma",
  "karkarduma court", "krishna nagar", "east azad nagar", "welcome", "jafrabad",
  "maujpur-babarpur", "gokulpuri", "johri enclave", "shiv vihar", "krishna park extension", "janakpuri west", "dabri mor - janakpuri south", "dashrathpuri",
  "palam", "sadar bazar cantonment", "terminal 1-igi airport", "shankar vihar",
  "vasant vihar", "munirka", "r.k. puram", "iit", "hauz khas", "panchsheel park",
  "chirag delhi", "greater kailash", "nehru enclave", "kalkaji mandir", "okhla nsic",
  "sukhdev vihar", "jamia millia islamia", "okhla vihar", "jasola vihar shaheen bagh",
  "kalindi kunj", "okhla bird sanctuary", "botanical garden","dwarka", "nangli", "najafgarh", "dhansa bus stand",   "new delhi", "shivaji stadium", "dhaula kuan", "delhi aerocity",
  "airport (t-3)", "dwarka sector - 21", "yashobhoomi dwarka sector - 25","sector 55-56", "sector 54 chowk", "sector 53-54", "sector 42-43",
  "phase-1", "sikanderpur", "phase-2", "belvedere towers",
  "cyber city", "moulsari avenue", "phase-3"
];

function clearForm() {
  document.getElementById('source').value = '';
  document.getElementById('destination').value = '';
}

async function findRoute() {
  const source = document.getElementById('source').value.trim();
  const destination = document.getElementById('destination').value.trim();

  if (!source || !destination) {
    alert('Please select both source and destination stations');
    return;
  }

  if (source === destination) {
    alert('Source and destination cannot be the same');
    return;
  }

  if (!stationList.includes(source) || !stationList.includes(destination)) {
    alert('Please enter valid station names');
    return;
  }

  // Show loading state
  const findButton = document.querySelector('button[onclick="findRoute()"]');
  const originalText = findButton?.textContent;
  if (findButton) {
    findButton.textContent = 'Finding Route...';
    findButton.disabled = true;
  }

  try {
    console.log('Attempting to connect to server...');
    
    // Add timeout to fetch request
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
    
    const response = await fetch("http://localhost:3000/api/route", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ source, destination }),
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);

    console.log("Response status:", response.status);
    
    if (!response.ok) {
      throw new Error(`Server responded with status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log("Returned data:", data);

    if (data.error) {
      alert(`Route calculation error: ${data.error}`);
      return;
    }

    updateRouteDisplay(data);
    
  } catch (err) {
    console.error("Request failed:", err);
    
    let errorMessage = "Unable to find route. ";
    
    if (err.name === 'AbortError') {
      errorMessage += "Request timed out. Please check if the server is running.";
    } else if (err.message.includes('Failed to fetch')) {
      errorMessage += "Cannot connect to server. Please make sure:\n\n1. Server is running (run 'node server.js')\n2. Server is accessible at http://localhost:3000\n3. No firewall is blocking the connection";
    } else {
      errorMessage += err.message;
    }
    
    alert(errorMessage);
  } finally {
    // Reset button state
    if (findButton) {
      findButton.textContent = originalText;
      findButton.disabled = false;
    }
  }
}

function updateRouteDisplay(routeData) {
  if (!routeData || !routeData.route) {
    alert("Invalid route data received.");
    return;
  }

  document.getElementById('route-details-path-value').textContent = formatStationName(routeData.route[0]) + ' to ' + formatStationName(routeData.route[routeData.route.length - 1]);
  document.getElementById('route-details-time-value').textContent = routeData.travelTime;
  document.getElementById('route-details-distance-value').textContent = formatDistance(routeData.totalDistance);
  document.getElementById('station-count').textContent = routeData.stations;
  document.getElementById('travel-time').textContent = routeData.travelTime;
  document.getElementById('total-distance').textContent = formatDistance(routeData.totalDistance);
  document.getElementById('transfers').textContent = routeData.transfers;

  document.getElementById('start-station').textContent = formatStationName(routeData.route[0]);
  document.getElementById('end-station').textContent = formatStationName(routeData.route[routeData.route.length - 1]);

  generateStationList(routeData.route, routeData.transferStations, routeData.colors);

}

function formatStationName(stationName) {
  return stationName
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function formatDistance(distanceStr) {
  if (!distanceStr || typeof distanceStr !== 'string') {
    console.warn("Invalid distance:", distanceStr);
    return 'N/A';
  }

  const meters = parseFloat(distanceStr.split(' ')[0]);
  return meters >= 1000
    ? (meters / 1000).toFixed(1) + ' km'
    : Math.round(meters) + ' m';
}

function generateStationList(stations, transferStations = [], colors = []) {
  const stationLine = document.getElementById('station-line');
  stationLine.innerHTML = '';

  stations.forEach((station, index) => {
    const stationItem = document.createElement('div');
    stationItem.className = 'station-item';

    let stationClass = 'regular';
    let badge = '';

    if (index === 0) {
      stationClass = 'start';
      badge = '<span class="station-badge start">Start</span>';
    } else if (index === stations.length - 1) {
      stationClass = 'end';
      badge = '<span class="station-badge end">End</span>';
    } else if (transferStations.includes(station)) {
      stationClass = 'transfer';
      badge = '<span class="station-badge transfer">Transfer</span>';
    }

    // ✅ Use color regardless of class
    const lineColor = colors[index] || 'black';

    stationItem.innerHTML = `
      <div class="station-number ${stationClass}" style="background-color: ${lineColor};">${index + 1}</div>
      <div class="station-info">
        <div class="station-name">${formatStationName(station)}</div>
        <div class="station-meta">
          Station ${index + 1}
          ${badge}
        </div>
      </div>
      ${index < stations.length - 1 ? `<div class="connecting-line" style="background-color: ${lineColor};"></div>` : ''}
    `;

    stationLine.appendChild(stationItem);
  });
}
