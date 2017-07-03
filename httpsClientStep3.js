const http = require("http");

function getAndPrintHTML(options){

  http.get(options , (res) =>{
    const statusCode = res.statusCode;
    const contentType = res.headers['content-type']


    let rawData = '';
    res.setEncoding('utf8');
    res.on('data', (chunk) =>{
      rawData += chunk + '\n';
    });

    res.on('end', (chunk) =>{
      console.log(rawData);
    });
  })
}

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};


getAndPrintHTML(requestOptions);