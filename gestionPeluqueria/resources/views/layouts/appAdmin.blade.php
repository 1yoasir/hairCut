<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="user" content="{{ Auth::user() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Estilos propios-->
    <link rel="stylesheet" href="{{ asset('css/estilos.css') }}">
    <!-- EMOTICONOS -->
    <script src="https://kit.fontawesome.com/ab0ed39844.js" crossorigin="anonymous"></script>
</head>
<body>
    <x-menu></x-menu>
    <div id="appAdmin">
        <main class="py-4">
            @yield('content')
        </main>
    </div>
</body>
</html>
