<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="favicon.ico"/>
    <meta name="theme-color" content="#000000"/>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name') }}</title>
    <base href="/"/>

    @env('production')
        @if (isset($ngAssets) && count($ngAssets))
            <link rel="stylesheet" href="/admin/{{ $ngAssets['styles'] }}">
        @endif
    @else
        <link rel="stylesheet" href="/admin/styles.css">
    @endenv
</head>
<body>
<noscript>You need to enable JavaScript to run this app.</noscript>

<app-root></app-root>

{{--    <style>@-webkit-keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@-moz-keyframes spin{0%{-moz-transform:rotate(0)}100%{-moz-transform:rotate(360deg)}}@keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.spinner{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1003;background: #000000;overflow:hidden}  .spinner div:first-child{display:block;position:relative;left:50%;top:50%;width:150px;height:150px;margin:-75px 0 0 -75px;border-radius:50%;box-shadow:0 3px 3px 0 rgba(255,56,106,1);transform:translate3d(0,0,0);animation:spin 2s linear infinite}  .spinner div:first-child:after,.spinner div:first-child:before{content:'';position:absolute;border-radius:50%}  .spinner div:first-child:before{top:5px;left:5px;right:5px;bottom:5px;box-shadow:0 3px 3px 0 rgb(255, 228, 32);-webkit-animation:spin 3s linear infinite;animation:spin 3s linear infinite}  .spinner div:first-child:after{top:15px;left:15px;right:15px;bottom:15px;box-shadow:0 3px 3px 0 rgba(61, 175, 255,1);animation:spin 1.5s linear infinite}</style>--}}
{{--    <div id="nb-global-spinner" class="spinner">--}}
{{--        <div class="blob blob-0"></div>--}}
{{--        <div class="blob blob-1"></div>--}}
{{--        <div class="blob blob-2"></div>--}}
{{--        <div class="blob blob-3"></div>--}}
{{--        <div class="blob blob-4"></div>--}}
{{--        <div class="blob blob-5"></div>--}}
{{--    </div>--}}

@env('production')
    @if (isset($ngAssets) && count($ngAssets))
        <script src="/admin/{{ $ngAssets['runtime'] }}" defer></script>
        <script src="/admin/{{ $ngAssets['polyfills'] }}" defer></script>
        <script src="/admin/{{ $ngAssets['vendor'] }}" defer></script>
        <script src="/admin/{{ $ngAssets['main'] }}" defer></script>
    @endif
@else
    <script src="/admin/runtime.js" defer></script>
    <script src="/admin/polyfills.js" defer></script>
    <script src="/admin/vendor.js" defer></script>
    <script src="/admin/main.js" defer></script>
@endenv
</body>
</html>
