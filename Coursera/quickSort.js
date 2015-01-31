/**
 * Created by adelli on 1/31/15.
 */
'use strict';

var input = [5, 6, 1, 2, 4, 3, 7, 8, 9];

function partition(input) {
    if(input.length === 1) {
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
    if (input.length === 1) {
        return input;
    }

    if (input.length === 0) {
        return [];
    }
    var partitionedArray = partition(input);
    //console.log(partitionedArray);
    return (quickSort(partitionedArray.left)).concat([partitionedArray.pivot], quickSort(partitionedArray.right));

}
var fs = require("fs");
var data = fs.readFileSync("IntegerArrayQuickSort.txt", "utf8");
var IntegerList = data.split('\n').map(Number);


//var partitionedArray = partition(input);

var index = input.indexOf(5);
var sortedArray = quickSort(IntegerList);

//console.log(partitionedArray);
console.log("Sorted Array:  :", sortedArray);