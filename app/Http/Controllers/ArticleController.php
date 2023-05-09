<?php

namespace App\Http\Controllers;

use App\Models\Paragraph;
use Illuminate\Http\Request;
use App\Models\Article;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use App\Models\GlobalSite;
use App\Models\Category;
use Spatie\ImageOptimizer\Image;

class ArticleController extends Controller
{
    public function get($id){
        $id=explode('-',$id)[0];
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

    /**
     * @throws ValidationException
     */
    public function save(Request $request){
        $this->validate($request, [
            'image' => 'required|image|mimes:jpg,png,jpeg,gif,svg|max:2048',
            'title'=>'required',
            'snippet'=>'required',
            'category'=>'required',
        ]);
        $title=$request->get('title');
        $snippet=$request->get('snippet');
        $image_name=Str::slug($snippet).".".$request->file('image')->extension();
        $category=$request->get('category');
        $ptitle=$request->get('ptitle');
        $ptext=$request->get('ptext');
        $request->file('image')->move(public_path('assets/img'),$image_name);
        $data=[
            'title'=>$title,
            'snippet'=>$snippet,
            'image'=>$image_name,
            'category'=>$category,
            'img'=>$image_name,
        ];
        $article=Article::create($data);
        for($i=0;$i<count($ptitle);$i++){
            $temp=[
                'article'=>$article->id,
                'title'=>$ptitle[$i],
                'text'=>$ptext[$i]
            ];
            Paragraph::create($temp);
        }
        return $this->get($article->id);
    }
    public function all(){
        $articles=Article::paginate(12);
        return Inertia::render('admin/list/Article',[
            'articles'=>$articles
        ]);
    }
    public function update($id){
        $article=Article::find($id);
        $categories=Category::all();
        $article->paragraphs;
        return Inertia::render('admin/update/Article',[
            'article'=>$article,
            'categories'=>$categories
        ]);
    }
    public function dropParagraph($article,$id){
        Paragraph::find($id)->delete();
        return $this->update($article);
    }
    public function updatealot(Request $request,$id){
        $original=Article::find($id);
        $this->validate($request, [
            'image' => 'image|mimes:jpg,png,jpeg,gif,svg|max:2048',
            'title'=>'required',
            'snippet'=>'required',
            'category'=>'required',
        ]);
        $title=$request->get('title');
        $snippet=$request->get('snippet');
        $image_name=$original->image;
        if($request->hasFile('image')){
            $request->file('image')->move(public_path('assets/img'),$image_name);
        }
        $category=$request->get('category');
        $ptitle=$request->get('ptitle');
        $ptext=$request->get('ptext');
        $data=[
            'title'=>$title,
            'snippet'=>$snippet,
            'image'=>$image_name,
            'category'=>$category,
            'img'=>$image_name,
        ];
        Article::find($original->id)->update($data);
        Paragraph::where('article','=',$original->id)->delete();
        for($i=0;$i<count($ptitle);$i++){
            $temp=[
                'article'=>$original->id,
                'title'=>$ptitle[$i],
                'text'=>$ptext[$i]
            ];
            Paragraph::create($temp);
        }
        return $this->update($original->id);
    }
}
