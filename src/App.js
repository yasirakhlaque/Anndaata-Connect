// import './App.css';
// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Home from './Pages/Home/Home';
// import Scroll from './Components/GoToTop/GoToTop';
// import Login from './Pages/RegisterAndLoginforNGO/Login';
// import Registration from './Pages/RegisterAndLoginforNGO/Registration';
// import Register from './Pages/Registerpagefordonors/register';
// import { UserAuthContextProvider } from './context/UserAuthContext';
// import Team from '../src/Components/Team/Team';
// import Donor from '../src/Pages/ProfilePages/donarForm';
// import Admin from '../src/Pages/adminPage/adminList';
// import NGO from '../src/Pages/NGOList/NGOList';
// import Delivery from '../src/Pages/DeliveryPage/Delivery';
// import NGOProfile from '../src/Pages/ProfilePages/NGOForm';
// import Services from '../src/Components/Services/OurServices';
// function App() {
//   return (
//     <div className="App">
//       <Scroll />
//       <UserAuthContextProvider>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/team" element={<Team />} />
//           <Route path="/donorProfile" element={<Donor />} />
//           <Route path="/adminPage" element={<Admin />} />
//           <Route path="/ngoList" element={<NGO />} />
//           <Route path="/ngoProfile" element={<NGOProfile />} />
//           <Route path="/registration" element={<Registration />} />
//           <Route path="/delivery" element={<Delivery />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/donor-register" element={<Register />} />
//         </Routes>
//       </UserAuthContextProvider>
//     </div>
//   );
// }

// export default App;



import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Scroll from "./Components/GoToTop/GoToTop";
import Login from "./Pages/RegisterAndLoginforNGO/Login";
import Registration from "./Pages/RegisterAndLoginforNGO/Registration";
import Register from "./Pages/Registerpagefordonors/register";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Team from "./Components/Team/Team";
import Donor from "./Pages/ProfilePages/donarForm";
import Admin from "./Pages/adminPage/adminList";
import NGO from "./Pages/NGOList/NGOList";
import Delivery from "./Pages/DeliveryPage/Delivery";
import NGOProfile from "./Pages/ProfilePages/NGOForm";
import Services from "./Components/Services/OurServices";
import Navbar from "./Components/Navbar/Navbar"; // Import updated Navbar

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Navbar will hide on scroll */}
      <Scroll />
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/team" element={<Team />} />
          <Route path="/donorProfile" element={<Donor />} />
          <Route path="/adminPage" element={<Admin />} />
          <Route path="/ngoList" element={<NGO />} />
          <Route path="/ngoProfile" element={<NGOProfile />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/services" element={<Services />} />
          <Route path="/donor-register" element={<Register />} />
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
