<!DOCTYPE html>
<html>
    <head>
        <title>React time</title>
        <link rel="stylesheet" href="{{asset('assets/style/css/main.css')}}" />
        <link rel="stylesheet" href="{{asset('assets/libs/toastr/toastr.min.css')}}" />
    </head>
    <body>
        <div id="content"></div>
        <input name="_token" id="_token" value="{{ csrf_token() }}" />
        <link href='https://fonts.googleapis.com/css?family=Pacifico' rel='stylesheet' type='text/css'>
        <script type="text/javascript" src="{{asset('assets/libs/react/react.min.js')}}"></script>
        <script type="text/javascript" src="{{asset('assets/libs/jquery/dist/jquery.min.js')}}"></script>
        <script type="text/javascript" src="{{asset('assets/libs/moment/min/moment.min.js')}}"></script>
        <script type="text/javascript" src="{{asset('assets/libs/toastr/toastr.min.js')}}"></script>
        <script type="text/javascript" src="{{asset('assets/dist/ui/components/companyselector.js')}}"></script>
        <script type="text/javascript" src="{{asset('assets/dist/ui/components/projectselector.js')}}"></script>
        <script type="text/javascript" src="{{asset('assets/dist/ui/components/dateselection.js')}}"></script>
        <script type="text/javascript" src="{{asset('assets/dist/ui/components/amountselector.js')}}"></script>
        <script type="text/javascript" src="{{asset('assets/dist/ui/components/description.js')}}"></script>
        <script type="text/javascript" src="{{asset('assets/dist/ui/components/timesheet.js')}}"></script>
    </body>
</html>
