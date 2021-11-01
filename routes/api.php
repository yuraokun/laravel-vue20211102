<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use App\Models\Image;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});