<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Console\View\Components\Task;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $courses = Course::all();

        return Inertia::render('Dashboard', [
            'courses' => $courses,
        ]);
    }
}
