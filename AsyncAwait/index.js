var http = require('http');




let loader=0;
http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  

  
  async function showImage(){
 
   await  http.get("http://via.placeholder.com/150", (response) => {
      console.log(response);
      response.setEncoding('base64');
      body = "data:" + response.headers["content-type"] + ";base64,";
      response.on('data', (data) => { body += data });
      response.on('end', () => {
      
      res.end('<img src=" '+ body +'" alt="image"></img>'); 
      loader=1;
      });
    });};
    res.write("<h1>Welcome to cronJ</h1>");
   showImage();
   let load="data:image/gif;base64,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";
   if(loader==0)
   res.write('<img src=" '+ load +'" alt="image"></img>');
   
}).listen(8080);