import { Route, Routes } from "react-router-dom"
import { Home } from "../Home/Home"
import { Login } from "../Login/Login"
import { Signup } from "../signup/Signup"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
  )
}

export default App
