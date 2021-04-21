<?php

namespace App\Http\Controllers;

use App\Helpers\PdfHelper;
use App\Models\Order;
use Illuminate\Http\Request;


class PDFController extends Controller
{
    public function getDeliveryNote(Request $request) {
        $data = $request->input();
        $order_id = $data['order_id'];
        
        $delivery_note = PdfHelper::createDeliveryNote($order_id);

        return $delivery_note;
    }

    public function getTag(Request $request) {
        $data = $request->input();
        $order_id = $data['order_id'];
        
        $tag = PdfHelper::createTag($order_id);

        return $tag;
    }

    
}
