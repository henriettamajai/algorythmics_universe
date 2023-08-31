<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Inertia\Inertia;

class CoursesPageController extends Controller
{
    public function index()
    {
        $courses = Course::all();
        return Inertia::render('Courses', [
            'courses' => $courses,
        ]);
    }
}
