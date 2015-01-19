<?php
/**
 * Created by PhpStorm.
 * User: adelli
 * Date: 1/19/15
 * Time: 12:36 AM
 */

namespace DesignPattern\Strategy;

$path = dirname(__FILE__) ;
set_include_path(get_include_path() . PATH_SEPARATOR . $path);

include_once('MallardDuck.php');
include_once('RubberDuck.php');


        $rubberDuck = new RubberDuck();
        $mallardDuck = new MallardDuck();

        $rubberDuck->display();
        $rubberDuck->performQuack();
        $rubberDuck->performFly();

        $mallardDuck->display();
        $mallardDuck->performQuack();
        $mallardDuck->performFly();
        $mallardDuck->swim();

        $mallardDuck->setFlyBehavior(new FlyNoWay());
        $mallardDuck->performFly();
