<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/
use \App\Entries;
use Illuminate\Http\Request;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/api/entries', function() {
    $entries = Entries::all();
    return response()->json($entries);
});

Route::post('/api/entry', function(Request $request) {

    $entry = new Entries();
    $entry->customer = $request->input('customer');
    $entry->project = $request->input('project');
    $entry->amount = $request->input('amount');
    $entry->booked_for = date($request->input('booked_for'));
    $entry->user_id = 1;
    $entry->description = $request->input('description');

    if ($entry->save()) {
        return response()->json([
            'status' => 'OK'
        ]);
    }

    return response()->json([
        'status' => 'ERROR'
    ]);
});
