const express = require("express");
const path = require("path");  
const app = express();
const cors = require("cors");
app.use(cors());

const PORT = process.env.PORT || 3000;


// ✅ Fix: add this line to parse incoming JSON
app.use(express.json()); 

// Import your shortest route logic
const { shortestRoute, graph } = require('./metro_logic'); // ⚠️ Make sure to export 'graph' from metro_logic

app.post('/api/route', (req, res) => {
  const { source, destination } = req.body;

  if (!source || !destination) {
    return res.status(400).json({ error: "Source and destination are required." });
  }

  const result = shortestRoute(source, destination);
  res.json(result);
});

// 🔍 DEBUG ROUTES - Add these for testing

// General graph info + optional station checking
app.get('/debug/graph', (req, res) => {
    const { station1, station2 } = req.query;
    
    const result = {
        totalNodes: graph.numberOfNodes(),
        totalEdges: graph.numberOfEdges(),
        sampleNodes: Array.from(graph.nodes()).slice(0, 20)
    };
    
    // If specific stations are provided, check them
    if (station1) {
        const station1Lower = station1.toLowerCase().trim();
        result.station1 = {
            name: station1Lower,
            exists: graph.hasNode(station1Lower),
            neighbors: graph.hasNode(station1Lower) ? Array.from(graph.neighbors(station1Lower)) : []
        };
    }
    
    if (station2) {
        const station2Lower = station2.toLowerCase().trim();
        result.station2 = {
            name: station2Lower,
            exists: graph.hasNode(station2Lower),
            neighbors: graph.hasNode(station2Lower) ? Array.from(graph.neighbors(station2Lower)) : []
        };
    }
    
    // Check if path exists between the two stations
    if (station1 && station2) {
        const s1 = station1.toLowerCase().trim();
        const s2 = station2.toLowerCase().trim();
        
        if (graph.hasNode(s1) && graph.hasNode(s2)) {
            try {
                // Try to check if path exists (if method available)
                const hasPath = jsnx.hasPath ? jsnx.hasPath(graph, s1, s2) : 'hasPath method not available';
                result.pathExists = hasPath;
            } catch (e) {
                result.pathExists = `Error checking path: ${e.message}`;
            }
        } else {
            result.pathExists = 'One or both stations do not exist';
        }
    }
    
    res.json(result);
});

// Search for stations containing a term
app.get('/debug/search/:term', (req, res) => {
    const searchTerm = req.params.term.toLowerCase();
    const allNodes = Array.from(graph.nodes());
    const matchingNodes = allNodes.filter(node => 
        node.toLowerCase().includes(searchTerm)
    );
    
    res.json({
        searchTerm: searchTerm,
        totalStations: allNodes.length,
        matchingStations: matchingNodes,
        exactMatch: allNodes.find(node => node.toLowerCase() === searchTerm) || null
    });
});

// Get neighbors of any station
app.get('/debug/neighbors/:station', (req, res) => {
    const station = req.params.station.toLowerCase().trim();
    
    if (!graph.hasNode(station)) {
        return res.json({
            error: `Station "${station}" not found`,
            suggestion: `Try: /debug/search/${station.split(' ')[0]}`
        });
    }
    
    const neighbors = Array.from(graph.neighbors(station));
    const edges = [];
    
    neighbors.forEach(neighbor => {
        try {
            const edgeData = graph.getEdgeData ? 
                graph.getEdgeData(station, neighbor) : 
                graph.get_edge_data(station, neighbor);
            edges.push({
                to: neighbor,
                weight: edgeData?.weight,
                type: edgeData?.type
            });
        } catch (e) {
            edges.push({
                to: neighbor,
                error: 'Could not get edge data'
            });
        }
    });
    
    res.json({
        station: station,
        neighborCount: neighbors.length,
        neighbors: edges
    });
});

app.listen(PORT, () => {
  console.log(`MetroGo server running at http://localhost:${PORT}`);
  console.log(`Debug routes available:`);
  console.log(`  GET /debug/graph`);
  console.log(`  GET /debug/graph?station1=inderlok&station2=rajdhani park`);
  console.log(`  GET /debug/search/rajdhani`);
  console.log(`  GET /debug/neighbors/inderlok`);
});
