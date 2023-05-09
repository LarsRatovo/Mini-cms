<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Category extends Model
{
    use HasFactory;
    protected $table='categories';
    public $timestamps=false;
    public $fillable=[
        'name',
    ];
    public function slug(){
        return Str::slug($this->name);
    }
    public function articles(){
        return $this->hasMany(Article::class,'category');
    }
}
