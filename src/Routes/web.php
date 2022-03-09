<?php

use Uasoft\Badaso\Module\LMSModule\Helpers\Route as HelpersRoute;
use Uasoft\Badaso\Theme\LMSTheme\Middlewares\HandleInertiaRequests;
use Uasoft\Badaso\Theme\LMSTheme\Controllers\InertiaController;

$lms_route_prefix = config('badaso-lms-theme.lms_theme_prefix');

Route::prefix($lms_route_prefix)
    ->as('badaso.lms-theme.')
    ->middleware(['web', HandleInertiaRequests::class])
    ->group(function () {
        Route::get('/', [InertiaController::class, 'home']);

        /* course routes */
        Route::get('/join', [InertiaController::class, 'joinCourse']);
        Route::get('/register', [InertiaController::class, 'register']);
    });
