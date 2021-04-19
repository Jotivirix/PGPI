<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;


class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::all();

        $response = array(
            'status' => 'success',
            'products' => $products
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

        $product = new Product();
        $product->reference = $data['reference'];
        $product->description = $data['description'];
        $product->stock = $data['stock'];
        $product->picking = $data['picking'];
        $product->warning_stock_limit = $data['warning_stock_limit'];
        $product->image = $data['image'];
        $product->provider_id = $data['provider_id'];
        $product->location_id = $data['location_id'];

        $product->save();

        $response = array(
            'status' => 'success',
            'products' => $product
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
        $product = Product::find($id);

        if ($product) {
            $response = array(
                'status' => 'success',
                'products' => $product
            );
        } else {
            $response = array(
                'status' => 'error',
                'message' => 'The product does not exist'
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

        $product = Product::find($id);

        if ($product) {
            $product->reference = $data['reference'];
            $product->description = $data['description'];
            $product->stock = $data['stock'];
            $product->picking = $data['picking'];
            $product->warning_stock_limit = $data['warning_stock_limit'];
            $product->image = $data['image'];
            $product->provider_id = $data['provider_id'];
            $product->location_id = $data['location_id'];

            $product->save();

            $response = array(
                'status' => 'success',
                'products' => $product
            );
        } else {
            $response = array(
                'status' => 'error',
                'message' => 'The product does not exist'
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
        $product = Product::find($id);

        if ($product) {
            $product->delete();

            $response = array(
                'status' => 'success',
                'message' => 'The product was successfully deleted'
            );
        } else {
            $response = array(
                'status' => 'error',
                'message' => 'The product does not exist'
            );
        }

        return response()->json($response);
    }
}
