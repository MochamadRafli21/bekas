import { Outlet } from "react-router-dom";
import Navbar from "../organisms/navbar";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <main className="p-4">
        <Outlet />
      </main>
    </>
  );
}
