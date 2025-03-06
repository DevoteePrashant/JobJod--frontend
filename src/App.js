// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LoginPage from "./component/LoginPage";
// import Signup from "./component/Signup";
// import Dashboard from "./component/Dashboard";
// import Jobseeker from "./component/Jobseeker";
// import Job from "./component/Job";
// // import Header from "./component/Header";
// import Profile from "./component/Profile";
// import Message from "./component/Message";
// import Home from "./component/Home";
// import JobListingPage from "./component/JobListingPage";
// import JobseekersSubSection from "./component/JobseekersSubSection";
// import LogoSlider from "./component/LogoSlider";
// import Singlejobview from "./component/Singlejobview";
// import Singlejobviews from "./component/Singlejobviews";
// // import BackgroundGlow from "./component/BackgroundGlow";
// // import Footer from "./component/Footer";
// // import Filters from "./component/Filters";
// // import JobList from "./component/JobList";
// // import RightSidebar from "./component/RightSidebar";
// // import Sidebar from "./component/Sidebar";



// function App() {
//   return (
//     <>
//       <Router> 
//         {/* <Header/> */}
//         <Routes> 
         
//            <Route path="/" element={<Home  />} /> 
//           <Route path="/LoginPage" element={<LoginPage />} /> 
//           <Route path="/Signup" element={<Signup  />} /> 
//           <Route path="/Jobseeker" element={<Jobseeker />} /> 
//           <Route path="/Dashboard" element={<Dashboard/>} /> 
//           <Route path="/Job" element={<Job/>}/>
//           <Route path="/Profile" element={<Profile />}/>
//           <Route path="/Message" element={<Message />}/>
//           <Route path="/JobListingPage" element={<JobListingPage />}/>
//           <Route path="/JobseekersSubSection" element={<JobseekersSubSection />}/>
//           <Route path="/Singlejobview" element={<Singlejobview />}/>
//           <Route path="/Singlejobviews" element={<Singlejobviews />}/>
//           {/* <Route path="/BackgroundGlow" element={<BackgroundGlow />}/> */}
//   {/* <Route path="/Filters" element={<Filters />}/> */}
//           {/* <Route path="/JobList" element={<JobList />}/>
//           <Route path="/RightSidebar" element={<RightSidebar />}/> */}
//    </Routes> 
//         {/* <Footer/> */}
        
//       </Router>
//     </>
//   );
// }

// export default App;



import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./component/LoginPage";
import Signup from "./component/Signup";
import CompanyDashboard from "./component/CompanyDashboard";
import Jobseeker from "./component/Jobseeker";
import Job from "./component/Job";
import Profile from "./component/Profile";
import Message from "./component/Message";
import Home from "./component/Home";
import JobListingPage from "./component/JobListingPage";
import JobseekersSubSection from "./component/JobseekersSubSection";
import Singlejobview from "./component/Singlejobview";
import Singlejobviews from "./component/Singlejobviews";
import CompanyApplications from "./component/CompanyApplications";
// import CompanyProfile from "./component/CompanyProfile";
import CompanyPostJobs from "./component/CompanyPostJobs";
import FormJobseeker from "./component/FormJobseeker";
import FormJobseeker2 from "./component/FormJobseeker2";
import FormJobseeker3 from "./component/FormJobseeker3";
import FormJobseeker4 from "./component/FormJobseeker4";
import FormJobseeker5 from "./component/FormJobseeker5";
import FormJobseeker6 from "./component/FormJobseeker6";
import FormCompany from "./component/FormCompany";
import FormCompany2 from "./component/FormCompany2";
import FormCompany3 from "./component/FormCompany3";
import FormCompany4 from "./component/FormCompany4";
import FormCompany5 from "./component/FormCompany5";





function App() {
  return (
    <>
      <Router> 
        <Routes> 
        <Route path="/" element={<Home  />} /> 
          <Route path="/LoginPage" element={<LoginPage />} /> 
          <Route path="/Signup" element={<Signup  />} /> 
          <Route path="/Jobseeker" element={<Jobseeker />} /> 
          <Route path="/Job" element={<Job/>}/>
          <Route path="/Profile" element={<Profile />}/>
          <Route path="/Message" element={<Message />}/>
          <Route path="/Singlejobview" element={<Singlejobview />}/>
          <Route path="/Singlejobviews" element={<Singlejobviews />}/>
          <Route path="/JobListingPage" element={<JobListingPage />}/>
          <Route path="/JobseekersSubSection" element={<JobseekersSubSection />}/>
          <Route path="/CompanyDashboard" element={<CompanyDashboard/>} /> 
          <Route path="/CompanyApplications" element={<CompanyApplications />}/>
          {/* <Route path="/CompanyProfile" element={<CompanyProfile />}/> */}
          <Route path="/CompanyPostJobs" element={<CompanyPostJobs />}/>
          <Route path="/FormJobseeker" element={<FormJobseeker />}/>
          <Route path="/FormJobseeker2" element={<FormJobseeker2 />}/>
          <Route path="/FormJobseeker3" element={<FormJobseeker3 />}/>
          <Route path="/FormJobseeker4" element={<FormJobseeker4 />}/>
          <Route path="/FormJobseeker5" element={<FormJobseeker5 />}/>
          <Route path="/FormJobseeker6" element={<FormJobseeker6 />}/>
          <Route path="/FormCompany" element={<FormCompany />}/>
          <Route path="/FormCompany2" element={<FormCompany2 />}/>
          <Route path="/FormCompany3" element={<FormCompany3 />}/>
          <Route path="/FormCompany4" element={<FormCompany4 />}/>
          <Route path="/FormCompany5" element={<FormCompany5 />}/>
   </Routes> 
      </Router> 
    </>
  );
}

export default App;
