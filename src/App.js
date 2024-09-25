import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Homepage, Blogpage, TestimonialPage, VideoCourseBookingPage, Authpage, Cartpage, OrderHistoryPage, AboutUs, VideoCourseDetails} from './pages';
import {Navbar, Sidebar} from './components';
import 'react-toastify/dist/ReactToastify.css';
import {useSidebarContext} from './context/sidebar_context';


function App() {

  const {isSidebarOpen} = useSidebarContext();

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/blogpost" element={<Blogpage />} />
          <Route exact path="/testimionial" element={<TestimonialPage />} />
          <Route exact path="/videcoursebookpage" element={<VideoCourseBookingPage />} />
          <Route exact path="/auth" element={<Authpage />} />
          <Route exact path="/cart" element={<Cartpage />} />
          <Route exact path="/orderhistory" element={<OrderHistoryPage />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route exact path="/videocoursedetailpage" element={<VideoCourseDetails />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;