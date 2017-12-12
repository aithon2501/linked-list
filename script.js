



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
  // $('.submit-button').prop('disabled', false);
  // enableButton();
  $('.submit-button').prop('disabled', false);
})


function bookmarkCount () {
  var numberOfBookmarks = $('.section-2 .bookmark-1').length;
  // $('.number-of-bookmarks').text(numberOfBookmarks);
  console.log(numberOfBookmarks);
  $('.number-of-bookmarks').text('Total bookmarks: ' +  numberOfBookmarks);
}

function readCount () {
  var readBookmark = $('.section-2 .read').length;
  console.log("read # " + readBookmark);
  $('.read-bookmarks').text('Read bookmarks: ' + readBookmark);
}

function enableButton() {
  if ( ($('.website-name-input').val().length > 1) && ($('.website-url').val().length > 1)) {
    $('.submit-button').prop('disabled', false);
  } else {
    $('.submit-button').prop('disabled', true);
  }
}