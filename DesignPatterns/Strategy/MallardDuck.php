<?php
/**
 * Created by PhpStorm.
 * User: adelli
 * Date: 1/19/15
 * Time: 12:29 AM
 */

namespace DesignPattern\Strategy;

include_once('FlyWithWings.php');
include_once('Quack.php');
include_once('Duck.php');

class MallardDuck extends Duck {

    public function __construct () {
        $this->_flyBehavior = new FlyWithWings();
        $this->_quackBehavior = new Quack();
    }

    public function display() {
        echo "I'm a really Mallard Duck\n";
    }

}