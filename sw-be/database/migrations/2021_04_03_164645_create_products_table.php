<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('reference')->unique();
            $table->string('description');
            $table->integer('stock')->nullable();
            $table->integer('picking')->nullable();
            $table->integer('warning_stock_limit')->nullable();
            $table->string('image')->nullable();
            $table->integer('provider_id');
            $table->integer('location_id')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
