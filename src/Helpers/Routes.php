<?php

namespace Uasoft\Badaso\Theme\LMSTheme\Helpers;

class Routes
{
    public static function getController($key)
    {
        $controllers = config('badaso-lms-theme.controllers');

        if (! isset($controllers[$key])) {
            return 'Uasoft\\Badaso\\Theme\\LMSTheme\\Controllers\\'.$key;
        }

        return $controllers[$key];
    }
}
