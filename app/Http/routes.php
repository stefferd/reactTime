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
use \App\Project;
use \App\Customer;
use Illuminate\Http\Request;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/api/projects', function() {
    $projects = Project::all();
    return response()->json($projects);
});

Route::get('/entries', function() {
    $entries = array();
    $totalHours = 0;

    return view('entries')->with(['entries' => $entries, 'totalHours' => $totalHours]);
});

Route::get('/api/customers', function() {
    $customers = Customer::all();
    return response()->json($customers);
});

Route::get('/entries/{customer?}/{minusMonth?}', function($customer, $minusMonth) {
    if ($minusMonth != 0) {
        $startDate = date('Y-m-d', strtotime('first day of this month', strtotime('-' . $minusMonth . ' months')));
        $endDate = date('Y-m-d', strtotime('last day of this month', strtotime($startDate)));
    } else {
        $startDate = date('Y-m-d', strtotime('first day of this month'));
        $endDate = date('Y-m-d', strtotime('last day of this month'));
    }
    $entries = Entries::where('customer_id', $customer)->where('booked_for', '>=', $startDate)
        ->where('booked_for', '<=', $endDate)->orderBy('booked_for')->get();
    $totalHours = 0;

    if (empty($entries)) {
        $entries = array();
    } else {
        foreach($entries as $entry) {
            $totalHours += $entry->amount;
        }
    }

    return view('entries')->with(['entries' => $entries, 'totalHours' => $totalHours]);
});

Route::post('/api/entry', function(Request $request) {

    $entry = new Entries();
    $entry->customer_id = $request->input('customer');
    $entry->project_id = $request->input('project');
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
