<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    protected $table='categories';
    public $incrementing=false;
    public $timestamps=false;
    public $fillable=[
        'name'
    ];
    public function articles(){
        return $this->hasMany(Article::class,'category');
    }
}
