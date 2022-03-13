<?php

namespace Uasoft\Badaso\Theme\LMSTheme\Controllers;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class InertiaController extends Controller
{
    public function home()
    {
        return Inertia::render('index', [], 'lms-theme::app');
    }

    public function people($id)
    {
        return Inertia::render('PeopleInCourse', [], 'lms-theme::app');
    }

    public function register()
    {
        return Inertia::render('register', [], 'lms-theme::app');
    }

    public function login()
    {
        return Inertia::render('login', [], 'lms-theme:app');
    }
}
