

// // import React from "react";
// // import { Box, Typography, Grid } from "@mui/material";
// // import StatCard from "../components/StatCard";
// // import ChartCard from "../components/ChartCard";
// // import RecentSocieties from "../components/RecentSocieties";

// // const styles = {
// //  container: {
// //     width: "100%",
// //     maxWidth: "100%",  // fill parent width
// //     height: "100%",
// //     overflow: "hidden",
// //     padding: 3,        // remove inner spacing
// //     borderRadius: 0,   // optional: remove rounding
// //     boxShadow: "none", // optional: remove shadow
// //     display: "flex",
// //     flexDirection: "column",
// //   },
// //   title: {
// //     fontSize: "26px",
// //     fontWeight: 700,
// //     marginBottom: "30px",
// //     textAlign: "start",
// //     color: "black",
// //   },
// //   section: {
// //     marginBottom: "30px",
// //     width: "100%",
// //   },
// //   gridItem: {
// //     display: "flex",
// //     justifyContent: "center",
    
// //   },
// //   chartsSection: {
// //     display: "flex",
// //     gap: "10px",
// //     flex: 1, // fill remaining height
// //     overflow: "hidden",
// //   },
// //   recentSection: {
// //     flex: 1,
// //     overflow: "hidden",
// //   },
// // };

// // const Dashboard = () => {
// //   const statData = [
// //     { title: "Total Society", value: 3, subtitle: "+12% from last month", color: "#cce5ff" },
// //     { title: "Active Society", value: 2, subtitle: "+8% from last month", color: "#f3e5ff" },
// //     { title: "Need Attention", value: 1, subtitle: "Check details", color: "#ffe5e5" },
// //     { title: "Members Growth", value: 1200, subtitle: "+10% from last month", color: "#e5f3ff" },
// //   ];

// //   const chartData1 = [
// //     { month: "Jan", societies: 10 },
// //     { month: "Feb", societies: 15 },
// //     { month: "Mar", societies: 18 },
// //     { month: "Apr", societies: 22 },
// //     { month: "May", societies: 28 },
// //     { month: "Jun", societies: 32 },
// //   ];

// //   const chartData2 = [
// //     { month: "Jan", members: 1000 },
// //     { month: "Feb", members: 1200 },
// //     { month: "Mar", members: 1920 },
// //     { month: "Apr", members: 2400 },
// //     { month: "May", members: 3000 },
// //     { month: "Jun", members: 3600 },
// //   ];

// //   const recentSocieties = [
// //     { name: "Green Valley Apartment", location: "Mumbai, Maharashtra", flats: 160, members: 120 },
// //     { name: "Greenfield Residency", location: "Nagpur, Maharashtra", flats: 120, members: 95 },
// //     { name: "Sunshine Heights", location: "Pune, Maharashtra", flats: 20, members: 50 },
// //     { name: "Lotus Garden Society", location: "Mumbai, Maharashtra", flats: 200, members: 350 },
// //   ];

// //   return (
// //     <Box sx={styles.container}>
// //       {/* Title */}
// //       <Typography sx={styles.title}>Welcome back, Agent</Typography>

// //       {/* Stat Cards */}
// //      <Grid container spacing={4} sx={styles.section}>
// //   {statData.map((item, idx) => (
// //     <Grid item xs={12} sm={6} md={3} key={idx} sx={{ ...styles.gridItem, minWidth: "250px" }}>
// //       <StatCard {...item} />
// //     </Grid>
// //   ))}
// // </Grid>

// //       {/* Charts */}
// //       <Grid container spacing={4} sx={{ ...styles.section, ...styles.chartsSection }}>
// //         <Grid item xs={12} md={6} sx={styles.gridItem}>
// //           <ChartCard title="Society Registration Growth" data={chartData1} dataKey="societies" />
// //         </Grid>
// //         <Grid item xs={12} md={6} sx={styles.gridItem}>
// //           <ChartCard title="Members Growth" data={chartData2} dataKey="members" />
// //         </Grid>
// //       </Grid>

// //       {/* Recent Societies */}
// //       <Box sx={{ ...styles.section, ...styles.recentSection }}>
// //         <RecentSocieties societies={recentSocieties} />
// //       </Box>
// //     </Box>
// //   );
// // };

// // export default Dashboard;


// import React from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// const societyData = [
//   { name: "Jan", societies: 12 },
//   { name: "Feb", societies: 15 },
//   { name: "Mar", societies: 20 },
//   { name: "Apr", societies: 24 },
//   { name: "May", societies: 28 },
//   { name: "Jun", societies: 32 },
// ];

// const memberData = [
//   { name: "Jan", members: 1200 },
//   { name: "Feb", members: 1500 },
//   { name: "Mar", members: 1920 },
//   { name: "Apr", members: 2300 },
//   { name: "May", members: 2800 },
//   { name: "Jun", members: 3400 },
// ];

// const societies = [
//   {
//     name: "Green Valley Apartment",
//     location: "Mumbai, Maharashtra",
//     flats: 160,
//     members: 120,
//   },
//   {
//     name: "Greenfield Residency",
//     location: "Nagpur, Maharashtra",
//     flats: 120,
//     members: 95,
//   },
//   {
//     name: "Sunshine Heights",
//     location: "Pune, Maharashtra",
//     flats: 20,
//     members: 50,
//   },
//   {
//     name: "Lotus Garden Society",
//     location: "Mumbai, Maharashtra",
//     flats: 200,
//     members: 350,
//   },
// ];

// export default function Dashboard() {
//   return (
//     <div style={styles.container}>
//       {/* Welcome */}
//       <h1 style={styles.heading}>Welcome back, Agent</h1>
//       <p style={styles.subHeading}>
//         Here's what's happening with your societies today.
//       </p>

//       {/* Stats Cards (Row Layout) */}
//       <div style={styles.cardRow}>
//         <div style={styles.card}>
//           <h2 style={styles.cardTitle}>Total Society</h2>
//           <p style={styles.cardValue}>3</p>
//           <p style={{ ...styles.cardChange, color: "green" }}>
//             +12% from last month
//           </p>
//         </div>
//         <div style={styles.card}>
//           <h2 style={styles.cardTitle}>Active Society</h2>
//           <p style={styles.cardValue}>2</p>
//           <p style={{ ...styles.cardChange, color: "green" }}>
//             +8% from last month
//           </p>
//         </div>
//         <div style={styles.card}>
//           <h2 style={styles.cardTitle}>Pending Verification</h2>
//           <p style={styles.cardValue}>1</p>
//           <p style={{ ...styles.cardChange, color: "red" }}>Need attention</p>
//         </div>
//         <div style={styles.card}>
//           <h2 style={styles.cardTitle}>Total Members</h2>
//           <p style={styles.cardValue}>338</p>
//           <p style={{ ...styles.cardChange, color: "green" }}>
//             +12% from last month
//           </p>
//         </div>
//       </div>

//       {/* Charts (Row Layout) */}
//       <div style={styles.chartRow}>
//         <div style={styles.chartCard}>
//           <h3 style={styles.chartTitle}>Society Registration Growth</h3>
//           <ResponsiveContainer width="100%" height={250}>
//             <LineChart data={societyData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Line
//                 type="monotone"
//                 dataKey="societies"
//                 stroke="#2563eb"
//                 strokeWidth={2}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>

//         <div style={styles.chartCard}>
//           <h3 style={styles.chartTitle}>Member Growth</h3>
//           <ResponsiveContainer width="100%" height={250}>
//             <LineChart data={memberData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Line
//                 type="monotone"
//                 dataKey="members"
//                 stroke="#10b981"
//                 strokeWidth={2}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* Recently Registered */}
//       <div style={styles.section}>
//         <div style={styles.sectionHeader}>
//           <h3 style={styles.chartTitle}>Recently Registered</h3>
//           <button style={styles.viewAll}>View all</button>
//         </div>
//         <div style={styles.recentGrid}>
//           {societies.map((s, i) => (
//             <div key={i} style={styles.recentCard}>
//               <h4 style={styles.recentTitle}>{s.name}</h4>
//               <p style={styles.recentLocation}>{s.location}</p>
//               <p style={styles.recentInfo}>
//                 <strong>{s.flats}</strong> flats •{" "}
//                 <strong>{s.members}</strong> members
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// // Internal CSS styles
// const styles = {
//   container: {
//     padding: "20px",
//     background: "#f9fafb",
//     minHeight: "100vh",
//     fontFamily: "Arial, sans-serif",
//     width: "100%",
//   },
//   heading: { fontSize: "24px", fontWeight: "bold", marginBottom: "8px" },
//   subHeading: { color: "#6b7280", marginBottom: "24px" },

//   // Cards Row
//   cardRow: {
//     display: "flex",
//     flexWrap: "wrap",
//     gap: "16px",
//     marginBottom: "24px",
//   },
//   card: {
//     flex: "1 1 200px",
//     background: "white",
//     padding: "16px",
//     borderRadius: "12px",
//     boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
//     minWidth: "200px",
//   },
//   cardTitle: { color: "#6b7280", fontSize: "14px" },
//   cardValue: { fontSize: "22px", fontWeight: "bold", margin: "4px 0" },
//   cardChange: { fontSize: "12px" },

//   // Charts Row
//   chartRow: {
//     display: "flex",
//     flexWrap: "wrap",
//     gap: "20px",
//     marginBottom: "24px",
//   },
//   chartCard: {
//     flex: "1 1 400px",
//     background: "white",
//     padding: "16px",
//     borderRadius: "12px",
//     boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
//     minWidth: "300px",
//   },
//   chartTitle: { fontWeight: "600", marginBottom: "12px" },

//   // Recently Registered
//   section: {
//     background: "white",
//     padding: "16px",
//     borderRadius: "12px",
//     boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
//   },
//   sectionHeader: {
//     display: "flex",
//     justifyContent: "space-between",
//     marginBottom: "12px",
//     alignItems: "center",
//   },
//   viewAll: {
//     background: "none",
//     border: "none",
//     color: "#2563eb",
//     fontSize: "14px",
//     cursor: "pointer",
//   },
//   recentGrid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//     gap: "16px",
//   },
//   recentCard: {
//     border: "1px solid #e5e7eb",
//     padding: "12px",
//     borderRadius: "8px",
//     transition: "all 0.2s",
//   },
//   recentTitle: { fontWeight: "600" },
//   recentLocation: { color: "#6b7280", fontSize: "13px" },
//   recentInfo: { fontSize: "13px", marginTop: "6px" },
// };



import { width } from "@mui/system";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const societyData = [
  { name: "Jan", societies: 12 },
  { name: "Feb", societies: 15 },
  { name: "Mar", societies: 20 },
  { name: "Apr", societies: 24 },
  { name: "May", societies: 28 },
  { name: "Jun", societies: 32 },
];

const memberData = [
  { name: "Jan", members: 1200 },
  { name: "Feb", members: 1500 },
  { name: "Mar", members: 1920 },
  { name: "Apr", members: 2300 },
  { name: "May", members: 2800 },
  { name: "Jun", members: 3400 },
];

const societies = [
  {
    name: "Green Valley Apartment",
    location: "Mumbai, Maharashtra",
    flats: 160,
    members: 120,
  },
  {
    name: "Greenfield Residency",
    location: "Nagpur, Maharashtra",
    flats: 120,
    members: 95,
  },
  {
    name: "Sunshine Heights",
    location: "Pune, Maharashtra",
    flats: 20,
    members: 50,
  },
  {
    name: "Lotus Garden Society",
    location: "Mumbai, Maharashtra",
    flats: 200,
    members: 350,
  },
];

export default function Dashboard() {
  return (
    <div style={styles.container}>
      {/* Welcome */}
      <div>
        <h1 style={styles.heading}>Welcome back, Agent</h1>
        <p style={styles.subHeading}>
          Here's what's happening with your societies today.
        </p>
      </div>

      {/* Stats Cards (Row Layout) */}
      <div style={styles.cardRow}>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Total Society</h2>
          <p style={styles.cardValue}>3</p>
          <p style={{ ...styles.cardChange, color: "green" }}>
            +12% from last month
          </p>
        </div>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Active Society</h2>
          <p style={styles.cardValue}>2</p>
          <p style={{ ...styles.cardChange, color: "green" }}>
            +8% from last month
          </p>
        </div>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Pending Verification</h2>
          <p style={styles.cardValue}>1</p>
          <p style={{ ...styles.cardChange, color: "red" }}>Need attention</p>
        </div>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Total Members</h2>
          <p style={styles.cardValue}>338</p>
          <p style={{ ...styles.cardChange, color: "green" }}>
            +12% from last month
          </p>
        </div>
      </div>

      {/* Charts (Row Layout) */}
      <div style={styles.chartRow}>
        <div style={styles.chartCard}>
          <h3 style={styles.chartTitle}>Society Registration Growth</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={societyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="societies"
                stroke="#2563eb"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div style={styles.chartCard}>
          <h3 style={styles.chartTitle}>Member Growth</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={memberData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="members"
                stroke="#10b981"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recently Registered */}
      <div style={styles.section}>
        <div style={styles.sectionHeader}>
          <h3 style={styles.chartTitle}>Recently Registered</h3>
          <button style={styles.viewAll}>View all</button>
        </div>
        <div style={styles.recentGrid}>
          {societies.map((s, i) => (
            <div key={i} style={styles.recentCard}>
              <h4 style={styles.recentTitle}>{s.name}</h4>
              <p style={styles.recentLocation}>{s.location}</p>
              <p style={styles.recentInfo}>
                <strong>{s.flats}</strong> flats •{" "}
                <strong>{s.members}</strong> members
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Internal CSS styles
const styles = {
  container: {
    height: "100vh", // Full screen height
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between", // Spread content evenly
    padding: "20px",
    background: "#f9fafb",
    fontFamily: "Arial, sans-serif",
    boxSizing: "border-box",
  width: "100%",
  },
  heading: { fontSize: "24px", fontWeight: "bold", marginBottom: "8px" },
  subHeading: { color: "#6b7280", marginBottom: "16px" },

  // Cards Row
  cardRow: {
    display: "flex",
    justifyContent: "space-between",
    gap: "16px",
  },
  card: {
    flex: 1,
    background: "white",
    padding: "12px",
    borderRadius: "12px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    minWidth: "160px",
  },
  cardTitle: { color: "#6b7280", fontSize: "14px" },
  cardValue: { fontSize: "20px", fontWeight: "bold", margin: "4px 0" },
  cardChange: { fontSize: "12px" },

  // Charts Row
  chartRow: {
    display: "flex",
    gap: "16px",
    flex: 1,
    margin: "16px 0",
  },
  chartCard: {
    flex: 1,
    background: "white",
    padding: "12px",
    borderRadius: "12px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
  chartTitle: { fontWeight: "600", marginBottom: "8px" },

  // Recently Registered
  section: {
    background: "white",
    padding: "12px",
    borderRadius: "12px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
  sectionHeader: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "8px",
    alignItems: "center",
  },
  viewAll: {
    background: "none",
    border: "none",
    color: "#2563eb",
    fontSize: "14px",
    cursor: "pointer",
  },
  recentGrid: {
    display: "flex",
    gap: "12px",
  },
  recentCard: {
    flex: 1,
    border: "1px solid #e5e7eb",
    padding: "10px",
    borderRadius: "8px",
    transition: "all 0.2s",
  },
  recentTitle: { fontWeight: "600" },
  recentLocation: { color: "#6b7280", fontSize: "13px" },
  recentInfo: { fontSize: "13px", marginTop: "6px" },
};
