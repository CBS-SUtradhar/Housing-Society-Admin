


// import React, { useState, useEffect } from "react";
// import {
//   Box, TextField, MenuItem, Card, CardContent, Typography, Table, TableBody, TableCell,
//   TableContainer, TableHead, TableRow, Chip, IconButton, Pagination, InputAdornment,
// } from "@mui/material";
// import { Link } from "react-router-dom";
// import SearchIcon from "@mui/icons-material/Search";
// import EditIcon from "@mui/icons-material/Edit";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import { GetSocietiesApi } from "../APICall/APIService";
// const statusColors = {
//   Active: { borderColor: "#4caf50", color: "#4caf50" },
//   Inactive: { borderColor: "#9e9e9e", color: "#9e9e9e" },
// };

// const styles = {
//   container: { padding: 12, width: "100%", height: "50%" },
//   searchContainer: { display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 20, alignItems: "center", position: "sticky", top: 0, zIndex: 10, backgroundColor: "#fff", borderBottom: "1px solid #ddd" },
//   searchInput: { flex: 1, minWidth: 200 },
//   chipRegNo: { backgroundColor: "#f3f0f8", fontWeight: "bold" },
//   tableHeader: { fontWeight: "bold", position: "sticky", zIndex: 5 },
//   paginationContainer: { display: "flex", justifyContent: "flex-end", marginTop: 10 },
// };

// const SocietyList = () => {
//   const [societies, setSocieties] = useState([]);
//   const [filteredSocieties, setFilteredSocieties] = useState([]);
//   const [searchText, setSearchText] = useState("");
//   const [statusFilter, setStatusFilter] = useState("");
//   const [typeFilter, setTypeFilter] = useState("");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchSocieties = async () => {
//       try {
//         const res = await GetSocietiesApi({});
//         if (res?.Success && res.Data) {
//           setSocieties(res.Data);
//           setFilteredSocieties(res.Data);
//         }
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchSocieties();
//   }, []);

  
//   useEffect(() => {
//     let filtered = [...societies];
//     if (searchText.trim()) {
//       const text = searchText.toLowerCase();
//       filtered = filtered.filter(s => s.descn.toLowerCase().includes(text) || s.registration_number.toLowerCase().includes(text));
//     }
//     if (statusFilter) filtered = filtered.filter(s => (s.active ? "Active" : "Inactive") === statusFilter);
//     if (typeFilter) filtered = filtered.filter(s => s.typeofsociety === typeFilter);
//     setFilteredSocieties(filtered);
//   }, [searchText, statusFilter, typeFilter, societies]);

//   if (loading) return <Box style={styles.container}><Typography>Loading societies...</Typography></Box>;

//   return (
//     <Box style={styles.container}>
//       <Box style={styles.searchContainer}>
//         <TextField
//           variant="outlined"
//           placeholder="Search"
//           value={searchText}
//           onChange={(e) => setSearchText(e.target.value)}
//           style={styles.searchInput}
//           InputProps={{ startAdornment: (<InputAdornment position="start"><SearchIcon /></InputAdornment>), style: { height: 36, padding: "0 8px" } }}
//         />
//         <TextField select size="small" label="Status" value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
//           <MenuItem value="">All</MenuItem>
//           <MenuItem value="Active">Active</MenuItem>
//           <MenuItem value="Inactive">Inactive</MenuItem>
//         </TextField>
//         <TextField select size="small" label="Type" value={typeFilter} onChange={e => setTypeFilter(e.target.value)}>
//           <MenuItem value="">All</MenuItem>
//           <MenuItem value="Residential">Residential</MenuItem>
//           <MenuItem value="Commercial">Commercial</MenuItem>
//         </TextField>
//       </Box>

//       <Typography variant="h6" style={{ marginBottom: 10 }}>
//         Registered Societies ({filteredSocieties.length})
//       </Typography>

//       <Card>
//         <CardContent>
//           <TableContainer style={{ maxHeight: "65vh" }}>
//             <Table stickyHeader>
//               <TableHead>
//                 <TableRow>
//                   <TableCell style={styles.tableHeader}>Society Name</TableCell>
//                   <TableCell style={styles.tableHeader}>Registration Number</TableCell>
//                   <TableCell style={styles.tableHeader}>Address</TableCell>
//                   <TableCell style={styles.tableHeader}>City</TableCell>
//                   <TableCell style={styles.tableHeader}>State</TableCell>
//                   <TableCell style={styles.tableHeader}>Actions</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {filteredSocieties.map((s) => (
//                   <TableRow key={s.society_id}>
//                     <TableCell>{s.descn}</TableCell>
//                     <TableCell><Chip label={s.registration_number} style={styles.chipRegNo} /></TableCell>
//                     <TableCell>{s.address}</TableCell>
//                     <TableCell>{s.city}</TableCell>
//                     <TableCell>{s.state}</TableCell>
//                     <TableCell>
//                       <IconButton size="small" color="primary"><VisibilityIcon /></IconButton>
//                       <IconButton size="small" color="secondary"><EditIcon /></IconButton>
//                       {/* <IconButton
//                         size="small"
//                         color="secondary"
//                         component={Link}
//                         to={{
//                           pathname: "/SocietyAdminInvitation",
//                           state: { prefill: s } // Pass row data
//                         }}
//                       >
//                         <MailOutlineIcon />
//                       </IconButton> */}
//                       <Link 
//   to="/SocietyAdminInvitation" 
//   state={{ prefill: s }}
// >
//   <IconButton size="small" color="secondary">
//     <MailOutlineIcon />
//   </IconButton>
// </Link>

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


import React, { useState, useEffect, useContext } from "react";
import {
  Box, TextField, MenuItem, Card, CardContent, Typography, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, Chip, IconButton, Pagination, InputAdornment,
} from "@mui/material";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { GetSocietiesApi } from "../APICall/APIService";
import { UserContext } from "../context/UserContext"; // <-- import UserContext


const styles = {
 container: { 
  padding: 15, 
  width: "100%", 
  height: "50%" 
},

searchContainer: { 
  display: "flex", 
  flexWrap: "wrap", 
  gap: 10, 
  marginBottom: 20, 
  alignItems: "center", 
  justifyContent: "space-between",   
  position: "sticky", 
  top: 0, 
  zIndex: 10, 
  backgroundColor: "#fff",   // ✅ हलका ग्रे background
  borderBottom: "1px solid #ddd", 
  padding: "2px 12px",          // ✅ आतली जागा
  minHeight: "70px",                 
  width: "98%",                     
  borderRadius: "8px",               
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)", 
           // ✅ उजवीकडे 5px जागा
},




searchInput: { 
  width: "55%",   // ✅ फिक्स 50% 
  minWidth: 200   // optional, छोटे स्क्रीनवर किमान 200px राहील
},

chipRegNo: { 
  backgroundColor: "#f3f0f8", 
  fontWeight: "bold",
  width: "60%",   // ✅ आधीपेक्षा मोठं
},

 
  tableHeader: { fontWeight: "bold", position: "sticky", zIndex: 5 },
  paginationContainer: { display: "flex", justifyContent: "flex-end", marginTop: 10 },
};

const SocietyList = () => {
  const { user } = useContext(UserContext); // <-- logged-in user
  const [societies, setSocieties] = useState([]);
  const [filteredSocieties, setFilteredSocieties] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSocieties = async () => {
      try {
        const res = await GetSocietiesApi({});
        if (res?.Success && res.Data) {
          let societyData = res.Data;

          // ✅ Super Admin sees all societies, others see only their own society
          if (user && user.roleId !== 161) { // assuming roleId 1 = Super Admin
            societyData = societyData.filter(s => s.society_id === user.societyId);
          }

          setSocieties(societyData);
          setFilteredSocieties(societyData);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchSocieties();
  }, [user]);

  useEffect(() => {
    let filtered = [...societies];
    if (searchText.trim()) {
      const text = searchText.toLowerCase();
      filtered = filtered.filter(s => s.descn.toLowerCase().includes(text) || s.registration_number.toLowerCase().includes(text));
    }
    if (statusFilter) filtered = filtered.filter(s => (s.active ? "Active" : "Inactive") === statusFilter);
    if (typeFilter) filtered = filtered.filter(s => s.typeofsociety === typeFilter);
    setFilteredSocieties(filtered);
  }, [searchText, statusFilter, typeFilter, societies]);

  if (loading) return <Box style={styles.container}><Typography>Loading societies...</Typography></Box>;

  return (
    <Box style={styles.container}>
      <Box style={styles.searchContainer}>
        <TextField
          variant="outlined"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={styles.searchInput}
          InputProps={{ startAdornment: (<InputAdornment position="start"><SearchIcon /></InputAdornment>), style: { height: 36, padding: "0 8px" } }}
        />

       <TextField
  select
  size="small"
  label="Status"
  value={statusFilter}
  onChange={e => setStatusFilter(e.target.value)}
  sx={{ width: "250px", mr: 2 }}   // ✅ इथे width दिला
>
  <MenuItem value="">All</MenuItem>
  <MenuItem value="Active">Active</MenuItem>
  <MenuItem value="Inactive">Inactive</MenuItem>
</TextField>

<TextField
  select
  size="small"
  label="Type"
  value={typeFilter}
  onChange={e => setTypeFilter(e.target.value)}
  sx={{ width: "250px" }}   // ✅ width दिला
>
  <MenuItem value="">All</MenuItem>
  <MenuItem value="Residential">Residential</MenuItem>
  <MenuItem value="Commercial">Commercial</MenuItem>
</TextField>

      
      </Box>

      <Typography variant="h6" style={{ marginBottom: 10 }}>
        Registered Societies ({filteredSocieties.length})
      </Typography>

      <Card>
        <CardContent>
          <TableContainer style={{ maxHeight: "65vh" }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell style={styles.tableHeader}>Society Name</TableCell>
                  <TableCell style={styles.tableHeader}>Registration Number</TableCell>
                  <TableCell style={styles.tableHeader}>Address</TableCell>
                  <TableCell style={styles.tableHeader}>City</TableCell>
                  <TableCell style={styles.tableHeader}>State</TableCell>
                  <TableCell style={styles.tableHeader}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredSocieties.map((s) => (
                  <TableRow key={s.society_id}>
                    <TableCell>{s.descn}</TableCell>
                    <TableCell><Chip label={s.registration_number} style={styles.chipRegNo} /></TableCell>
                    <TableCell>{s.address}</TableCell>
                    <TableCell>{s.city}</TableCell>
                    <TableCell>{s.state}</TableCell>
                    <TableCell>
                       {/* <Link to="/PropertyRegister" state={{ prefill: s }}>
                      <IconButton size="small" color="primary"><VisibilityIcon /></IconButton>
                      </Link>
                       */}

                       <Link
  to="/PropertyRegister"
  state={{ societyId: s.society_id }}   // 👈 pass societyId in state
>
  <IconButton size="small" color="primary">
    <VisibilityIcon />
  </IconButton>
</Link>

                      <IconButton size="small" color="secondary"><EditIcon /></IconButton>
                      <Link to="/SocietyAdminInvitation" state={{ prefill: s }}>
                        <IconButton size="small" color="secondary">
                          <MailOutlineIcon />
                        </IconButton>
                      </Link>
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



















// import React, { useState, useEffect, useContext } from "react";
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
// import { Link } from "react-router-dom";
// import SearchIcon from "@mui/icons-material/Search";
// import EditIcon from "@mui/icons-material/Edit";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import MailOutlineIcon from "@mui/icons-material/MailOutline";
// import { GetSocietiesApi } from "../APICall/APIService";
// import { UserContext } from "../context/UserContext";

// const styles = {
//   container: {
//     padding: 16,
//     width: "100%",
//     height: "100%",
//     backgroundColor: "#f9f9f9",
//   },
//   searchContainer: {
//     display: "flex",
//     flexWrap: "wrap",
//     gap: 50,
//     marginBottom: 20,
//     alignItems: "center",
//     position: "sticky",
//     top: 0,
//     zIndex: 10,
//     backgroundColor: "#fff",
//     borderBottom: "1px solid #ddd",
//     padding: 8,
//     borderRadius: 4,
//   },
//   searchInput: {
//     flex: 1,
//     width: "60%",
//     backgroundColor: "#fff",
//   },
//   chipRegNo: {
//     backgroundColor: "#e0e0e0",
//     fontWeight: 600,
//     color: "#333",
//     width:"39%",
//   },
//   tableHeader: {
//     fontWeight: 700,
//     backgroundColor: "#f0f0f0",
//     position: "sticky",
//     top: 0,
//     zIndex: 5,
//   },
//   tableRow: {
//     "&:hover": {
//       backgroundColor: "#f5f5f5",
//     },
//   },
//   paginationContainer: {
//     display: "flex",
//     justifyContent: "flex-end",
//     marginTop: 12,
//   },
//   cardContent: {
//     padding: 16,
//   },
// };

// const SocietyList = () => {
//   const { user } = useContext(UserContext);
//   const [societies, setSocieties] = useState([]);
//   const [filteredSocieties, setFilteredSocieties] = useState([]);
//   const [searchText, setSearchText] = useState("");
//   const [statusFilter, setStatusFilter] = useState("");
//   const [typeFilter, setTypeFilter] = useState("");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchSocieties = async () => {
//       try {
//         const res = await GetSocietiesApi({});
//         if (res?.Success && res.Data) {
//           let societyData = res.Data;

//           // Super Admin sees all societies
//           if (user && user.roleId !== 1) {
//             societyData = societyData.filter((s) => s.society_id === user.societyId);
//           }

//           setSocieties(societyData);
//           setFilteredSocieties(societyData);
//         }
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSocieties();
//   }, [user]);

//   useEffect(() => {
//     let filtered = [...societies];
//     if (searchText.trim()) {
//       const text = searchText.toLowerCase();
//       filtered = filtered.filter(
//         (s) =>
//           s.descn.toLowerCase().includes(text) ||
//           s.registration_number.toLowerCase().includes(text)
//       );
//     }
//     if (statusFilter)
//       filtered = filtered.filter((s) => (s.active ? "Active" : "Inactive") === statusFilter);
//     if (typeFilter) filtered = filtered.filter((s) => s.typeofsociety === typeFilter);
//     setFilteredSocieties(filtered);
//   }, [searchText, statusFilter, typeFilter, societies]);

//   if (loading)
//     return (
//       <Box style={styles.container}>
//         <Typography>Loading societies...</Typography>
//       </Box>
//     );

//   return (
//     <Box style={styles.container}>
//       <Box style={styles.searchContainer}>
//         <TextField
//           variant="outlined"
//           placeholder="Search"
//           value={searchText}
//           onChange={(e) => setSearchText(e.target.value)}
//           style={styles.searchInput}
//           InputProps={{
//             startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
//             style: { height: 36, padding: "0 8px" },
//           }}
//         />
//         <TextField
//           select
//           size="small"
//           label="Status"
//           value={statusFilter}
//           onChange={(e) => setStatusFilter(e.target.value)}
//         >
//           <MenuItem value="">All</MenuItem>
//           <MenuItem value="Active">Active</MenuItem>
//           <MenuItem value="Inactive">Inactive</MenuItem>
//         </TextField>
//         <TextField
//           select
//           size="small"
//           label="Type"
//           value={typeFilter}
//           onChange={(e) => setTypeFilter(e.target.value)}
//         >
//           <MenuItem value="">All</MenuItem>
//           <MenuItem value="Residential">Residential</MenuItem>
//           <MenuItem value="Commercial">Commercial</MenuItem>
//         </TextField>
//       </Box>

//       <Typography variant="h6" style={{ marginBottom: 10 }}>
//         Registered Societies ({filteredSocieties.length})
//       </Typography>

//       <Card>
//         <CardContent style={styles.cardContent}>
//           <TableContainer style={{ maxHeight: "65vh" }}>
//             <Table stickyHeader>
//               <TableHead>
//                 <TableRow>
//                   <TableCell style={styles.tableHeader}>Society Name</TableCell>
//                   <TableCell style={styles.tableHeader}>Registration Number</TableCell>
//                   <TableCell style={styles.tableHeader}>Address</TableCell>
//                   <TableCell style={styles.tableHeader}>City</TableCell>
//                   <TableCell style={styles.tableHeader}>State</TableCell>
//                   <TableCell style={styles.tableHeader}>Actions</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {filteredSocieties.map((s) => (
//                   <TableRow key={s.society_id} hover>
//                     <TableCell>{s.descn}</TableCell>
//                     <TableCell>
//                       <Chip label={s.registration_number} style={styles.chipRegNo} />
//                     </TableCell>
//                     <TableCell>{s.address}</TableCell>
//                     <TableCell>{s.city}</TableCell>
//                     <TableCell>{s.state}</TableCell>
//                     <TableCell>
//                       <Link to="/PropertyRegister" state={{ societyId: s.society_id }}>
//                         <IconButton size="small" color="primary">
//                           <VisibilityIcon />
//                         </IconButton>
//                       </Link>
//                       <IconButton size="small" color="secondary">
//                         <EditIcon />
//                       </IconButton>
//                       <Link to="/SocietyAdminInvitation" state={{ prefill: s }}>
//                         <IconButton size="small" color="secondary">
//                           <MailOutlineIcon />
//                         </IconButton>
//                       </Link>
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


