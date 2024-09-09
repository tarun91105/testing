const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const cors = require("cors");
app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const jsonMiddleware = express.json();
app.use(jsonMiddleware);
const path = require("path");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
let db = null;
const dbPath = path.join(__dirname, "Bank.db");

const InitializingServer = async () => {
  db = await open({
    filename: dbPath,
    driver: sqlite3.Database,
  });
  app.listen(3000, () => {
    console.log("Server is Running at port:3000");
  });
};

InitializingServer();

app.post("/", (request, response) => {
  const Body = request.body;
  const { username, password } = Body;
  const data = request.body;
  console.log("called");
  response.send({ sent: "sent" });
});
app.put("/create", async (request, response) => {
  const Body = request.body;
  const { name, gender, type, number, Balance } = Body;
  const query = `Insert into accounts(name,type,gender,number,balance)values('${name}','${type}','${gender}','${number}','${Balance}')`;
  const d = await db.run(query);
  console.log(name, gender, type);
  response.send({ success: "success" });
});

app.get("/acc", async (request, response) => {
  const query = `select * from accounts`;
  const f = await db.all(query);
  response.send(f);
});
app.get("/Details/:number", async (request, response) => {
  const { number } = request.params;
  const query = `select * from accounts where number==${number}`;
  const acc = await db.all(query);

  response.send(acc);
});

app.put("/edit/balance", async (request, response) => {
  const Body = request.body;
  const { bal, n } = Body;
  const query = `update accounts set balance=${bal} where number=${n}`;
  const data = await db.run(query);
  const query2 = `select * from accounts where number==${n}`;
  const data1 = await db.get(query2);
  const q = `insert into history(number,method,amount,time) values('${data1.number}',"Deposit",'${bal}',"2")`;
  const d3 = await db.run(q);
});

app.put("/edit/withdraw", async (request, response) => {
  const Body = request.body;
  const { bal, n } = Body;
  const query1 = `update accounts set balance=${bal} where number=${n}`;
  const query2 = `select * from accounts where number==${n}`;
  const data1 = await db.get(query2);
  const data = await db.run(query1);
  const d = new Date();
  const corr =
    d.getMinutes() +
    " min -" +
    d.getHours() +
    " Hrs /" +
    d.getFullYear() +
    "-" +
    d.getDate();
  const q = `insert into history(number,method,amount,time) values('${data1.number}',"withdraw",'${bal}','${corr}')`;
  const d3 = await db.run(q);
});

app.get("/transactions", async (request, response) => {
  const query = `select * from history`;
  const data = await db.all(query);
  response.send(data);
});

app.post("/register", async (request, response) => {
  const Body = request.body;
  const { username, password } = Body;
  const query = `select * from user`;

  const data = await db.all(query);
  console.log(data);
  const ele = data.find(function (i) {
    return i.username == username;
  });
  if (ele === undefined) {
    const query2 = `insert into user(username,password) values('${username}','${password}')`;
    const data2 = await db.run(query2);
    response.send({ success: "success" });
  } else {
    response.send({ success: "not" });
  }
});

app.post("/login", async (request, response) => {
  const { username, password } = request.body;
  const query = `select * from user`;

  const data = await db.all(query);
  console.log(data);
  const ele = data.find(function (i) {
    return i.username == username;
  });
  console.log(ele);
  if (ele === undefined) {
    response.status(400);
  } else if (ele.password !== password) {
    response.send({ valid: "invalid" });
  } else {
    const payload = { username: username };
    const token = await jwt.sign(payload, "token");
    response.send({ valid: token });
  }
});

app.get("///",(req,res)=>{
    res.send("Runninf");
    console.log("runninfff")
})