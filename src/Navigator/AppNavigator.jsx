// // src/navigation/AppNavigator.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// // Import your pages
// import Dashboard from '../Pages/Dashboard';
// import SocietyList from '../Pages/SocietyList';
// import RegisterSociety from '../Pages/RegisterSociety';
// import Reports from '../Pages/Reports';
// // import Settings from '../Pages/Settings';
// // import Notifications from '../Pages/Notifications';

// const AppNavigator = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Dashboard />} />
//         <Route path="/register-society" element={<RegisterSociety />} />
//         <Route path="/society-list" element={<SocietyList />} />
//         <Route path="/reports" element={<Reports />} />
//          <Route path="/regestersociety" element={<RegisterSociety/>} />

//         {/* <Route path="/settings" element={<Settings />} /> */}
//         {/* <Route path="/notifications" element={<Notifications />} /> */}
//       </Routes>
//     </Router>
//   );
// };

// export default AppNavigator;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // Layout with Sidebar
// import AppLayout from "../components/AppLayout";

// // Pages
// import Dashboard from "../Pages/Dashboard";
// import SocietyList from "../Pages/SocietyList";
// import RegisterSociety from "../Pages/RegisterSociety";
// import Reports from "../Pages/Reports";
// import Login from "../Pages/Login";

// const AppNavigator = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route element={<AppLayout />}>
//         <Route path="/" element={<Login />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/register-society" element={<RegisterSociety />} />
//           <Route path="/society-list" element={<SocietyList />} />
//           <Route path="/reports" element={<Reports />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// };

// export default AppNavigator;


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout with Sidebar
import AppLayout from "../components/AppLayout";

// Pages
import Dashboard from "../Pages/Dashboard";
import SocietyList from "../Pages/SocietyList";
import RegisterSociety from "../Pages/RegisterSociety";
import Reports from "../Pages/Reports";
import Login from "../Pages/Login";
import SocietyAdmin from "../Pages/SocietyAdminInvitation";
import CreateAccount from "../Pages/CreateAccount";
import SocietyAdminInvitation from "../Pages/SocietyAdminInvitation";
import PropertyRegister from "../Pages/PropertyRegister";

const AppNavigator = () => {
  return (
    <Router>
      <Routes>
        {/* Login route without layout */}
        <Route path="/login" element={<Login />} />

        {/* All other routes with Sidebar/Topbar */}
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register-society" element={<RegisterSociety />} />
           <Route path="/SocietyAdminInvitation" element={<SocietyAdminInvitation />} />
            <Route path="/PropertyRegister" element={<PropertyRegister />} />
          <Route path="/society-list" element={<SocietyList />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/createaccount" element={<CreateAccount />} />
        </Route>

        {/* Default route → redirect to login */}
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppNavigator;
