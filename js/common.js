$(document).ready(() => {
  // Time Indicating
  $(function() {
    $("#now").text(new Date().toLocaleString());
    setInterval(function() {
      $("#now").text(new Date().toLocaleString());
    }, 1000);
  });
});
