

// import React, { useState } from "react";
// import {
//   Box,
//   Grid,
//   TextField,
//   Button,
//   Typography,
//   Card,
//   CardContent,
//   MenuItem,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Chip,
//   IconButton,
//   Pagination,
//   InputAdornment,
// } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import EditIcon from "@mui/icons-material/Edit";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import LocationOnIcon from "@mui/icons-material/LocationOn";

// // Dummy Data
// const societies = [
//   {
//     id: 1,
//     name: "Sunshine Heights",
//     regNo: "GVA2025001",
//     chairman: "Rajesh Kumar",
//     phone: "91+1234567899",
//     location: "Mumbai, Maharashtra",
//     type: "Residential",
//     flats: 120,
//     status: "Active",
//   },
//   {
//     id: 2,
//     name: "Lotus Garden Society",
//     regNo: "GVA2025001",
//     chairman: "Rajesh Kumar",
//     phone: "91+1234567899",
//     location: "Pune, Maharashtra",
//     type: "Commercial",
//     flats: 60,
//     status: "Pending",
//   },
//   {
//     id: 3,
//     name: "Green Valley Apartment",
//     regNo: "GVA2025001",
//     chairman: "Rajesh Kumar",
//     phone: "91+1234567899",
//     location: "Mumbai, Maharashtra",
//     type: "Commercial",
//     flats: 120,
//     status: "Inactive",
//   },
// ];

// const statusColors = {
//   Active: "success",
//   Pending: "warning",
//   Inactive: "default",
// };

// const SocietyList = () => {
//   const [search, setSearch] = useState("");

//   const filtered = societies.filter(
//     (s) =>
//       s.name.toLowerCase().includes(search.toLowerCase()) ||
//       s.regNo.toLowerCase().includes(search.toLowerCase()) ||
//       s.location.toLowerCase().includes(search.toLowerCase()) ||
//       s.chairman.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <Box p={3}>
//       {/* 🔍 Search & Filter */}
//       <Box display="flex" justifyContent="space-between" mb={3}>
//         <TextField
//           variant="outlined"
//           placeholder="Search by name, registration number, location, or chairman"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           fullWidth
//           InputProps={{
//             startAdornment: (
//               <InputAdornment position="start">
//                 <SearchIcon />
//               </InputAdornment>
//             ),
//           }}
//           sx={{ mr: 2 }}
//         />

//         <TextField
//           select
//           label="All Status"
//           defaultValue=""
//           sx={{ minWidth: 150, mr: 2 }}
//         >
//           <MenuItem value="">All</MenuItem>
//           <MenuItem value="Active">Active</MenuItem>
//           <MenuItem value="Pending">Pending</MenuItem>
//           <MenuItem value="Inactive">Inactive</MenuItem>
//         </TextField>

//         <TextField
//           select
//           label="Society Type"
//           defaultValue=""
//           sx={{ minWidth: 150 }}
//         >
//           <MenuItem value="">All</MenuItem>
//           <MenuItem value="Residential">Residential</MenuItem>
//           <MenuItem value="Commercial">Commercial</MenuItem>
//         </TextField>
//       </Box>

//       {/* 🏢 Table */}
//       <Card>
//         <CardContent>
//           <Typography variant="h6" mb={2}>
//             Registered Societies ({filtered.length})
//           </Typography>
//           <TableContainer>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell>Society Details</TableCell>
//                   <TableCell>Registration Number</TableCell>
//                   <TableCell>Chairman Name</TableCell>
//                   <TableCell>Location</TableCell>
//                   <TableCell>Type</TableCell>
//                   <TableCell>Flats</TableCell>
//                   <TableCell>Status</TableCell>
//                   <TableCell>Actions</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {filtered.map((s) => (
//                   <TableRow key={s.id}>
//                     <TableCell>{s.name}</TableCell>
//                     <TableCell>
//                       <Chip
//                         label={s.regNo}
//                         sx={{ bgcolor: "#f3f0f8", fontWeight: "bold" }}
//                       />
//                     </TableCell>
//                     <TableCell>
//                       {s.chairman} <br />
//                       <Typography variant="body2" color="text.secondary">
//                         {s.phone}
//                       </Typography>
//                     </TableCell>
//                     <TableCell>
//                       <LocationOnIcon
//                         fontSize="small"
//                         sx={{ verticalAlign: "middle", mr: 0.5 }}
//                       />
//                       {s.location}
//                     </TableCell>
//                     <TableCell>{s.type}</TableCell>
//                     <TableCell>{s.flats}</TableCell>
//                     <TableCell>
//                       <Chip
//                         label={s.status}
//                         color={statusColors[s.status]}
//                         variant="outlined"
//                       />
//                     </TableCell>
//                     <TableCell>
//                       <IconButton size="small" color="primary">
//                         <VisibilityIcon />
//                       </IconButton>
//                       <IconButton size="small" color="secondary">
//                         <EditIcon />
//                       </IconButton>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>

//           {/* 📑 Pagination */}
//           <Box display="flex" justifyContent="flex-end" mt={2}>
//             <Pagination count={68} page={1} color="primary" />
//           </Box>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// };

// export default SocietyList;

// import React, { useState } from "react";
// import {
//   Box,
//   Grid,
//   TextField,
//   Button,
//   Typography,
//   Card,
//   CardContent,
//   MenuItem,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Chip,
//   IconButton,
//   Pagination,
//   InputAdornment,
// } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import EditIcon from "@mui/icons-material/Edit";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import { GetSocietiesApi } from "../APICall/APICall";

// // Dummy Data
// const societies = [
//   {
//     id: 1,
//     name: "Sunshine Heights",
//     regNo: "GVA2025001",
//     chairman: "Rajesh Kumar",
//     phone: "91+1234567899",
//     location: "Mumbai, Maharashtra",
//     type: "Residential",
//     flats: 120,
//     status: "Active",
//   },
//   {
//     id: 2,
//     name: "Lotus Garden Society",
//     regNo: "GVA2025002",
//     chairman: "Rajesh Kumar",
//     phone: "91+1234567899",
//     location: "Pune, Maharashtra",
//     type: "Commercial",
//     flats: 60,
//     status: "Pending",
//   },
//   {
//     id: 3,
//     name: "Green Valley Apartment",
//     regNo: "GVA2025003",
//     chairman: "Rajesh Kumar",
//     phone: "91+1234567899",
//     location: "Mumbai, Maharashtra",
//     type: "Commercial",
//     flats: 120,
//     status: "Inactive",
//   },
// ];

// // Internal CSS Object
// const styles = {
//   container: { padding: 20,width: '100%' },
//   searchContainer: { display: "flex", justifyContent: "space-between", marginBottom: 20 },
//   textField: { marginRight: 10, minWidth: 150 },
//   card: { marginTop: 20 },
//   tableHeader: { fontWeight: "bold" },
//   chipRegNo: { backgroundColor: "#f3f0f8", fontWeight: "bold" },
//   chipStatus: {
//     Active: { borderColor: "#4caf50", color: "#4caf50" },
//     Pending: { borderColor: "#ff9800", color: "#ff9800" },
//     Inactive: { borderColor: "#9e9e9e", color: "#9e9e9e" },
//   },
//   locationIcon: { verticalAlign: "middle", marginRight: 2 },
//   paginationContainer: { display: "flex", justifyContent: "flex-end", marginTop: 20 },
// };

// const SocietyList = () => {
//   const [search, setSearch] = useState("");

//   const filtered = societies.filter(
//     (s) =>
//       s.name.toLowerCase().includes(search.toLowerCase()) ||
//       s.regNo.toLowerCase().includes(search.toLowerCase()) ||
//       s.location.toLowerCase().includes(search.toLowerCase()) ||
//       s.chairman.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <Box style={styles.container}>
//       {/* 🔍 Search & Filter */}
//       <Box style={styles.searchContainer}>
//         <TextField
//           variant="outlined"
//           placeholder="Search by name, registration number, location, or chairman"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           fullWidth
//           InputProps={{
//             startAdornment: (
//               <InputAdornment position="start">
//                 <SearchIcon />
//               </InputAdornment>
//             ),
//           }}
//           style={{ marginRight: 10 }}
//         />

//         <TextField select label="All Status" defaultValue="" style={styles.textField}>
//           <MenuItem value="">All</MenuItem>
//           <MenuItem value="Active">Active</MenuItem>
//           <MenuItem value="Pending">Pending</MenuItem>
//           <MenuItem value="Inactive">Inactive</MenuItem>
//         </TextField>

//         <TextField select label="Society Type" defaultValue="" style={styles.textField}>
//           <MenuItem value="">All</MenuItem>
//           <MenuItem value="Residential">Residential</MenuItem>
//           <MenuItem value="Commercial">Commercial</MenuItem>
//         </TextField>
//       </Box>

//       {/* 🏢 Table */}
//       <Card style={styles.card}>
//         <CardContent>
//           <Typography variant="h6" style={{ marginBottom: 10 }}>
//             Registered Societies ({filtered.length})
//           </Typography>
//           <TableContainer>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell style={styles.tableHeader}>Society Details</TableCell>
//                   <TableCell style={styles.tableHeader}>Registration Number</TableCell>
//                   <TableCell style={styles.tableHeader}>Chairman Name</TableCell>
//                   <TableCell style={styles.tableHeader}>Location</TableCell>
//                   <TableCell style={styles.tableHeader}>Type</TableCell>
//                   <TableCell style={styles.tableHeader}>Flats</TableCell>
//                   <TableCell style={styles.tableHeader}>Status</TableCell>
//                   <TableCell style={styles.tableHeader}>Actions</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {filtered.map((s) => (
//                   <TableRow key={s.id}>
//                     <TableCell>{s.name}</TableCell>
//                     <TableCell>
//                       <Chip label={s.regNo} style={styles.chipRegNo} />
//                     </TableCell>
//                     <TableCell>
//                       {s.chairman} <br />
//                       <Typography variant="body2" color="textSecondary">
//                         {s.phone}
//                       </Typography>
//                     </TableCell>
//                     <TableCell>
//                       <LocationOnIcon fontSize="small" style={styles.locationIcon} />
//                       {s.location}
//                     </TableCell>
//                     <TableCell>{s.type}</TableCell>
//                     <TableCell>{s.flats}</TableCell>
//                     <TableCell>
//                       <Chip
//                         label={s.status}
//                         variant="outlined"
//                         style={styles.chipStatus[s.status]}
//                       />
//                     </TableCell>
//                     <TableCell>
//                       <IconButton size="small" color="primary">
//                         <VisibilityIcon />
//                       </IconButton>
//                       <IconButton size="small" color="secondary">
//                         <EditIcon />
//                       </IconButton>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>

//           {/* 📑 Pagination */}
//           <Box style={styles.paginationContainer}>
//             <Pagination count={68} page={1} color="primary" />
//           </Box>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// };

// export default SocietyList;


// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Card,
//   CardContent,
//   Typography,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
// } from "@mui/material";
// import { GetSocietiesApi } from "../APICall/APICall";

// // Internal CSS
// const styles = {
//   container: { padding: 20, width: "100%" },
//   card: { marginTop: 20 },
//   tableHeader: { fontWeight: "bold", backgroundColor: "#f0f0f0" },
//   tableCell: { padding: "8px 12px" },
//   title: { marginBottom: 10 },
// };

// const SocietyList = () => {
//   const [societies, setSocieties] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchSocieties = async () => {
//       try {
//         const response = await GetSocietiesApi(); // call your API function
//         console.log("API Response:", response.data); // 🔹 check the data in console
//         setSocieties(response.data); // update state
//       } catch (error) {
//         console.error("Error fetching societies:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSocieties();
//   }, []);

//   if (loading) {
//     return (
//       <Box style={styles.container}>
//         <Typography>Loading societies...</Typography>
//       </Box>
//     );
//   }

//   if (!societies || societies.length === 0) {
//     return (
//       <Box style={styles.container}>
//         <Typography>No societies found.</Typography>
//       </Box>
//     );
//   }

//   return (
//     <Box style={styles.container}>
//       <Card style={styles.card}>
//         <CardContent>
//           <Typography variant="h6" style={styles.title}>
//             Societies ({societies.length})
//           </Typography>
//           <TableContainer>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   {Object.keys(societies[0]).map((key) => (
//                     <TableCell key={key} style={styles.tableHeader}>
//                       {key.replace(/_/g, " ").toUpperCase()}
//                     </TableCell>
//                   ))}
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {societies.map((society, index) => (
//                   <TableRow key={index}>
//                     {Object.values(society).map((value, idx) => (
//                       <TableCell key={idx} style={styles.tableCell}>
//                         {value !== null ? value.toString() : "-"}
//                       </TableCell>
//                     ))}
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// };

// export default SocietyList;


// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   TextField,
//   MenuItem,
//   Card,
//   CardContent,
//   Typography,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Chip,
//   IconButton,
//   Pagination,
//   InputAdornment,
// } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import EditIcon from "@mui/icons-material/Edit";
// import VisibilityIcon from "@mui/icons-material/Visibility";

// import { GetSocietiesApi } from "../APICall/APICall";

// // Status Colors
// const statusColors = {
//   Active: { borderColor: "#4caf50", color: "#4caf50" },
//   Pending: { borderColor: "#ff9800", color: "#ff9800" },
//   Inactive: { borderColor: "#9e9e9e", color: "#9e9e9e" },
// };

// // Internal CSS
// const styles = {
//   container: { padding: 20, width: "100%" },
//   searchContainer: { display: "flex", justifyContent: "space-between", marginBottom: 20 },
//   textField: { marginRight: 10, minWidth: 150 },
//   card: { marginTop: 20 },
//   tableHeader: { fontWeight: "bold" },
//   chipRegNo: { backgroundColor: "#f3f0f8", fontWeight: "bold" },
//   locationIcon: { verticalAlign: "middle", marginRight: 2 },
//   paginationContainer: { display: "flex", justifyContent: "flex-end", marginTop: 20 },
// };

// // ... keep all imports and styles the same

// const SocietyList = () => {
//   const [societies, setSocieties] = useState([]);
//   const [search, setSearch] = useState("");
//   const [loading, setLoading] = useState(true);

//  useEffect(() => {
//   const fetchSocieties = async () => {
//     try {
//       const response = await GetSocietiesApi();
//       console.log("API Response:", response.data);

//       // Wrap single object in array
//       if (response.data && typeof response.data === "object") {
//         setSocieties([response.data]);
//       } else {
//        setSocieties(response.data.r || []);

//       }
//     } catch (error) {
//       console.error("Error fetching societies:", error);
//       setSocieties([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   fetchSocieties();
// }, []);

//   const filtered = (societies || []).filter(
//     (s) =>
//       (s.descn && s.descn.toLowerCase().includes(search.toLowerCase())) ||
//       (s.registration_number && s.registration_number.toLowerCase().includes(search.toLowerCase())) ||
//       (s.city && s.city.toLowerCase().includes(search.toLowerCase())) ||
//       (s.state && s.state.toLowerCase().includes(search.toLowerCase()))
//   );

//   // Only show loading while fetching
//   if (loading) {
//     return (
//       <Box style={styles.container}>
//         <Typography>Loading societies...</Typography>
//       </Box>
//     );
//   }

//   // Render table always, even if empty
//   return (
//     <Box style={styles.container}>
//       {/* Search */}
//       <Box style={styles.searchContainer}>
//         <TextField
//           variant="outlined"
//           placeholder="Search by description, registration number, city, or state"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           fullWidth
//           InputProps={{
//             startAdornment: (
//               <InputAdornment position="start">
//                 <SearchIcon />
//               </InputAdornment>
//             ),
//           }}
//           style={{ marginRight: 10 }}
//         />

//         <TextField select label="All Status" defaultValue="" style={styles.textField}>
//           <MenuItem value="">All</MenuItem>
//           <MenuItem value="Active">Active</MenuItem>
//           <MenuItem value="Pending">Pending</MenuItem>
//           <MenuItem value="Inactive">Inactive</MenuItem>
//         </TextField>

//         <TextField select label="Society Type" defaultValue="" style={styles.textField}>
//           <MenuItem value="">All</MenuItem>
//           <MenuItem value="Residential">Residential</MenuItem>
//           <MenuItem value="Commercial">Commercial</MenuItem>
//         </TextField>
//       </Box>

//       {/* Table */}
//       <Card style={styles.card}>
//         <CardContent>
//           <Typography variant="h6" style={{ marginBottom: 10 }}>
//             Registered Societies ({filtered.length})
//           </Typography>
//           <TableContainer>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell style={styles.tableHeader}>Description</TableCell>
//                   <TableCell style={styles.tableHeader}>Registration Number</TableCell>
//                   <TableCell style={styles.tableHeader}>Address</TableCell>
//                   <TableCell style={styles.tableHeader}>City</TableCell>
//                   <TableCell style={styles.tableHeader}>State</TableCell>
//                   <TableCell style={styles.tableHeader}>Year Built</TableCell>
//                   <TableCell style={styles.tableHeader}>Type</TableCell>
//                   <TableCell style={styles.tableHeader}>Status</TableCell>
//                   <TableCell style={styles.tableHeader}>Actions</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {filtered.map((s) => (
//                   <TableRow key={s.society_id}>
//                     <TableCell>{s.descn}</TableCell>
//                     <TableCell>
//                       <Chip label={s.registration_number} style={styles.chipRegNo} />
//                     </TableCell>
//                     <TableCell>{s.address}</TableCell>
//                     <TableCell>{s.city}</TableCell>
//                     <TableCell>{s.state}</TableCell>
//                     <TableCell>{s.year_built}</TableCell>
//                     <TableCell>{s.typeofsociety}</TableCell>
//                     <TableCell>
//                       <Chip
//                         label={s.active ? "Active" : "Inactive"}
//                         variant="outlined"
//                         style={s.active ? statusColors.Active : statusColors.Inactive}
//                       />
//                     </TableCell>
//                     <TableCell>
//                       <IconButton size="small" color="primary"><VisibilityIcon /></IconButton>
//                       <IconButton size="small" color="secondary"><EditIcon /></IconButton>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>

//           <Box style={styles.paginationContainer}>
//             <Pagination count={1} page={1} color="primary" />
//           </Box>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// };

// export default SocietyList;


// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   TextField,
//   MenuItem,
//   Card,
//   CardContent,
//   Typography,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Chip,
//   IconButton,
//   Pagination,
//   InputAdornment,
// } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import EditIcon from "@mui/icons-material/Edit";
// import VisibilityIcon from "@mui/icons-material/Visibility";

// import { GetSocietiesApi } from "../APICall/APICall";

// // Status Colors
// const statusColors = {
//   Active: { borderColor: "#4caf50", color: "#4caf50" },
//   Pending: { borderColor: "#ff9800", color: "#ff9800" },
//   Inactive: { borderColor: "#9e9e9e", color: "#9e9e9e" },
// };

// // Internal CSS
// const styles = {
//   container: { padding: 20, width: "100%" },
//   searchContainer: { display: "flex", justifyContent: "space-between", marginBottom: 20 },
//   textField: { marginRight: 10, minWidth: 150 },
//   card: { marginTop: 20 },
//   tableHeader: { fontWeight: "bold" },
//   chipRegNo: { backgroundColor: "#f3f0f8", fontWeight: "bold" },
//   paginationContainer: { display: "flex", justifyContent: "flex-end", marginTop: 20 },
// };

// const SocietyList = () => {
//   const [societies, setSocieties] = useState([]);
//   const [loading, setLoading] = useState(true);


// useEffect(() => {
//   const fetchSocieties = async () => {
//     try {
//       const payload = {}; // or pass filters if needed
//       const res = await GetSocietiesApi(payload); // res = { Success: true, Data: [...] }
//       console.log("API Response Data:", res);

//       if (res && res.Success && res.Data) {
//         setSocieties(res.Data); // ✅ use the Data array
//       } else {
//         setSocieties([]);
//       }
//     } catch (error) {
//       console.error("Error fetching societies:", error);
//       setSocieties([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   fetchSocieties();
// }, []);


//   if (loading) {
//     return (
//       <Box style={styles.container}>
//         <Typography>Loading societies...</Typography>
//       </Box>
//     );
//   }

//   return (
//     <Box style={styles.container}>
//       {/* Search & Filters (display only, not functional) */}
//       <Box style={styles.searchContainer}>
//         <TextField
//           variant="outlined"
//           placeholder="Search by description, registration number, city, or state"
//           fullWidth
//           InputProps={{
//             startAdornment: (
//               <InputAdornment position="start">
//                 <SearchIcon />
//               </InputAdornment>
//             ),
//           }}
//           style={{ marginRight: 10 }}
//           disabled
//         />

//         <TextField select label="All Status" defaultValue="" style={styles.textField} disabled>
//           <MenuItem value="">All</MenuItem>
//           <MenuItem value="Active">Active</MenuItem>
//           <MenuItem value="Pending">Pending</MenuItem>
//           <MenuItem value="Inactive">Inactive</MenuItem>
//         </TextField>

//         <TextField select label="Society Type" defaultValue="" style={styles.textField} disabled>
//           <MenuItem value="">All</MenuItem>
//           <MenuItem value="Residential">Residential</MenuItem>
//           <MenuItem value="Commercial">Commercial</MenuItem>
//         </TextField>
//       </Box>

//       {/* Table */}
//       <Card style={styles.card}>
//         <CardContent>
//           <Typography variant="h6" style={{ marginBottom: 10 }}>
//             Registered Societies ({societies.length})
//           </Typography>
//           <TableContainer>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell style={styles.tableHeader}>Description</TableCell>
//                   <TableCell style={styles.tableHeader}>Registration Number</TableCell>
//                   <TableCell style={styles.tableHeader}>Address</TableCell>
//                   <TableCell style={styles.tableHeader}>City</TableCell>
//                   <TableCell style={styles.tableHeader}>State</TableCell>
//                   <TableCell style={styles.tableHeader}>Year Built</TableCell>
//                   <TableCell style={styles.tableHeader}>Type</TableCell>
//                   <TableCell style={styles.tableHeader}>Status</TableCell>
//                   <TableCell style={styles.tableHeader}>Actions</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {societies.map((s) => (
//                   <TableRow key={s.society_id}>
//                     <TableCell>{s.descn}</TableCell>
//                     <TableCell>
//                       <Chip label={s.registration_number} style={styles.chipRegNo} />
//                     </TableCell>
//                     <TableCell>{s.address}</TableCell>
//                     <TableCell>{s.city}</TableCell>
//                     <TableCell>{s.state}</TableCell>
//                     <TableCell>{s.year_built}</TableCell>
//                     <TableCell>{s.typeofsociety}</TableCell>
//                     <TableCell>
//                       <Chip
//                         label={s.active ? "Active" : "Inactive"}
//                         variant="outlined"
//                         style={s.active ? statusColors.Active : statusColors.Inactive}
//                       />
//                     </TableCell>
//                     <TableCell>
//                       <IconButton size="small" color="primary"><VisibilityIcon /></IconButton>
//                       <IconButton size="small" color="secondary"><EditIcon /></IconButton>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>

//           <Box style={styles.paginationContainer}>
//             <Pagination count={1} page={1} color="primary" />
//           </Box>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// };

// export default SocietyList;

import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  MenuItem,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton,
  Pagination,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { GetSocietiesApi } from "../APICall/APICall";

// Status Colors
const statusColors = {
  Active: { borderColor: "#4caf50", color: "#4caf50" },
  Pending: { borderColor: "#ff9800", color: "#ff9800" },
  Inactive: { borderColor: "#9e9e9e", color: "#9e9e9e" },
};

// Styles
const styles = {
  container: { padding: 20, width: "100%" },
  searchContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 20,
    alignItems: "center",
  },
  searchInput: { flex: 1, minWidth: 200 },
  textField: { minWidth: 150 },
  card: { marginTop: 20 },
  tableHeader: { fontWeight: "bold" },
  chipRegNo: { backgroundColor: "#f3f0f8", fontWeight: "bold" },
  paginationContainer: { display: "flex", justifyContent: "flex-end", marginTop: 20 },
};

const SocietyList = () => {
  const [societies, setSocieties] = useState([]);
  const [filteredSocieties, setFilteredSocieties] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  // Fetch societies
  useEffect(() => {
    const fetchSocieties = async () => {
      try {
        const payload = {};
        const res = await GetSocietiesApi(payload); // { Success: true, Data: [...] }
        if (res && res.Success && res.Data) {
          setSocieties(res.Data);
          setFilteredSocieties(res.Data);
        } else {
          setSocieties([]);
          setFilteredSocieties([]);
        }
      } catch (error) {
        console.error("Error fetching societies:", error);
        setSocieties([]);
        setFilteredSocieties([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSocieties();
  }, []);

  // Apply filters
  useEffect(() => {
    let filtered = [...societies];

    // Text search
    if (searchText.trim()) {
      const text = searchText.toLowerCase();
      filtered = filtered.filter(
        (s) =>
          s.descn.toLowerCase().includes(text) ||
          s.registration_number.toLowerCase().includes(text) ||
          s.city.toLowerCase().includes(text) ||
          s.state.toLowerCase().includes(text)
      );
    }

    // Status filter
    if (statusFilter) {
      filtered = filtered.filter((s) => {
        const status = s.active ? "Active" : "Inactive"; // Adjust if Pending exists
        return status === statusFilter;
      });
    }

    // Type filter
    if (typeFilter) {
      filtered = filtered.filter((s) => s.typeofsociety === typeFilter);
    }

    setFilteredSocieties(filtered);
  }, [searchText, statusFilter, typeFilter, societies]);

  if (loading) {
    return (
      <Box style={styles.container}>
        <Typography>Loading societies...</Typography>
      </Box>
    );
  }

  return (
    <Box style={styles.container}>
      {/* Filters - single responsive row */}
      <Box style={styles.searchContainer}>
        <TextField
          variant="outlined"
          placeholder="Search by description, registration number, city, or state"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={styles.searchInput}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          select
          label="All Status"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          style={styles.textField}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Active">Active</MenuItem>
          <MenuItem value="Inactive">Inactive</MenuItem>
        </TextField>

        <TextField
          select
          label="Society Type"
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          style={styles.textField}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Residential">Residential</MenuItem>
          <MenuItem value="Commercial">Commercial</MenuItem>
        </TextField>
      </Box>

      {/* Table */}
      <Card style={styles.card}>
        <CardContent>
          <Typography variant="h6" style={{ marginBottom: 10 }}>
            Registered Societies ({filteredSocieties.length})
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={styles.tableHeader}>Description</TableCell>
                  <TableCell style={styles.tableHeader}>Registration Number</TableCell>
                  <TableCell style={styles.tableHeader}>Address</TableCell>
                  <TableCell style={styles.tableHeader}>City</TableCell>
                  <TableCell style={styles.tableHeader}>State</TableCell>
                  <TableCell style={styles.tableHeader}>Year Built</TableCell>
                  <TableCell style={styles.tableHeader}>Type</TableCell>
                  <TableCell style={styles.tableHeader}>Status</TableCell>
                  <TableCell style={styles.tableHeader}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredSocieties.map((s) => (
                  <TableRow key={s.society_id}>
                    <TableCell>{s.descn}</TableCell>
                    <TableCell>
                      <Chip label={s.registration_number} style={styles.chipRegNo} />
                    </TableCell>
                    <TableCell>{s.address}</TableCell>
                    <TableCell>{s.city}</TableCell>
                    <TableCell>{s.state}</TableCell>
                    <TableCell>{s.year_built}</TableCell>
                    <TableCell>{s.typeofsociety}</TableCell>
                    <TableCell>
                      <Chip
                        label={s.active ? "Active" : "Inactive"}
                        variant="outlined"
                        style={s.active ? statusColors.Active : statusColors.Inactive}
                      />
                    </TableCell>
                    <TableCell>
                      <IconButton size="small" color="primary">
                        <VisibilityIcon />
                      </IconButton>
                      <IconButton size="small" color="secondary">
                        <EditIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Box style={styles.paginationContainer}>
            <Pagination count={1} page={1} color="primary" />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SocietyList;
