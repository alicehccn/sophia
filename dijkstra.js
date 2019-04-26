var edges = [[1,2,7], [2,3,5], [3,4,6], [4,5,4], [1,5,5], [3,5,10], [1,4,9]]
var nodes = 5;
var start = 1;
var end = 3;


class Graph {
	constructor(nodes) {
	  	this.nodes = nodes;
	  	this.graph = [];
	  	this.adjacentList = {};
	  	this.distance = new Array(nodes+1); // class var
		this.visited = new Array(nodes+1); // class var
	}

	addAjacent(node1, node2, weight) {
		var adj = [node2, weight];
		if (this.adjacentList[node1])
			this.adjacentList[node1].push(adj);
		else
			this.adjacentList[node1] = [adj];
	}

	addEdge(node1, node2) {
		this.graph.push(node1);
	}

	minDistance() {
		var min = Number.MAX_SAFE_INTEGER;
		var minIndex = -1;

		for (var i = 0; i < this.distance.length; i++) {
			if (!this.visited[i] && min > this.distance[i]) {
				min = this.distance[i];
				minIndex = i;
			}
		}
		return minIndex;
	}

	dikjstra(src, des) {
		

		for (var i = 0; i < this.nodes+1; i++) {
			this.distance[i] = Number.MAX_SAFE_INTEGER;
			this.visited[i] = false;
		}
		this.distance[src] = 0;

		var currentNode = src;
		for (var i = 0; i < this.nodes+1; i++) {
			currentNode = this.minDistance()
			this.visited[currentNode] = true;
			if (currentNode < 0) return;
			for (var j = 0; j < this.adjacentList[currentNode].length; j++) {
				var node = this.adjacentList[currentNode][j][0];
				var weight = this.adjacentList[currentNode][j][1];
				var newLen = weight + this.distance[currentNode];
				if (!this.visited[node] && newLen < this.distance[node]) {
					this.distance[node] = newLen;
					console.log(this.distance)
				}
			}
		}
	}

}

function findShortestPath(nodes, edges, start, end) {
	var g = new Graph(nodes)
	for (var i = 0; i < edges.length; i++) {
		var [node1, node2, weight] = edges[i];
		g.addAjacent(node1, node2, weight);
		g.addAjacent(node2, node1, weight);
	}
	// console.log(g.adjacentList);
	return g.dikjstra(start, end)
}

console.log(findShortestPath(nodes, edges, start, end))
