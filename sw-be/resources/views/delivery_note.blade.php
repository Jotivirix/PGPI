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

    <h1>{{$title}}</h1>


    <table>
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
</body>

</html>