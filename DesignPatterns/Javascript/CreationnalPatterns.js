/**
 * Created by adelli on 1/4/15.
 * JS Creational patterns
 */
(function () {
    'use strict';

    // Variables declaration
    var obj = {
        occupation: "software Engineer",
        lastName: "Dell"
    },
        firstName, lastName, JohnDoe, JaneDoe, sayName, greeting, Car, Ford, Mustang;

    obj.firstName = "Akim";
    obj.lastName = "Delli";

    firstName = obj.firstName;
    lastName = obj.lastName;


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
    console.log(firstName);
    console.log(lastName);

// Contructor Pattern

    Car = function (model, year) {
        this.model = model;
        this.year = year;
    };

    Car.prototype.getCarInfo = function () {
        return "The car model is " + this.model + " of " + this.year;
    };

    Ford = new Car("ford", 2005);
    Mustang = new Car("mustang", 1964);

    console.log(Ford.getCarInfo());
    console.log(Mustang.getCarInfo());
}());