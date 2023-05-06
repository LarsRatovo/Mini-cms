<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Paragraph extends Model
{
    use HasFactory;
    protected $table='paragraphs';
    public $timestamps=false;
    public $fillable=[
        'article',
        'text'
    ];
}
