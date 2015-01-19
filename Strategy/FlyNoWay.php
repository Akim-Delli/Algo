<?php
/**
 * Created by PhpStorm.
 * User: adelli
 * Date: 1/18/15
 * Time: 11:57 PM
 */

namespace DesignPattern\Strategy;

include_once('FlyBehavior.php');


class FlyNoWay implements FlyBehavior {

    public function fly () {
        echo "Not Flying\n";
    }

}