// $('#ID-count').countdown('2016/05/25 14:30:00+01:00', function(event) {
//   $(this).html(event.strftime('%D <span class="time">days</span> %H <span class="time">hours</span> %M <span class="time">mins</span> %S <span class="time">secs</span>'));
//
//   if ($('#ID-count:contains("00 days 00 hours 00 mins 00 secs")').length > 0) {
//     $(this).html(event.strftime("<span class='complete'>EXAM COMPLETE!</span>"));
//     $('.ID').css("opacity", "0.8");
//     $('.ID').css("color", "grey");
//   }
//
// });
//
// $('#DMSN-count').countdown('2016/05/31 10:00:00+01:00', function(event) {
//   $(this).html(event.strftime('%D <span class="time">days</span> %H <span class="time">hours</span> %M <span class="time">mins</span> %S <span class="time">secs</span>'));
//
//   if ($('#DMSN-count:contains("00 days 00 hours 00 mins 00 secs")').length > 0) {
//     $(this).html(event.strftime("<span class='complete'>EXAM COMPLETE!</span>"));
//     $('.DMSN').css("opacity", "0.8");
//     $('.DMSN').css("color", "grey");
//   }
//
// });
//
// $('#WP-count').countdown('2016/06/02 10:00:00+01:00', function(event) {
//   $(this).html(event.strftime('%D <span class="time">days</span> %H <span class="time">hours</span> %M <span class="time">mins</span> %S <span class="time">secs</span>'));
//
//   if ($('#WP-count:contains("00 days 00 hours 00 mins 00 secs")').length > 0) {
//     $(this).html(event.strftime("<span class='complete'>EXAM COMPLETE!</span>"));
//     $('.WP').css("opacity", "0.8");
//     $('.WP').css("color", "grey");
//   }
//
// });
//
// $('#PD-count').countdown('2016/06/03 10:00:00+01:00', function(event) {
//   $(this).html(event.strftime('%D <span class="time">days</span> %H <span class="time">hours</span> %M <span class="time">mins</span> %S <span class="time">secs</span>'));
//
//   if ($('#PD-count:contains("00 days 00 hours 00 mins 00 secs")').length > 0) {
//     $(this).html(event.strftime("<span class='complete'>EXAM COMPLETE!</span>"));
//     $('.PD').css("opacity", "0.8");
//     $('.PD').css("color", "grey");
//   }
// });














// ===================================================================================================================================
// ===================================================================================================================================
// GENERATE EXAM CARDS
// ===================================================================================================================================
// ===================================================================================================================================

var timestamps = [1527515005, 1527515005, 1527515005, 1527515005, 1527515005, 1527515005, 1527515005, 1527515005, 1527515005, 1527515005, 1527515005, 1527515005];
var boards = ["AQA","EDEXCEL","AQA","AQA","EDEXCEL","AQA","EDEXCEL","EDEXCEL","EDEXCEL","EDEXCEL","AQA","EDEXCEL"];
var papers = ["English Language Paper 1", "Geography: Human Environment","Spanish Listening","Spanish Reading","Maths Calculator","English Language Paper 2","Biology Paper 2","Geography: Investigations","Maths Calculator","Chemistry Paper 2","Spanish Writing","Physics Paper 2"]
var durations = ["1hr 45m", "1hr 30m", "0hr 45m","1hr 00m","1hr 30m","1hr 45m","1hr 10m","1hr 30m","1hr 30m","1hr 10m","1hr 15m","1hr 10m"];
var venues = ["Exam Hall","Exam Hall","Exam Hall","Exam Hall","Exam Hall","Exam Hall","Exam Hall","Exam Hall","Exam Hall","Exam Hall","Maths Hall","Exam Hall"];
var seats = ["G4", "D10", "D5", "D6", "G5", "F8", "G3", "G12", "H12", "G3", "E12", "G3"];


for (var i = 0; i <12; i++){

  var processedTime = timeConverter(timestamps[i]);

  function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();

    var ampm = hour >= 12 ? 'pm' : 'am';
    hour = hour % 12;
    hour = hour ? hour : 12; // the hour '0' should be '12'
    min = min < 10 ? '0'+min : min;

    var timestamp = UNIX_timestamp;
    var xx = new Date();
    xx.setTime(timestamp*1000); // javascript timestamps are in milliseconds
    xx.toUTCString();
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var dayOfWeek = days[xx.getDay()];
    var determineImportance1 = "entry";
    var determineImportance2 = "entry animated fadeInUp";
    if (i >= 1){
      determineImportance1 = "entry-2";
      determineImportance2 = "entry-2 animated animatedFadeIn-2 fadeIn-2";
    }

  // var content ='<br>'+ dayOfWeek + " " + date + " " + month + " " + hour + ":" + min + ampm + " " + boards[i] + " " + papers[i] + " " + durations[i] + " " + venues[i] + " " + seats[i];
  // alert (content);

   document.getElementById('panel-here').innerHTML = document.getElementById('panel-here').innerHTML + ('<div class=\"entry-parent\"> <div id=\"'+ determineImportance1 + '\" class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 '+ determineImportance2 +'\"> <div class=\"row\"> <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\"> <span id=\"date\" class=\"date\"> ' + dayOfWeek + " " + date + " " + month + '<\/span> <\/div><div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\"> <span id=\"time\" class=\"time\"> '+ hour + ":" + min + ampm + '<\/span> <\/div><div style=\"padding: 15px 15px 5px;\" class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\"> <span class=\"board\">' + boards[i] + '<\/span>&nbsp;&nbsp;<span class=\"paper\"><br>' + papers[i] + '<\/span> <\/div><div style=\"padding: 15px 15px 5px;\" class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\"> <div class=\"row\"> <div style=\"text-align:left\" class=\"col-xs-8 col-sm-8 col-md-6 col-lg-6\"> <span class=\"dur-ven\"><span class=\"duration\">'+ durations[i] + '<\/span>&nbsp;&nbsp;|&nbsp;&nbsp;<span class=\"venue\">' + venues[i] + '<\/span><\/span> <\/div><div style=\"text-align:right\" class=\"col-xs-4 col-sm-4 col-md-6 col-lg-6\"> <span class=\"seat\">Seat ' + seats[i] + '<\/span> <\/div><\/div><\/div><\/div><\/div><\/div><br><br><br><br><br><br><br><br>');



  }


}

// ===================================================================================================================================
// ===================================================================================================================================
// ===================================================================================================================================
// ===================================================================================================================================
// ===================================================================================================================================
