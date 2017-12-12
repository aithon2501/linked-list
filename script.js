




$('.submit-button').on('click', function () {
  // newBookmark();
  errorCheck();
  // changeFocus();
});

$('.section-2').on('click','#read-button', function () {
  console.log("read click");
  $(this).parent().toggleClass('read');
});

$('.section-2').on('click', '#delete-button', function () {
  console.log('delete click');
  $(this).parent().remove()
});

function newBookmark () {
    var name = $('.website-name-input').val();
  var url = $('.website-url').val();
  var x = '<article class="bookmark-1"><h2>'+name+'</h2><hr><p class="website-link">'+url+'</p><hr><button class="link-button" id="read-button">Read</button><button class="link-button" id="delete-button">Delete</button></article>'
  $('.section-2').prepend(x);
}

function errorCheck () {
  if (($('.website-name-input').val() === '') || $('.website-url').val() === ''){
    alert("Error!!!!");
    // changeFocus();
  } else {
    newBookmark();
  }
};

// function changeFocus () {
//   $('.website-name-input').focus();
//   $('.website-name-input').text('');

// }