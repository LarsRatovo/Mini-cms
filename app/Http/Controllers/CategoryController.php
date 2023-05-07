<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\GlobalSite;
use App\Models\FullParagraph;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class CategoryController extends Controller
{
    function getCategory($id){
        $global=GlobalSite::all()->first();
        $categories=Category::all();
        $category=Category::where('id','=',$id)->first();
        $category->articles=$category->articles()->paginate(12);
        return Inertia::render('Category',[
            'categories'=>$categories,
            'global'=>$global,
            'category'=> $category
        ]);
    }
    function search(Request $request){
        $keyword=$request->get('q');
        $keyword="%".$keyword."%";
        $results=FullParagraph::selectRaw("id,title,snippet,date,image")
        ->where('titleparagraph','ilike',$keyword)
        ->orWhere('text','ilike',$keyword)
        ->orWhere('title','ilike',$keyword)
        ->orWhere('snippet','ilike',$keyword)
        ->orWhere('categoryname','ilike',$keyword)
        ->distinct()
        ->paginate(12);
        $global=GlobalSite::all()->first();
        $categories=Category::all();
        return Inertia::render('Result',[
            'categories'=>$categories,
            'global'=>$global,
            'results'=> $results,
            'keyword'=>$request->get('q')
        ]);
    }
}
