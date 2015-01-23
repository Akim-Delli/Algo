/**
 * Created by adelli on 1/21/15.
 */
'use strict';

var input = [1, 6, 5, 2, 4, 3, 7],
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
        x,
        y,
        z;

    if (ll === 1) {return 0; }

    left = array.slice(0, halfll);
    right = array.slice(halfll, ll);

    x = countAndMerge(left);
    y = countAndMerge(right);
    z = countSplit(left.sort(), right.sort());
    return x + y + z;
}


numberOfInversion = countAndMerge(input);

console.log(numberOfInversion);