const { json, text } = require('body-parser');
const express = require('express');
const app = express();
const { jsPDF } = require("jspdf");

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('myapp listening on port ' + port);
});

app.use(express.static('public'))

app.get("/postWords/:c", async(req,res) => {
  console.log(req.params.c);
  let nwords = req.params.c;
  let text = ""
  let linecount = 0;
  let wcount = 0;
  var pdf = new jsPDF();
  for (let i = 2; i <= nwords; i++) {
    if(wcount == 11){
      text = text + "\n";
      wcount = 0;
      linecount++;
    }
    wcount++;
    if (linecount == 40) {
      pdf.text(text, 15, 20);
      pdf.addPage();
      text = "";
      linecount = 0;
    }
    text = text + "words ";
  }

  pdf.text(text, 15, 20);
  pdf.save("words.pdf");
  var r = `ok`;
  res.send(r);
});

app.get("/nameList", async(req,res)=>{
  
  var html = `
  <html>
      <body>
      <table class="table" id="authors">`;
  let listnames = names.split(" ");  
  for(let i = 0; i < listnames.length ; i++){
    html = html + "<tr><td> " + listnames[i] +"</td></tr>";
  }
  html = html + "</table></body></html>"

  res.send(html);
});

app.get("/result", async(req,res)=>{
  

  res.send("html");
}
);