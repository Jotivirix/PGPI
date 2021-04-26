<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Product;
use Carbon\Carbon;
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
        $orders = array();
        
        foreach(Order::all() as $order) {
            $order->shipment_company;

            array_push($orders, $order);
        }

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

        $order = new Order();
        $order->user_id = $data['user_id'];
        $order->datetime = Carbon::now();
        $order->status = $data['status'];
        $order->number = $data['number'];
        $order->street = $data['street'];
        $order->city = $data['city'];
        $order->zip_code = $data['zip_code'];
        $order->country = $data['country'];
        $order->shipment_company_id = $data['shipment_company_id'];
        $order->save();
        $order->refresh();

        $all_products_available = true;
        if ($request->exists('products')) {
            // The products for that order are saved
            $products = $data['products']; // Array of JSON with product_reference and product_amount
            foreach ($products as $product) {
                $product_decoded = json_decode($product);

                // Checks the availability
                if ($all_products_available) {
                    $available = Product::checkAvailability($product_decoded->reference, $product_decoded->amount);

                    if (!$available) {
                        $all_products_available = false;
                        $message = 'There are not ' . $product_decoded->amount . ' units of product ' . $product_decoded->reference;
                    }
                }
            }

            // The products are deducted and saved in Order_products
            if ($all_products_available) {
                foreach ($products as $product) {
                    $product_decoded = json_decode($product);

                    if ($all_products_available) {
                        Product::deductProductUnits($product_decoded->reference, $product_decoded->amount);
                        Product::saveOrderProducts($order->id, $product_decoded);
                    }
                }

                $response = array(
                    'status' => 'success',
                    'order' => $order
                );
            } else {
                $response = array(
                    'status' => 'error',
                    'message' => $message
                );
            }
        }

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
            $order->user;
            $order->shipment_company;

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

    public function assignOrderToWorker(Request $request)
    {
        // Receive POST
        $data = $request->input();

        $worker_id = $data['worker_id'];
        $order_id = $data['order_id'];

        // The order is saved
        $order = Order::find($order_id);

        if ($order) {
            $order->worker_id = $worker_id;
            $order->save();

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
}
