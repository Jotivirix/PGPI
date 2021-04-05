<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;


class CSVController extends Controller
{
    public function importCSV(Request $request){
        $file = $request->file('products');
        $destinationPath = 'database/seeds/csvs';
        $file->move($destinationPath, 'products.csv');

        Artisan::call('db:seed', ['--class' => 'ProductsTableSeeder']);

        $response = array(
            'status' => 'success',
        );

        return response()->json($response);
    }
}
