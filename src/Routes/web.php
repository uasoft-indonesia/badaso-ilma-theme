<?php

use Illuminate\Support\Facades\Route;
use Uasoft\Badaso\Theme\LMSTheme\Middlewares\HandleInertiaRequests;
use Uasoft\Badaso\Theme\LMSTheme\Controllers\InertiaController;

$lms_route_prefix = config('badaso-lms-theme.lms_theme_prefix');

Route::prefix($lms_route_prefix)
    ->as('badaso.lms-theme.')
    ->middleware(['web', HandleInertiaRequests::class])
    ->group(function () {
        Route::get('/', [InertiaController::class, 'home']);
        Route::get('/register', [InertiaController::class, 'register']);
        Route::get('/landing', [InertiaController::class, 'view']);
    });
