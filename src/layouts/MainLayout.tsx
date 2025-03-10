import { Outlet } from "react-router";
import Header from "../components/header/Header";

function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default MainLayout;