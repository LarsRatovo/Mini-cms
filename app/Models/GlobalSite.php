<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GlobalSite extends Model
{
    use HasFactory;
    protected $table='global';
    public $incrementing=false;
    public $timestamps=false;
    public $fillable=[
        'title',
        'snippet'
    ];
}
