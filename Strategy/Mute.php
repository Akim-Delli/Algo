<?php
/**
 * Created by PhpStorm.
 * User: adelli
 * Date: 1/19/15
 * Time: 12:06 AM
 */

namespace DesignPattern\Strategy;


class Squeak implements QuackBehavior {
    public function quack() {
        echo "--silence--\n";
    }

}