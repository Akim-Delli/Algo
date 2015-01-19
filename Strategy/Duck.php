<?php
/**
 * Created by PhpStorm.
 * User: adelli
 * Date: 1/19/15
 * Time: 12:12 AM
 */

namespace DesignPattern\Strategy;


abstract class Duck {

    /* @var $_flyBehavior \DesignPattern\Strategy\FlyBehavior */
    protected $_flyBehavior;

    /* @var $_quackBehavior \DesignPattern\Strategy\QuackBehavior */
    protected $_quackBehavior;


    public function setFlyBehavior (\DesignPattern\Strategy\FlyBehavior $flyBehavior) {
        $this->_flyBehavior = $flyBehavior;
    }

    public function setQuackBehavior (\DesignPattern\Strategy\QuackBehavior $quackBehavior) {
        $this->_quackBehavior = $quackBehavior;
    }

    abstract function display();

    public function performFly() {
        $this->_flyBehavior->fly();
    }

    public function performQuack() {
        $this->_quackBehavior->quack();
    }

    public function swim() {
        echo "All ducks can swim\n";
    }


}