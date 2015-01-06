/**
 * Created by adelli on 1/4/15.
 * JS Creational patterns
 */
(function () {
    'use strict';

    var obj = {
        occupation: "software Engineer",
        lastName: "Dell"
    };

    obj.firstName = "Akim";
    obj["lastName"] = "Delli";


    var firstName = obj["firstName"];
    var lastName = obj.lastName;


// EMACScript 5
    Object.defineProperty(obj, 'country', {
        value: 'USA'
    });

    Object.defineProperties(obj, {
        twitter: {
            value: 'adelli'
        },
        email: {
            value: 'akim_delli@hotmail.com'
        }
    });

// Object Creation with Object.Create() ECMACScript 5

    var JohnDoe, JaneDoe, sayName, greeting;
    JohnDoe = {
        firstName: "John",
        lastName: "Doe",
        sayName: function () {
            return "Hello I'm " + this.firstName;
        }
    };
    JaneDoe = Object.create(JohnDoe, {
        firstName: {
            value: "Jane"
        },
        lastName: {
            value: "Doe"
        },
        greet: {
            value: function (Person) {
                return "Hello " + Person.firstName;
            }
        }
    });
    sayName = JaneDoe.sayName();
    greeting = JaneDoe.greet(JohnDoe);

    console.log(sayName);
    console.log(greeting);

}());