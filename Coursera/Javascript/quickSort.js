/**
 * Created by adelli on 1/31/15.
 */
'use strict';

var input = [5, 6, 1, 2, 4, 3, 7, 8, 9];
var count = 0;

function partition(input) {
    if (input.length === 1) {
        return {
            pivot : input[0],
            left : [],
            rigtht : []
        };
    }
    var pivot = input[0],
        i,
        j,
        temp,
        ll = input.length;

    for (i = 1, j = 1, ll; j < ll; j = j + 1) {
        if (input[j] < pivot) {
            temp = input[j];
            input[j] = input[i];
            input[i] = temp;
            i = i + 1;
        }
    }

    input[0] = input[i - 1];
    input[i - 1] = pivot;

    return {
        pivot : pivot,
        left : input.splice(0, input.indexOf(pivot)),
        right : input.splice(input.indexOf(pivot) + 1, input.length - 1 )
    };
}


function quickSort(input) {

    if (input.length === 0) {
        return [];
    }
    count = count + input.length - 1
    console.log('Array :', input, "Count: ", count);
    if (input.length === 1) {
        return input;
    }

    var last = input[input.length - 1],
        first = input[0],
        middle = input[Math.ceil((input.length) / 2) - 1],
        partitionedArray;

    if (first < middle && middle < last) { input[0] = middle; input[Math.ceil((input.length) / 2) - 1] = first; }
    if (first > middle && middle > last) { input[0] = middle; input[Math.ceil((input.length) / 2) - 1] = first; }
    //if (middle < first && first < last) { temp = first; }
    if (first < last && last < middle) { input[0] = last; input[input.length - 1] = first; }
    if (last < first && last > middle) {  input[0] = last; input[input.length - 1] = first; }


    console.log('first :', first, " Middle: ", middle, " Last: ", last);
    console.log('input0 :', input[0], " inputMi: ", input[Math.ceil((input.length) / 2) - 1], " Last: ", input[input.length - 1]);


    partitionedArray = partition(input);


    return (quickSort(partitionedArray.left)).concat([partitionedArray], quickSort(partitionedArray.right));

}
var fs = require("fs");
var data = fs.readFileSync("IntegerArrayQuickSort.txt", "utf8");
var IntegerList = data.split('\n').map(Number);


//var partitionedArray = partition(input);

var sortedArray = quickSort(IntegerList);

//console.log(partitionedArray);
//console.log("Sorted Array:  :", sortedArray);
//console.log("Number of comparison:  :", count);