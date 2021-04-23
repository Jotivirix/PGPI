<?php

namespace App\Http\Controllers;

use App\Models\Location;
use App\Models\Order;
use App\Models\Product;
use App\Models\Provider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class CSVController extends Controller
{
    public function importCSV(Request $request)
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('order_product')->delete();
        Location::truncate();
        Provider::truncate();
        Product::truncate();
        Order::truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        $file = $request->file('providers_products');
        $destinationPath = 'database/seeds/csvs';
        $file->move($destinationPath, 'providers_products.csv');

        $file = fopen($destinationPath . '/providers_products.csv', 'r');
        $line_no = 0;
        $product_position = 1;
        $prev_aisle = 1;
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

                if ($prev_aisle != $provider->id) {
                    $product_position = 1;
                    $prev_aisle = $provider->id;
                }

                DB::table('locations')->insertOrIgnore([
                    [
                        'aisle' => $provider->id,
                        'position' => $product_position
                    ]
                ]);

                $location = DB::table('locations')
                    ->where('aisle', $provider->id)
                    ->where('position', $product_position)
                    ->first();

                $product_position++;

                DB::table('products')->insertOrIgnore([
                    [
                        'reference' => 'X' . $provider->id . '_' . $line_splitted[1],
                        'description' => $line_splitted[1],
                        'picking' => 20,
                        'stock' => 20,
                        'warning_stock_limit' => $line_splitted[2],
                        'image' => 'default.jpg',
                        'provider_id' => $provider->id,
                        'location_id' => $location->id,
                    ]
                ]);
            }

            $line_no++;
        }
        fclose($file);

        $response = array(
            'status' => 'success',
        );

        return response()->json($response);
    }
}
