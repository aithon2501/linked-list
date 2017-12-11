

var websiteNameInput = document.querySelector('.website-name-input');
var urlInput = document.querySelector('.website-url');
var submitButton = document.querySelector('.submit-button');
var websiteNameOutput = document.querySelector('h2')
var urlOutput = document.querySelector('.website-link');
var readButton = document.querySelector('#read-button');
var deleteButton = document.querySelector('#delete-button');
var bookmark = document.querySelector('.bookmark-1');


$('.submit-button').on('click', function () {
  console.log('clicky');
  var name = $('.website-name-input').val();
  var url = $('.website-url').val();
  $('.section-2').prepend('<article class="bookmark-1"><h2>'+name+'</h2><hr><p class="website-link">'+url+'</p><hr><button class="link-button" id="read-button">Read</button><button class="link-button" id="delete-button">Delete</button></article>')
});

$('.section-2').on('click','#read-button', function () {
  console.log("read click");
  $(this).parent().toggleClass('read');
});

$('.section-2').on('click', '#delete-button', function () {
  console.log("delete click");
  $(this).parent().remove();
});





