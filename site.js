const BOOKING_URL = "BOOKING_URL_DO_UZUPELNIENIA";

document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('[data-booking-url]').forEach(function(link){
    link.href = BOOKING_URL;
  });
});
