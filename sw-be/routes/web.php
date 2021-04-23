<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;

use App\Http\Controllers\PDFController;
use App\Http\Controllers\CSVController;
use App\Http\Controllers\UserController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::group(['middleware' => ['cors']], function () {

    // Users
    Route::post('users/register', [UserController::class, 'register']);
    Route::post('users/login', [UserController::class, 'login']);

    // Orders
    Route::post('orders/assign', [OrderController::class, 'assignOrderToWorker']);

    Route::post('uploadcsv', [CSVController::class, 'importCSV']);

    Route::post('pdf/delivery_note', [PDFController::class, 'getDeliveryNote']);
    Route::post('pdf/tag', [PDFController::class, 'getTag']);

    Route::resource('orders', OrderController::class);
    Route::resource('products', ProductController::class);
});
