$('#ID-count').countdown('2016/05/25 14:30:00+01:00', function(event) {
  $(this).html(event.strftime('%D <span class="time">days</span> %H <span class="time">hours</span> %M <span class="time">mins</span> %S <span class="time">secs</span>'));

  if ($('#ID-count:contains("00 days 00 hours 00 mins 00 secs")').length > 0) {
    $(this).html(event.strftime("<span class='complete'>EXAM COMPLETE!</span>"));
    $('.ID').css("opacity", "0.8");
    $('.ID').css("color", "grey");
  }

});

$('#DMSN-count').countdown('2016/05/31 10:00:00+01:00', function(event) {
  $(this).html(event.strftime('%D <span class="time">days</span> %H <span class="time">hours</span> %M <span class="time">mins</span> %S <span class="time">secs</span>'));

  if ($('#DMSN-count:contains("00 days 00 hours 00 mins 00 secs")').length > 0) {
    $(this).html(event.strftime("<span class='complete'>EXAM COMPLETE!</span>"));
    $('.DMSN').css("opacity", "0.8");
    $('.DMSN').css("color", "grey");
  }

});

$('#WP-count').countdown('2016/06/02 10:00:00+01:00', function(event) {
  $(this).html(event.strftime('%D <span class="time">days</span> %H <span class="time">hours</span> %M <span class="time">mins</span> %S <span class="time">secs</span>'));

  if ($('#WP-count:contains("00 days 00 hours 00 mins 00 secs")').length > 0) {
    $(this).html(event.strftime("<span class='complete'>EXAM COMPLETE!</span>"));
    $('.WP').css("opacity", "0.8");
    $('.WP').css("color", "grey");
  }

});

$('#PD-count').countdown('2016/06/03 10:00:00+01:00', function(event) {
  $(this).html(event.strftime('%D <span class="time">days</span> %H <span class="time">hours</span> %M <span class="time">mins</span> %S <span class="time">secs</span>'));

  if ($('#PD-count:contains("00 days 00 hours 00 mins 00 secs")').length > 0) {
    $(this).html(event.strftime("<span class='complete'>EXAM COMPLETE!</span>"));
    $('.PD').css("opacity", "0.8");
    $('.PD').css("color", "grey");
  }
});
