// import styles from "./App.module.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//react router를 사용하기 위해 임포트
import Home from "./routes/Home.js";
import Detail from "./routes/Detail";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/hello" element=<h1>Hello</h1>/>
        <Route path="/movie/:id" element={<Detail />}/>
        <Route path="/" element={<Home />}/>
      </Routes>
    </Router>
  );
}
// path에 :id 같이 작성하여 변수를 받을 수 있음
// Movie.js에 설정해두었음
export default App;
