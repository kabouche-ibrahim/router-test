import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home"
import { About } from "./components/About"
import { NavBar } from "./components/NavBar";
import LoginForm from "./components/LoginForm";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="login-page" element={<LoginForm />} />
      </Routes>
    </>
  );
}

export default App;
