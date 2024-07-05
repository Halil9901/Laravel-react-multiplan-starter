<?php

// app/Models/File.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    use HasFactory;

    protected $fillable = ['filename', 'path', 'type'];

    public function fileable()
    {
        return $this->morphTo();
    }
}

