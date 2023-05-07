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

require __DIR__.'/auth.php';
