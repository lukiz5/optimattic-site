const BOOKING_URL = "https://calendar.app.google/GWuQbhH2p4hGBfy58";

document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('[data-booking-url]').forEach(function(link){
    link.href = BOOKING_URL;
  });
});
