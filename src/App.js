// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Dashboard from './Pages/Dashboard';
// import SocietyList from './Pages/SocietyList';
// import RegisterSociety from './Pages/RegisterSociety';
// import Reports from './Pages/Reports';
// // Import other pages...

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Dashboard />} />
//         <Route path="/register-society" element={<RegisterSociety />} />
//         <Route path="/society-list" element={<SocietyList />} />
//         <Route path="/reports" element={<Reports />} />
//         {/* <Route path="/settings" element={<Settings />} /> */}
//         {/* <Route path="/notifications" element={<Notifications />} /> */}
//         {/* Other routes */}
//       </Routes>
//     </Router>
//   );
// };

// export default App;



// src/App.js
// import React from 'react';
// import AppNavigator from './Navigator/AppNavigator';

// const App = () => {
//   return (
//     <AppNavigator />
//   );
// };

// export default App;


// import React from "react";
// import AppNavigator from "./Navigator/AppNavigator";

// const App = () => {
//   return <AppNavigator />;
// };

// export default App;


import React from "react";
import AppNavigator from "./Navigator/AppNavigator";
import { UserProvider } from "./context/UserContext.jsx"; // adjust path

const App = () => {
  return (
    <UserProvider>
      <AppNavigator />
    </UserProvider>
  );
};

export default App;
