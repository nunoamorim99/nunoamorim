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


//---------------------------------------------------------------------------------------------
