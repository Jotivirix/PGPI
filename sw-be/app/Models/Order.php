<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    public function products() {
        return $this->belongsToMany(Product::class)->withPivot('amount');
    }

    public function shipment_company() {
        return $this->belongsTo(ShipmentCompany::class);
    }

    public function user() {
        return $this->belongsTo(User::class);
    }
}
