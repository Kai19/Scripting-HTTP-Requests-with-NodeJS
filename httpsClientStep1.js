const http = require("http");

function getAndPrintHTMLChunks(){


  const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  http.get(requestOptions , (res) =>{
    const statusCode = res.statusCode;
    const contentType = res.headers['content-type']


    let rawData = '';
    res.setEncoding('utf8');
    res.on('data', (chunk) =>{
      rawData += chunk + '\n';
      console.log(chunk);
    });

    res.on('end', (chunk) =>{
      console.log("Finished");
    });


  })


}

getAndPrintHTMLChunks();