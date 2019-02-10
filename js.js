$(document).ready(function() {

    $("p").each(function(n){
      $(this).attr("class", n);

      $(this).prepend(n + ' ');
      $(this).append('<hr>');

      $('#sidebar ul').append('<li class="scroll'+n+'">'+n+'</li>');
      $('li.scroll'+n).click(function() {
        $('html, body').animate({
          scrollTop: $('p.'+n).offset().top -100
        },500);
      });
    });

    $('#scrollTop').click(function() {
      $('html, body').animate({
        scrollTop: $('#top').offset().top
      },500);
    });

});