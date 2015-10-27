<!DOCTYPE html>
<html>
    <head>
        <title>Entries / Perscriptio.nl</title>
		<meta charset="UTF-8" />
        <link rel="stylesheet" href="{{asset('public/assets/style/css/main.css')}}" />
        <link rel="stylesheet" href="{{asset('public/assets/libs/toastr/toastr.min.css')}}" />
    </head>
    <body>
        <div id="content">
            <div class="container">
                <div class="row">
                    <div class="col-2">
                        Datum
                    </div>
                    <div class="col-2">
                        Uren
                    </div>
                    <div class="col-2">
                        Customer - Project
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
                            @if($entry->project == 1)
                                Coopbespaarpoen.nl
                            @elseif($entry->project == 2)
                                Fitnessvoordeelpas.nl
                            @elseif($entry->project == 3)
                                Beautyvoordeelpas.nl
                            @elseif($entry->project == 4)
                                Webwinkelpas.nl
                            @elseif($entry->project == 12)
                                Cooponlinesparen.nl
                            @elseif($entry->project == 13)
                                Nagelvoordeelpas
                            @elseif($entry->project == 14)
                                Vesvoordeelpas.nl
                            @elseif($entry->project == 15)
                                Lanzavoordeelpas.nl
                            @elseif($entry->project == 16)
                                Hotelvoordeelpas
                            @elseif($entry->project == 17)
                                Saunavoordeelpas.nl
                            @elseif($entry->project == 18)
                                Yourgiftvoordeel.nl
                            @elseif($entry->project == 19)
                                Meinfitnessvorteil.de
                            @elseif($entry->project == 20)
                                Op=opvoordeelshop.nl
                            @endif
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
            </div>
        </div>
        <input name="_token" id="_token" type="hidden" value="{{ csrf_token() }}" />
        <link href='https://fonts.googleapis.com/css?family=Pacifico' rel='stylesheet' type="text/css" />
        <script type="text/javascript" src="{{asset('public/assets/libs/react/react.min.js')}}"></script>
        <script type="text/javascript" src="{{asset('public/assets/libs/jquery/dist/jquery.min.js')}}"></script>
        <script type="text/javascript" src="{{asset('public/assets/libs/moment/min/moment.min.js')}}"></script>
        <script type="text/javascript" src="{{asset('public/assets/libs/toastr/toastr.min.js')}}"></script>
    </body>
</html>
