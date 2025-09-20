

// import React from "react";
// import {
//   Drawer,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Toolbar,
//   Typography,
//   Box,
// } from "@mui/material";

// import DashboardIcon from "@mui/icons-material/Dashboard";
// import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// import ListAltIcon from "@mui/icons-material/ListAlt";
// import AnalyticsIcon from "@mui/icons-material/Analytics";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import SettingsIcon from "@mui/icons-material/Settings";
// import { useNavigate } from "react-router-dom";

// const drawerWidth = 240;

// const Sidebar = () => {
//   const navigate = useNavigate();

//   return (
//     <Drawer
//       variant="permanent"
//       sx={{
//         width: drawerWidth,
//         flexShrink: 0,
//         "& .MuiDrawer-paper": {
//           width: drawerWidth,
//           boxSizing: "border-box",
//           backgroundColor: "#fff",
//           borderRight: "1px solid #e0e0e0",
//         },
//       }}
//     >
//       {/* Header */}
//       <Toolbar
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "flex-start",
//           px: [1],
//         }}
//       >
//         <img
//           src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
//           alt="logo"
//           style={{ width: 32, height: 32, borderRadius: "50%", marginRight: 10 }}
//         />
//         <Typography variant="subtitle1" fontWeight="600">
//           Society Admin
//         </Typography>
//       </Toolbar>

//       {/* Menu */}
//       <Box sx={{ overflow: "auto" }}>
//         <List>
//           <ListItem button onClick={() => navigate("/dashboard")}>
//             <ListItemIcon>
//               <DashboardIcon />
//             </ListItemIcon>
//             <ListItemText primary="Dashboard" />
//           </ListItem>

//           <ListItem button onClick={() => navigate("/register-society")}>
//             <ListItemIcon>
//               <AddCircleOutlineIcon />
//             </ListItemIcon>
//             <ListItemText primary="Register New Society" />
//           </ListItem>

//           <ListItem button onClick={() => navigate("/society-list")}>
//             <ListItemIcon>
//               <ListAltIcon />
//             </ListItemIcon>
//             <ListItemText primary="Society List" />
//           </ListItem>

//           <ListItem button onClick={() => navigate("/reports")}>
//             <ListItemIcon>
//               <AnalyticsIcon />
//             </ListItemIcon>
//             <ListItemText primary="Reports & Analytics" />
//           </ListItem>

//           <ListItem button onClick={() => navigate("/notifications")}>
//             <ListItemIcon>
//               <NotificationsIcon />
//             </ListItemIcon>
//             <ListItemText primary="Notifications" />
//           </ListItem>

//           <ListItem button onClick={() => navigate("/settings")}>
//             <ListItemIcon>
//               <SettingsIcon />
//             </ListItemIcon>
//             <ListItemText primary="Settings" />
//           </ListItem>
//         </List>
//       </Box>
//     </Drawer>
//   );
// };

// export default Sidebar;

// import React from "react";
// import {
//   Drawer,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Toolbar,
//   Typography,
//   Box,
// } from "@mui/material";

// import DashboardIcon from "@mui/icons-material/Dashboard";
// import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// import ListAltIcon from "@mui/icons-material/ListAlt";
// import AnalyticsIcon from "@mui/icons-material/Analytics";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import SettingsIcon from "@mui/icons-material/Settings";
// import { useNavigate, useLocation } from "react-router-dom";

// const drawerWidth = 240;

// const Sidebar = () => {
//   const navigate = useNavigate();
//   const location = useLocation(); // current active route track करतो

//   // Sidebar menu items
//   const menuItems = [
//     { text: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
//     { text: "Register Society", icon: <AddCircleOutlineIcon />, path: "/register-society" },
//     { text: "Society List", icon: <ListAltIcon />, path: "/society-list" },
//     { text: "Reports & Analytics", icon: <AnalyticsIcon />, path: "/reports" },
//     { text: "Notifications", icon: <NotificationsIcon />, path: "/notifications" },
//     { text: "Settings", icon: <SettingsIcon />, path: "/settings" },
//   ];

//   return (
//     <Drawer
//       variant="permanent"
//       sx={{
//         width: drawerWidth,
//         flexShrink: 0,
//         "& .MuiDrawer-paper": {
//           width: drawerWidth,
//           boxSizing: "border-box",
//           backgroundColor: "#fff",
//           borderRight: "1px solid #e0e0e0",
//         },
//       }}
//     >
//       {/* Header */}
//       <Toolbar
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "flex-start",
//           px: [1],
//         }}
//       >
//         <img
//           src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
//           alt="logo"
//           style={{ width: 32, height: 32, borderRadius: "50%", marginRight: 10 }}
//         />
//         <Typography variant="subtitle1" fontWeight="600">
//           Society Admin
//         </Typography>
//       </Toolbar>

//       {/* Menu */}
//       <Box sx={{ overflow: "auto" }}>
//         <List>
//           {menuItems.map((item) => (
//             <ListItem
//               button
//               key={item.text}
//               onClick={() => navigate(item.path)}
//               selected={location.pathname === item.path} // ✅ active route check
//               sx={{
//                 "&.Mui-selected": {
//                   backgroundColor: "#f0f4ff",
//                   color: "#1976d2",
//                   fontWeight: "600",
//                 },
//                 "&.Mui-selected:hover": {
//                   backgroundColor: "#e3e9ff",
//                 },
//                 "&:hover": {
//                   backgroundColor: "#f9f9f9",
//                 },
//               }}
//             >
//               <ListItemIcon
//                 sx={{
//                   color: location.pathname === item.path ? "#1976d2" : "inherit",
//                 }}
//               >
//                 {item.icon}
//               </ListItemIcon>
//               <ListItemText primary={item.text} />
//             </ListItem>
//           ))}
//         </List>
//       </Box>
//     </Drawer>
//   );
// };

// export default Sidebar;


import React from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate, useLocation } from "react-router-dom";

const drawerWidth = 240;

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
    { text: "Register Society", icon: <AddCircleOutlineIcon />, path: "/register-society" },
    { text: "Society List", icon: <ListAltIcon />, path: "/society-list" },
    { text: "Reports & Analytics", icon: <AnalyticsIcon />, path: "/reports" },
    { text: "Notifications", icon: <NotificationsIcon />, path: "/notifications" },
    { text: "Settings", icon: <SettingsIcon />, path: "/settings" },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#fff",
          borderRight: "1px solid #e0e0e0",
        },
      }}
    >
      {/* Header */}
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          px: [1],
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="logo"
          style={{ width: 32, height: 32, borderRadius: "50%", marginRight: 10 }}
        />
        <Typography variant="subtitle1" fontWeight="600">
          Society Admin
        </Typography>
      </Toolbar>

      {/* Menu */}
      <Box sx={{ overflow: "auto" }}>
        <List>
          {menuItems.map((item) => (
            <ListItemButton
              key={item.text}
              onClick={() => navigate(item.path)}
              selected={location.pathname === item.path}
              sx={{
                "&.Mui-selected": {
                  backgroundColor: "#e3f2fd",
                  color: "#1976d2",
                  fontWeight: "600",
                },
                "&.Mui-selected:hover": {
                  backgroundColor: "#bbdefb",
                },
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: location.pathname === item.path ? "#1976d2" : "inherit",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
