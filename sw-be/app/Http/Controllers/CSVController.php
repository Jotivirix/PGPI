<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class CSVController extends Controller
{
    public function importCSV(Request $request)
    {
        $file = $request->file('providers_products');
        $destinationPath = 'database/seeds/csvs';
        $file->move($destinationPath, 'providers_products.csv');

        $file = fopen($destinationPath . '/providers_products.csv', 'r');
        $line_no = 0;
        while (($line = fgetcsv($file)) !== FALSE) {
            if ($line_no > 0) {
                $line_splitted = explode(';', $line[0]);

                $provider = DB::table('providers')
                    ->where('name', $line_splitted[0])
                    ->first();

                if (!$provider) {
                    DB::table('providers')->insertOrIgnore([
                        ['name' => $line_splitted[0]]
                    ]);

                    $provider = DB::table('providers')
                        ->where('name', $line_splitted[0])
                        ->first();
                }

                DB::table('products')->insertOrIgnore([
                    [
                        'reference' => 'X' . $provider->id . '_' . $line_splitted[1],
                        'description' => $line_splitted[1],
                        'warning_stock_limit' => $line_splitted[2],
                        'provider_id' => $provider->id
                    ]
                ]);
            }

            $line_no++;
        }
        fclose($file);

        // Artisan::call('db:seed', ['--class' => 'ProductsTableSeeder']);

        $response = array(
            'status' => 'success',
        );

        return response()->json($response);
    }
}
