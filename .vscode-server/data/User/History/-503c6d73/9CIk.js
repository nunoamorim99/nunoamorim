const { json } = require("body-parser");
const express = require("express");
const app = express();
const fetch = require("node-fetch");


//--------------------------------------------------------------------------------------------------------------------------------

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("myapp listening on port " + port);
});

//------------------------------------------------------------------------------------------------------------------------------------

app.use(express.static("public"));

//-----------------------------------------------------------------------------------------------------------------------------------
/*
app.get("/gettoken", async (req, res) => {
  console.log("/fetchapi endpoint called");
  const url =
    "https://api.moloni.pt/v1/grant/?grant_type=password&client_id=umiaieg102&client_secret=250a31bdcf5df90e8cf06b056f54da719f1b8ea2&username=a90156@alunos.uminho.pt&password=Moloni-guenus";
  const options = {
    method: "GET",
  };

  const response = await fetch(url, options)
    .then((res) => res.json())
    .catch((e) => {
      console.error({
        message: "oh nop",
        error: e,
      });
    });

  console.log("RESPONSE: ", response);
  res.send(response);
  token = response.access_token;
  console.log("token = " + token);
});
*/
//------------------------------------------------------------------------------------------------------------------------------------
/*
var formBody = [];

formBody.push("company_id" + "=" + "205170");

formBody = formBody.join("&");
*/
//-------------------------------------------------------------------------------------------------------------------------------------
/*
app.get("/getUsers", async (req, res) => {
  console.log("/fetchapi endpoint called");
  const url = `https://api.moloni.pt/v1/customers/getAll/?access_token=${token}`;

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    body: formBody,
  };

  const response = await fetch(url, options)
    .then((res) => res.json())
    .catch((e) => {
      console.error({
        message: "oh nop",
        error: e,
      });
    });

  console.log("RESPONSE: ", response);
  res.send(response);
});
*/
//-------------------------------------------------------------------------------------------------------------------------------------------
/*
var form = [];
form.push("company_id" + "=" + "205170");

app.get("/getBills/:c", async (req, res) => {
  console.log("/fetchapi endpoint called");
  const url = `https://api.moloni.pt/v1/invoices/getAll/?access_token=${token}`;

  form.push("customer_id=" + req.params.c);

  formBody2 = form.join("&");

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    body: formBody2,
  };

  const response = await fetch(url, options)
    .then((res) => res.json())
    .catch((e) => {
      console.error({
        message: "oh nop",
        error: e,
      });
    });

  console.log("RESPONSE: ", response);
  res.send(response);
  console.log(req.params.c);
});*/


const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end('<h1>Hello, World!</h1>')
})

server.listen(port, () => {
  console.log(`Server running at port ${port}`)
})