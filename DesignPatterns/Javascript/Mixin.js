/**
 * Created by adelli on 1/4/15.
 * JS Creational patterns
 */
(function () {
    'use strict';

    var MyCar, MyPerson, MyMixin,

        Mixin = function () {

            this.MoveUp = function () {
                console.log("Move Up!");
            };

            this.MoveDown = function () {
                console.log("Move Down!");
            };
        },

        CarAnimator = function () {
            this.moveLeft = function () {
                console.log("Move left");
            };
        },

        PersonAnimator = function () {
            this.moveRandomly = function () {
                console.log("Move Randomly");
            };
        },

        extend = function (source, target) {
            var prop;

            if (!target) {
                return;
            }

            for (prop in source) {
                if (source.hasOwnProperty(prop) && !target[prop]) {
                    target[prop] = source[prop];
                }
            }

        };

    MyMixin = new Mixin();

    extend(MyMixin, CarAnimator.prototype);
    extend(MyMixin, PersonAnimator.prototype);

    MyCar = new CarAnimator();
    MyPerson = new PersonAnimator();

    MyCar.MoveDown();
    MyCar.moveLeft();
    MyCar.MoveUp();

    MyPerson.MoveDown();
    MyPerson.moveRandomly();
    MyPerson.MoveUp();

}());