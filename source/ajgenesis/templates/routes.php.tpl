<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', function()
{
	return View::make('index', array('title' => 'Home'));
});

<# entities.forEach(function (entity) { #>

Route::get('/${entity.name}', '${entity.classname}Controller@getList');
Route::get('/${entity.name}/{id}', '${entity.classname}Controller@get${entity.classname}');

<# }); #>