<?php

namespace App\Http\Controllers;

use App\Models\Quiz;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TeacherController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        $quizzes = $user->quizzes;

        foreach ($quizzes as $quiz) {
            $quiz->attempts = $quiz->attempts()->count();
            $quiz->averageScore = $quiz->attempts()->avg('score');
        }

        return Inertia::render('TeacherDashboard', [
            'quizzes' => $quizzes,
        ]);
    }
}
