import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Theme_setting_wraper from './components/Theme_setting_wraper';
import Right_sidebar from './components/Right_sidebar';
import Sidebar_offcanvas from './components/Sidebar_offcanvas';
import Footer from './components/Footer';
import Welcoe_section from './components/Welcome_section';
import Weatheter_info from './components/Weather_info';
import Booking_card from './components/Booking_card';
import Base_card from './components/Base_card';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Slider from './components/Slider';
import Base_frame from './components/Base_fram';
import To_do_list from './components/To_do_list';
import Charts from './components/Charts';
import Primary_card from './components/primary_card';
import Notifications from './components/Notifications';
import Advanced_table from './components/Advanced_table';
import Top_product_table from './components/Top_product_table';
import Project_table from './components/Project_table';
import Buttons from './components/Buttons';
import Dropdown from './components/Dropdown';

function App() {
  return (
    <BrowserRouter>
      <div className='container-scroller'>
        <Navbar />
      </div>
      <div className='container-fluid page-body-wrapper'>
        <div className='theme-setting-wrapper'  >
          <Theme_setting_wraper />
        </div>
        <div id='right-sidebar' className='settings-panel'>
          <Right_sidebar />
        </div>
        <nav className='sidebar sidebar-offcanvas' id="sidebar">
          <Sidebar_offcanvas />
        </nav>
        <div className='main-panel'>
          <div className='content-wrapper'>
            <Welcoe_section />
            <div className='row'>
              <Weatheter_info />
              <div className='col-md-6 grid-margin transparent'>
                <Booking_card />
              </div>
              <div className='row'>
                <Base_card title="Order Details" subtitle="The total number of sessions within the date range. It is the period time a user is actively engaged with your website, page or app, etc">
                  <div className="d-flex flex-wrap mb-5">
                    
                    <div className="mr-5 mt-3">
                      <p className="text-muted">Order value</p>
                      <h3 className="text-primary fs-30 font-weight-medium">12.3k</h3>
                    </div>
                    <div className="mr-5 mt-3">
                      <p className="text-muted">Orders</p>
                      <h3 className="text-primary fs-30 font-weight-medium">14k</h3>
                    </div>
                    <div className="mr-5 mt-3">
                      <p className="text-muted">Users</p>
                      <h3 className="text-primary fs-30 font-weight-medium">71.56%</h3>
                    </div>
                    <div className="mt-3">
                      <p className="text-muted">Downloads</p>
                      <h3 className="text-primary fs-30 font-weight-medium">34040</h3>
                    </div>
                  </div>
                  <canvas id="order-chart"></canvas>
                </Base_card>
                <Base_card title="Sales Report" subtitle="The total number of sessions within the date range. It is the period time a user is actively engaged with your website, page or app, etc">
                  <div id="sales-legend" className="chartjs-legend mt-4 mb-2"></div>
                  <canvas id="sales-chart"></canvas>
                </Base_card>
              </div>
              <div className='row'>
                <Slider />
              </div>
              <div className='row'>
                <Base_frame title="Top Products" coleClass="col-md-7 ">
                  <div className='table-responsive'>
                    <Top_product_table />
                  </div>
                </Base_frame>
                <Base_frame title="To Do Lists" coleClass='col-md-5'>
                  <To_do_list />
                </Base_frame>
              </div>
              <div className='row'>
                <Base_frame title="Projects" coleClass='col-md-4'>
                  <div className='table-responsiv'>
                    <Project_table />
                  </div>
                </Base_frame>
                <div className='col-md-4 stretch-card grid-margin'>
                  <div className='row'>
                    <Base_frame title="Charts" coleClass="col-md-12">
                      <Charts />
                    </Base_frame>
                    <Primary_card />
                  </div>
                </div>
                <Base_frame title="Notifications" coleClass="col-md-4">
                  <Notifications />
                </Base_frame>
              </div>
              <div className='row'>
                <Base_frame title="Advanced Table" coleClass="col-md-12">
                  <div className='row'>
                    <div className='col-12'>
                      <div className='table-responsive'>
                        <Advanced_table />
                      </div>
                    </div>
                  </div>
                </Base_frame>
              </div>
            </div>
          </div>
          <footer className='footer'>
            <Footer />
          </footer>
        </div>
      </div>
      <Routes>
        <Route path='pages/ui-features/buttons.html' element={<Buttons />}></Route>
        <Route path='pages/ui-features/dropdowns.html' element={<Dropdown />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
