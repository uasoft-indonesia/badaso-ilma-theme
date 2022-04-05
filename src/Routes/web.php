<?php

use Illuminate\Support\Facades\Route;
use Uasoft\Badaso\Theme\LMSTheme\Controllers\InertiaController;
use Uasoft\Badaso\Theme\LMSTheme\Middlewares\HandleInertiaRequests;

$lms_route_prefix = config('badaso-lms-theme.lms_theme_prefix');

Route::prefix($lms_route_prefix)
    ->as('badaso.lms-theme.')
    ->middleware(['web', HandleInertiaRequests::class])
    ->group(function () {
        Route::get('/', [InertiaController::class, 'view']);

        Route::get('/register', [InertiaController::class, 'register']);
        Route::get('/login', [InertiaController::class, 'login']);

        Route::prefix('/course')->as('course.')->group(function () {
            Route::get('/create', [InertiaController::class, 'createCourse']);
            Route::get('/join', [InertiaController::class, 'joinCourse']);
            Route::get('/{id}', [InertiaController::class, 'announcement']);
            Route::get('/{id}/classwork', [InertiaController::class, 'classwork']);
            Route::get('/{id}/classwork/create', [InertiaController::class, 'createTopic']);
            Route::get('/{id}/classwork/update/{topicId}', [InertiaController::class, 'updateTopic']);
            Route::get('/{id}/people', [InertiaController::class, 'people']);
        });
    });
