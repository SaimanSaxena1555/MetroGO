// Import JSNetworkX
const jsnx = require("jsnetworkx");



// Metro Lines 

const red_Line = [
    "shaheed sthal (new bus adda)", "hindon river", "arthala", "mohan nagar", "shyam park",
    "major mohit sharma rajendra nagar", "raj bagh", "shaheed nagar", "dilshad garden",
    "jhilmil", "mansarovar park", "shahdara", "welcome", "seelampur", "shastri park",
    "kashmere gate", "tis hazari", "pulbangash", "pratap nagar", "shastri nagar",
    "inderlok", "kanhaiya nagar", "keshav puram", "netaji subhash place", "kohat enclave",
    "pitampura", "rohini east", "rohini west", "rithala"
];

const yellow_line = [
    "samaypur badli", "rohini sector - 18, 19", "haiderpur badli mor", "jahangirpuri",
    "adarsh nagar", "azadpur", "model town", "guru teg bahadur nagar", "vishwavidyalaya",
    "vidhan sabha", "civil lines", "kashmere gate", "chandni chowk", "chawri bazar",
    "new delhi (yellow & airport line)", "rajiv chowk", "patel chowk", "central secretariat",
    "udyog bhawan", "lok kalyan marg", "jor bagh", "dilli haat - ina", "aiims", "green park",
    "hauz khas", "malviya nagar", "saket", "qutab minar", "chhatarpur", "sultanpur",
    "ghitorni", "arjan garh", "guru dronacharya", "sikanderpur", "m.g. road",
    "iffco chowk", "millennium city centre gurugram"
];

// Shared Blue Line Section
const blue_line_main = [
  "dwarka sector - 21", "dwarka sector - 8", "dwarka sector - 9", "dwarka sector - 10",
  "dwarka sector - 11", "dwarka sector - 12", "dwarka sector - 13", "dwarka sector - 14",
  "dwarka", "dwarka mor", "nawada", "uttam nagar west", "uttam nagar east", "janakpuri west",
  "janakpuri east", "tilak nagar", "subhash nagar", "tagore garden", "rajouri garden",
  "ramesh nagar", "moti nagar", "kirti nagar", "shadipur", "patel nagar", "rajendra place",
  "karol bagh", "jhandewalan", "ramakrishna ashram marg", "rajiv chowk", "barakhamba road",
  "mandi house", "supreme court", "indraprastha", "yamuna bank"
];

// Blue Line Branch 1: Yamuna Bank to Noida Electronic City
const blue_line_noida_branch = [
  "yamuna bank", "akshardham", "mayur vihar -i", "mayur vihar extension", "new ashok nagar",
  "noida sector-15", "noida sector-16", "noida sector-18", "botanical garden", "golf course",
  "noida city centre", "sector - 34 noida", "sector - 52 noida", "sector - 61 noida",
  "sector - 59 noida", "sector - 62 noida", "noida electronic city"
];

// Blue Line Branch 2: Yamuna Bank to Vaishali
const blue_line_vaishali_branch = [
  "yamuna bank", "laxmi nagar", "nirman vihar", "preet vihar", "karkarduma",
  "anand vihar isbt", "kaushambi", "vaishali"
];


const green_line = [
    "kirti nagar", "satguru ram singh marg", "inderlok", "ashok park main", "punjabi bagh",
    "punjabi bagh west", "shivaji park", "madipur", "paschim vihar east", "paschim vihar west",
    "peeragarhi", "udyog nagar", "maharaja surajmal stadium", "nangloi", "nangloi railway station",
    "rajdhani park", "mundka", "mundka industrial area (mia)", "ghevra metro station",
    "tikri kalan", "tikri border", "pandit shree ram sharma", "bahadurgarh city",
    "brig. hoshiar singh"
];

const violet_line = [
    "kashmere gate", "lal quila", "jama masjid", "delhi gate", "ito", "mandi house",
    "janpath", "central secretariat", "khan market", "jln stadium", "jangpura",
    "lajpat nagar", "moolchand", "kailash colony", "nehru place", "kalkaji mandir",
    "govind puri", "harkesh nagar okhla", "jasola-apollo", "sarita vihar",
    "mohan estate", "tughlakabad station", "badarpur border", "sarai",
    "nhpc chowk", "mewala maharajpur", "sector-28", "badkal mor", "old faridabad",
    "neelam chowk ajronda", "bata chowk", "escorts mujesar", "sant surdas (sihi)",
    "raja nahar singh (ballabhgarh)"
];

const pink_line = [
    "majlis park", "azadpur", "shalimar bagh", "netaji subhash place", "shakurpur",
    "punjabi bagh west", "esi-basai darapur", "rajouri garden", "mayapuri", "naraina vihar",
    "delhi cantt.", "durgabai deshmukh south campus", "sir m. vishweshwaraiah moti bagh",
    "bhikaji cama place", "sarojini nagar", "dilli haat - ina", "south extension",
    "lajpat nagar", "vinobapuri", "ashram", "sarai kale khan - nizamuddin", "mayur vihar -i",
    "mayur vihar pocket-1", "trilokpuri-sanjay lake", "east vinod nagar-mayur vihar -ii",
    "mandawali - west vinod nagar", "i.p. extension", "anand vihar isbt", "karkarduma",
    "karkarduma court", "krishna nagar", "east azad nagar", "welcome", "jafrabad",
    "maujpur-babarpur", "gokulpuri", "johri enclave", "shiv vihar"
];

const magenta_line = [
    "krishna park extension", "janakpuri west", "dabri mor - janakpuri south", "dashrathpuri",
    "palam", "sadar bazar cantonment", "terminal 1-igi airport", "shankar vihar",
    "vasant vihar", "munirka", "r.k. puram", "iit", "hauz khas", "panchsheel park",
    "chirag delhi", "greater kailash", "nehru enclave", "kalkaji mandir", "okhla nsic",
    "sukhdev vihar", "jamia millia islamia", "okhla vihar", "jasola vihar shaheen bagh",
    "kalindi kunj", "okhla bird sanctuary", "botanical garden"
];


const grey_line = [
    "dwarka", "nangli", "najafgarh", "dhansa bus stand"
];

const airport_express_orange_line = [
    "new delhi", "shivaji stadium", "dhaula kuan", "delhi aerocity",
    "airport (t-3)", "dwarka sector - 21", "yashobhoomi dwarka sector - 25"
];

const rapid_metro_gurgaon = [
    "sector 55-56", "sector 54 chowk", "sector 53-54", "sector 42-43",
    "phase-1", "sikanderpur", "phase-2", "belvedere towers",
    "cyber city", "moulsari avenue", "phase-3"
];

const lines = [red_Line, yellow_line, blue_line_main,blue_line_noida_branch,blue_line_vaishali_branch, green_line, violet_line, pink_line, magenta_line, grey_line, airport_express_orange_line, rapid_metro_gurgaon];

const distance = [
    1154.48,  // Red Line
    1277.03,  // Yellow Line
    1111.20,  // Blue Line 3
    1028.75,  // Blue Line 4
    1165.00,  // Green Line
    1323.53,  // Violet Line
    1513.95,  // Pink Line
    1402.31,  // Magenta Line
    1245.00,  // Grey Line
    3557.14,  // Orange Line (Airport Express)
    961.82    // Rapid Metro (Gurgaon)
]

const interchange_Stations = [
    // Red Line Interchanges
    "kashmere gate", "inderlok", "netaji subhash place", "welcome",

    // Yellow Line Interchanges
    "kashmere gate", "rajiv chowk", "new delhi", "central secretariat", "hauz khas",
    "sikanderpur", "azadpur", "dilli haat - ina",

    // Blue Line 1 Interchanges
    "rajiv chowk", "mandi house", "kirti nagar", "dwarka sector - 21", "botanical garden",
    "yamuna bank", "mayur vihar - i", "karkarduma", "anand vihar isbt", "noida sector 52",

    // Blue Line 2 Interchanges
    "yamuna bank", "karkarduma", "anand vihar isbt",

    // Green Line Interchanges
    "kirti nagar", "inderlok", "netaji subhash place", "ashok park main",

    // Violet Line Interchanges
    "kashmere gate", "central secretariat", "mandi house", "lajpat nagar", "kalkaji mandir",

    // Pink Line Interchanges
    "majlis park", "azadpur", "netaji subhash place", "shakurpur", "rajouri garden",
    "mayur vihar - i", "karkarduma", "anand vihar isbt", "lajpat nagar", "dilli haat - ina",
    "sarai kale khan - hazrat nizamuddin",

    // Magenta Line Interchanges
    "botanical garden", "hauz khas", "janakpuri west", "kalkaji mandir",

    // Grey Line Interchange
    "dwarka",

    // Airport Express - Orange Line Interchanges
    "new delhi", "dwarka sector - 21", "yashobhoomi dwarka sector - 25",

    // Rapid Metro Interchange
    "sikanderpur"
]


const graph = new jsnx.Graph();

// Build metro network with station connections
function buildMetroNetwork() {
  // First build all the lines
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const avgDistance = distance[i];

    for (let j = 0; j < line.length - 1; j++) {
      const station1 = line[j].toLowerCase().trim();
      const station2 = line[j + 1].toLowerCase().trim();

      graph.addNode(station1);
      graph.addNode(station2);
      graph.addEdge(station1, station2, {
        weight: avgDistance,
        type: "metro",
        line: i
      });
    }
  }

  // Then handle interchanges by connecting them with transfer edges
  interchange_Stations.forEach((station) => {
    station = station.toLowerCase().trim();
    if (!graph.hasNode(station)) {
      graph.addNode(station);
    }
  });
}

// Build the network when this module loads
buildMetroNetwork();

// ------------------------
// 🔍 Route Calculation Logic
// ------------------------
function shortestRoute(startStation, endStation) {
  startStation = startStation.toLowerCase().trim();
  endStation = endStation.toLowerCase().trim();
  
  try {
    // 🔍 Find the shortest path and its distance
    const path = jsnx.dijkstraPath(graph, {
      source: startStation,
      target: endStation,
      weight: 'weight'
    });

    const distance = jsnx.dijkstraPathLength(graph, {
      source: startStation,
      target: endStation,
      weight: 'weight'
    });

    // 🔁 Build weightarr by checking edge weights between stations
    const weightarr = [];
    for (let i = 0; i < path.length - 1; i++) {
      const u = path[i];
      const v = path[i + 1];
      const edgeData = graph.getEdgeData(u, v);

      if (!edgeData || !edgeData.weight) {
        console.warn(`Missing weight between ${u} and ${v}`);
        weightarr.push(0);
      } else {
        weightarr.push(edgeData.weight);
      }
    }

    // 🔄 Count the number of transfers and transfer stations
    const transferInfo = countTransfers(weightarr, path);

    // 🎨 Get the color of each station based on the line it belongs to
    const colorPath = colorOfStations(path);

    // ✅ Final response
    return {
      route: path,
      totalDistance: `${distance.toFixed(2)} meters`,
      transfers: transferInfo.count,
      transferStations: transferInfo.stations,
      travelTime: calculateTravelTime(distance),
      stations: path.length,
      colors: colorPath
    };

  } catch (err) {
    console.error("Pathfinding error:", err);
    return {
      error: `Could not calculate path: ${err.message}`,
      details: `Between ${startStation} and ${endStation}`
    };
  }
}

function calculateTravelTime(distance) {
  const speed = 11.11; // meters per second (40 km/h)
  const minutes = distance / speed / 60;
  return `${Math.round(minutes)} minutes`;
}

function countTransfers(weightarr, path) {
  let transfers = 0;
  let transferStations = [];

  for (let i = 0; i < weightarr.length - 1; i++) {
    if (weightarr[i] !== weightarr[i + 1]) {
      transfers++;
      transferStations.push(path[i + 1]); // Station where line changes
    }
  }

  return {
    count: transfers,
    stations: transferStations
  };
}

function colorOfStations(path) {
  const colorPath = [];
  for (let i = 0; i < path.length; i++) {
    const station = path[i].toLowerCase().trim();

    if (red_Line.includes(station)) {
      colorPath.push("red");
    } else if (yellow_line.includes(station)) {
      colorPath.push("yellow");
    } else if (blue_line_main.includes(station) || blue_line_noida_branch.includes(station) || blue_line_vaishali_branch.includes(station)) {
      colorPath.push("blue");
    } else if (green_line.includes(station)) {
      colorPath.push("green");
    } else if (violet_line.includes(station)) {
      colorPath.push("violet");
    } else if (pink_line.includes(station)) {
      colorPath.push("pink");
    } else if (magenta_line.includes(station)) {
      colorPath.push("magenta");
    } else if (grey_line.includes(station)) {
      colorPath.push("grey");
    } else if (airport_express_orange_line.includes(station)) {
      colorPath.push("orange");
    } else if (rapid_metro_gurgaon.includes(station)) {
      colorPath.push("brown");
    } else {
      colorPath.push("unknown");
    }
  }
  return colorPath;
}

// Export function and graph
module.exports = { shortestRoute, graph };