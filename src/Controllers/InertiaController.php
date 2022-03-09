<?php

namespace Uasoft\Badaso\Theme\LMSTheme\Controllers;

use Inertia\Inertia;
use App\Http\Controllers\Controller;

class InertiaController extends Controller
{
    public function home()
    {
        return Inertia::render('index', [], 'lms-theme::app');
    }

    public function joinCourse()
    {
        return Inertia::render('JoinCourse', [], 'lms-theme::app');
    }

    public function register()
    {
        return Inertia::render('register', [], 'lms-theme::app');
    }
}
