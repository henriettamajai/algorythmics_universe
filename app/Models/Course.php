<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'content',
    ];

    public function users()
    {
        return $this->belongsToMany(User::class, 'user_courses');
    }
}
