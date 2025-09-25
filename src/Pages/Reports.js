
// import React, { useState } from "react";
// import {
//   Box,
//   Card,
//   CardContent,
//   Typography,
//   Grid,
//   Button,
//   MenuItem,
//   Select,
//   FormControl,
//   InputLabel,
//   IconButton,
// } from "@mui/material";
// import { Download, TrendingUp, Activity } from "lucide-react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   PieChart,
//   Pie,
//   Cell,
//   BarChart,
//   Bar,
//   ResponsiveContainer,
//   Legend,
// } from "recharts";

// const Reports = () => {
//   const [timeRange, setTimeRange] = useState("3m");
//   const [city, setCity] = useState("all");

//   // Sample Data
//   const growthData = [
//     { month: "Jan", societies: 8 },
//     { month: "Feb", societies: 12 },
//     { month: "Mar", societies: 18 },
//     { month: "Apr", societies: 20 },
//     { month: "May", societies: 25 },
//     { month: "Jun", societies: 30 },
//   ];

//   const statusData = [
//     { name: "Active", value: 28 },
//     { name: "Pending", value: 4 },
//     { name: "Inactive", value: 2 },
//   ];

//   const COLORS = ["#00C49F", "#FFBB28", "#FF4444"];

//   const cityData = [
//     { name: "Mumbai", value: 12 },
//     { name: "Pune", value: 8 },
//     { name: "Bangalore", value: 5 },
//     { name: "Chennai", value: 4 },
//     { name: "Delhi", value: 3 },
//   ];

//   return (
//     <Box p={2} sx={{ width: "100%" }}>
//       {/* Filters */}
//       <Grid container spacing={2} mb={2}>
//         <Grid item xs={12} sm={6} md={6}>
//           <FormControl fullWidth>
//             <InputLabel>Last Period</InputLabel>
//             <Select
//               value={timeRange}
//               label="Last Period"
//               onChange={(e) => setTimeRange(e.target.value)}
//             >
//               <MenuItem value="3m">Last 3 months</MenuItem>
//               <MenuItem value="6m">Last 6 months</MenuItem>
//               <MenuItem value="1y">Last 1 year</MenuItem>
//             </Select>
//           </FormControl>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <FormControl fullWidth>
//             <InputLabel>All Cities</InputLabel>
//             <Select
//               value={city}
//               label="All Cities"
//               onChange={(e) => setCity(e.target.value)}
//             >
//               <MenuItem value="all">All Cities</MenuItem>
//               <MenuItem value="mumbai">Mumbai</MenuItem>
//               <MenuItem value="pune">Pune</MenuItem>
//               <MenuItem value="bangalore">Bangalore</MenuItem>
//               <MenuItem value="chennai">Chennai</MenuItem>
//               <MenuItem value="delhi">Delhi</MenuItem>
//             </Select>
//           </FormControl>
//         </Grid>
//       </Grid>

//       {/* KPI Cards */}
//       <Grid container spacing={2} mb={3}>
//         <Grid item xs={12} sm={6} md={3}>
//           <Card sx={{ p: 2 }}>
//             <CardContent>
//               <Box display="flex" alignItems="center" justifyContent="space-between">
//                 <Typography variant="h6">Growth Rate</Typography>
//                 <TrendingUp color="green" />
//               </Box>
//               <Typography variant="h5" fontWeight="bold">
//                 +23.5%
//               </Typography>
//               <Typography variant="body2" color="success.main">
//                 +12% from last month
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <Card sx={{ p: 2 }}>
//             <CardContent>
//               <Box display="flex" alignItems="center" justifyContent="space-between">
//                 <Typography variant="h6">Active Rate</Typography>
//                 <Activity color="purple" />
//               </Box>
//               <Typography variant="h5" fontWeight="bold">
//                 +85.5%
//               </Typography>
//               <Typography variant="body2" color="secondary">
//                 society activity using app
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>

//       {/* Charts */}
//       <Grid container spacing={3}>
//         {/* Line Chart */}
//         <Grid item xs={12} md={6}>
//           <Card>
//             <CardContent>
//               <Box display="flex" justifyContent="space-between" alignItems="center">
//                 <Typography variant="h6">Society Registration Growth</Typography>
//                 <IconButton>
//                   <Download />
//                 </IconButton>
//               </Box>
//               <ResponsiveContainer width="100%" height={300}>
//                 <LineChart data={growthData}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="month" />
//                   <YAxis />
//                   <Tooltip />
//                   <Line type="monotone" dataKey="societies" stroke="#3f51b5" strokeWidth={2} />
//                 </LineChart>
//               </ResponsiveContainer>
//             </CardContent>
//           </Card>
//         </Grid>

//         {/* Pie Chart */}
//         <Grid item xs={12} md={6}>
//           <Card>
//             <CardContent>
//               <Box display="flex" justifyContent="space-between" alignItems="center">
//                 <Typography variant="h6">Society Status Distribution</Typography>
//                 <IconButton>
//                   <Download />
//                 </IconButton>
//               </Box>
//               <ResponsiveContainer width="100%" height={300}>
//                 <PieChart>
//                   <Pie
//                     data={statusData}
//                     cx="50%"
//                     cy="50%"
//                     labelLine={false}
//                     outerRadius={100}
//                     dataKey="value"
//                   >
//                     {statusData.map((entry, index) => (
//                       <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                     ))}
//                   </Pie>
//                   <Tooltip />
//                   <Legend />
//                 </PieChart>
//               </ResponsiveContainer>
//             </CardContent>
//           </Card>
//         </Grid>

//         {/* Bar Chart */}
//         <Grid item xs={12}>
//           <Card>
//             <CardContent>
//               <Box display="flex" justifyContent="space-between" alignItems="center">
//                 <Typography variant="h6">City-wise Society Distribution</Typography>
//                 <IconButton>
//                   <Download />
//                 </IconButton>
//               </Box>
//               <ResponsiveContainer width="100%" height={300}>
//                 <BarChart data={cityData}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="name" />
//                   <YAxis />
//                   <Tooltip />
//                   <Bar dataKey="value" fill="#3f51b5" />
//                 </BarChart>
//               </ResponsiveContainer>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default Reports;



// import React, { useState } from "react";
// import { Download, TrendingUp, Activity } from "lucide-react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   PieChart,
//   Pie,
//   Cell,
//   BarChart,
//   Bar,
//   ResponsiveContainer,
//   Legend,
// } from "recharts";

// import {
//   Box,
//   Grid,
//   Card,
//   CardContent,
//   Typography,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   IconButton,
// } from "@mui/material";

// const Reports = () => {
//   const [timeRange, setTimeRange] = useState("3m");
//   const [city, setCity] = useState("all");

//   // Sample Data
//   const growthData = [
//     { month: "Jan", societies: 8 },
//     { month: "Feb", societies: 12 },
//     { month: "Mar", societies: 18 },
//     { month: "Apr", societies: 20 },
//     { month: "May", societies: 25 },
//     { month: "Jun", societies: 30 },
//   ];

//   const statusData = [
//     { name: "Active", value: 28 },
//     { name: "Pending", value: 4 },
//     { name: "Inactive", value: 2 },
//   ];

//   const COLORS = ["#00C49F", "#FFBB28", "#FF4444"];

//   const cityData = [
//     { name: "Mumbai", value: 12 },
//     { name: "Pune", value: 8 },
//     { name: "Bangalore", value: 5 },
//     { name: "Chennai", value: 4 },
//     { name: "Delhi", value: 3 },
//   ];

//   // Internal CSS
//   const styles = {
//     container: { width: "100%", padding: 16 },
//     filterBox: {
//       marginBottom: 20,
//       display: "flex",
//       flexWrap: "wrap",
//       gap: 16,
//     },
//     card: {
//       padding: 8,
//       boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
//       borderRadius: 12,
//       height: "80%",
//       width: "90%",

//     },
//     cardHeader: {
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//       marginBottom: 10,
//     },
//     kpiValue: { fontWeight: "bold", fontSize: 20 },
//     kpiChange: { fontSize: 14, marginTop: 4 },
//   };

//   return (
//     <Box style={styles.container}>
//       {/* Filters */}
//       <Grid container spacing={2} style={styles.filterBox}>
//         <Grid item xs={12} sm={6} md={6}>
//           <FormControl fullWidth>
//             <InputLabel>Last Period</InputLabel>
//             <Select
//               value={timeRange}
//               label="Last Period"
//               onChange={(e) => setTimeRange(e.target.value)}
//             >
//               <MenuItem value="3m">Last 3 months</MenuItem>
//               <MenuItem value="6m">Last 6 months</MenuItem>
//               <MenuItem value="1y">Last 1 year</MenuItem>
//             </Select>
//           </FormControl>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <FormControl fullWidth>
//             <InputLabel>All Cities</InputLabel>
//             <Select
//               value={city}
//               label="All Cities"
//               onChange={(e) => setCity(e.target.value)}
//             >
//               <MenuItem value="all">All Cities</MenuItem>
//               <MenuItem value="mumbai">Mumbai</MenuItem>
//               <MenuItem value="pune">Pune</MenuItem>
//               <MenuItem value="bangalore">Bangalore</MenuItem>
//               <MenuItem value="chennai">Chennai</MenuItem>
//               <MenuItem value="delhi">Delhi</MenuItem>
//             </Select>
//           </FormControl>
//         </Grid>
//       </Grid>

//       {/* KPI Cards */}
//       <Grid container spacing={2} mb={3}>
//         <Grid item xs={12} sm={6} md={3}>
//           <Card style={styles.card}>
//             <CardContent>
//               <Box style={styles.cardHeader}>
//                 <Typography variant="h6">Growth Rate</Typography>
//                 <TrendingUp color="green" />
//               </Box>
//               <Typography style={styles.kpiValue}>+23.5%</Typography>
//               <Typography style={{ ...styles.kpiChange, color: "green" }}>
//                 +12% from last month
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <Card style={styles.card}>
//             <CardContent>
//               <Box style={styles.cardHeader}>
//                 <Typography variant="h6">Active Rate</Typography>
//                 <Activity color="purple" />
//               </Box>
//               <Typography style={styles.kpiValue}>+85.5%</Typography>
//               <Typography style={{ ...styles.kpiChange, color: "purple" }}>
//                 society activity using app
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>

//       {/* Charts */}
//       <Grid container spacing={3}>
//         {/* Line Chart */}
//         <Grid item xs={12} md={6}>
//           <Card style={styles.card}>
//             <CardContent>
//               <Box style={styles.cardHeader}>
//                 <Typography variant="h6">
//                   Society Registration Growth
//                 </Typography>
//                 <IconButton>
//                   <Download />
//                 </IconButton>
//               </Box>
//               <ResponsiveContainer width="100%" height={300}>
//                 <LineChart data={growthData}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="month" />
//                   <YAxis />
//                   <Tooltip />
//                   <Line
//                     type="monotone"
//                     dataKey="societies"
//                     stroke="#3f51b5"
//                     strokeWidth={2}
//                   />
//                 </LineChart>
//               </ResponsiveContainer>
//             </CardContent>
//           </Card>
//         </Grid>

//         {/* Pie Chart */}
//         <Grid item xs={12} md={6}>
//           <Card style={styles.card}>
//             <CardContent>
//               <Box style={styles.cardHeader}>
//                 <Typography variant="h6">
//                   Society Status Distribution
//                 </Typography>
//                 <IconButton>
//                   <Download />
//                 </IconButton>
//               </Box>
//               <ResponsiveContainer width="100%" height={300}>
//                 <PieChart>
//                   <Pie
//                     data={statusData}
//                     cx="50%"
//                     cy="50%"
//                     labelLine={false}
//                     outerRadius={100}
//                     dataKey="value"
//                   >
//                     {statusData.map((entry, index) => (
//                       <Cell
//                         key={`cell-${index}`}
//                         fill={COLORS[index % COLORS.length]}
//                       />
//                     ))}
//                   </Pie>
//                   <Tooltip />
//                   <Legend />
//                 </PieChart>
//               </ResponsiveContainer>
//             </CardContent>
//           </Card>
//         </Grid>

//         {/* Bar Chart */}
//         <Grid item xs={12}>
//           <Card style={styles.card}>
//             <CardContent>
//               <Box style={styles.cardHeader}>
//                 <Typography variant="h6">
//                   City-wise Society Distribution
//                 </Typography>
//                 <IconButton>
//                   <Download />
//                 </IconButton>
//               </Box>
//               <ResponsiveContainer width="100%" height={300}>
//                 <BarChart data={cityData}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="name" />
//                   <YAxis />
//                   <Tooltip />
//                   <Bar dataKey="value" fill="#3f51b5" />
//                 </BarChart>
//               </ResponsiveContainer>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default Reports;


// import React, { useState } from "react";
// import { Download, TrendingUp, Activity } from "lucide-react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   PieChart,
//   Pie,
//   Cell,
//   BarChart,
//   Bar,
//   ResponsiveContainer,
//   Legend,
// } from "recharts";

// const Reports = () => {
//   const [timeRange, setTimeRange] = useState("3m");
//   const [city, setCity] = useState("all");

//   const growthData = [
//     { month: "Jan", societies: 8 },
//     { month: "Feb", societies: 12 },
//     { month: "Mar", societies: 18 },
//     { month: "Apr", societies: 20 },
//     { month: "May", societies: 25 },
//     { month: "Jun", societies: 30 },
//   ];

//   const statusData = [
//     { name: "Active", value: 28 },
//     { name: "Pending", value: 4 },
//     { name: "Inactive", value: 2 },
//   ];

//   const COLORS = ["#00C49F", "#FFBB28", "#FF4444"];

//   const cityData = [
//     { name: "Mumbai", value: 12 },
//     { name: "Pune", value: 8 },
//     { name: "Bangalore", value: 5 },
//     { name: "Chennai", value: 4 },
//     { name: "Delhi", value: 3 },
//   ];

//   const styles = {
//     container: { width: "100%", padding: "20px", fontFamily: "Arial, sans-serif" },
//     row: { display: "flex", flexWrap: "wrap", marginBottom: "20px", gap: "20px" },
//     rows: { display: "flex", flexWrap: "wrap", marginBottom: "20px", gap: "20px", width: "100%", alignItems: "center" },
//     card: {
//       flex: "1 1 100%",
//       padding: "20px",
//       borderRadius: "12px",
//       boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//       background: "#fff",
//     },
//     cardHeader: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" },
//     kpiValue: { fontWeight: "bold", fontSize: "24px" },
//     kpiChange: { fontSize: "14px", marginTop: "4px" },
//    rows: {
//   display: "flex",
//   justifyContent: "space-between",
//   gap: 20, // horizontal gap between the two halves
//   alignItems: "flex-start",
//   marginBottom: 20,
// },
// flexHalf: {
//   flex: 1,          // take equal space
//   display: "flex",
//   flexDirection: "column",
// },
// label: {
//   marginBottom: 6,
//   fontWeight: 500,
//   color: "#555",
//   fontSize: 14,
// },
// select: {
//   padding: "10px 12px",
//   border: "1px solid #ccc",
//   borderRadius: 6,
//   fontSize: 14,
//   outline: "none",
// },
// textRight: {
//   display: "flex",
//   justifyContent: "flex-end",
//   marginTop: 8,
// },
// button: {
//   display: "flex",
//   alignItems: "center",
//   gap: 6,
//   padding: "8px 12px",
//   background: "#0d6efd",
//   color: "#fff",
//   border: "none",
//   borderRadius: 6,
//   cursor: "pointer",
//   fontWeight: 500,
// },
//   };

//   return (
//     <div style={styles.container}>
//       {/* 1st Row - Filters + Export */}
//       <div style={styles.rows}>
//   <div style={styles.flexHalf}>
//     <label style={styles.label}>Last Period</label>
//     <select
//       value={timeRange}
//       onChange={(e) => setTimeRange(e.target.value)}
//       style={styles.select}
//     >
//       <option value="3m">Last 3 months</option>
//       <option value="6m">Last 6 months</option>
//       <option value="1y">Last 1 year</option>
//     </select>
//   </div>

//   <div style={{ ...styles.flexHalf, display: "flex", flexDirection: "column" }}>
//     <label style={styles.label}>City</label>
//     <select
//       value={city}
//       onChange={(e) => setCity(e.target.value)}
//       style={styles.select}
//     >
//       <option value="all">All Cities</option>
//       <option value="mumbai">Mumbai</option>
//       <option value="pune">Pune</option>
//       <option value="bangalore">Bangalore</option>
//       <option value="chennai">Chennai</option>
//       <option value="delhi">Delhi</option>
//     </select>
//     <div style={styles.textRight}>
//       <button style={styles.button}>
//         <Download size={16} /> Export All Reports
//       </button>
//     </div>
//   </div>
// </div>


//       {/* 2nd Row - KPI Cards */}
//       <div style={styles.row}>
//         <div style={styles.flexHalf}>
//           <div style={styles.card}>
//             <div style={styles.cardHeader}>
//               <span>Growth Rate</span>
//               <TrendingUp color="green" />
//             </div>
//             <div style={styles.kpiValue}>+23.5%</div>
//             <div style={{ ...styles.kpiChange, color: "green" }}>+12% from last month</div>
//           </div>
//         </div>
//         <div style={styles.flexHalf}>
//           <div style={styles.card}>
//             <div style={styles.cardHeader}>
//               <span>Active Rate</span>
//               <Activity color="purple" />
//             </div>
//             <div style={styles.kpiValue}>+85.5%</div>
//             <div style={{ ...styles.kpiChange, color: "purple" }}>society activity using app</div>
//           </div>
//         </div>
//       </div>

//       {/* 3rd Row - Line Chart */}
//       <div style={styles.row}>
//         <div style={styles.card}>
//           <div style={styles.cardHeader}>
//             <span>Society Registration Growth</span>
//             <Download size={16} />
//           </div>
//           <ResponsiveContainer width="100%" height={300}>
//             <LineChart data={growthData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="month" />
//               <YAxis />
//               <Tooltip />
//               <Line type="monotone" dataKey="societies" stroke="#3f51b5" strokeWidth={2} />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* 4th Row - Pie Chart */}
//       <div style={styles.row}>
//         <div style={styles.card}>
//           <div style={styles.cardHeader}>
//             <span>Society Status Distribution</span>
//             <Download size={16} />
//           </div>
//           <ResponsiveContainer width="100%" height={300}>
//             <PieChart>
//               <Pie data={statusData} cx="50%" cy="50%" outerRadius={100} dataKey="value">
//                 {statusData.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                 ))}
//               </Pie>
//               <Tooltip />
//               <Legend />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* 5th Row - Bar Chart */}
//       <div style={styles.row}>
//         <div style={styles.card}>
//           <div style={styles.cardHeader}>
//             <span>City-wise Society Distribution</span>
//             <Download size={16} />
//           </div>
//           <ResponsiveContainer width="100%" height={300}>
//             <BarChart data={cityData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Bar dataKey="value" fill="#3f51b5" />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Reports;

import React, { useState } from "react";
import { Download, TrendingUp, Activity } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  ResponsiveContainer,
  Legend,
} from "recharts";

const Reports = () => {
  const [timeRange, setTimeRange] = useState("3m");
  const [city, setCity] = useState("all");

  const growthData = [
    { month: "Jan", societies: 8 },
    { month: "Feb", societies: 12 },
    { month: "Mar", societies: 18 },
    { month: "Apr", societies: 20 },
    { month: "May", societies: 25 },
    { month: "Jun", societies: 30 },
  ];

  const statusData = [
    { name: "Active", value: 28 },
    { name: "Pending", value: 4 },
    { name: "Inactive", value: 2 },
  ];

  const COLORS = ["#00C49F", "#FFBB28", "#FF4444"];

  const cityData = [
    { name: "Mumbai", value: 12 },
    { name: "Pune", value: 8 },
    { name: "Bangalore", value: 5 },
    { name: "Chennai", value: 4 },
    { name: "Delhi", value: 3 },
  ];

  const styles = {
    container: {
      height: "90vh",
      width: "100%",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      boxSizing: "border-box",
    },
    scrollContainer: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      overflow: "hidden",
    },
    rows: {
      display: "flex",
      justifyContent: "space-between",
      gap: 20,
      alignItems: "flex-start",
    },
    flexHalf: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
    },
    label: {
      marginBottom: 6,
      fontWeight: 500,
      color: "#555",
      fontSize: 14,
    },
    select: {
      padding: "10px 12px",
      border: "1px solid #ccc",
      borderRadius: 6,
      fontSize: 14,
      outline: "none",
    },
    textRight: {
      display: "flex",
      justifyContent: "flex-end",
      marginTop: 8,
    },
    button: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      padding: "8px 12px",
      background: "#0d6efd",
      color: "#fff",
      border: "none",
      borderRadius: 6,
      cursor: "pointer",
      fontWeight: 500,
    },
    row: {
      display: "flex",
      gap: 20,
      flexWrap: "wrap",
    },
    card: {
      flex: "1 1 80%",
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      background: "#fff",
      display: "flex",
      flexDirection: "column",
      minHeight: 0,
    },
    cardHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "10px",
    },
    kpiValue: { fontWeight: "bold", fontSize: "24px" },
    kpiChange: { fontSize: "14px", marginTop: "4px" },
    chartWrapper: { flex: 1, minHeight: 0 },
  };

  return (
    <div style={styles.container}>
      {/* Filters */}
      <div style={styles.rows}>
        <div style={styles.flexHalf}>
          <label style={styles.label}>Last Period</label>
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            style={styles.select}
          >
            <option value="3m">Last 3 months</option>
            <option value="6m">Last 6 months</option>
            <option value="1y">Last 1 year</option>
          </select>
        </div>

        <div style={{ ...styles.flexHalf, display: "flex", flexDirection: "column" }}>
          <label style={styles.label}>City</label>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            style={styles.select}
          >
            <option value="all">All Cities</option>
            <option value="mumbai">Mumbai</option>
            <option value="pune">Pune</option>
            <option value="bangalore">Bangalore</option>
            <option value="chennai">Chennai</option>
            <option value="delhi">Delhi</option>
          </select>
          <div style={styles.textRight}>
            <button style={styles.button}>
              <Download size={16} /> Export All Reports
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable content */}
      <div style={styles.scrollContainer}>
        {/* KPI Cards */}
        <div style={styles.row}>
          <div style={styles.flexHalf}>
            <div style={styles.card}>
              <div style={styles.cardHeader}>
                <span>Growth Rate</span>
                <TrendingUp color="green" />
              </div>
              <div style={styles.kpiValue}>+23.5%</div>
              <div style={{ ...styles.kpiChange, color: "green" }}>+12% from last month</div>
            </div>
          </div>
          <div style={styles.flexHalf}>
            <div style={styles.card}>
              <div style={styles.cardHeader}>
                <span>Active Rate</span>
                <Activity color="purple" />
              </div>
              <div style={styles.kpiValue}>+85.5%</div>
              <div style={{ ...styles.kpiChange, color: "purple" }}>society activity using app</div>
            </div>
          </div>
        </div>

        {/* Line Chart */}
        <div style={{ ...styles.row, flex: 1, minHeight: 0 }}>
          <div style={{ ...styles.card, flex: 1, minHeight: 0 }}>
            <div style={styles.cardHeader}>
              <span>Society Registration Growth</span>
              <Download size={16} />
            </div>
            <div style={styles.chartWrapper}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={growthData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="societies" stroke="#3f51b5" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Pie Chart */}
        {/* <div style={{ ...styles.row, flex: 1, minHeight: 0 }}>
          <div style={{ ...styles.card, flex: 1, minHeight: 0 }}>
            <div style={styles.cardHeader}>
              <span>Society Status Distribution</span>
              <Download size={16} />
            </div>
            <div style={styles.chartWrapper}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={statusData} cx="50%" cy="50%" outerRadius={80} dataKey="value">
                    {statusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div> */}

        {/* Bar Chart */}
        <div style={{ ...styles.row, flex: 1, minHeight: 0 }}>
          <div style={{ ...styles.card, flex: 1, minHeight: 0 }}>
            <div style={styles.cardHeader}>
              <span>City-wise Society Distribution</span>
              <Download size={16} />
            </div>
            <div style={styles.chartWrapper}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={cityData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#3f51b5" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
