/**
 * Created by adelli on 1/21/15.
 */
'use strict';

var input = [1, 3, 5, 2, 4, 6, 7],
    numberOfInversion;

function countSplit(left, right) {
    var i = 0,
        j = 0,
        count = 0;
    while (i !== left.length && j !== right.length) {
        if (left[i] < right[j]) {
            i = i + 1;
        } else {
            count += left.length - i;
            j = j + 1;
        }
    }
    return count;
}

function countAndMerge(array) {

    var ll = array.length,
        halfll = Math.round(ll/2),
        left,
        right,
        x = 0,
        y = 0,
        z = 0;

    if (ll === 1) {return 0; }

    left = array.slice(0, halfll);
    left.sort();
    right = array.slice(halfll, ll);
    right.sort();

    x = countAndMerge(left);
    y = countAndMerge(right);
    z = countSplit(left, right);
    return x + y + z;
}


numberOfInversion = countAndMerge(input);

console.log(numberOfInversion);