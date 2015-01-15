/**
 * Created by adelli on 1/11/15.
 * Decorator Design Pattern
 */

(function () {
    "use strict";

    function Coffee() {

    }

    Coffee.prototype.cost = function () {
        return 5;
    };

    Coffee.small = function (coffeeObj) {
        var cost = coffeeObj.cost();

        coffeeObj.cost = function () {
            return cost - 1;
        };
    };

    Coffee.medium = function (coffeeObj) {
    };

    Coffee.large = function (coffeeObj) {
        var cost = coffeeObj.cost();

        coffeeObj.cost = function () {
            return cost + 1;
        };
    };

    Coffee.sugar = function (coffeeObj) {
        var cost = coffeeObj.cost();

        coffeeObj.cost = function () {
            return cost + 0.05;
        };
    };

    Coffee.milk = function (coffeeObj) {
        var cost = coffeeObj.cost();

        coffeeObj.cost = function () {
            return cost + 0.25;
        };
    };

    Coffee.foam = function (coffeeObj) {
        var cost = coffeeObj.cost();

        coffeeObj.cost = function () {
            return cost + 0.15;
        };
    };

    Coffee.mocha = function (coffeeObj) {
        Coffee.milk(coffeeObj);
        Coffee.sugar(coffeeObj);
        Coffee.foam(coffeeObj);

        var cost = coffeeObj.cost();


        coffeeObj.cost = function () {
            return cost;
        };
    };

    var coffee = new Coffee(),
        mocha = new Coffee();

    Coffee.large(coffee);
    Coffee.sugar(coffee);
    console.log(coffee.cost());

    Coffee.mocha(mocha);
    console.log(mocha.cost());


}());

/**
 * Alternative Decorator Pattern using prototype
 *
 */

(function () {
    "use strict";

    function Beverage() {
        this.cost = 0;
    }

    Beverage.prototype.getCost = function () {
        return this.cost;
    };

    //Abstract Decorator
    function BeverageDecorator(beverage) {
        Beverage.call(this);
        this.beverage = beverage;
    }
    BeverageDecorator.prototype = Object.create(Beverage.prototype);
    BeverageDecorator.prototype.getCost = function () {
        return this.cost + this.beverage.getCost();
    };


    function Coffee() {
        Beverage.call(this);
        this.cost = 5;
    }

    Coffee.prototype = Object.create(Beverage.prototype);

    function Sugar(beverage) {
        BeverageDecorator.call(this, beverage);
        this.cost = 2;
    }
    Sugar.prototype = Object.create(BeverageDecorator.prototype);

    function Cream(beverage) {
        BeverageDecorator.call(this, beverage);
        this.cost = 3;
    }
    Cream.prototype = Object.create(BeverageDecorator.prototype);


    var cafe = new Coffee();
    cafe = new Sugar(cafe);
    cafe = new Cream(cafe);

    console.log("Cout du cafe :" + cafe.getCost());
}());