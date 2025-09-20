// src/components/Topbar.js
import React from "react";
import {
  Box,
  InputBase,
  IconButton,
  Badge,
  Avatar,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
const Topbar = () => {
 
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 1,
        borderBottom: "1px solid #ddd",
        backgroundColor: "#fff",
      }}
    >
      {/* 🔍 Search Box */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#f3f0f8",
          px: 2,
          py: 0.5,
          borderRadius: "9999px", // pill shape
          width: "300px",
        }}
      >
        <SearchIcon sx={{ color: "#666", mr: 1 }} />
        <InputBase
          placeholder="Search Society"
          sx={{ flex: 1, fontSize: "14px" }}
        />
      </Box>

      {/* Actions */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        {/* Register Button */}
      {/* <Button
  variant="contained"
  startIcon={<AddIcon />}
  sx={{
    textTransform: "none",
    borderRadius: "8px",
    backgroundColor: "#1a73e8",
    "&:hover": { backgroundColor: "#1669c1" },
  }}
  onClick={() => navigate("/regestersociety")}
>
  Register Society
</Button> */}
        {/* Notifications with badge */}
        <IconButton>
          <Badge badgeContent={3} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>

        {/* User Avatar */}
        <Avatar sx={{ bgcolor: "#e0e0e0", color: "#000" }}>A</Avatar>
      </Box>
    </Box>
  );
};

export default Topbar;
