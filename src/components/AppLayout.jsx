
// import React from "react";
// import { Box } from "@mui/material";
// import { Outlet } from "react-router-dom";
// import Sidebar from "../components/Sidebar";
// import Topbar from "../components/Topbar";

// const AppLayout = () => {
//   return (
//     <Box sx={{ display: "flex", height: "100vh", overflow: "hidden" }}>
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content */}
//       <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
//         {/* Topbar */}
//         <Box sx={{ position: "sticky", top: 0, zIndex: 1100 }}>
//           <Topbar />
//         </Box>

//         {/* Page content */}
//         <Box
//           sx={{
//             flex: 1,
//             backgroundColor: "#f5f5f5",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "space-around",
//             overflow: "hidden", // prevent page scroll
//              padding: 3,
//           }}
//         >
//           <Outlet />
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default AppLayout;
  

// import React from "react";
// import { Box } from "@mui/material";
// import { Outlet } from "react-router-dom";
// import Sidebar from "../components/Sidebar";
// import Topbar from "../components/Topbar";

// const AppLayout = () => {
//   return (
//     <Box sx={{ display: "flex", height: "100vh", overflow: "hidden" }}>
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content */}
//       <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
//         {/* Topbar */}
//         <Box sx={{ position: "sticky", top: 0, zIndex: 1100 }}>
//           <Topbar />
//         </Box>

//         {/* Page content */}
//         <Box

//   sx={{
//     flex: 1,
//     backgroundColor: "#f5f5f5",
//     display: "flex",
//      justifyContent: "flex-end",
//      alignItems: "flex-start",
//     overflow: "auto",
//     padding: 0,
//     margin: 0,
//     width: "120%",
//     height: "100%",
//   }}
// >
//           <Outlet />
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default AppLayout;


import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const AppLayout = () => {
  return (
    <Box sx={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Topbar */}
        <Box sx={{ position: "sticky", top: 0, zIndex: 1100 }}>
          <Topbar />
        </Box>

        {/* Page content */}
        <Box
          sx={{
            flex: 1,
            backgroundColor: "#f5f5f5",
            display: "flex",
            justifyContent: "flex-start", // start from left
            alignItems: "flex-start",     // start from top
            overflow: "auto",             // vertical scroll if needed
            padding: 0,                   // no padding
            margin: 0,                    // no margin
            width: "100%",                // full width
            height: "100%",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default AppLayout;
