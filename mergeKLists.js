/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (lists.length < 1) return null;
    
    var arr = listToArray(lists);
    if (arr.length < 1) return null;
    
    mergeSort(arr);
    return arrayToList(arr);
};

function mergeSort(arr) {
    if (arr.length < 2) return;
    
    var m = arr.length/2;
    var left = arr.slice(0, m);
    var right = arr.slice(m, arr.length);
    
    mergeSort(left);
    mergeSort(right);
    
    merge(arr, left, right);
}

function merge(arr, left, right) {
    var i = 0;
    var j = 0;
    var k = 0;
    
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            arr[k] = left[i];
            i++;
        } else {
            arr[k] = right[j];
            j++;
        }
        k++;
    }
    
    while (i < left.length) {
        arr[k] = left[i];
        i++;
        k++;
    }
    while (j < right.length) {
        arr[k] = right[j];
        j++;
        k++;
    }
    return arr;
}

function listToArray(lists) {
    var arr = [];
    for (var i = 0; i < lists.length; i++) {
        if (!lists[i]) continue;
        var current = lists[i];
        while (true) {
            if (!current) break;
            arr.push(current.val);
            current = current.next;
        }
    }
    return arr;
}

function arrayToList(arr) {
    var list = new ListNode(arr[0]);
    var current = list;
    for (var i = 1; i < arr.length; i++) {
        current.next = new ListNode();
        current.next.val = arr[i];
        current = current.next;
    }
    return list;
}
