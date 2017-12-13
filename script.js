bookmarkCount();
readCount();

$('.submit-button').on('click', function() {
  errorCheck();
  bookmarkCount();
  clearInputFields();
});

$('.section-2').on('click','#read-button', function() {
  $(this).parent().toggleClass('read');
  readCount();
});

$('.section-2').on('click', '#delete-button', function() {
  console.log("delete click");
  $(this).parent().remove();
  bookmarkCount();
});

$('.website-name-input, .website-url').on('keyup', function() {
  enableButton();
})

function newBookmark() {
  var name = $('.website-name-input').val();
  var url = $('.website-url').val();
  var newArticle = '<article class="bookmark-1"><h2>'+name+'</h2><hr><a target="_blank" href="http://'+url+'" class="website-link">'+url+'</a><hr><button class="link-button" id="read-button">Read</button><button class="link-button" id="delete-button">Delete</button></article>'
  $('.section-2').prepend(newArticle);
}

function bookmarkCount() {
  readCount();
  var numberOfBookmarks = $('.section-2 .bookmark-1').length;
  $('.number-of-bookmarks').text('Total bookmarks: ' +  numberOfBookmarks);
}

function readCount() {
  var readBookmark = $('.section-2 .read').length;
  $('.read-bookmarks').text('Read bookmarks: ' + readBookmark);
}

function enableButton() {
  if (($('.website-name-input').val() === '') || $('.website-url').val() === ''){
    $('.submit-button').prop('disabled', true);
  } else {
    $('.submit-button').prop('disabled', false);
  }
}

function errorCheck() {
  if (($('.website-name-input').val() === '') || $('.website-url').val() === ''){
    alert("Error!!!! Please enter a website name and URL.");
  } else {
    newBookmark();
  }
};

function clearInputFields() {
  $('.website-name-input').val('');
  $('.website-url').val('');
  $('.website-name-input').focus();
  enableButton();
}




