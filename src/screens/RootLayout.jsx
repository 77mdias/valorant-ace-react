import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Aside from "../components/Aside";
import "../scss/main.scss"


export default function RootLayout() {
    return (
       <div className="row">
        <Header />
        <Aside />
        <main className="main-content col-12 col-lg-9 col-xl-9 col-xxl-10">
          <Outlet />
        </main>
       </div>
    );
}