<!DOCTYPE html>
<html>
    <head>
        <title>Perscriptio.nl</title>
		<meta charset="UTF-8" />
        <link rel="stylesheet" href="{{asset('public/assets/style/css/main.css')}}" />
        <link rel="stylesheet" href="{{asset('public/assets/libs/toastr/toastr.min.css')}}" />
    </head>
    <body>
        <div id="content"></div>
        <div class="sideform">
            Voeg project toe
        </div>
        <footer class="sticky bottom">
            <a href="{{ url('entries') }}" title="Entries">Entries</a>
        </footer>
        <input name="_token" id="_token" type="hidden" value="{{ csrf_token() }}" />
        <link href='https://fonts.googleapis.com/css?family=Pacifico' rel='stylesheet' type="text/css" />
        <script type="text/javascript" src="{{asset('public/assets/libs/react/react.min.js')}}"></script>
        <script type="text/javascript" src="{{asset('public/assets/libs/jquery/dist/jquery.min.js')}}"></script>
        <script type="text/javascript" src="{{asset('public/assets/libs/moment/min/moment.min.js')}}"></script>
        <script type="text/javascript" src="{{asset('public/assets/libs/toastr/toastr.min.js')}}"></script>
        <script type="text/javascript" src="{{asset('public/assets/dist/ui/components/companyselector.js')}}"></script>
        <script type="text/javascript" src="{{asset('public/assets/dist/ui/components/projectselector.js')}}"></script>
        <script type="text/javascript" src="{{asset('public/assets/dist/ui/components/dateselection.js')}}"></script>
        <script type="text/javascript" src="{{asset('public/assets/dist/ui/components/amountselector.js')}}"></script>
        <script type="text/javascript" src="{{asset('public/assets/dist/ui/components/description.js')}}"></script>
        <script type="text/javascript" src="{{asset('public/assets/dist/ui/components/timesheet.js')}}"></script>
    </body>
</html>
