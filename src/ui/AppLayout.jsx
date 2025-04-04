import { Outlet } from "react-router-dom";
import Home from "../pages/Home";

function AppLayout() {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
