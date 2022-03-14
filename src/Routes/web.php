<?php

use Illuminate\Support\Facades\Route;
use Uasoft\Badaso\Theme\LMSTheme\Controllers\InertiaController;
use Uasoft\Badaso\Theme\LMSTheme\Middlewares\HandleInertiaRequests;

$lms_route_prefix = config('badaso-lms-theme.lms_theme_prefix');

Route::prefix($lms_route_prefix)
    ->as('badaso.lms-theme.')
    ->middleware(['web', HandleInertiaRequests::class])
    ->group(function () {
        Route::get('/', [InertiaController::class, 'home']);

        /* course routes */
        Route::get('/register', [InertiaController::class, 'register']);
        Route::get('/landing', [InertiaController::class, 'view']);
        Route::get('/login', [InertiaController::class, 'login']);

        Route::prefix('/course')->as('course.')->group(function () {
            Route::get('/create', [InertiaController::class, 'createCourse']);
            Route::get('/{id}', [InertiaController::class, 'courseStream']);
            Route::get('/{id}/people', [InertiaController::class, 'people']);
            Route::get('/join', [InertiaController::class, 'joinCourse']);
        });
    });
