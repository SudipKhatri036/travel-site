import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import { useEffect } from "react";
import Footer from "../components/Footer";

function AppLayout() {
  const { pathname } = useLocation();

  useEffect(() => {}, [pathname]);

  return (
    <>
      <Header pathname={pathname} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default AppLayout;
