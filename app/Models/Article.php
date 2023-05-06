<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;
    protected $table='articles';
    public $incrementing=false;
    protected $timstamps=false;
    public $fillable=[
        'category',
        'date',
        'snippet'
    ];
}
