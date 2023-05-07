<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Article;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use App\Models\GlobalSite;
use App\Models\Category;

class ArticleController extends Controller
{
    public function get($id){
        $article=Article::where('id','=',$id)->first();
        $article->paragraphs;
        $global=GlobalSite::all()->first();
        $categories=Category::all();
        $count=DB::table("category_count")->get();
        $latest=Article::orderBy('date','DESC')->take(5)->get();
        return Inertia::render('Article',[
            'article'=>$article,
            'global'=>$global,
            'categories'=>$categories,
            'count'=>$count,
            'latest'=>$latest
        ]);
    }
}
