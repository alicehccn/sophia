/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 https://leetcode.com/problems/cheapest-flights-within-k-stops/submissions/
 */

// var n = 4
// var flights = [[0,1,1],[0,2,5],[1,2,1],[2,3,1]]
// var src = 0
// var dst = 3
// var K = 1

// var n = 3
// var flights = [[0,1,100],[1,2,100],[0,2,500]]
// var src = 0
// var dst = 2
// var K = 1

var n = 5
var flights = [[0,1,5],[1,2,5],[0,3,2],[3,1,2],[1,4,1],[4,2,1]]
var src = 0
var dst = 2
var K = 2

var findCheapestPrice = function(n, flights, src, dst, K) {
    var g = new Graph(n);
    for (var i = 0; i < flights.length; i++) {
        var [city1, city2, weight] = flights[i];
        g.addEdge(flights[i]);
    }
    return g.findShortestPath(src, dst, K);
};


class Graph {
    constructor(nodes) {
        this.nodes = nodes;
        this.graph = [];
        this.costs = new Array(this.nodes);
    }
    
    addEdge(edge) {
        this.graph.push(edge)
    }
    
    findShortestPath(src, dst, K) {
        this.costs.fill(Number.MAX_SAFE_INTEGER);
        this.costs[src] = 0;

        for(var i = 0; i <= K; i++) {
            var nextCosts = this.costs.slice();
            for(var j = 0; j < this.graph.length; j++) {
                var currentNode = this.graph[j][0];
                var nextNode = this.graph[j][1];
                var cost = this.graph[j][2];
                var newCost;
                if (this.costs[currentNode] == Number.MAX_SAFE_INTEGER)
                    newCost = Number.MAX_SAFE_INTEGER;
                else
                    newCost = this.costs[currentNode] + cost;
                nextCosts[nextNode] = Math.min(nextCosts[nextNode], newCost)
            }
            this.costs = nextCosts;
        }
        return this.costs[dst] == Number.MAX_SAFE_INTEGER ? -1 : this.costs[dst];
    }

}

console.log(findCheapestPrice(n, flights, src, dst, K))
