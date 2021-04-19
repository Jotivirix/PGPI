<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Database\ProductTableSeeder;
use Illuminate\Database\ShipmentCompaniesTableSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            ProductsTableSeeder::class,
            ShipmentCompaniesTableSeeder::class
        ]);
    }
}
