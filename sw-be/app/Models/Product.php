<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Product extends Model
{
    use HasFactory;

    public static function saveOrderProducts($order_id, $product)
    {
        $product_db = Product::find($product->reference, 'reference');

        DB::table('order_product')->insert([
            'order_id' => $order_id,
            'product_id' => $product_db->id,
            'amount' => $product->id
        ]);
    }

    public static function updateOrderProducts($order_id, $product)
    {
        $product_db = Product::find($product->reference, 'reference');

        if ($product->amount != 0) {
            DB::table('order_product')->updateOrInsert(
                ['order_id' => $order_id, 'product_id' => $product_db->id],
                ['amount' => $product->amount]
            );
        } else {
            DB::table('order_product')
                ->where('order_id', $order_id)
                ->where('product_id', $product_db->id)
                ->delete();
        }
    }
}
