<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Courses', [
            'courses' => Course::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        // Hardcoded course datas
        $courses = [
            1 => [
                'title' => 'Course 1',
                'description' => 'Learn the basics of HTML, CSS, and JavaScript.',
                'image' => '/images/default.png',
                'chapters' => [
                    [
                        'title' => 'Chapter 1: Introduction to HTML',
                        'content' => 'This chapter covers the fundamentals of HTML...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A pellentesque sit amet porttitor. Non tellus orci ac auctor. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing. Congue nisi vitae suscipit tellus mauris a diam. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Ultricies lacus sed turpis tincidunt id aliquet risus. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Lectus urna duis convallis convallis tellus id. Elementum eu facilisis sed odio morbi quis. Ipsum consequat nisl vel pretium lectus quam id leo in. Luctus venenatis lectus magna fringilla urna. Velit scelerisque in dictum non consectetur. Rutrum quisque non tellus orci ac auctor. Aliquet risus feugiat in ante metus.

                        Imperdiet proin fermentum leo vel orci porta. Amet venenatis urna cursus eget nunc scelerisque viverra mauris. Ipsum a arcu cursus vitae congue mauris. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Cursus turpis massa tincidunt dui ut ornare lectus sit. Fames ac turpis egestas sed tempus urna et pharetra. Etiam non quam lacus suspendisse faucibus interdum posuere. Et malesuada fames ac turpis egestas. Congue mauris rhoncus aenean vel. Sed odio morbi quis commodo odio aenean. Laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean. Facilisis leo vel fringilla est ullamcorper eget. Iaculis at erat pellentesque adipiscing. Id porta nibh venenatis cras sed felis eget velit aliquet.'
                    ],
                    [
                        'title' => 'Chapter 2: Introduction to CSS',
                        'content' => 'In this chapter, you will learn the basics of CSS...'
                    ],
                    [
                        'title' => 'Chapter 3: Introduction to JavaScript',
                        'content' => 'JavaScript is a versatile programming language...'
                    ],
                    [
                        'title' => 'Chapter 4: Introduction to Tailwind',
                        'content' => 'Tailwind CSS is a utility-first CSS framework...'
                    ]
                ],
                'status' => 'not started',
            ],
            2 => [
                'title' => 'Course 2',
                'description' => 'Learn advanced web development techniques.',
                'image' => '/images/default.png',
                'chapters' => [
                    [
                        'title' => 'Chapter 1: Advanced CSS',
                        'content' => 'This chapter delves into advanced CSS techniques...'
                    ],
                    [
                        'title' => 'Chapter 2: JavaScript Frameworks',
                        'content' => 'Explore popular JavaScript frameworks like React and Vue...'
                    ],
                    [
                        'title' => 'Chapter 3: Server-Side Programming',
                        'content' => 'Learn about server-side programming with technologies like Node.js and PHP...'
                    ]
                ],
                'status' => 'ongoing',
            ],
        ];
        
        if (isset($courses[$id])) {
            $course = $courses[$id];
            return Inertia::render('CourseDetails', ['course' => $course]);
        } else {
            abort(404);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
