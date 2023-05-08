<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/',[App\Http\Controllers\GlobalSiteController::class,'getGlobal']);
Route::get('/category/{id}',[App\Http\Controllers\CategoryController::class,'getCategory']);
Route::get('/search',[App\Http\Controllers\CategoryController::class,'search']);
Route::get('/articles/{id}',[App\Http\Controllers\ArticleController::class,'get']);

Route::get('/back',[\App\Http\Controllers\GlobalSiteController::class,'get'])->middleware(['auth']);
Route::post('/back',[\App\Http\Controllers\GlobalSiteController::class,'update'])->middleware(['auth']);
Route::get('/back/category',function (){
    return Inertia::render('admin/Category');
})->middleware(['auth']);
Route::get('/back/articles',function(){
    $categories=\App\Models\Category::all();
    return Inertia::render('admin/Article',['categories'=>$categories]);
})->middleware(['auth']);
Route::post('/category',[\App\Http\Controllers\CategoryController::class,'save'])->middleware(['auth']);
Route::get('/back/categories',[\App\Http\Controllers\CategoryController::class,'get'])->middleware(['auth']);
Route::get('/back/categories/{id}/delete',[\App\Http\Controllers\CategoryController::class,'delete'])->middleware(['auth']);
Route::get('/back/categories/{id}/update',[\App\Http\Controllers\CategoryController::class,'getUnique'])->middleware(['auth']);
Route::post('/category/update',[\App\Http\Controllers\CategoryController::class,'update'])->middleware(['auth']);
Route::post('/articles',[\App\Http\Controllers\ArticleController::class,'save'])->middleware(['auth']);
Route::get('/admin/articles',[\App\Http\Controllers\ArticleController::class,'all'])->middleware(['auth']);
Route::get('/admin/articles/{id}/update',[\App\Http\Controllers\ArticleController::class,'update'])->middleware(['auth']);
Route::get('/admin/articles/{article}/{id}/drop',[\App\Http\Controllers\ArticleController::class,'dropParagraph'])->middleware(['auth']);
Route::post('/admin/articles/{id}/update',[\App\Http\Controllers\ArticleController::class,'updatealot'])->middleware(['auth']);

require __DIR__.'/auth.php';
