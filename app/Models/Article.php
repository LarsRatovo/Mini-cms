<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;
    protected $table='articles';
    protected $timstamps=false;
    public $fillable=[
        'category',
        'date',
        'snippet'
    ];
    public function paragraphs(){
        return $this->hasMany(Paragraph::class,'article');
    }
}
