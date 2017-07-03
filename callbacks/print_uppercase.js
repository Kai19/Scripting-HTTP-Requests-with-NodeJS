var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {
  const toUpper = html.toUpperCase();
  console.log(toUpper);
}

getHTML(requestOptions, printUpperCase);