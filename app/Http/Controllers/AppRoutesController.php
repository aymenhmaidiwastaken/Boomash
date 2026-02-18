<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AppRoutesController extends Controller
{
    public function dashboard()
    {
        return Inertia::render('dashboard/ecommerce/index');
    }

    public function dashboard_analytics()
    {
        return Inertia::render('dashboard/analytics/index');
    }

    public function calendar() {
        return Inertia::render('calendar/index');
    }

    public function month_grid() {
        return Inertia::render('calendar/month');
    }

    public function chat() {
        return Inertia::render('apps/chat');
    }

    public function tasks_details() {
        return Inertia::render('apps/tasks/details');
    }

    public function tasks_kanban() {
        return Inertia::render('apps/tasks/kanban');
    }

    public function tasks_list_view() {
        return Inertia::render('apps/tasks/list-view');
    }

    public function pages_profile() {
        return Inertia::render('pages/profile/simple');
    }

    public function pages_profile_setting() {
        return Inertia::render('pages/profile/setting');
    }
}
