

// import React, { useState } from "react";
// import { RegisteredApi } from "../APICall/APICall";

// function RegisterSociety() {
//   const [formData, setFormData] = useState({
//     descn: "",
//     registration_number: "",
//     typeofsociety: "",
//     address: "",
//     city: "",
//     state: "",
//     pincode: "",
//     year_built: "",
//     document: "",
//     registrationcertificate: null,
//     pancard: null,
//     noc: null,
//     photo: null,
//     logo: "logo.png",
//   });

//   // handle input change
//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]: files ? files[0] : value,
//     });
//   };

//   // submit handler
//   const handleSubmit = async (e) => {
//     e.preventDefault();
   
//     const payload = {
//       society_id: null,
//       tenant_id: null,
//       descn: formData.descn,
//       address: formData.address,
//       registration_number: formData.registration_number,
//       year_built: formData.year_built || "2010",
//       typeofsociety: formData.typeofsociety,
//       state: formData.state,
//       city: formData.city,
//       pincode: Number(formData.pincode),
//       document: formData.document?.name || "society_registration.pdf",
//       registrationcertificate: formData.registrationcertificate || null,
//       pancard: formData.pancard || null,
//       noc: formData.noc || null,
//       photo: formData.photo || null,
//       logo: formData.logo || "logo.png",
//       active: 1,
//       date: null,
//       time: null,
//     };

//     try {
//       const res = await RegisteredApi(payload);
//       alert("✅ Society Registered Successfully!");
//       console.log("✅ Response:", res.data);
//     } catch (err) {
//       console.error("❌ API Error:", err);
//       alert("❌ Failed to register society");
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.title}>🏢 Society Registration Form</h2>

//       <form onSubmit={handleSubmit} style={styles.form}>
//         {/* Society Info */}
//         <div style={styles.section}>
//           <h3 style={styles.sectionTitle}>📋 Society Information</h3>

//           <label style={styles.label}>Society Name</label>
//           <input
//             type="text"
//             name="descn"
//             value={formData.descn}
//             onChange={handleChange}
//             style={styles.input}
//             placeholder="Enter Society Name"
//             required
//           />

//           <label style={styles.label}>Registration Number</label>
//           <input
//             type="text"
//             name="registration_number"
//             value={formData.registration_number}
//             onChange={handleChange}
//             style={styles.input}
//             placeholder="Enter Registration Number"
//             required
//           />

//           <label style={styles.label}>Year Built</label>
//           <input
//             type="text"
//             name="year_built"
//             value={formData.year_built}
//             onChange={handleChange}
//             style={styles.input}
//             placeholder="e.g. 2010"
//           />

//           <label style={styles.label}>Society Type</label>
//           <select
//             name="typeofsociety"
//             value={formData.typeofsociety}
//             onChange={handleChange}
//             required
//             style={styles.input}
//           >
//             <option value="">-- Select Society Type --</option>
//             <option value="Residential">Residential</option>
//             <option value="Commercial">Commercial</option>
//           </select>
//         </div>

//         {/* Location */}
//         <div style={styles.section}>
//           <h3 style={styles.sectionTitle}>📍 Location Details</h3>

//           <label style={styles.label}>Address</label>
//           <textarea
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//             style={styles.textarea}
//             placeholder="Enter Full Address"
//             required
//           />

//           <div style={styles.row}>
//             <div style={{ flex: 1 }}>
//               <label style={styles.label}>City</label>
//               <input
//                 type="text"
//                 name="city"
//                 value={formData.city}
//                 onChange={handleChange}
//                 style={styles.input}
//                 required
//               />
//             </div>
//             <div style={{ flex: 1 }}>
//               <label style={styles.label}>State</label>
//               <input
//                 type="text"
//                 name="state"
//                 value={formData.state}
//                 onChange={handleChange}
//                 style={styles.input}
//                 required
//               />
//             </div>
//             <div style={{ flex: 1 }}>
//               <label style={styles.label}>Pin Code</label>
//               <input
//                 type="number"
//                 name="pincode"
//                 value={formData.pincode}
//                 onChange={handleChange}
//                 style={styles.input}
//                 required
//               />
//             </div>
//           </div>
//         </div>

//         {/* Documents */}
//         <div style={styles.section}>
//           <h3 style={styles.sectionTitle}>📂 Documents</h3>

//           <label style={styles.label}>Main Document</label>
//           <input type="file" name="document" onChange={handleChange} />

//           <label style={styles.label}>Registration Certificate</label>
//           <input type="file" name="registrationcertificate" onChange={handleChange} />

//           <label style={styles.label}>PAN Card</label>
//           <input type="file" name="pancard" onChange={handleChange} />

//           <label style={styles.label}>NOC</label>
//           <input type="file" name="noc" onChange={handleChange} />

//           <label style={styles.label}>Upload Photo</label>
//           <input type="file" name="photo" onChange={handleChange} />

//           <label style={styles.label}>Society Logo</label>
//           <input type="file" name="logo" onChange={handleChange} />

//           <small style={{ color: "#777" }}>Allowed: PDF, JPG, PNG (Max 10MB)</small>
//         </div>

//         <button type="submit" style={styles.submitBtn}>
//           ✅ Register Society
//         </button>
//       </form>
//     </div>
//   );
// }

// // Styles
// const styles = {
//   container: {
//     width: "100%",
//     //margin: "40px auto",
//     background: "#fff",
//     padding: "20px",
//     borderRadius: "12px",
//     boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
//   },
//   title: {
//     fontSize: "26px",
//     fontWeight: "700",
//     marginBottom: "30px",
//     textAlign: "center",
//     color: "#0d6efd",
//   },
//   form: { display: "flex", flexDirection: "column", gap: "30px" },
//   section: {
//     padding: "15px 20px",
//     border: "1px solid #eee",
//     borderRadius: "8px",
//     background: "#fafafa",
//   },
//   sectionTitle: {
//     fontSize: "18px",
//     fontWeight: "600",
//     marginBottom: "15px",
//     color: "#444",
//     borderBottom: "2px solid #0d6efd",
//     paddingBottom: "6px",
//   },
//   label: {
//     display: "block",
//     fontSize: "14px",
//     fontWeight: "500",
//     marginBottom: "6px",
//     color: "#222",
//   },
//   input: {
//     padding: "12px",
//     border: "1px solid #ccc",
//     borderRadius: "6px",
//     fontSize: "14px",
//     width: "96%",
//     marginBottom: "12px",
//     outline: "none",
//   },
//   textarea: {
//     padding: "12px",
//     border: "1px solid #ccc",
//     borderRadius: "6px",
//     fontSize: "14px",
//     width: "96%",
//     marginBottom: "12px",
//     resize: "vertical",
//     minHeight: "60px",
//     outline: "none",
//   },
//   row: { display: "flex", gap: "20px", flexWrap: "wrap" },
//   submitBtn: {
//     padding: "14px",
//     background: "linear-gradient(90deg, #0d6efd, #007bff)",
//     color: "#fff",
//     border: "none",
//     borderRadius: "8px",
//     cursor: "pointer",
//     fontSize: "16px",
//     fontWeight: "600",
//   },
// };

// export default RegisterSociety;


//Api connected succesfully

// import React, { useState, useEffect } from "react";
// import { AppSocietyApi, GetBuildingApi, AddBuildingApi, AddWingApi, GetWingApi } from "../APICall/APIService";

// const flatPatternOptions = ["1RK", "1BHK", "2BHK", "3BHK"];

// function RegisterSociety() {
//   const [formData, setFormData] = useState({
//     descn: "",
//     registration_number: "",
//     typeofsociety: "",
//     address: "",
//     city: "",
//     state: "",
//     pincode: "",
//     year_built: "",
//     document: null,
//     registrationcertificate: null,
//     pancard: null,
//     noc: null,
//     photo: null,
//     logo: null,
//     society_id: null,
//   });

//   const [buildings, setBuildings] = useState([]);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData({ ...formData, [name]: files ? files[0] : value });
//   };

//   const handleBuildingChange = (index, key, value) => {
//     const updated = [...buildings];
//     updated[index][key] = value;
//     setBuildings(updated);
//   };

//   const handleWingChange = (buildingIndex, wingIndex, key, value) => {
//     const updated = [...buildings];
//     if (key === "flatNumbers" && typeof value === "string") {
//       updated[buildingIndex].wings[wingIndex][key] = value.split(",").map((f) => f.trim());
//     } else {
//       updated[buildingIndex].wings[wingIndex][key] = value;
//     }
//     setBuildings(updated);
//   };

//   const addBuilding = () => {
//     setBuildings((prev) => [
//       ...prev,
//       {
//         id: null,
//         name: "",
//         saved: false,
//         wingsEnabled: true,
//         wings: [{ id: null, name: "", flatPerFloor: 0, flatPattern: "", flatNumbers: [], saved: false }],
//       },
//     ]);
//   };

//   const addWing = (buildingIndex) => {
//     const updated = [...buildings];
//     updated[buildingIndex].wings.push({ id: null, name: "", flatPerFloor: 0, flatPattern: "", flatNumbers: [], saved: false });
//     setBuildings(updated);
//   };

//   // Fetch existing buildings and wings if editing a society
//   useEffect(() => {
//     const fetchBuildings = async () => {
//       if (!formData.society_id) return;
//       try {
//         const buildingRes = await GetBuildingApi(formData.society_id);
//         console.log("🏢 Fetched buildings:", buildingRes);

//         const formatted = [];

//         for (let b of buildingRes || []) {
//           let wingsRes = [];
//           try {
//             wingsRes = await GetWingApi(b.building_id);
//             console.log(`🛠 Fetched wings for building ${b.building_name}:`, wingsRes);
//           } catch (err) {
//             console.log("❌ Error fetching wings:", err);
//           }

//           formatted.push({
//             id: b.building_id,
//             name: b.building_name,
//             saved: true,
//             wingsEnabled: wingsRes.length > 0,
//             wings: wingsRes.map((w) => ({
//               id: w.wing_id,
//               name: w.wingname,
//               flatPerFloor: w.flat_per_floor || 0,
//               flatPattern: w.flat_pattern || "",
//               flatNumbers: w.flat_numbers ? JSON.parse(w.flat_numbers) : [],
//               saved: true,
//             })),
//           });
//         }

//         setBuildings(formatted);
//       } catch (err) {
//         console.error("❌ Error fetching buildings:", err);
//       }
//     };

//     fetchBuildings();
//   }, [formData.society_id]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("📝 Form Data before submit:", formData);
//     console.log("🏢 Buildings data before submit:", buildings);

//     try {
//       // Map frontend fields to backend expected fields
//       const payload = {
//         societyName: formData.descn,
//         registrationNumber: formData.registration_number,
//         typeOfSociety: formData.typeofsociety,
//         address: formData.address,
//         city: formData.city,
//         state: formData.state,
//         pincode: formData.pincode,
//         establishmentDate: formData.year_built,
//         document: formData.document,
//         registrationcertificate: formData.registrationcertificate,
//         pancard: formData.pancard,
//         noc: formData.noc,
//         photo: formData.photo,
//         logo: formData.logo,
//       };

//       // 1️⃣ Save Society
//       const societyRes = await AppSocietyApi(payload);
//       console.log("✅ Society registration response:", societyRes);

//       const societyId = societyRes?.societyId || societyRes?.data?.society_id || societyRes?.data?.id;
//       if (!societyId) throw new Error("Society ID not returned from API");

//       setFormData((prev) => ({ ...prev, society_id: societyId }));

//       // 2️⃣ Save Buildings
//       for (let i = 0; i < buildings.length; i++) {
//         let building = buildings[i];
//         if (!building.name.trim()) continue;

//         if (!building.saved) {
//           const bRes = await AddBuildingApi({ societyId, buildingName: building.name });
//           console.log("✅ Building save response:", bRes);
//           const buildingId = bRes?.buildingId || bRes?.data?.buildingId || bRes?.data?.id;
//           building.id = buildingId;
//           building.saved = true;
//         }

//         // 3️⃣ Save Wings
//         if (building.wingsEnabled && building.wings?.length) {
//           for (let j = 0; j < building.wings.length; j++) {
//             let wing = building.wings[j];
//             if (!wing.name.trim() || wing.saved) continue;

//             const wingRes = await AddWingApi({
//               societyId,
//               buildingId: building.id,
//               wingName: wing.name,
//               flatPerFloor: wing.flatPerFloor,
//               flatPattern: wing.flatPattern,
//               flatNumbers: wing.flatNumbers,
//             });
//             console.log("✅ Wing save response:", wingRes);
//             wing.saved = true;
//           }
//         }
//       }

//       setBuildings([...buildings]);
//       alert("✅ Society + Buildings + Wings registered successfully!");
//     } catch (err) {
//       console.error("❌ Failed to register society/buildings/wings", err);
//       console.error("Error message:", err.message);
//       console.error("API response data:", err.response?.data);
//       alert("❌ Failed to register society/buildings/wings. Check console for details.");
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.title}>Society Registration</h2>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <input type="text" name="descn" value={formData.descn} onChange={handleChange} placeholder="Society Name" required />
//         <input type="text" name="registration_number" value={formData.registration_number} onChange={handleChange} placeholder="Registration Number" required />
//         <input type="text" name="year_built" value={formData.year_built} onChange={handleChange} placeholder="Year Built" />
//         <select name="typeofsociety" value={formData.typeofsociety} onChange={handleChange} required>
//           <option value="">-- Select Society Type --</option>
//           <option value="Residential">Residential</option>
//           <option value="Commercial">Commercial</option>
//         </select>
//         <textarea name="address" value={formData.address} onChange={handleChange} placeholder="Address" required />
//         <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" required />
//         <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State" required />
//         <input type="number" name="pincode" value={formData.pincode} onChange={handleChange} placeholder="Pin Code" required />

//         <input type="file" name="document" onChange={handleChange} />
//         <input type="file" name="registrationcertificate" onChange={handleChange} />
//         <input type="file" name="pancard" onChange={handleChange} />
//         <input type="file" name="noc" onChange={handleChange} />
//         <input type="file" name="photo" onChange={handleChange} />
//         <input type="file" name="logo" onChange={handleChange} />

//         <h3>Buildings & Wings</h3>
//         {buildings.map((building, i) => (
//           <div key={i} style={{ border: "1px solid #ddd", padding: 10, marginBottom: 10 }}>
//             <input placeholder="Building Name" value={building.name} onChange={(e) => handleBuildingChange(i, "name", e.target.value)} />
//             <button type="button" onClick={() => addWing(i)}>+ Add Wing</button>
//             {building.wings.map((wing, j) => (
//               <div key={j} style={{ marginLeft: 20, marginTop: 5 }}>
//                 <input placeholder="Wing Name" value={wing.name} onChange={(e) => handleWingChange(i, j, "name", e.target.value)} />
//                 <input placeholder="Flats per floor" value={wing.flatPerFloor} onChange={(e) => handleWingChange(i, j, "flatPerFloor", e.target.value)} />
//                 <select value={wing.flatPattern} onChange={(e) => handleWingChange(i, j, "flatPattern", e.target.value)}>
//                   <option value="">Flat Pattern</option>
//                   {flatPatternOptions.map((f) => <option key={f} value={f}>{f}</option>)}
//                 </select>
//                 <input placeholder="Flat Numbers comma separated" value={wing.flatNumbers.join(",")} onChange={(e) => handleWingChange(i, j, "flatNumbers", e.target.value)} />
//               </div>
//             ))}
//           </div>
//         ))}
//         <button type="button" onClick={addBuilding}>+ Add Building</button>

//         <button type="submit" style={styles.submitBtn}>Register Society</button>
//       </form>
//     </div>
//   );
// }

// const styles = {
//   container: { width: "100%", padding: 20, background: "#fff", borderRadius: 12 },
//   input : { padding: 2, border: "1px solid #ccc", borderRadius: 6, fontSize: 14, width: "96%", marginBottom: 12, outline: "none",height :" 60px" },
//   title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
//   form: { display: "flex", flexDirection: "column", gap: 10 },
//   submitBtn: { padding: 12, marginTop: 10, background: "#0d6efd", color: "#fff", border: "none", borderRadius: 6, cursor: "pointer" },
// };

// export default RegisterSociety;



import React, { useState, useEffect } from "react";
import { AppSocietyApi, GetBuildingApi, AddBuildingApi, AddWingApi, GetWingApi } from "../APICall/APIService";

const flatPatternOptions = ["1RK", "1BHK", "2BHK", "3BHK"];

function RegisterSociety() {
  const [formData, setFormData] = useState({
    descn: "",
    registration_number: "",
    typeofsociety: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    year_built: "",
    document: null,
    registrationcertificate: null,
    pancard: null,
    noc: null,
    photo: null,
    logo: null,
    society_id: null,
  });

  const [buildings, setBuildings] = useState([]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleBuildingChange = (index, key, value) => {
    const updated = [...buildings];
    updated[index][key] = value;
    setBuildings(updated);
  };

  const handleWingChange = (buildingIndex, wingIndex, key, value) => {
    const updated = [...buildings];
    if (key === "flatNumbers" && typeof value === "string") {
      updated[buildingIndex].wings[wingIndex][key] = value.split(",").map((f) => f.trim());
    } else {
      updated[buildingIndex].wings[wingIndex][key] = value;
    }
    setBuildings(updated);
  };

  const addBuilding = () => {
    setBuildings((prev) => [
      ...prev,
      {
        id: null,
        name: "",
        saved: false,
        wingsEnabled: true,
        wings: [{ id: null, name: "", flatPerFloor: 0, flatPattern: "", flatNumbers: [], saved: false }],
      },
    ]);
  };

  const addWing = (buildingIndex) => {
    const updated = [...buildings];
    updated[buildingIndex].wings.push({ id: null, name: "", flatPerFloor: 0, flatPattern: "", flatNumbers: [], saved: false });
    setBuildings(updated);
  };

  // Fetch existing buildings and wings if editing a society
  useEffect(() => {
    const fetchBuildings = async () => {
      if (!formData.society_id) return;
      try {
        const buildingRes = await GetBuildingApi(formData.society_id);
        console.log("🏢 Fetched buildings:", buildingRes);

        const formatted = [];

        for (let b of buildingRes || []) {
          let wingsRes = [];
          try {
            wingsRes = await GetWingApi(b.building_id);
            console.log(`🛠 Fetched wings for building ${b.building_name}:`, wingsRes);
          } catch (err) {
            console.log("❌ Error fetching wings:", err);
          }

          formatted.push({
            id: b.building_id,
            name: b.building_name,
            saved: true,
            wingsEnabled: wingsRes.length > 0,
            wings: wingsRes.map((w) => ({
              id: w.wing_id,
              name: w.wingname,
              flatPerFloor: w.flat_per_floor || 0,
              flatPattern: w.flat_pattern || "",
              flatNumbers: w.flat_numbers ? JSON.parse(w.flat_numbers) : [],
              saved: true,
            })),
          });
        }

        setBuildings(formatted);
      } catch (err) {
        console.error("❌ Error fetching buildings:", err);
      }
    };

    fetchBuildings();
  }, [formData.society_id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("📝 Form Data before submit:", formData);
    console.log("🏢 Buildings data before submit:", buildings);

    try {
      // Map frontend fields to backend expected fields
      const payload = {
        societyName: formData.descn,
        registrationNumber: formData.registration_number,
        typeOfSociety: formData.typeofsociety,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        pincode: formData.pincode,
        establishmentDate: formData.year_built,
        document: formData.document,
        registrationcertificate: formData.registrationcertificate,
        pancard: formData.pancard,
        noc: formData.noc,
        photo: formData.photo,
        logo: formData.logo,
      };

      // 1️⃣ Save Society
      const societyRes = await AppSocietyApi(payload);
      console.log("✅ Society registration response:", societyRes);

      const societyId = societyRes?.societyId || societyRes?.data?.society_id || societyRes?.data?.id;
      if (!societyId) throw new Error("Society ID not returned from API");

      setFormData((prev) => ({ ...prev, society_id: societyId }));

      // 2️⃣ Save Buildings
      for (let i = 0; i < buildings.length; i++) {
        let building = buildings[i];
        if (!building.name.trim()) continue;

        if (!building.saved) {
          const bRes = await AddBuildingApi({ societyId, buildingName: building.name });
          console.log("✅ Building save response:", bRes);
          const buildingId = bRes?.buildingId || bRes?.data?.buildingId || bRes?.data?.id;
          building.id = buildingId;
          building.saved = true;
        }

        // 3️⃣ Save Wings
        if (building.wingsEnabled && building.wings?.length) {
          for (let j = 0; j < building.wings.length; j++) {
            let wing = building.wings[j];
            if (!wing.name.trim() || wing.saved) continue;

            const wingRes = await AddWingApi({
              societyId,
              buildingId: building.id,
              wingName: wing.name,
              flatPerFloor: wing.flatPerFloor,
              flatPattern: wing.flatPattern,
              flatNumbers: wing.flatNumbers,
            });
            console.log("✅ Wing save response:", wingRes);
            wing.saved = true;
          }
        }
      }

      setBuildings([...buildings]);
      alert("✅ Society + Buildings + Wings registered successfully!");
    } catch (err) {
      console.error("❌ Failed to register society/buildings/wings", err);
      console.error("Error message:", err.message);
      console.error("API response data:", err.response?.data);
      alert("❌ Failed to register society/buildings/wings. Check console for details.");
    }
  };

  return (
   <div style={styles.container}>
  <h2 style={styles.title}>Society Registration</h2>
  <form onSubmit={handleSubmit} style={styles.form}>
    <div style={styles.twoColumns}>
      <input type="text" name="descn" value={formData.descn} onChange={handleChange} placeholder="Society Name" style={styles.input} required />
      <input type="text" name="registration_number" value={formData.registration_number} onChange={handleChange} placeholder="Registration Number" style={styles.input} required />
      <input type="text" name="year_built" value={formData.year_built} onChange={handleChange} placeholder="Year Built" style={styles.input} />
      <select name="typeofsociety" value={formData.typeofsociety} onChange={handleChange} style={styles.inputs} required>
        <option value="">-- Select Society Type --</option>
        <option value="Residential">Residential</option>
        <option value="Commercial">Commercial</option>
      </select>
      <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" style={styles.input} required />
      <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State" style={styles.input} required />
      <input type="number" name="pincode" value={formData.pincode} onChange={handleChange} placeholder="Pin Code" style={styles.input} required />
    </div>

    <textarea name="address" value={formData.address} onChange={handleChange} placeholder="Address" style={{...styles.input, height: 40}} required />

    <div style={styles.fileContainer}>
  <div style={styles.fileWrapper}>
    <label style={styles.fileLabel}>Document</label>
    <input type="file" name="document" onChange={handleChange} />
  </div>
  <div style={styles.fileWrapper}>
    <label style={styles.fileLabel}>Registration Certificate</label>
    <input type="file" name="registrationcertificate" onChange={handleChange} />
  </div>
  <div style={styles.fileWrapper}>
    <label style={styles.fileLabel}>PAN Card</label>
    <input type="file" name="pancard" onChange={handleChange} />
  </div>
  <div style={styles.fileWrapper}>
    <label style={styles.fileLabel}>NOC</label>
    <input type="file" name="noc" onChange={handleChange} />
  </div>
  <div style={styles.fileWrapper}>
    <label style={styles.fileLabel}>Photo</label>
    <input type="file" name="photo" onChange={handleChange} />
  </div>
  <div style={styles.fileWrapper}>
    <label style={styles.fileLabel}>Logo</label>
    <input type="file" name="logo" onChange={handleChange} />
  </div>
</div>


    <h3 style={styles.subTitle}>Buildings & Wings</h3>
    {buildings.map((building, i) => (
      <div key={i} style={styles.buildingCard}>
        <input placeholder="Building Name" value={building.name} onChange={(e) => handleBuildingChange(i, "name", e.target.value)} style={styles.input} />
        <button type="button" onClick={() => addWing(i)} style={styles.addBtn}>+ Add Wing</button>
        {building.wings.map((wing, j) => (
          <div key={j} style={styles.wingContainer}>
            <div style={styles.twoColumns}>
              <input placeholder="Wing Name" value={wing.name} onChange={(e) => handleWingChange(i, j, "name", e.target.value)} style={styles.input} />
              <input placeholder="Flats per floor" value={wing.flatPerFloor} onChange={(e) => handleWingChange(i, j, "flatPerFloor", e.target.value)} style={styles.input} />
            </div>
            <div style={styles.twoColumns}>
              <select value={wing.flatPattern} onChange={(e) => handleWingChange(i, j, "flatPattern", e.target.value)} style={styles.input}>
                <option value="">Flat Pattern</option>
                {flatPatternOptions.map((f) => <option key={f} value={f}>{f}</option>)}
              </select>
              <input placeholder="Flat Numbers comma separated" value={wing.flatNumbers.join(",")} onChange={(e) => handleWingChange(i, j, "flatNumbers", e.target.value)} style={styles.input} />
            </div>
          </div>
        ))}
      </div>
    ))}
    <button type="button" onClick={addBuilding} style={styles.addBtn}>+ Add Building</button>

    <button type="submit" style={styles.submitBtn}>Register Society</button>
  </form>
</div>
  );
}

const styles = {
  container: {
    width: "93%",
    margin: "10px auto",
     padding: "0 35px 35px 35px", 
    background: "#fdfdfd",
    borderRadius: 16,
    boxShadow: "0 12px 25px rgba(0,0,0,0.12)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  title: { fontSize: 25, fontWeight: "700", marginBottom: 10, color: "#0d6efd", textAlign: "center" },
  subTitle: { fontSize: 22, fontWeight: "600", marginTop: 25, marginBottom: 15, color: "#333" },
  form: { display: "flex", flexDirection: "column", gap: 10,padding:10 },
  // twoColumns: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 },
  twoColumns: {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  columnGap: 60,  // No gap between columns
  rowGap: 20,    // Gap between rows
},

inputs: { padding: "12px 14px", border: "1px solid #ccc", borderRadius: 10, fontSize: 15, outline: "none", width: "105%", backgroundColor: "#fafafa", transition: "0.3s" },
  input: { padding: "12px 14px", border: "1px solid #ccc", borderRadius: 10, fontSize: 15, outline: "none", width: "100%", backgroundColor: "#fafafa", transition: "0.3s" },
  submitBtn: { padding: 16, marginTop: 20, background: "#0d6efd", color: "#fff", border: "none", borderRadius: 10, fontSize: 16, fontWeight: "600", cursor: "pointer", transition: "0.3s" },
fileContainer: {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)", // 3 columns
  columnGap: 15,
  rowGap: 15,
  marginTop: 10,
},
fileWrapper: {
  display: "flex",
  flexDirection: "column",
},
fileLabel: {
  marginBottom: 6,
  fontWeight: 500,
  color: "#555",
  fontSize: 14,
},

  buildingCard: { border: "1px solid #e0e0e0", borderRadius: 12, padding: 50, marginBottom: 20, background: "#fff", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" },
  wingContainer: {
  marginTop: 12,
  display: "grid", 
  gridTemplateColumns: "1fr 1fr", // two columns inside wingContainer
  columnGap: 60,                  // horizontal space between columns
  rowGap: 12,                     // optional vertical space between rows
},
  addBtn: { padding: "10px 16px", background: "#198754", color: "#fff", border: "none", borderRadius: 8, cursor: "pointer", marginTop: 10, width: 160, fontWeight: "500", transition: "0.3s" },
};
export default RegisterSociety;