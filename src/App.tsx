import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import MainLayout from "./layouts/MainLayout";
import BookPage from "./pages/book/BookPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/book/:id" element={<BookPage />} />
        </Route>
  
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;