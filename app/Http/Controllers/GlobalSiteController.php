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
        $cats=Category::all();
        $global=GlobalSite::all()->first();
        $categories=Category::all();
        foreach ($cats as $cat) {
            $cat->articles=$cat->articles()->take(3)->get();
        }
        return Inertia::render('Home',[
            'cats'=>$cats,
            'global'=>$global,
            'categories'=>$categories
        ]);
    }
    function get(){
        $global=GlobalSite::all()->first();
        return Inertia::render('admin/Global',[
            'global'=>$global
        ]);
    }
    function update(Request $request){
        GlobalSite::truncate();
        GlobalSite::create([
            "title"=>$request->get('title'),
            "snippet"=>$request->get('snippet')
        ]);
       return $this->get();
    }
}
