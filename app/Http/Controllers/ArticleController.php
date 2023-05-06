<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Article;
use Inertia\Inertia;

class ArticleController extends Controller
{
    public function get($id){
        $article=Article::where('id','=',$id)->first();
        $article->paragraphs;
        // return $article;
        return Inertia::render('Article',[
            'article'=>$article
        ]);
    }
}
