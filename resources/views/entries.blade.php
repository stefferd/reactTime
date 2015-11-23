<!DOCTYPE html>
<html>
    <head>
        <title>Entries / Perscriptio.nl</title>
		<meta charset="UTF-8" />
        <link rel="stylesheet" href="{{asset('public/assets/style/css/main.css')}}" />
        <link rel="stylesheet" href="{{asset('public/assets/libs/toastr/toastr.min.css')}}" />
    </head>
    <body>

        <div class="container">
            @if (count($entries) > 0)
                <div class="row">
                    <div class="col-2">
                        Datum
                    </div>
                    <div class="col-2">
                        Uren
                    </div>
                    <div class="col-2">
                        Project
                    </div>
                    <div class="col-6">
                        Omschrijving
                    </div>
                </div>
                @foreach($entries as $entry)
                    <div class="row">
                        <div class="col-2">
                            {{date('d-m-Y', strtotime($entry->booked_for))}}
                        </div>
                        <div class="col-2">
                            {{$entry->amount}}
                        </div>
                        <div class="col-2">
                            {{$entry->project->name}}
                        </div>
                        <div class="col-6">
                            {{$entry->description}}
                        </div>
                    </div>
                @endforeach
                <div class="row">
                    <div class="col-2">
                        Totaal
                    </div>
                    <div class="col-2">
                        <strong>{{number_format($totalHours, 2)}}</strong>
                    </div>
                    <div class="col-2">&nbsp;</div>
                    <div class="col-6">&nbsp;</div>
                </div>
            @else
                <div id="content"></div>
            @endif
        </div>
        <input name="_token" id="_token" type="hidden" value="{{ csrf_token() }}" />
        <link href='https://fonts.googleapis.com/css?family=Pacifico' rel='stylesheet' type="text/css" />
        <script type="text/javascript" src="{{asset('public/assets/libs/react/react.min.js')}}"></script>
        <script type="text/javascript" src="{{asset('public/assets/libs/jquery/dist/jquery.min.js')}}"></script>
        <script type="text/javascript" src="{{asset('public/assets/libs/moment/min/moment.min.js')}}"></script>
        <script type="text/javascript" src="{{asset('public/assets/libs/toastr/toastr.min.js')}}"></script>
        <script type="text/javascript" src="{{asset('public/assets/dist/ui/components/companyselector.js')}}"></script>
        <script type="text/javascript" src="{{asset('public/assets/dist/ui/components/monthselection.js')}}"></script>
        <script type="text/javascript" src="{{asset('public/assets/dist/ui/components/entrysheet.js')}}"></script>
    </body>
</html>
