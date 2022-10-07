const { json } = require("body-parser");
const express = require("express");
const app = express();

//--------------------------------------------------------------------------------------------------------------------------------

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("myapp listening on port " + port);
});

//------------------------------------------------------------------------------------------------------------------------------------

app.use(express.static("public"));

//-----------------------------------------------------------------------------------------------------------------------------------


//-------------------------------------------------------------------------------------------------------------------------------------

app.get("/getUsers", async (req, res) => {
  console.log("/fetchapi endpoint called");

  var response = `
  <html>
      <body>
      <table class="table" id="authors">`;
  let listnames = names.split(" ");  
  for(let i = 0; i < listnames.length ; i++){
    response = response + "<tr><td> " + listnames[i] +"</td></tr>";
  }
  response = response + "</table></body></html>"

  
  res.send(response);
});

//-------------------------------------------------------------------------------------------------------------------------------------------

app.get("/postNames/:c", async(req,res) => {
  console.log(req.params.c);
  names = names +" " + req.params.c;
  var html = `
  <html>
      <body>
      <p>Name received</p>
          <form method="get" action="http://localhost:3000">
               <input type="submit" value="Again" />
          </form>
      </body>
  </html>`;
  res.send(html);
});

//---------------------------------------------------------------------------------------------
