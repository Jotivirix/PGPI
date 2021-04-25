<?php

namespace App\Helpers;

use PDF;
use Carbon\Carbon;

use App\Models\Order;

class PdfHelper
{
    public function __construct(){}

    public static function createDeliveryNote($order_id) {
        $order = Order::find($order_id);
        $order->products;

        $data = [
            'title' => 'Albaran_' . $order->id,
            'order' => $order
        ];
          
        $delivery_note = PDF::loadView('delivery_note', $data);
    
        return $delivery_note->download($data['title'] . '.pdf');
    }

    public static function createTag($order_id) {
        $order = Order::find($order_id);
        $order->products;
        $order->shipment_company;
        $order->weight = count($order->products) * 200;
        $order->user;

        if ($order->shipment_company->name == 'DHL') {
            $order->date = date_create_from_format('Y-m-d H:i:s', $order->datetime)->format('d/m/Y H:i:s');
        } else if ($order->shipment_company->name == 'SEUR') {
            $dt = Carbon::instance(date_create_from_format('Y-m-d H:i:s', $order->datetime));
            $dt->addDay($order->shipment_company->delivery_days);
            $order->date = $dt->format('d/m/Y');
        } else {
            $order->date = date_create_from_format('Y-m-d H:i:s', $order->datetime)->format('d/m/Y');
        }

        $data = [
            'title' => 'Tag_' . $order->id,
            'order' => $order
        ];
          
        $tag = PDF::loadView('tag', $data);
    
        return $tag->download($data['title'] . '.pdf');
    }
}
