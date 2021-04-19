<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Product;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $orders = Order::all();

        $response = array(
            'status' => 'success',
            'orders' => $orders
        );

        return response()->json($response);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Receive POST
        $data = $request->input();

        // The order is saved
        $order = new Order();
        $order->user_id = $data['user_id'];
        $order->datetime = $data['datetime'];
        $order->status = $data['status'];
        $order->number = $data['number'];
        $order->street = $data['street'];
        $order->city = $data['city'];
        $order->zip_code = $data['zip_code'];
        $order->country = $data['country'];
        $order->shipment_company_id = $data['shipment_company_id'];
        $order->save();
        $order->refresh();

        if ($request->exists('products')) {
            // The products for that order are saved
            $products = $data['products']; // Array of JSON with product_reference and product_amount
            foreach ($products as $product) {
                Product::saveOrderProducts($order->id, json_decode($product));
            }
        }

        $response = array(
            'status' => 'success',
            'order' => $order
        );

        return response()->json($response);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $order = Order::find($id);

        if ($order) {
            $order->products;

            $response = array(
                'status' => 'success',
                'order' => $order
            );
        } else {
            $response = array(
                'status' => 'error',
                'message' => 'The order does not exist'
            );
        }

        return response()->json($response);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // Receive POST
        $data = $request->input();

        // The order is saved
        $order = Order::find($id);

        if ($order) {
            $order->user_id = $data['user_id'];
            $order->datetime = $data['datetime'];
            $order->status = $data['status'];
            $order->number = $data['number'];
            $order->street = $data['street'];
            $order->city = $data['city'];
            $order->zip_code = $data['zip_code'];
            $order->country = $data['country'];
            $order->shipment_company_id = $data['shipment_company_id'];
            $order->save();
            $order->refresh();

            // The products for that order are saved
            $products = $data['products']; // Array of JSON with product_reference and product_amount
            foreach ($products as $product) {
                Product::updateOrderProducts($order->id, json_decode($product));
            }

            $response = array(
                'status' => 'success',
                'order' => $order
            );
        } else {
            $response = array(
                'status' => 'error',
                'message' => 'The order does not exist'
            );
        }

        return response()->json($response);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $order = Order::find($id);
        if ($order) {
            $order->delete();

            $response = array(
                'status' => 'success',
                'message' => 'The order was successfully deleted'
            );
        } else {
            $response = array(
                'status' => 'error',
                'message' => 'The order does not exist'
            );
        }

        return response()->json($response);
    }
}
