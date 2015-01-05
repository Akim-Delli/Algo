/**
 * Created by adelli on 1/4/15.
 * JS Creational patterns
 */

var obj = {};

obj.firstName = "Akim";
obj["lastName"] = "Delli";


var firstName = obj["firstName"];
var lastName =  obj.lastName;


// EMACScript 5
Object.defineProperty(obj, 'country', {
    value : 'USA'
});

Object.defineProperties(obj, {
    twitter : {
        value : 'adelli'
    },
    email : {
        value : 'akim_delli@hotmail.com'
    }
});

