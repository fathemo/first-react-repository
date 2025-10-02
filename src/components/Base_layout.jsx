import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Right_sidebar from "./Right_sidebar";
import Sidebar_offcanvas from "./Sidebar_offcanvas";
import Theme_setting_wraper from "./Theme_setting_wraper";

export default function Base_layout() {
    return <>
        <div className='container-scroller'>
            <Navbar />
        </div>
        <div className="container-fluid page-body-wrapper">
            <div className='theme-setting-wrapper'  >
                <Theme_setting_wraper />
            </div>
            <div id='right-sidebar' className='settings-panel'>
                <Right_sidebar />
            </div>ّ
            <nav className='sidebar sidebar-offcanvas' id="sidebar">
                <Sidebar_offcanvas />
            </nav>
            <div className="main-panel">
                <Outlet/>
                <footer className='footer'>
                    <Footer />
                </footer>
            </div>
        </div>
    </>
}