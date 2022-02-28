<?php

namespace Uasoft\Badaso\Theme\LMSTheme\Helpers;

class Routes
{
    public static function getController($key)
    {
        // get config 'controllers' from config/badaso-lms-theme.php
        $controllers = config('badaso-lms-theme.controllers');

        // if the key is not found, return $key
        if (!isset($controllers[$key])) {
            return 'Uasoft\\Badaso\\Theme\\LMSTheme\\Controllers\\'.$key;
        }

        // return the value of the key
        return $controllers[$key];
    }
}