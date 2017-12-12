




$('.submit-button').on('click', function () {
  console.log("clicker");

  var name = $('.website-name-input').val();
  // $('h2').text(name);
  var url = $('.website-url').val();
  // $('.website-link').text(url);

  var x = '<article class="bookmark-1"><h2>'+name+'</h2><hr><p class="website-link">'+url+'</p><hr><button class="link-button" id="read-button">Read</button><button class="link-button" id="delete-button">Delete</button></article>'
  $('.section-2').prepend(x);
  
  getInfo();
});

$('.section-2').on('click','#read-button', function () {
  console.log("read click");
  $(this).parent().toggleClass('read');
})

$('.section-2').on('click', '#delete-button', function () {
  console.log('delete click');
  $(this).parent().remove()
})

