import { Outlet } from "react-router";
import Header from "../components/header/Header";

function MainLayout() {
  return (
    <>
      <Header />
      <main className="py-20 px-10">
        <Outlet />
      </main>
    </>
  )
}

export default MainLayout;