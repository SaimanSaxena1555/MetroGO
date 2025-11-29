MetroGo - Delhi Metro Route Finder
MetroGo is a web-based application that helps users find the shortest and fastest route between two stations in the Delhi Metro network. It uses graph algorithms, estimated route data, and metro speed calculations to simulate accurate trip planning.

This project combines real-world estimation with algorithmic intelligence — ideal for both users and developers curious about route optimization.

Key Features

• Shortest Route Finder between any two stations
• Metro Line Color Display (e.g., Blue Line, Yellow Line, etc.)
• Transfer Station Detection
• Estimated Travel Time Calculation
• Distance and Station Count Display
• Dark Mode UI
• Works on Desktop and Mobile

How Route Timing Works
MetroGo uses estimated average distances and metro speed to calculate the time between stations:

• Distance: Each line (Blue, Yellow, etc.) has an estimated average inter-station distance (based on station count and route length from Wikipedia). These values are used as edge weights in the graph.

• Speed: Average metro speed is taken as ~40 km/h (11.11 m/s), sourced from public data and official documents.

• Formula Used: speed = distance / time ⇒ time = distance / speed

This allows realistic travel time estimates, even though we do not use official APIs.

How Graph Logic Works (jsnetworkx)
The core pathfinding is powered by jsnetworkx — the JavaScript port of Python’s famous networkx library.

• The metro system is modeled as a weighted graph
• Each station is a node
• Each connection is an edge with weight = estimated distance
• Dijkstra's algorithm is used to calculate the shortest path based on distance
• Transfer detection is done by tracking changes in line color along the path

This structure ensures that the shortest, realistic path is chosen — not just based on station count, but on actual travel distance.

UI & Design
The entire user interface was designed using Figma, with a focus on:

• Clean and readable station layouts
• Colored metro lines
• Mobile-friendly responsiveness
• Smooth dark mode toggle


Live Demo
Hosted on Render:
https://metrogo.onrender.com 


Disclaimer

• MetroGo uses estimated route data. Some routes or timing may slightly differ from the official DMRC website or app.
• This project does not use official APIs because government metro data is not easily available for public API access.
• However, every effort has been made to ensure data is close to real-world accuracy for educational purposes.


License
This project is open-source and free to use for learning, non-commercial use, and personal exploration.

