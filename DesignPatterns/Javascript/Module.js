/**
 * Created by adelli on 1/24/15.
 */


var Module = (function () {
    'use strict';
    var basket = [];

    function getCount() {
        return basket.length;
    }

    function addItem(item) {
        basket.push(item);
    }

    return {
        getCount : getCount,
        addItem : addItem
    };
}());

console.log(Module.getCount());

Module.addItem('item1');
console.log(Module.getCount());