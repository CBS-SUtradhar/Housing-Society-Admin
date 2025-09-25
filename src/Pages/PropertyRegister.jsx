// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   TextField,
//   MenuItem,
//   Button,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   IconButton,
// } from "@mui/material";
// import SendIcon from "@mui/icons-material/Send";
// import { useLocation } from "react-router-dom";
// import { GetSocietiesApi,GetBuildingApi, GetWingApi, GetPropertyApi } from "../APICall/APIService";

// const PropertyRegister = () => {
//   const location = useLocation();
//   const { societyId } = location.state || {}; // 👈 Society ID from Eye icon
//   const [building, setBuilding] = useState("");
//   const [wing, setWing] = useState("");
//   const [flatData, setFlatData] = useState([]);
//   const [buildings, setBuildings] = useState([]);
//   const [wings, setWings] = useState([]);
//   const [flats, setFlats] = useState([]);
//   const [formData, setFormData] = useState({
//     flat: "",
//     email: "",
//     contact: "",
//     appCode: "",
//   });

// useEffect(() => {
//     console.log("SocietyId from Eye icon:", societyId);
//   }, [societyId]);

//   useEffect(() => {
//     const fetchBuildings = async () => {
//       if (!societyId) return;
//       try {
//         const res = await GetBuildingApi({ society_id: societyId });
//         if (res?.Success && res.Data) {
//           setBuildings(res.Data);
//         }
//       } catch (error) {
//         console.error("Error fetching buildings:", error);
//       }
//     };
//     fetchBuildings();
//   }, [societyId]);

//   // 🔹 Fetch Wings by buildingId
//   useEffect(() => {
//     const fetchWings = async () => {
//       if (!building) return;
//       try {
//         const res = await GetWingApi({ building_id: building });
//         if (res?.Success && res.Data) {
//           setWings(res.Data);
//         }
//       } catch (error) {
//         console.error("Error fetching wings:", error);
//       }
//     };
//     fetchWings();
//   }, [building]);

//   // 🔹 Fetch Flats by wingId
//   useEffect(() => {
//     const fetchFlats = async () => {
//       if (!wing) return;
//       try {
//         const res = await GetPropertyApi({ wing_id: wing });
//         if (res?.Success && res.Data) {
//           setFlats(res.Data);
//         }
//       } catch (error) {
//         console.error("Error fetching flats:", error);
//       }
//     };
//     fetchFlats();
//   }, [wing]);

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleAddFlat = () => {
//     if (!formData.flat || !formData.email) return;
//     setFlatData([...flatData, { ...formData }]);
//     setFormData({ flat: "", email: "", contact: "", appCode: "" });
//   };

//   return (
//     <Box sx={{ p: 2, maxWidth: 900, mx: "auto" }}>
//       <h2>Property Registration</h2>

//       <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 3 }}>
//         {/* 🔹 Building Dropdown */}
//         <TextField
//           select
//           label="Select Building"
//           value={building}
//           onChange={(e) => setBuilding(e.target.value)}
//           sx={{ flex: 1, minWidth: 200 }}
//         >
//           {buildings.map((b) => (
//             <MenuItem key={b.building_id} value={b.building_id}>
//               {b.descn}
//             </MenuItem>
//           ))}
//         </TextField>

//         {/* 🔹 Wing Dropdown */}
//         <TextField
//           select
//           label="Select Wing"
//           value={wing}
//           onChange={(e) => setWing(e.target.value)}
//           sx={{ flex: 1, minWidth: 200 }}
//         >
//           {wings.map((w) => (
//             <MenuItem key={w.wing_id} value={w.wing_id}>
//               {w.descn}
//             </MenuItem>
//           ))}
//         </TextField>

//         {/* 🔹 Flat Dropdown */}
//         <TextField
//           select
//           label="Select Flat"
//           name="flat"
//           value={formData.flat}
//           onChange={handleInputChange}
//           sx={{ flex: 1, minWidth: 150 }}
//         >
//           {flats.map((f) => (
//             <MenuItem key={f.property_id} value={f.flatno}>
//               {f.flatno}
//             </MenuItem>
//           ))}
//         </TextField>

//         <TextField
//           label="Email"
//           name="email"
//           value={formData.email}
//           onChange={handleInputChange}
//           sx={{ flex: 1, minWidth: 200 }}
//         />
//         <TextField
//           label="Contact"
//           name="contact"
//           value={formData.contact}
//           onChange={handleInputChange}
//           sx={{ flex: 1, minWidth: 150 }}
//         />
//         <TextField
//           label="App Code"
//           name="appCode"
//           value={formData.appCode}
//           onChange={handleInputChange}
//           sx={{ flex: 1, minWidth: 150 }}
//         />

//         <Button
//           variant="contained"
//           color="primary"
//           onClick={handleAddFlat}
//           sx={{ height: 56 }}
//           endIcon={<SendIcon />}
//         >
//           Add Flat
//         </Button>
//       </Box>

//       {/* 🔹 Flat Table */}
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Flat</TableCell>
//               <TableCell>Email</TableCell>
//               <TableCell>Contact</TableCell>
//               <TableCell>App Code</TableCell>
//               <TableCell>Invitation</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {flatData.map((row, index) => (
//               <TableRow key={index}>
//                 <TableCell>{row.flat}</TableCell>
//                 <TableCell>{row.email}</TableCell>
//                 <TableCell>{row.contact}</TableCell>
//                 <TableCell>{row.appCode}</TableCell>
//                 <TableCell>
//                   <IconButton color="primary">
//                     <SendIcon />
//                   </IconButton>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Box>
//   );
// };

// export default PropertyRegister;

// import React, { useState, useEffect } from "react";
// import { Box, TextField, MenuItem } from "@mui/material";
// import { useLocation } from "react-router-dom";
// import { GetBuildingApi, GetWingApi, GetPropertyApi } from "../APICall/APIService";

// const PropertyDropdowns = () => {
//   const location = useLocation();
//   const { societyId } = location.state || {};

//   const [selectedSociety, setSelectedSociety] = useState(societyId || "");
//   const [selectedBuilding, setSelectedBuilding] = useState("");

//   const [selectedWing, setSelectedWing] = useState("");
//   const [selectedFlat, setSelectedFlat] = useState("");

//   const [wings, setWings] = useState([]);
//   const [flats, setFlats] = useState([]);

//   // 🔹 Log societyId
//   useEffect(() => {
//     console.log("Society ID from Eye icon:", societyId);
//   }, [societyId]);

//   // 🔹 Fetch Buildings
//    useEffect(() => {
//     if (!selectedSociety) return;
//     const fetchBuildings = async () => {
//       try {
//         const response = await GetBuildingsApi();
//         const formatted =
//           response?.Data
//             ?.filter((item) => item.society_id === selectedSociety)
//             .map((item) => ({
//               label: item.building_name,
//               value: item.building_id,
//             })) || [];
//         setBuildings(formatted);
//         setSelectedBuilding(null);
//         setWings([]);
//         setSelectedWing(null);
//       } catch (error) {
//         console.log("Building API Error:", error);
//         Alert.alert("Error", "Failed to load buildings");
//       }
//     };
//     fetchBuildings();
//   }, [selectedSociety]);

    
//   // 🔹 Fetch Wings
//   useEffect(() => {
//     if (!selectedBuilding) return;

//     console.log("Selected Building ID:", selectedBuilding);

//     const fetchWings = async () => {
//       try {
//         const res = await GetWingApi({ building_id: selectedBuilding });
//         console.log("Wings API response:", res?.Data);

//         const formatted = res?.Data?.map((w) => ({
//           label: w.wingname,
//           value: w.wing_id,
//         })) || [];

//         setWings(formatted);
//         setSelectedWing("");
//         setFlats([]);
//         setSelectedFlat("");
//       } catch (error) {
//         console.error("Wing API Error:", error);
//       }
//     };

//     fetchWings();
//   }, [selectedBuilding]);

//   // 🔹 Fetch Flats
//   useEffect(() => {
//     if (!selectedWing) return;

//     console.log("Selected Wing ID:", selectedWing);

//     const fetchFlats = async () => {
//       try {
//         const res = await GetPropertyApi({ wing_id: selectedWing });
//         console.log("Flats API response:", res?.Data);

//         const formatted = res?.Data?.map((f) => ({
//           label: f.flatno,
//           value: f.property_id,
//         })) || [];

//         setFlats(formatted);
//         setSelectedFlat("");
//       } catch (error) {
//         console.error("Flats API Error:", error);
//       }
//     };

//     fetchFlats();
//   }, [selectedWing]);

//   return (
//     <Box sx={{ p: 2, width: 600, mx: "auto", display: "flex", flexDirection: "column", gap: 2 }}>
//        <Text style={styles.label}>Select Building</Text>
//       <Dropdown
//         style={styles.dropdown}
//         data={buildings}
//         labelField="label"
//         valueField="value"
//         placeholder="Choose building"
//         value={selectedBuilding}
//         onChange={(item) => setSelectedBuilding(item?.value)}
//       />
//       <TextField
//         select
//         label="Select Wing"
//         value={selectedWing}
//         onChange={(e) => setSelectedWing(e.target.value)}
//       >
//         {wings.map((w) => (
//           <MenuItem key={w.value} value={w.value}>
//             {w.label}
//           </MenuItem>
//         ))}
//       </TextField>

//       <TextField
//         select
//         label="Select Flat"
//         value={selectedFlat}
//         onChange={(e) => setSelectedFlat(e.target.value)}
//       >
//         {flats.map((f) => (
//           <MenuItem key={f.value} value={f.value}>
//             {f.label}
//           </MenuItem>
//         ))}
//       </TextField>
//     </Box>
//   );
// };

// export default PropertyDropdowns;

// import React, { useState, useEffect } from "react";
// import { Box, TextField, MenuItem } from "@mui/material";
// import { useLocation } from "react-router-dom";
// import { GetSocietiesApi,GetBuildingApi, GetWingApi, GetPropertyApi } from "../APICall/APIService";

// const PropertyDropdowns = () => {
//   const location = useLocation();
//   const { societyId } = location.state || {};

//   const [selectedSociety, setSelectedSociety] = useState(societyId || "");
//   const [buildings, setBuildings] = useState([]);
//   const [selectedBuilding, setSelectedBuilding] = useState("");
//   const [wings, setWings] = useState([]);
//   const [selectedWing, setSelectedWing] = useState("");
//   const [flats, setFlats] = useState([]);
//   const [selectedFlat, setSelectedFlat] = useState("");

//   // Log societyId
//   useEffect(() => {
//     console.log("Society ID from Eye icon:", societyId);
//   }, [societyId]);

//   // Fetch Buildings
//   // Fetch Buildings
// useEffect(() => {
//   if (!selectedSociety) return;

//   console.log("Selected Society ID before API call:", selectedSociety);

//   const fetchBuildings = async () => {
//     try {
//       // const res = await GetBuildingApi({ society_id: selectedSociety });
// const res = await GetBuildingApi({ society_id: Number(selectedSociety) });

//       console.log("Full API response:", res); // पूर्ण response
//       console.log("Buildings Data:", res?.Data || res?.data); // Data array check

//       const formatted =
//         (res?.Data || res?.Data)?.map((b) => ({
//           label: b.building_name, // Dropdown मध्ये दिसणारं नाव
//           value: b.building_id,   // internally value
//         })) || [];

//       console.log("Formatted dropdown options:", formatted); // ✅ Check array format

//       setBuildings(formatted);
//       setSelectedBuilding(""); // reset selection
//       setWings([]);
//       setSelectedWing("");
//       setFlats([]);
//       setSelectedFlat("");
//     } catch (error) {
//       console.error("Building API Error:", error);
//     }
//   };

//   fetchBuildings();
// }, [selectedSociety]);

//   // Fetch Wings
//   useEffect(() => {
//     if (!selectedBuilding) return;

//     console.log("Selected Building ID:", selectedBuilding);

//     const fetchWings = async () => {
//       try {
//         const res = await GetWingApi({ building_id: selectedBuilding });
//         console.log("Wings API response:", res?.data);

//         const formatted = res?.Data?.map((w) => ({
//           label: w.wingname,
//           value: w.wing_id,
//         })) || [];

//         setWings(formatted);
//         setSelectedWing("");
//         setFlats([]);
//         setSelectedFlat("");
//       } catch (error) {
//         console.error("Wing API Error:", error);
//       }
//     };

//     fetchWings();
//   }, [selectedBuilding]);

//   // Fetch Flats
//   useEffect(() => {
//     if (!selectedWing) return;

//     console.log("Selected Wing ID:", selectedWing);

//     const fetchFlats = async () => {
//       try {
//         const res = await GetPropertyApi({ wing_id: selectedWing });
//         console.log("Flats API response:", res?.Data);

//         const formatted = res?.Data?.map((f) => ({
//           label: f.flatno,
//           value: f.property_id,
//         })) || [];

//         setFlats(formatted);
//         setSelectedFlat("");
//       } catch (error) {
//         console.error("Flats API Error:", error);
//       }
//     };

//     fetchFlats();
//   }, [selectedWing]);

//   return (
//     <Box sx={{ p: 2, width: 600, mx: "auto", display: "flex", flexDirection: "column", gap: 2 }}>
//       {/* Building Dropdown */}
//       <TextField
//         select
//         label="Select Building"
//         value={selectedBuilding}
//         onChange={(e) => setSelectedBuilding(e.target.value)}
//       >
//         {buildings.map((b) => (
//           <MenuItem key={b.value} value={b.value}>
//             {b.label}
//           </MenuItem>
//         ))}
//       </TextField>

//       {/* Wing Dropdown */}
//       <TextField
//         select
//         label="Select Wing"
//         value={selectedWing}
//         onChange={(e) => setSelectedWing(e.target.value)}
//       >
//         {wings.map((w) => (
//           <MenuItem key={w.value} value={w.value}>
//             {w.label}
//           </MenuItem>
//         ))}
//       </TextField>

//       {/* Flat Dropdown */}
//       <TextField
//         select
//         label="Select Flat"
//         value={selectedFlat}
//         onChange={(e) => setSelectedFlat(e.target.value)}
//       >
//         {flats.map((f) => (
//           <MenuItem key={f.value} value={f.value}>
//             {f.label}
//           </MenuItem>
//         ))}
//       </TextField>
//     </Box>
//   );
// };

// export default PropertyDropdowns;


// import React, { useState, useEffect } from "react";
// import { Box, TextField, MenuItem } from "@mui/material";
// import { useLocation } from "react-router-dom";
// import { GetSocietiesApi, GetBuildingApi, GetWingApi, GetPropertyApi } from "../APICall/APIService";

// const PropertyDropdowns = () => {
//   const location = useLocation();
//   const { societyId } = location.state || {};

//   const [societies, setSocieties] = useState([]);
//   const [selectedSociety, setSelectedSociety] = useState(societyId || "");
//   const [buildings, setBuildings] = useState([]);
//   const [selectedBuilding, setSelectedBuilding] = useState("");
//   const [wings, setWings] = useState([]);
//   const [selectedWing, setSelectedWing] = useState("");
//   const [flats, setFlats] = useState([]);
//   const [selectedFlat, setSelectedFlat] = useState("");

//   // Fetch Societies
//   useEffect(() => {
//     const fetchSocieties = async () => {
//       try {
//         const res = await GetSocietiesApi();
//         console.log("Societies API response:", res?.Data || res?.data);

//         const formatted = (res?.Data || res?.data)?.map(s => ({
//   label: s.descn || `Society ${s.society_id}`, // fallback
//   value: s.society_id
// })) || [];


//         setSocieties(formatted);

//         // If location.state.societyId exists, ensure selectedSociety matches
//         if (societyId) setSelectedSociety(Number(societyId));
//       } catch (error) {
//         console.error("Societies API Error:", error);
//       }
//     };
//     fetchSocieties();
//   }, [societyId]);

//   // Fetch Buildings on society change
//  useEffect(() => {
//   if (!selectedSociety) return;

//   console.log("Selected Society ID before API call:", selectedSociety);

//   const fetchBuildings = async () => {
//     try {
//       const payload = { society_id: Number(selectedSociety) };
//       console.log("Payload sent to GetBuildingApi:", payload);

//       const res = await GetBuildingApi(payload);
//       console.log("Building API response:", res);
//     } catch (error) {
//       console.error("Building API Error:", error);
//     }
//   };

//   fetchBuildings();
// }, [selectedSociety]);


//   // Fetch Wings on building change
//   useEffect(() => {
//     if (!selectedBuilding) return;

//     const fetchWings = async () => {
//       try {
//         const res = await GetWingApi({ building_id: selectedBuilding });
//         const formatted = res?.Data?.map(w => ({
//           label: w.wingname,
//           value: w.wing_id
//         })) || [];
//         setWings(formatted);
//         setSelectedWing("");
//         setFlats([]);
//         setSelectedFlat("");
//       } catch (error) {
//         console.error("Wing API Error:", error);
//       }
//     };
//     fetchWings();
//   }, [selectedBuilding]);

//   // Fetch Flats on wing change
//   useEffect(() => {
//     if (!selectedWing) return;

//     const fetchFlats = async () => {
//       try {
//         const res = await GetPropertyApi({ wing_id: selectedWing });
//         const formatted = res?.Data?.map(f => ({
//           label: f.flatno,
//           value: f.property_id
//         })) || [];
//         setFlats(formatted);
//         setSelectedFlat("");
//       } catch (error) {
//         console.error("Flats API Error:", error);
//       }
//     };
//     fetchFlats();
//   }, [selectedWing]);

//   return (
//     <Box sx={{ p: 2, width: 600, mx: "auto", display: "flex", flexDirection: "column", gap: 2 }}>
//       {/* Society Dropdown */}
//       <TextField
//         select
//         label="Select Society"
//         value={selectedSociety}
//         onChange={(e) => setSelectedSociety(e.target.value)}
//       >
//         {societies.map(s => (
//           <MenuItem key={s.value} value={s.value}>
//             {s.label}
//           </MenuItem>
//         ))}
//       </TextField>

//       {/* Building Dropdown */}
//       <TextField
//         select
//         label="Select Building"
//         value={selectedBuilding}
//         onChange={(e) => setSelectedBuilding(e.target.value)}
//         disabled={!selectedSociety || buildings.length === 0}
//       >
//         {buildings.length > 0 ? (
//           buildings.map(b => (
//             <MenuItem key={b.value} value={b.value}>
//               {b.label}
//             </MenuItem>
//           ))
//         ) : (
//           <MenuItem disabled>No Buildings Found</MenuItem>
//         )}
//       </TextField>

//       {/* Wing Dropdown */}
//       <TextField
//         select
//         label="Select Wing"
//         value={selectedWing}
//         onChange={(e) => setSelectedWing(e.target.value)}
//         disabled={!selectedBuilding || wings.length === 0}
//       >
//         {wings.length > 0 ? (
//           wings.map(w => (
//             <MenuItem key={w.value} value={w.value}>
//               {w.label}
//             </MenuItem>
//           ))
//         ) : (
//           <MenuItem disabled>No Wings Found</MenuItem>
//         )}
//       </TextField>

//       {/* Flat Dropdown */}
//       <TextField
//         select
//         label="Select Flat"
//         value={selectedFlat}
//         onChange={(e) => setSelectedFlat(e.target.value)}
//         disabled={!selectedWing || flats.length === 0}
//       >
//         {flats.length > 0 ? (
//           flats.map(f => (
//             <MenuItem key={f.value} value={f.value}>
//               {f.label}
//             </MenuItem>
//           ))
//         ) : (
//           <MenuItem disabled>No Flats Found</MenuItem>
//         )}
//       </TextField>
//     </Box>
//   );
// };

// export default PropertyDropdowns;


// import React, { useState, useEffect } from "react";
// import { Box, TextField, MenuItem } from "@mui/material";
// import { GetSocietiesApi, GetBuildingApi, GetWingApi, GetPropertyApi } from "../APICall/APIService";

// const PropertyDropdowns = () => {
//   const [societies, setSocieties] = useState([]);
//   const [selectedSociety, setSelectedSociety] = useState("");
//   const [buildings, setBuildings] = useState([]);
//   const [selectedBuilding, setSelectedBuilding] = useState("");
//   const [wings, setWings] = useState([]);
//   const [selectedWing, setSelectedWing] = useState("");
//   const [flats, setFlats] = useState([]);
//   const [selectedFlat, setSelectedFlat] = useState("");

//   // Fetch Societies on mount
//   useEffect(() => {
//     const fetchSocieties = async () => {
//       try {
//         const res = await GetSocietiesApi();
//         const formatted = res?.Data?.map((s) => ({
//           label: s.descn,
//           value: s.society_id,
//         })) || [];
//         setSocieties(formatted);
//       } catch (error) {
//         console.error("Societies API Error:", error);
//       }
//     };
//     fetchSocieties();
//   }, []);

//   // Fetch Buildings on Society change
//   useEffect(() => {
//     if (!selectedSociety) return;

//     const fetchBuildings = async () => {
//       try {
//         const payload = { society_id: Number(selectedSociety) };
//         console.log("GetBuildingApi payload:", payload);

//         const res = await GetBuildingApi(payload);
//         console.log("Building API response:", res);

//         const formatted = res?.Data?.map((b) => ({
//           label: b.building_name,
//           value: b.building_id,
//         })) || [];
//         setBuildings(formatted);
//         setSelectedBuilding("");
//         setWings([]);
//         setSelectedWing("");
//         setFlats([]);
//         setSelectedFlat("");
//       } catch (error) {
//         console.error("Building API Error:", error);
//       }
//     };

//     fetchBuildings();
//   }, [selectedSociety]);

//   // Fetch Wings on Building change
//   useEffect(() => {
//     if (!selectedBuilding) return;

//     const fetchWings = async () => {
//       try {
//         const res = await GetWingApi({ building_id: selectedBuilding });
//         const formatted = res?.Data?.map((w) => ({
//           label: w.wingname,
//           value: w.wing_id,
//         })) || [];
//         setWings(formatted);
//         setSelectedWing("");
//         setFlats([]);
//         setSelectedFlat("");
//       } catch (error) {
//         console.error("Wing API Error:", error);
//       }
//     };
//     fetchWings();
//   }, [selectedBuilding]);

//   // Fetch Flats on Wing change
//   useEffect(() => {
//     if (!selectedWing) return;

//     const fetchFlats = async () => {
//       try {
//         const res = await GetPropertyApi({ wing_id: selectedWing });
//         const formatted = res?.Data?.map((f) => ({
//           label: f.flatno,
//           value: f.property_id,
//         })) || [];
//         setFlats(formatted);
//         setSelectedFlat("");
//       } catch (error) {
//         console.error("Flats API Error:", error);
//       }
//     };
//     fetchFlats();
//   }, [selectedWing]);

//   return (
//     <Box sx={{ p: 2, width: 600, mx: "auto", display: "flex", flexDirection: "column", gap: 2 }}>
//       {/* Society Dropdown */}
//       <TextField
//         select
//         label="Select Society"
//         value={selectedSociety}
//         onChange={(e) => setSelectedSociety(e.target.value)}
//       >
//         {societies.map((s) => (
//           <MenuItem key={s.value} value={s.value}>
//             {s.label}
//           </MenuItem>
//         ))}
//       </TextField>

//       {/* Building Dropdown */}
//       <TextField
//         select
//         label="Select Building"
//         value={selectedBuilding}
//         onChange={(e) => setSelectedBuilding(e.target.value)}
//         disabled={!buildings.length}
//       >
//         {buildings.map((b) => (
//           <MenuItem key={b.value} value={b.value}>
//             {b.label}
//           </MenuItem>
//         ))}
//       </TextField>

//       {/* Wing Dropdown */}
//       <TextField
//         select
//         label="Select Wing"
//         value={selectedWing}
//         onChange={(e) => setSelectedWing(e.target.value)}
//         disabled={!wings.length}
//       >
//         {wings.map((w) => (
//           <MenuItem key={w.value} value={w.value}>
//             {w.label}
//           </MenuItem>
//         ))}
//       </TextField>

//       {/* Flat Dropdown */}
//       <TextField
//         select
//         label="Select Flat"
//         value={selectedFlat}
//         onChange={(e) => setSelectedFlat(e.target.value)}
//         disabled={!flats.length}
//       >
//         {flats.map((f) => (
//           <MenuItem key={f.value} value={f.value}>
//             {f.label}
//           </MenuItem>
//         ))}
//       </TextField>
//     </Box>
//   );
// };

// export default PropertyDropdowns;


import React, { useState, useEffect } from "react";
import { Box, TextField, MenuItem } from "@mui/material";
import { GetSocietiesApi, GetBuildingApi } from "../APICall/APIService";

const PropertyDropdowns = () => {
  const [societies, setSocieties] = useState([]);
  const [selectedSociety, setSelectedSociety] = useState("");
  const [buildings, setBuildings] = useState([]);
  const [selectedBuilding, setSelectedBuilding] = useState("");

  // Fetch Societies on mount
  useEffect(() => {
    const fetchSocieties = async () => {
      try {
        const res = await GetSocietiesApi();
        console.log("Societies API response:", res);

        const formatted = res?.Data?.map((s) => ({
          label: s.descn,
          value: s.society_id,
        })) || [];

        console.log("Formatted Societies:", formatted);
        setSocieties(formatted);
      } catch (error) {
        console.error("Societies API Error:", error);
      }
    };

    fetchSocieties();
  }, []);

  // Fetch Buildings on selectedSociety change
  useEffect(() => {
    if (!selectedSociety) return;

    const fetchBuildings = async () => {
      try {
        const payload = { society_id: Number(selectedSociety) };
        console.log("GetBuildingApi payload:", payload);

        const res = await GetBuildingApi(payload);
        console.log("Building API response:", res);

        const dataArray = res?.Data || res?.data || [];
        console.log("Buildings Data Array:", dataArray);

        const formatted = dataArray.map((b) => ({
          label: b.building_name,
          value: b.building_id,
        }));

        console.log("Formatted Buildings:", formatted);
        setBuildings(formatted);
        setSelectedBuilding(""); // reset selection
      } catch (error) {
        console.error("Building API Error:", error);
      }
    };

    fetchBuildings();
  }, [selectedSociety]);

  return (
    <Box sx={{ p: 2, width: 600, mx: "auto", display: "flex", flexDirection: "column", gap: 2 }}>
      {/* Societies Dropdown */}
      <TextField
        select
        label="Select Society"
        value={selectedSociety}
        onChange={(e) => setSelectedSociety(e.target.value)}
      >
        {societies.map((s) => (
          <MenuItem key={s.value} value={s.value}>
            {s.label}
          </MenuItem>
        ))}
      </TextField>

      {/* Buildings Dropdown */}
      <TextField
        select
        label="Select Building"
        value={selectedBuilding}
        onChange={(e) => setSelectedBuilding(e.target.value)}
      >
        {buildings.map((b) => (
          <MenuItem key={b.value} value={b.value}>
            {b.label}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
};

export default PropertyDropdowns;
