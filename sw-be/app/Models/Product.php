<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class Product extends Model
{
    use HasFactory;

    public function orders()
    {
        return $this->belongsToMany(Order::class);
    }

    public static function saveOrderProducts($order_id, $product)
    {
        $product_db = Product::where('reference', $product->reference)->first();

        DB::table('order_product')->insert(
            [
                'order_id' => $order_id,
                'product_id' => $product_db->id,
                'amount' => $product->amount
            ]
        );

        return false;
    }

    public static function updateOrderProducts($order_id, $product)
    {
        $product_db = Product::where('reference', $product->reference)->first();

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

    public static function addProductUnits($reference)
    {
        $product = Product::where('reference', $reference)->first();
        $product->stock = 20;
        $product->save();
    }

    public static function checkAvailability($reference, $requested_amount)
    {
        $product_db = Product::where('reference', $reference)->first();
        $available_amount = $product_db->picking + $product_db->stock;

        if ($available_amount >= $requested_amount) {
            return true;
        } else {
            return false;
        }
    }

    public static function deductProductUnits($reference, $amount)
    {
        $product = Product::where('reference', $reference)->first();

        if ($product->picking > $amount) {
            $product->picking = $product->picking - $amount;
        } else {
            $product->picking = $product->picking + $product->stock - $amount;
            $product->stock = 0;
        }

        // Comprobar el warning limit para realizar pedido
        if ($product->picking < $product->warning_stock_limit) {
            Log::info('Se ha realizado un pedido de ' . $product->reference);
        }

        $product->save();
    }
}
