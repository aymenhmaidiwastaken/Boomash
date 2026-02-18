<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title inertia>Boomash - Smart Dashboard Solution</title>
    <meta name="description"
        content="Boomash - Smart Dashboard Solution. A modern admin and analytics platform.">
    <meta name="keywords"
        content="Boomash, admin dashboard, analytics platform, modern dashboard">
    <meta name="author" content="Aymen">

    <!-- Social Media Meta Tags -->
    <meta property="og:title" content="Boomash - Smart Dashboard Solution">
    <meta property="og:description"
        content="Boomash - A modern admin and analytics platform.">

    <!-- App favicon -->
    <link rel="shortcut icon" href="{{ URL::asset('image/favicon.ico') }}">

    <!-- Scripts -->
    @routes
    @vite(['resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"])
    @inertiaHead
</head>

<body>
    @inertia
</body>

</html>
