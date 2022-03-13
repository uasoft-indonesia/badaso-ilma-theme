<?php

use Illuminate\Support\Facades\Route;
use Uasoft\Badaso\Theme\LMSTheme\Controllers\InertiaController;
use Uasoft\Badaso\Theme\LMSTheme\Middlewares\HandleInertiaRequests;

$lms_route_prefix = config('badaso-lms-theme.lms_theme_prefix');

Route::prefix($lms_route_prefix)
    ->as('badaso.lms-theme.')
    ->middleware(['web', HandleInertiaRequests::class])
    ->group(function () {
        Route::get('/', [InertiaController::class, 'home'])->name('home');
        Route::get('/register', [InertiaController::class, 'register'])->name('register');
        Route::get('/login', [InertiaController::class, 'login'])->name('login');
    });
