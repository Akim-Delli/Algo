<?php
/**
 * Created by PhpStorm.
 * User: adelli
 * Date: 1/19/15
 * Time: 12:29 AM
 */

namespace DesignPattern\Strategy;

include_once('FlyNoWay.php');
include_once('Squeak.php');

class RubberDuck extends Duck {

    public function __construct () {
        $this->_flyBehavior = new FlyNoWay();
        $this->_quackBehavior = new Squeak();
    }

    public function display() {
        echo "I'm a Rubber Duck\n";
    }

}