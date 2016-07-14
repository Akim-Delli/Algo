<?php
/**
 * Created by PhpStorm.
 * User: adelli
 * Date: 1/19/15
 * Time: 12:06 AM
 */

namespace DesignPattern\Strategy;

include_once('QuackBehavior.php');

class Quack implements QuackBehavior {
    public function quack() {
        echo "quack, quack, quack,...\n";
    }

}