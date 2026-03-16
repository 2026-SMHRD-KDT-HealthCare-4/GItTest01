const express = require("express");
const app = express();
const router = require("./routes/router");

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
// 라우터 
app.use("/",router);
// EJS 사용하기 위한 2가지 세팅 (1. 사용할 엔진의 종류 등록, 2. EJS파일들 위치 등록)
app.set("view engine","ejs");
app.set("views", __dirname+"/views");



app.listen(3000);

















