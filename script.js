

var websiteNameInput = document.querySelector('.website-name-input');
var urlInput = document.querySelector('.website-url');
var submitButton = document.querySelector('.submit-button');
var websiteNameOutput = document.querySelector('h2')
var urlOutput = document.querySelector('.website-link');
var readButton = document.querySelector('#read-button');
var deleteButton = document.querySelector('#delete-button');


submitButton.addEventListener('click', function(e) {
  e.preventDefault();
  websiteNameOutput.innerText = "hello";
  console.log('click');
});

function Bookmark(websiteNameInput, urlInput) {
  this.siteName = websiteNameInput;
  this.url = urlInput;
};

var newBookmark = new Bookmark('google', 'www.google.com');


