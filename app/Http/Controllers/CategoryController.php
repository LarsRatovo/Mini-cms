<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    function getCategory($id){
        $category=Category::where('id','=',$id)->first();
        $category->articles=$category->articles()->paginate(1);
        return $category;
    }
}
