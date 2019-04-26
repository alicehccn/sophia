// var input1 = [[1, 2], [2, 4], [2, 5], [3, 5], [5, 1]];
var input1 = [[1, 2], [1, 3], [1, 4], [3, 5]];
var input2 = [1, 4];

class Graph {
	constructor(nodes) { //you never use .nodes directly, so why initialize it?
	  	this.nodes = nodes;
	  	this.graph = [];
	  	this.adjacentList = {};
	}

	addAjacent(node1, node2) {
		if (this.adjacentList[node1])
			this.adjacentList[node1].push(node2);
		else
			this.adjacentList[node1] = [node2];
	}

	addEdge(node1, node2) {
		this.graph.push(node1);
	}

	bfs(src) {
		var visited = {};
		var queue = [];
		queue.push(src);
		visited[src] = true;

		while (queue.length > 0) {
			src = queue.shift();
			console.log(src);

			for (var i = 0; i < this.adjacentList[src].length; i++) {
				if (!visited[this.adjacentList[src][i]]) {
					queue.push(this.adjacentList[src][i]);
					visited[this.adjacentList[src][i]] = true;
				}
			}
		}
	}
}

function findShortestPath(input1, input2) {
	var nodes = input1;
	var start = input2[0];
	var end = input2[1];
	var graph = new Graph(input1.length);

	for (var i = 0; i < nodes.length; i++) {
		var [node1, node2] = nodes[i];
		graph.addEdge(nodes[i]);

		graph.addAjacent(node1, node2)
		graph.addAjacent(node2, node1)
	}
	return graph.bfs(1);
}

console.log(findShortestPath(input1, input2));
