const http = require("http");

function getHTML(options, callback){

  http.get(options , (res) =>{
    const statusCode = res.statusCode;
    const contentType = res.headers['content-type']


    let rawData = '';
    res.setEncoding('utf8');
    res.on('data', (chunk) =>{
      rawData += chunk + '\n';
    });

    res.on('end', (chunk) =>{
      callback(rawData);
    });
  })
}

function printHTML (html) {
  console.log(html);
}


const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};


getHTML(requestOptions, printHTML);