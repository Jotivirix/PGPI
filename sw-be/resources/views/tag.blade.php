<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <title>{{$title}}</title>

    <style>
        title {
            float: right;
        }

        .logo {
            max-width: 300px;
        }

        table {
            border-collapse: collapse;
            width: 100%;
        }

        table td,
        table th {
            border: 1px solid #ddd;
            padding: 8px;
        }

        table .header {
            background-color: #f2f2f2;
        }
    </style>
</head>

<body>

    <h1>Pedido: {{$order->id}}</h1>
    <h1>Tipo: {{$order->shipment_company->shipment_type}}</h1>

    <div>
        <table>
            <tr class="header">
                <th>SHIP FROM:</th>
                <th>SHIP TO:</th>
            </tr>
            <tr>
                <td>Smart Warehouse</td>
                <td>{{$order->user->name}} {{$order->user->surname}}</td>
            </tr>
            <tr>
                <td>Calle noseque, 22</td>
                <td>{{$order->street}}, {{$order->number}}</td>
            </tr>
            <tr>
                <td>Pozuelo, 28343</td>
                <td>{{$order->city}}, {{$order->zip_code}}</td>
            </tr>
            <tr>
                <td>España</td>
                <td>{{$order->country}}</td>
            </tr>
        </table>
    </div>

    <div>
        <table>
            <tr>
                <td style="border: none;"></td>
            </tr>
            @if ($order->shipment_company->name == 'DHL')

            <tr>
                <td>Fecha y hora de pedido: {{$order->date}}</td>
            </tr>
            <tr class="header">
                <th>Referencia</th>
                <th>Producto</th>
                <th>Cantidad</th>
            </tr>
            @foreach ($order->products as $product)
            <tr>
                <td>{{$product->reference}}</td>
                <td>{{$product->description}}</td>
                <td>{{$product->pivot->amount}}</td>
            </tr>
            @endforeach
        </table>

        @elseif ($order->shipment_company->name == 'SEUR')
        <table>
            <tr>
                <td>Fecha de entrega: {{$order->date}}</td>
            </tr>
            <tr>
                <td>Peso: {{$order->weight}}gr</td>
            </tr>

        </table>
        @else
        <table>
            <tr>
                <td>Fecha de pedido: {{$order->date}}</td>
            </tr>
            <tr>
                <td>Peso: {{$order->weight}}gr</td>
            </tr>
            <tr>
                <td>Número de productos: {{count($order->products)}}</td>
            </tr>
        </table>
        @endif
    </div>

</body>

</html>