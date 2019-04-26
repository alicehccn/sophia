
function longestSubs(s) {
	if (s.length < 2) return s.length;
    
    var len = 1;
	for (var i = 0; i < s.length; i++) {
		for (var j = i+1; j < s.length+1; j++) {
			var substr = s.slice(i,j);
			var set = new Set(s.slice(i,j))
			var tempLen = j - i;
			if (substr.length > set.size)
				break;
			if (tempLen > len)
				len = tempLen;
		}
	}
	return len
}


function longestPalindrome(s) {
	function expandAroundCenter(s, left, right) {
		console.log(left, right)
		while (left >= 0 && right < s.length && s[left] == s[right]) {
			left--;
			right++;
		}
		return right - left - 1;
	}

	if (s == null || s.length < 1) return "";

	var start = 0;
	var end = 0;

	for (var i = 0; i < s.length; i++) {
		var len1 = expandAroundCenter(s, i, i);
		var len2 = expandAroundCenter(s, i, i+1);
		var len = Math.max(len1, len2);
		if (len > end - start) {
			// console.log(i ,(len - 1)/2)
			start = i - Math.floor((len - 1)/2)
			end = i + Math.floor(len / 2);
			console.log(start, end)
		}
	}
	return s.slice(start, end+1);
};

var numOfParts = 6;
var parts = []

function minimumTime(numOfParts, parts){
	if (numOfParts === 0 || parts.length === 0) return 0;
	
	var result = [];
	var reducer = (accumulator, currentValue) => accumulator + currentValue;
	var sortedParts = parts.sort(function(a, b){return a - b});
	var temp = sortedParts[0];
	var i = 0;
	while (i < numOfParts - 1) {
		if (result.length > 0)
			temp = result[result.length-1] + sortedParts[i+1]
		else
			temp += sortedParts[i+1]
		result.push(temp);
		i++;
	}

	return result.reduce(reducer);
}

console.log(minimumTime(numOfParts, parts))
