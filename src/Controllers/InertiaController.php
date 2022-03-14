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

    public function joinCourse()
    {
        return Inertia::render('JoinCourse', [], 'lms-theme::app');
    }

    public function people($id)
    {
        return Inertia::render('PeopleInCourse', ['id' => $id], 'lms-theme::app');
    }

    public function register()
    {
        return Inertia::render('register', [], 'lms-theme::app');
    }

    public function view()
    {
        return Inertia::render('ViewCourse', [], 'lms-theme::app');
    }

    public function courseStream()
    {
        return Inertia::render('courseStream', [], 'lms-theme::app');
    }

    public function login()
    {
        return Inertia::render('login', [], 'lms-theme:app');
    }

    public function createCourse()
    {
        return Inertia::render('course/CreateCourse', [], 'lms-theme::app');
    }
}
