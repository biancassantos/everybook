import { Outlet } from "react-router";
import Header from "../components/header/Header";

function MainLayout() {
  return (
    <>
      <Header />
      <main className="py-16 px-5 sm:py-20 sm:px-10">
        <Outlet />
      </main>
    </>
  )
}

export default MainLayout;