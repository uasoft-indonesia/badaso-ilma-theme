<?php

namespace Uasoft\Badaso\Theme\LMSTheme\Helpers;

class Routes
{
    public static function getController($key)
    {
        $controllers = config('badaso-lms-theme.controllers');

<<<<<<< HEAD
        // if the key is not found, return $key
=======
>>>>>>> 8e1a5b857480d0421e83220957ebaabbfe45f485
        if (! isset($controllers[$key])) {
            return 'Uasoft\\Badaso\\Theme\\LMSTheme\\Controllers\\'.$key;
        }

        return $controllers[$key];
    }
}
