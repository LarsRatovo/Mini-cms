<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;
    protected $table='articles';
    public $timestamps=false;
    public $fillable=[
        'title',
        'category',
        'date',
        'snippet',
        'image'
    ];
    public function paragraphs(){
        return $this->hasMany(Paragraph::class,'article');
    }
}
