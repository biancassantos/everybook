import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "./layouts/MainLayout";
import PrivateRoute from "./layouts/PrivateRoute";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import ForgotPassword from "./pages/forgot-password/ForgotPassword";
import Home from "./pages/home/Home";
import BookPage from "./pages/book/BookPage";
import ReadingNow from "./pages/reading-now/ReadingNow";
import NextReadings from "./pages/next-readings/NextReadings";
import Favorites from "./pages/favorites/Favorites";
import Settings from "./pages/settings/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/book/:name/:key" element={<BookPage />} />
            <Route path="/reading-now" element={<ReadingNow />} />
            <Route path="/next-readings" element={<NextReadings />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Route>
  
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;