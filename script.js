



$('.submit-button').on('click', function () {
  console.log('clicky');
  var name = $('.website-name-input').val();
  var url = $('.website-url').val();
  $('.section-2').prepend('<article class="bookmark-1"><h2>'+name+'</h2><hr><p class="website-link">'+url+'</p><hr><button class="link-button" id="read-button">Read</button><button class="link-button" id="delete-button">Delete</button></article>')
  bookmarkCount();
});

$('.section-2').on('click','#read-button', function () {
  console.log("read click");
  $(this).parent().toggleClass('read');
  readCount();
});

$('.section-2').on('click', '#delete-button', function () {
  console.log("delete click");
  $(this).parent().remove();
  bookmarkCount();
});

$('.website-name-input').on('keyup', function () {
  console.log('key up working??????');
  $('.submit-button').prop('disabled', false);

})


function bookmarkCount () {
  numberOfBookmarks = $('.section-2 .bookmark-1').length;
  // $('.number-of-bookmarks').text(numberOfBookmarks);
  console.log(numberOfBookmarks);
}

function readCount () {
  var readBookmark = $('.section-2 .read').length;
  console.log("read # " + readBookmark);
}
