/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 https://leetcode.com/problems/cheapest-flights-within-k-stops/submissions/
 */
var findCheapestPrice = function(n, flights, src, dst, K) {
    var g = new Graph(n);
    for (var i = 0; i < flights.length; i++) {
        var [city1, city2, weight] = flights[i];
        g.addEdge(city1, city2);
        g.addAdjacent(city1, city2, weight);
    }
    return g.findShortestPath(src, dst, K);
};


class Graph {
    constructor(nodes) {
        this.nodes = nodes;
        this.graph = [];
        this.adjacentList = {};
        // a hack for class var in JS
        this.distance = new Array(this.nodes);
        this.visited = new Array(this.nodes);
    }
    
    addEdge(node1, node2) {
        this.graph.push(node1, node2)
    }
    
    addAdjacent(src, dst, weight) {
        if (this.adjacentList[src])
            this.adjacentList[src].push([dst, weight])
        else
            this.adjacentList[src] = [[dst, weight]]
    }
    
    minDistance() {
        var min = Number.MAX_SAFE_INTEGER;
        var minIndex = -1;
        
        for (var i = 0; i < this.distance.length; i++) {
            if (!this.visited[i] && this.distance[i] <= min) {
                min = this.distance[i];
                minIndex = i;
            }
        }
        return minIndex;
    }
    
    findShortestPath(src, dst, K) {
        for (var i = 0; i < this.nodes; i++) {
            this.distance[i] = Number.MAX_SAFE_INTEGER;
            this.visited[i] = false;
        }
        
        this.distance[src] = 0;
        
        for (var i = 0; i < this.nodes; i++) {
            var current = this.minDistance();
            console.log(current)
            this.visited[i] = true;
            if (i == K+1) break;
            if (!this.adjacentList[current]) continue;
            for (var j = 0; j < this.adjacentList[current].length; j++) {
                var next = this.adjacentList[current][j][0];
                var cost = this.adjacentList[current][j][1];
                var newLen = cost + this.distance[current];
                this.distance[next] = newLen;
            }
        }
        if (this.distance[dst] < Number.MAX_SAFE_INTEGER)
             return this.distance[dst];
        else
            return -1;
    }
}
