<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\GlobalSite;
use App\Models\Category;
use App\Models\Article;
use Inertia\Inertia;

class GlobalSiteController extends Controller
{
    function getGlobal(){
        $global=GlobalSite::all()->first();
        $category=Category::all();
        foreach ($category as $cat) {
            $cat->post=Article::where('category','=',$cat->id)->orderBy('date','desc')->get()->first();
        }
        return Inertia::render('Test',[
            'global'=>$global,
            'categories'=>$category
        ]);
    }
}
