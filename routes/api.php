<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use App\Models\Image;
use App\Models\Item;
use GrahamCampbell\ResultType\Result;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::get('/test', function() {
    return "test ok";
});

Route::post('/image', function(Request $request) {

    $arr = array();

        $files = $request->file('files');
        // return $files;

        // $path = Storage::putFile('avatars', $request->file('avatar'));
    
    foreach ($files as $index => $image) {
        // $path = $request->file('avatar')->store('avatars');
        $orginalName = $image->getClientOriginalName();
        $uniqueName = $image->store('public/images');
        $image = new Image();
        $image->original_name = $orginalName;
        $image->unique_path =  str_replace("public", "", $uniqueName);
        $image->save();
     
        // $path = Storage::disk("public")->putFile('file', $image);
        // $imagePath = "/storage/$path";
    }
});

Route::get('/images', function() {
    $images = Image::all();
    return $images;
});

Route::get('/items', function() {
    $items = Item::all();
    return $items;
});

Route::post('/add_item', function(Request $request) {
    $request->validate([
        "item_name" => "required",
        "detail" => "required",
        "price" => "required"
    ]);
    $item = new Item();
    $item->item_name = $request->input('item_name');
    $item->detail = $request->input('detail');
    $item->price = $request->input('price');
    $item->save();
    $items = Item::all();
    return $items;
});

Route::post('/delete_item', function(Request $request) {
    $item = Item::find($request->input('id'));
    $item->delete();
    $items = Item::all();
    return $items;
});

Route::get('/items/{id}', function($id) {
    if(!is_numeric($id)) {
          return response(["result" => "notFound"], 404);
    }
    $item = Item::find($id);
    if(!$item) {
          return response(["result" => "notFound"], 404);
    }
    return $item;
});

Route::get('/test', function() {
    return "test";
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/{any}', function() {
   return response("api_route_not_found", 404);
});