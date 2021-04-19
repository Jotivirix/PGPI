<?php

namespace Database\Seeders;

use Flynsarmy\CsvSeeder\CsvSeeder;
use Illuminate\Support\Facades\DB;

class ShipmentCompaniesTableSeeder extends CsvSeeder
{
    public function __construct()
	{
		$this->table = 'shipment_companies';
		$this->filename = base_path().'/public/database/seeders/seeds/csvs/shipment_companies.csv';
	}

	public function run()
	{
		// Recommended when importing larger CSVs
		DB::disableQueryLog();

		// Uncomment the below to wipe the table clean before populating
		//DB::table($this->table)->truncate();

		parent::run();
	}
}
