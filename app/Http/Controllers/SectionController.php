<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SectionController extends Controller
{
    public function index(Course $course)
    {
        $sections = $course->sections;
        return Inertia::render('Section', [
            'sections' => $sections->simplePaginate(1),
        ]);
    }
}
