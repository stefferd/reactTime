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

Route::get('/entries/{customer}/', function($customer) {
    $entries = Entries::where('customer', $customer)->where('booked_for', '>', '2015-08-31')
        ->where('booked_for', '<', '2015-10-01')->orderBy('booked_for')->get();
    $totalHours = 0;
    foreach($entries as $entry) {
        $totalHours += $entry->amount;
    }
    return view('entries')->with(['entries' => $entries, 'totalHours' => $totalHours]);
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
