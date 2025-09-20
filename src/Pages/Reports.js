
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

import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
} from "@mui/material";

const Reports = () => {
  const [timeRange, setTimeRange] = useState("3m");
  const [city, setCity] = useState("all");

  // Sample Data
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

  // Internal CSS
  const styles = {
    container: { width: "100%", padding: 16 },
    filterBox: {
      marginBottom: 20,
      display: "flex",
      flexWrap: "wrap",
      gap: 16,
    },
    card: {
      padding: 8,
      boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
      borderRadius: 12,
      height: "80%",
      width: "90%",

    },
    cardHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 10,
    },
    kpiValue: { fontWeight: "bold", fontSize: 20 },
    kpiChange: { fontSize: 14, marginTop: 4 },
  };

  return (
    <Box style={styles.container}>
      {/* Filters */}
      <Grid container spacing={2} style={styles.filterBox}>
        <Grid item xs={12} sm={6} md={6}>
          <FormControl fullWidth>
            <InputLabel>Last Period</InputLabel>
            <Select
              value={timeRange}
              label="Last Period"
              onChange={(e) => setTimeRange(e.target.value)}
            >
              <MenuItem value="3m">Last 3 months</MenuItem>
              <MenuItem value="6m">Last 6 months</MenuItem>
              <MenuItem value="1y">Last 1 year</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FormControl fullWidth>
            <InputLabel>All Cities</InputLabel>
            <Select
              value={city}
              label="All Cities"
              onChange={(e) => setCity(e.target.value)}
            >
              <MenuItem value="all">All Cities</MenuItem>
              <MenuItem value="mumbai">Mumbai</MenuItem>
              <MenuItem value="pune">Pune</MenuItem>
              <MenuItem value="bangalore">Bangalore</MenuItem>
              <MenuItem value="chennai">Chennai</MenuItem>
              <MenuItem value="delhi">Delhi</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      {/* KPI Cards */}
      <Grid container spacing={2} mb={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Card style={styles.card}>
            <CardContent>
              <Box style={styles.cardHeader}>
                <Typography variant="h6">Growth Rate</Typography>
                <TrendingUp color="green" />
              </Box>
              <Typography style={styles.kpiValue}>+23.5%</Typography>
              <Typography style={{ ...styles.kpiChange, color: "green" }}>
                +12% from last month
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card style={styles.card}>
            <CardContent>
              <Box style={styles.cardHeader}>
                <Typography variant="h6">Active Rate</Typography>
                <Activity color="purple" />
              </Box>
              <Typography style={styles.kpiValue}>+85.5%</Typography>
              <Typography style={{ ...styles.kpiChange, color: "purple" }}>
                society activity using app
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Charts */}
      <Grid container spacing={3}>
        {/* Line Chart */}
        <Grid item xs={12} md={6}>
          <Card style={styles.card}>
            <CardContent>
              <Box style={styles.cardHeader}>
                <Typography variant="h6">
                  Society Registration Growth
                </Typography>
                <IconButton>
                  <Download />
                </IconButton>
              </Box>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={growthData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="societies"
                    stroke="#3f51b5"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Pie Chart */}
        <Grid item xs={12} md={6}>
          <Card style={styles.card}>
            <CardContent>
              <Box style={styles.cardHeader}>
                <Typography variant="h6">
                  Society Status Distribution
                </Typography>
                <IconButton>
                  <Download />
                </IconButton>
              </Box>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={statusData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    dataKey="value"
                  >
                    {statusData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Bar Chart */}
        <Grid item xs={12}>
          <Card style={styles.card}>
            <CardContent>
              <Box style={styles.cardHeader}>
                <Typography variant="h6">
                  City-wise Society Distribution
                </Typography>
                <IconButton>
                  <Download />
                </IconButton>
              </Box>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={cityData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#3f51b5" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Reports;
