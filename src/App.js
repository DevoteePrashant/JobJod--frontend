import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./component/LoginPage";
import Signup from "./component/Signup";
import Dashboard from "./component/Dashboard";
import Jobseeker from "./component/Jobseeker";
import Job from "./component/Job";
// import Header from "./component/Header";
import Profile from "./component/Profile";
import Message from "./component/Message";
import Home from "./component/Home";
import JobListingPage from "./component/JobListingPage";
import JobseekersSubSection from "./component/JobseekersSubSection";
import LogoSlider from "./component/LogoSlider";
import Singlejobview from "./component/Singlejobview";
import Singlejobviews from "./component/Singlejobviews";
// import Footer from "./component/Footer";
// import Filters from "./component/Filters";
// import JobList from "./component/JobList";
// import RightSidebar from "./component/RightSidebar";
// import Sidebar from "./component/Sidebar";



function App() {
  return (
    <>
      <Router> 
        {/* <Header/> */}
        <Routes> 
         
           <Route path="/" element={<Home  />} /> 
          <Route path="/LoginPage" element={<LoginPage />} /> 
          <Route path="/Signup" element={<Signup  />} /> 
          <Route path="/Jobseeker" element={<Jobseeker />} /> 
          <Route path="/Dashboard" element={<Dashboard/>} /> 
          <Route path="/Job" element={<Job/>}/>
          <Route path="/Profile" element={<Profile />}/>
          <Route path="/Message" element={<Message />}/>
          <Route path="/JobListingPage" element={<JobListingPage />}/>
          <Route path="/JobseekersSubSection" element={<JobseekersSubSection />}/>
          <Route path="/Singlejobview" element={<Singlejobview />}/>
          <Route path="/Singlejobviews" element={<Singlejobviews />}/>

          {/* <Route path="/Filters" element={<Filters />}/> */}
          {/* <Route path="/JobList" element={<JobList />}/>
          <Route path="/RightSidebar" element={<RightSidebar />}/> */}
   </Routes> 
        {/* <Footer/> */}
        
      </Router>
    </>
  );
}

export default App;
