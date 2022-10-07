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


let names ="";

//-----------------------------------------------------------------------------------------------------------------------------------

app.get("", async (req, res) => {
  var html = `
            <html>
                <body>
                    <form method="post">Name: 
                        <input type="text" id="name" />
                        <input type="button" value="Submit" onclick="postNames()"/>
                    </form>
                    <form method="get" action="http://localhost:3000/getNames">Get name list
                    <input type="submit" value="Get" />
                    </form>                   
                    <script>
                      async function postNames(){
                        let name = document.getElementById("name").value;
                        let res = await fetch('http://localhost:3000/postNames/' + name);
                        document.getElementById("name").value = "";
                      }
                    </script>
                </body>
            </html>`
    //res.writeHead(200, {'Content-Type': 'text/html'})
    res.send(html)
});

//-------------------------------------------------------------------------------------------------------------------------------------

app.get("/getNames", async (req, res) => {
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

  var fs = require('fs');

//create a file named mynewfile1.txt:
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

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



