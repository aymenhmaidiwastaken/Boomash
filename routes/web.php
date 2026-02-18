<?php

use App\Http\Controllers\AppRoutesController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

Route::middleware(['auth:sanctum', config('jetstream.auth_session'), 'verified',])->group(function () {

    Route::controller(AppRoutesController::class)->group(function () {

        // dashboards
        Route::get('/', 'dashboard');
        Route::get('/dashboard/analytics', 'dashboard_analytics');

        // calendar
        Route::get("/calendar", "calendar");
        Route::get("/month-grid", "month_grid");

        // chat
        Route::get("/chat", "chat");

        // tasks
        Route::get("/apps/tasks-details", "tasks_details");
        Route::get("/apps/tasks-kanban", "tasks_kanban");
        Route::get("/apps/tasks-list-view", "tasks_list_view");

        // profile
        Route::get("/pages/profile", "pages_profile");
        Route::get("/pages/profile-setting", "pages_profile_setting");
    });
});
