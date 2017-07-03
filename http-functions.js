

module.exports = function getHTML(options, callback) {

  const http = require("http");

  http.get(options , (res) =>{

    let rawData = '';
    res.setEncoding('utf8');
    res.on('data', (chunk) =>{
      rawData += chunk + '\n';
    });

    res.on('end', (chunk) =>{
      callback(rawData);
    });
  });
}

