const express = require("express");
const router = express.Router();
//가형주석작성

// 지명 주석 작성

// 나연 주석 작성


// 캬옵


// 가상의 DB공간을 생성(임시)
let user = [];

// 1. 메인페이지 생성
router.get("/", (req, res) => {
  let id = req.query.id;
  res.render("main", { id });
})
// 2. 사용자가 보낸 join에 대한 응답페이지 생성
router.get("/join", (req, res) => {
  res.render("join");
})
// 3. 사용자가 보낸 id.pw를 저장하는 코드 작성 -> 실질적인 회원가입 로직을 담당
router.post("/join", (req, res) => {
  // 1) 넘겨받은 id,pw 받아오기
  console.log(req.body);
  let { id, pw } = req.body;
  // 2) DB에 id, pw 저장 -> 배열에 넘겨받은 데이터를 저장(임시방편)
  user.push(req.body);
  console.log("회원정보", user);
  // 3) 가입완료 -> 메인페이지 / 가입실패 -> 회원가입실패 알림 후 가입페이지 보여주기
  if (user.length > 0) {

    res.redirect("/");
  } else {
    // send 함수는 보통 서버에서 클라이언트에게 <script>코드를 넘겨 클라이언트가 코드를
    // 실행할 수 있게 코드를 보내줄때 사용한다
    res.send("<script>alert('회원가입 실패'); location.href='/join';</script>");
  }
})
// 4. 사용자가 보낸 login 대한 응답페이지 생성
router.get("/login", (req, res) => {
  res.render("login");
})
// 5. 사용자가 보낸 id,pw를 받아 로그인하는 코드 작성
router.post("/login", (req, res) => {
  // 1) 보낸 데이터 받아주기
  const { id, pw } = req.body;
  console.log(id, pw);
  // 2) DB에 있는 회원정보와 값을 배교 -> 임시방편으로 배열과 비교
  for (let i = 0; i < user.length; i++) {
    if (id == user[i].id && pw == user[i].pw) {
      res.redirect(`/?id=${id}`); // URL 쿼리스트링에서 경로 뒤에 ?객체값+템플릿리터럴
      return;
    }
  }
  // 3) 로그인완료 -> 메인페이지 / 로그인실패 -> 로그인실패 알림 후 로그인페이지 보여주기
  res.send("<script>alert('로그인 실패'); location.href='/login';</script>");
})
// 6. 로그인 성공시 전체 회원 조회 리스트 제작
router.get("/list",(req,res)=>{
  res.render("list",{user});
})
module.exports = router;









