// // CreateAccount.js
// import React, { useState } from "react";
// import { verifyKeyCodeApi } from "../APICall/APIService";
// import { UpdateRegisteredApi } from "../APICall/APICall";
// const CreateAccount = () => {
//   const [form, setForm] = useState({
//     appKey: "",
//     mobileInput: "",
//     fullName: "",
//     email: "",
//     mobile: "",
//     address: "",
//     gender: "",
//     dob: "",
//     password: "",
//     confirmPass: "",
//   });

//   const [isVerified, setIsVerified] = useState(false);
//   const [showSuccessModal, setShowSuccessModal] = useState(false);

//   const handleChange = (key, value) => setForm({ ...form, [key]: value });

//   const handleVerify = async () => {
//     if (!form.appKey || !form.mobileInput) {
//       alert("Enter App Key and Mobile");
//       return;
//     }
//     try {
//       const res = await verifyKeyCodeApi({ keycode: form.appKey, mobile: form.mobileInput });
//       if (res?.success && res.Data) {
//         setForm((prev) => ({
//           ...prev,
//           fullName: res.data.descn || "",
//           email: res.data.email || "",
//           mobile: res.data.mobile || "",
//         }));
//         setIsVerified(true);
//         alert("App Key verified!");
//       } else {
//         setIsVerified(false);
//         alert(res?.Message || "Invalid App Key / Mobile");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Verification error, check console");
//     }
//   };

//   const handleCreateAccount = async (e) => {
//     e.preventDefault();
//     const { fullName, address, gender, dob, password, confirmPass } = form;
//     if (!isVerified || !fullName || !address || !gender || !dob || !password || password !== confirmPass) {
//       alert("Please fill all fields correctly");
//       return;
//     }
//     const payload = {
//       entity_id: null,
//       userrole_id: null,
//       descn: fullName,
//       mobile: form.mobile,
//       email: form.email,
//       address,
//       pwd: password,
//       gender: Number(gender),
//       dob: Math.floor(new Date(dob).getTime() / 1000),
//       approved: 0,
//       active: 1,
//       time: new Date().toLocaleTimeString("en-GB"),
//     };
//     try {
//       await UpdateRegisteredApi(payload);
//       setShowSuccessModal(true);
//     } catch (err) {
//       console.error(err);
//       alert("Error creating account, check console");
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.heading}>Create Account</h2>
//       <form style={styles.form} onSubmit={handleCreateAccount}>
//         {/* 2-column layout */}
//         <div style={styles.row}>
//           <div style={styles.col}>
//             <label style={styles.label}>App Key</label>
//             <input
//               style={styles.input}
//               value={form.appKey}
//               onChange={(e) => handleChange("appKey", e.target.value)}
//               disabled={isVerified}
//             />
//           </div>
//           <div style={styles.col}>
//             <label style={styles.label}>Mobile Number</label>
//             <div style={{ display: "flex", gap: 10 }}>
//               <input
//                 style={{ ...styles.input, flex: 1 }}
//                 value={form.mobileInput}
//                 onChange={(e) => handleChange("mobileInput", e.target.value)}
//                 disabled={isVerified}
//               />
//               <button type="button" onClick={handleVerify} style={styles.verifyBtn}>
//                 {isVerified ? "Verified" : "Verify"}
//               </button>
//             </div>
//           </div>
//         </div>

//         <div style={styles.row}>
//           <div style={styles.col}>
//             <label style={styles.label}>Full Name</label>
//             <input
//               style={styles.input}
//               value={form.fullName}
//               onChange={(e) => handleChange("fullName", e.target.value)}
//               disabled={!isVerified}
//             />
//           </div>
//           <div style={styles.col}>
//             <label style={styles.label}>Email</label>
//             <input style={styles.input} value={form.email} disabled />
//           </div>
//         </div>

//         <div style={styles.row}>
//           <div style={styles.col}>
//             <label style={styles.label}>Mobile</label>
//             <input style={styles.input} value={form.mobile} disabled />
//           </div>
//           <div style={styles.col}>
//             <label style={styles.label}>Address</label>
//             <input
//               style={styles.input}
//               value={form.address}
//               onChange={(e) => handleChange("address", e.target.value)}
//               disabled={!isVerified}
//             />
//           </div>
//         </div>

//         <div style={styles.row}>
//           <div style={styles.col}>
//             <label style={styles.label}>Gender</label>
//             <select
//               style={styles.input}
//               value={form.gender}
//               onChange={(e) => handleChange("gender", e.target.value)}
//               disabled={!isVerified}
//             >
//               <option value="">Select Gender</option>
//               <option value="70">Male</option>
//               <option value="71">Female</option>
//               <option value="72">Other</option>
//             </select>
//           </div>
//           <div style={styles.col}>
//             <label style={styles.label}>DOB</label>
//             <input
//               style={styles.input}
//               type="date"
//               value={form.dob}
//               onChange={(e) => handleChange("dob", e.target.value)}
//               disabled={!isVerified}
//             />
//           </div>
//         </div>

//         <div style={styles.row}>
//           <div style={styles.col}>
//             <label style={styles.label}>Password</label>
//             <input
//               style={styles.input}
//               type="password"
//               value={form.password}
//               onChange={(e) => handleChange("password", e.target.value)}
//               disabled={!isVerified}
//             />
//           </div>
//           <div style={styles.col}>
//             <label style={styles.label}>Confirm Password</label>
//             <input
//               style={styles.input}
//               type="password"
//               value={form.confirmPass}
//               onChange={(e) => handleChange("confirmPass", e.target.value)}
//               disabled={!isVerified}
//             />
//           </div>
//         </div>

//         <button type="submit" style={styles.createBtn}>
//           Create Account
//         </button>
//       </form>

//       {showSuccessModal && (
//         <div style={styles.modalOverlay}>
//           <div style={styles.modalContent}>
//             <div style={styles.checkCircle}>✔</div>
//             <p style={styles.modalTitle}>Your account has been created successfully.</p>
//             <button style={styles.okBtn} onClick={() => setShowSuccessModal(false)}>
//               OK
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CreateAccount;

// const styles = {
//   container: {
//     width: "100%",
//     maxWidth: 900,
//     margin: "20px auto",
//     padding: 20,
//     background: "#fdfdfd",
//     borderRadius: 12,
//     boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
//   },
//   heading: { textAlign: "center", color: "#007AFF", fontSize: 26, fontWeight: 700, marginBottom: 20 },
//   form: { display: "flex", flexDirection: "column", gap: 15 },
//   row: { display: "flex", gap: 15, flexWrap: "wrap", marginBottom: 12 },
//   col: { flex: 1, minWidth: 200, display: "flex", flexDirection: "column" },
//   label: { marginBottom: 6, fontWeight: 600, color: "#222" },
//   input: { padding: 10, borderRadius: 8, border: "1px solid #ccc", fontSize: 15 },
//   verifyBtn: { background: "#2266e2", color: "#fff", border: "none", padding: "10px 14px", borderRadius: 8, cursor: "pointer" },
//   createBtn: {
//     width: "60%",
//     margin: "20px auto 0",
//     padding: 14,
//     border: "none",
//     borderRadius: 10,
//     background: "linear-gradient(90deg,#4f93f7,#2266e2)",
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: 700,
//     cursor: "pointer",
//     display: "block",
//     textAlign: "center",
//   },
//   modalOverlay: {
//     position: "fixed",
//     inset: 0,
//     backgroundColor: "rgba(0,0,0,0.35)",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   modalContent: {
//     width: "85%",
//     backgroundColor: "#fff",
//     borderRadius: 20,
//     padding: 28,
//     textAlign: "center",
//   },
//   checkCircle: { fontSize: 64, color: "#4cd964", marginBottom: 18 },
//   modalTitle: { fontSize: 16, fontWeight: 700, color: "#222", marginBottom: 8 },
//   okBtn: { backgroundColor: "#2266e2", borderRadius: 8, padding: "10px 36px", color: "#fff", cursor: "pointer" },
// };



// // CreateAccount.js
// import React, { useState } from "react";
// import { verifyKeyCodeApi } from "../APICall/APIService";
// import { UpdateRegisteredApi } from "../APICall/APICall";

// const CreateAccount = () => {
//   const [form, setForm] = useState({
//     appKey: "",
//     mobileInput: "",
//     fullName: "",
//     email: "",
//     mobile: "",
//     address: "",
//     gender: "",
//     dob: "",
//     password: "",
//     confirmPass: "",
//   });

//   const [isVerified, setIsVerified] = useState(false);
//   const [showSuccessModal, setShowSuccessModal] = useState(false);

//   const handleChange = (key, value) => setForm({ ...form, [key]: value });




// const handleVerify = async () => {
//   if (!form.appKey || !form.mobileInput) {
//     alert("Enter App Key and Mobile");
//     return;
//   }
//   try {
//     const res = await verifyKeyCodeApi({ keycode: form.appKey, mobile: form.mobileInput });
//     if (res?.Success && res.Data) {
//       const data = res.Data; // API response data
//       setForm((prev) => ({
//         ...prev,
//         fullName: data.descn || "",
//         email: data.email || "",
//         mobile: data.mobile || "",
//       }));
//       setIsVerified(true);
//       alert(res?.Message || "App Key verified!");
//     } else {
//       setIsVerified(false);
//       alert(res?.Message || "Invalid App Key / Mobile");
//     }
//   } catch (err) {
//     console.error(err);
//     alert("Verification error, check console");
//   }
// };

//   const handleCreateAccount = async (e) => {
//     e.preventDefault();
//     const { fullName, address, gender, dob, password, confirmPass } = form;
//     if (!isVerified || !fullName || !address || !gender || !dob || !password || password !== confirmPass) {
//       alert("Please fill all fields correctly");
//       return;
//     }

//     const payload = {
//       entity_id: null,
//       userrole_id: null,
//       descn: fullName,
//       mobile: form.mobile,
//       email: form.email,
//       address,
//       pwd: password,
//       gender: Number(gender),
//       dob: Math.floor(new Date(dob).getTime() / 1000),
//       approved: 0,
//       active: 1,
//       time: new Date().toLocaleTimeString("en-GB"),
//     };

//     try {
//       await UpdateRegisteredApi(payload);
//       setShowSuccessModal(true);
//     } catch (err) {
//       console.error(err);
//       alert("Error creating account, check console");
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.heading}>Create Account</h2>
//       <form style={styles.form} onSubmit={handleCreateAccount}>
//         {/* 2-column layout: App Key & Mobile */}
//         <div style={styles.row}>
//           <div style={styles.col}>
//             <label style={styles.label}>App Key</label>
//             <input
//               style={styles.input}
//               value={form.appKey}
//               onChange={(e) => handleChange("appKey", e.target.value)}
//               disabled={isVerified}
//             />
//           </div>
//           <div style={styles.col}>
//             <label style={styles.label}>Mobile Number</label>
//             <div style={{ display: "flex", gap: 10 }}>
//               <input
//                 style={{ ...styles.input, flex: 1 }}
//                 value={form.mobileInput}
//                 onChange={(e) => handleChange("mobileInput", e.target.value)}
//                 disabled={isVerified}
//               />
//               <button type="button" onClick={handleVerify} style={styles.verifyBtn}>
//                 {isVerified ? "Verified" : "Verify"}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* 2-column layout: Full Name & Email */}
//         <div style={styles.row}>
//           <div style={styles.col}>
//             <label style={styles.label}>Full Name</label>
//             <input
//               style={styles.input}
//               value={form.fullName}
//               onChange={(e) => handleChange("fullName", e.target.value)}
//               disabled={!isVerified}
//             />
//           </div>
//           <div style={styles.col}>
//             <label style={styles.label}>Email</label>
//             <input style={styles.input} value={form.email} disabled />
//           </div>
//         </div>

//         {/* 2-column layout: Mobile & Address */}
//         <div style={styles.row}>
//           <div style={styles.col}>
//             <label style={styles.label}>Mobile</label>
//             <input style={styles.input} value={form.mobile} disabled />
//           </div>
//           <div style={styles.col}>
//             <label style={styles.label}>Address</label>
//             <input
//               style={styles.input}
//               value={form.address}
//               onChange={(e) => handleChange("address", e.target.value)}
//               disabled={!isVerified}
//             />
//           </div>
//         </div>

//         {/* 2-column layout: Gender & DOB */}
//         <div style={styles.row}>
//           <div style={styles.col}>
//             <label style={styles.label}>Gender</label>
//             <select
//               style={styles.input}
//               value={form.gender}
//               onChange={(e) => handleChange("gender", e.target.value)}
//               disabled={!isVerified}
//             >
//               <option value="">Select Gender</option>
//               <option value="70">Male</option>
//               <option value="71">Female</option>
//               <option value="72">Other</option>
//             </select>
//           </div>
//           <div style={styles.col}>
//             <label style={styles.label}>DOB</label>
//             <input
//               style={styles.input}
//               type="date"
//               value={form.dob}
//               onChange={(e) => handleChange("dob", e.target.value)}
//               disabled={!isVerified}
//             />
//           </div>
//         </div>

//         {/* 2-column layout: Password & Confirm Password */}
//         <div style={styles.row}>
//           <div style={styles.col}>
//             <label style={styles.label}>Password</label>
//             <input
//               style={styles.input}
//               type="password"
//               value={form.password}
//               onChange={(e) => handleChange("password", e.target.value)}
//               disabled={!isVerified}
//             />
//           </div>
//           <div style={styles.col}>
//             <label style={styles.label}>Confirm Password</label>
//             <input
//               style={styles.input}
//               type="password"
//               value={form.confirmPass}
//               onChange={(e) => handleChange("confirmPass", e.target.value)}
//               disabled={!isVerified}
//             />
//           </div>
//         </div>

//         <button type="submit" style={styles.createBtn}>
//           Create Account
//         </button>
//       </form>

//       {/* Success Modal */}
//       {showSuccessModal && (
//         <div style={styles.modalOverlay}>
//           <div style={styles.modalContent}>
//             <div style={styles.checkCircle}>✔</div>
//             <p style={styles.modalTitle}>Your account has been created successfully.</p>
//             <button style={styles.okBtn} onClick={() => setShowSuccessModal(false)}>
//               OK
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CreateAccount;

// // --- Styles ---
// const styles = {
//   container: {
//     width: "100%",
//     maxWidth: 900,
//     margin: "20px auto",
//     padding: 20,
//     background: "#fdfdfd",
//     borderRadius: 12,
//     boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
//   },
//   heading: { textAlign: "center", color: "#007AFF", fontSize: 26, fontWeight: 700, marginBottom: 20 },
//   form: { display: "flex", flexDirection: "column", gap: 15 },
//   row: { display: "flex", gap: 15, flexWrap: "wrap", marginBottom: 12 },
//   col: { flex: 1, minWidth: 200, display: "flex", flexDirection: "column" },
//   label: { marginBottom: 6, fontWeight: 600, color: "#222" },
//   input: { padding: 10, borderRadius: 8, border: "1px solid #ccc", fontSize: 15 },
//   verifyBtn: { background: "#2266e2", color: "#fff", border: "none", padding: "10px 14px", borderRadius: 8, cursor: "pointer" },
//   createBtn: {
//     width: "60%",
//     margin: "20px auto 0",
//     padding: 14,
//     border: "none",
//     borderRadius: 10,
//     background: "linear-gradient(90deg,#4f93f7,#2266e2)",
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: 700,
//     cursor: "pointer",
//     display: "block",
//     textAlign: "center",
//   },
//   modalOverlay: {
//     position: "fixed",
//     inset: 0,
//     backgroundColor: "rgba(0,0,0,0.35)",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   modalContent: {
//     width: "85%",
//     backgroundColor: "#fff",
//     borderRadius: 20,
//     padding: 28,
//     textAlign: "center",
//   },
//   checkCircle: { fontSize: 64, color: "#4cd964", marginBottom: 18 },
//   modalTitle: { fontSize: 16, fontWeight: 700, color: "#222", marginBottom: 8 },
//   okBtn: { backgroundColor: "#2266e2", borderRadius: 8, padding: "10px 36px", color: "#fff", cursor: "pointer" },
// };


// import React, { useState } from "react";
// import { verifyKeyCodeApi } from "../APICall/APIService";
// import { UpdateRegisteredApi } from "../APICall/APICall";

// const CreateAccount = () => {
//   const [form, setForm] = useState({
//     appKey: "",
//     mobileInput: "",
//     fullName: "",
//     email: "",
//     mobile: "",
//     address: "",
//     gender: "",
//     dob: "",
//     password: "",
//     confirmPass: "",
//   });

//   const [isVerified, setIsVerified] = useState(false);
//   const [showSuccessModal, setShowSuccessModal] = useState(false);

//   const handleChange = (key, value) => setForm({ ...form, [key]: value });

//   const handleVerify = async () => {
//     if (!form.appKey || !form.mobileInput) {
//       alert("Enter App Key and Mobile");
//       return;
//     }
//     try {
//       const res = await verifyKeyCodeApi({ keycode: form.appKey, mobile: form.mobileInput });
//       if (res?.Success && res.Data) {
//         const data = res.Data;
//         setForm((prev) => ({
//           ...prev,
//           fullName: data.descn || "",
//           email: data.email || "",
//           mobile: data.mobile || "",
//         }));
//         setIsVerified(true);
//         alert(res?.Message || "App Key verified!");
//       } else {
//         setIsVerified(false);
//         alert(res?.Message || "Invalid App Key / Mobile");
//       }
//     } catch (err) {
//       console.error("verifyKeyCodeApi error:", err);
//       alert("Verification error, check console");
//     }
//   };

//   const handleCreateAccount = async (e) => {
//     e.preventDefault();
//     const { fullName, address, gender, dob, password, confirmPass } = form;

//     if (!isVerified || !fullName || !address || !gender || !dob || !password || password !== confirmPass) {
//       alert("Please fill all fields correctly");
//       return;
//     }

//     const payload = {
//       entity_id: entityId, // ideally, from API response if available
//       userrole_id: null, // ideally, from API response if available
//       descn: fullName,
//       mobile: form.mobile,
//       email: form.email,
//       address,
//       pwd: password,
//       gender: Number(gender),
//       dob: Math.floor(new Date(dob).getTime() / 1000),
//       approved: 0,
//       active: 1,
//       time: new Date().toLocaleTimeString("en-GB"),
//     };

//     try {
//       const res = await UpdateRegisteredApi(payload);
//       console.log("Create Account response:", res);
//       setShowSuccessModal(true);
//     } catch (err) {
//       console.error("UpdateRegisteredApi error:", err);
//       if (err.response) {
//         alert(`Error: ${err.response.status} ${err.response.data?.message || ""}`);
//       } else {
//         alert("Error creating account, check console");
//       }
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.heading}>Create Account</h2>
//       <form style={styles.form} onSubmit={handleCreateAccount}>
//         {/* App Key & Mobile */}
//         <div style={styles.row}>
//           <div style={styles.col}>
//             <label style={styles.label}>App Key</label>
//             <input
//               style={styles.input}
//               value={form.appKey}
//               onChange={(e) => handleChange("appKey", e.target.value)}
//               disabled={isVerified}
//             />
//           </div>
//           <div style={styles.col}>
//             <label style={styles.label}>Mobile Number</label>
//             <div style={{ display: "flex", gap: 10 }}>
//               <input
//                 style={{ ...styles.input, flex: 1 }}
//                 value={form.mobileInput}
//                 onChange={(e) => handleChange("mobileInput", e.target.value)}
//                 disabled={isVerified}
//               />
//               <button type="button" onClick={handleVerify} style={styles.verifyBtn}>
//                 {isVerified ? "Verified" : "Verify"}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Full Name & Email */}
//         <div style={styles.row}>
//           <div style={styles.col}>
//             <label style={styles.label}>Full Name</label>
//             <input
//               style={styles.input}
//               value={form.fullName}
//               onChange={(e) => handleChange("fullName", e.target.value)}
//               disabled={!isVerified}
//             />
//           </div>
//           <div style={styles.col}>
//             <label style={styles.label}>Email</label>
//             <input style={styles.input} value={form.email} disabled />
//           </div>
//         </div>

//         {/* Mobile & Address */}
//         <div style={styles.row}>
//           <div style={styles.col}>
//             <label style={styles.label}>Mobile</label>
//             <input style={styles.input} value={form.mobile} disabled />
//           </div>
//           <div style={styles.col}>
//             <label style={styles.label}>Address</label>
//             <input
//               style={styles.input}
//               value={form.address}
//               onChange={(e) => handleChange("address", e.target.value)}
//               disabled={!isVerified}
//             />
//           </div>
//         </div>

//         {/* Gender & DOB */}
//         <div style={styles.row}>
//           <div style={styles.col}>
//             <label style={styles.label}>Gender</label>
//             <select
//               style={styles.input}
//               value={form.gender}
//               onChange={(e) => handleChange("gender", e.target.value)}
//               disabled={!isVerified}
//             >
//               <option value="">Select Gender</option>
//               <option value="70">Male</option>
//               <option value="71">Female</option>
//               <option value="72">Other</option>
//             </select>
//           </div>
//           <div style={styles.col}>
//             <label style={styles.label}>DOB</label>
//             <input
//               style={styles.input}
//               type="date"
//               value={form.dob}
//               onChange={(e) => handleChange("dob", e.target.value)}
//               disabled={!isVerified}
//             />
//           </div>
//         </div>

//         {/* Password & Confirm Password */}
//         <div style={styles.row}>
//           <div style={styles.col}>
//             <label style={styles.label}>Password</label>
//             <input
//               style={styles.input}
//               type="password"
//               value={form.password}
//               onChange={(e) => handleChange("password", e.target.value)}
//               disabled={!isVerified}
//             />
//           </div>
//           <div style={styles.col}>
//             <label style={styles.label}>Confirm Password</label>
//             <input
//               style={styles.input}
//               type="password"
//               value={form.confirmPass}
//               onChange={(e) => handleChange("confirmPass", e.target.value)}
//               disabled={!isVerified}
//             />
//           </div>
//         </div>

//         <button type="submit" style={styles.createBtn}>
//           Create Account
//         </button>
//       </form>

//       {/* Success Modal */}
//       {showSuccessModal && (
//         <div style={styles.modalOverlay}>
//           <div style={styles.modalContent}>
//             <div style={styles.checkCircle}>✔</div>
//             <p style={styles.modalTitle}>Your account has been created successfully.</p>
//             <button style={styles.okBtn} onClick={() => setShowSuccessModal(false)}>
//               OK
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CreateAccount;

// const styles = {
//   container: { width: "100%", maxWidth: 900, margin: "20px auto", padding: 20, background: "#fdfdfd", borderRadius: 12, boxShadow: "0 4px 12px rgba(0,0,0,0.08)" },
//   heading: { textAlign: "center", color: "#007AFF", fontSize: 26, fontWeight: 700, marginBottom: 20 },
//   form: { display: "flex", flexDirection: "column", gap: 15 },
//   row: { display: "flex", gap: 15, flexWrap: "wrap", marginBottom: 12 },
//   col: { flex: 1, minWidth: 200, display: "flex", flexDirection: "column" },
//   label: { marginBottom: 6, fontWeight: 600, color: "#222" },
//   input: { padding: 10, borderRadius: 8, border: "1px solid #ccc", fontSize: 15 },
//   verifyBtn: { background: "#2266e2", color: "#fff", border: "none", padding: "10px 14px", borderRadius: 8, cursor: "pointer" },
//   createBtn: { width: "60%", margin: "20px auto 0", padding: 14, border: "none", borderRadius: 10, background: "linear-gradient(90deg,#4f93f7,#2266e2)", color: "#fff", fontSize: 16, fontWeight: 700, cursor: "pointer", display: "block", textAlign: "center" },
//   modalOverlay: { position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.35)", display: "flex", justifyContent: "center", alignItems: "center" },
//   modalContent: { width: "85%", backgroundColor: "#fff", borderRadius: 20, padding: 28, textAlign: "center" },
//   checkCircle: { fontSize: 64, color: "#4cd964", marginBottom: 18 },
//   modalTitle: { fontSize: 16, fontWeight: 700, color: "#222", marginBottom: 8 },
//   okBtn: { backgroundColor: "#2266e2", borderRadius: 8, padding: "10px 36px", color: "#fff", cursor: "pointer" },
// };


import React, { useState } from "react";
import { verifyKeyCodeApi } from "../APICall/APIService";
import { UpdateRegisteredApi } from "../APICall/APICall";

const CreateAccount = () => {
  const [form, setForm] = useState({
    appKey: "",
    mobileInput: "",
    fullName: "",
    email: "",
    mobile: "",
    address: "",
    gender: "",
    dob: "",
    password: "",
    confirmPass: "",
    entityId: null,
    userRoleId: null,
  });

  const [isVerified, setIsVerified] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (key, value) => setForm({ ...form, [key]: value });

  const handleVerify = async () => {
    if (!form.appKey || !form.mobileInput) {
      alert("Enter App Key and Mobile");
      return;
    }
    try {
      const res = await verifyKeyCodeApi({ keycode: form.appKey, mobile: form.mobileInput });
      if (res?.Success && res.Data) {
        const data = res.Data;
        setForm((prev) => ({
          ...prev,
          fullName: data.descn || "",
          email: data.email || "",
          mobile: data.mobile || "",
          entityId: data.entity_id || null,
          userRoleId: data.userrole_id || null,
        }));
        setIsVerified(true);
        alert(res?.Message || "App Key verified!");
      } else {
        setIsVerified(false);
        alert(res?.Message || "Invalid App Key / Mobile");
      }
    } catch (err) {
      console.error("verifyKeyCodeApi error:", err);
      alert("Verification error, check console");
    }
  };

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    const { fullName, address, gender, dob, password, confirmPass, entityId, userRoleId } = form;

    if (!isVerified || !fullName || !address || !gender || !dob || !password || password !== confirmPass) {
      alert("Please fill all fields correctly");
      return;
    }

    const payload = {
      entity_id: entityId,
      userrole_id: userRoleId,
      descn: fullName,
      mobile: form.mobile,
      email: form.email,
      address,
      pwd: password,
      gender: Number(gender),
      dob: Math.floor(new Date(dob).getTime() / 1000),
      approved: 0,
      active: 1,
      time: new Date().toLocaleTimeString("en-GB"),
    };

    try {
      const res = await UpdateRegisteredApi(payload);
      console.log("Create Account response:", res);
      setShowSuccessModal(true);
    } catch (err) {
      console.error("UpdateRegisteredApi error:", err);
      if (err.response) {
        alert(`Error: ${err.response.status} ${err.response.data?.message || ""}`);
      } else {
        alert("Error creating account, check console");
      }
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Create Account</h2>
      <form style={styles.form} onSubmit={handleCreateAccount}>
        {/* App Key & Mobile */}
        <div style={styles.row}>
          <div style={styles.col}>
            <label style={styles.label}>App Key</label>
            <input
              style={styles.input}
              value={form.appKey}
              onChange={(e) => handleChange("appKey", e.target.value)}
              disabled={isVerified}
            />
          </div>
          <div style={styles.col}>
            <label style={styles.label}>Mobile Number</label>
            <div style={{ display: "flex", gap: 10 }}>
              <input
                style={{ ...styles.input, flex: 1 }}
                value={form.mobileInput}
                onChange={(e) => handleChange("mobileInput", e.target.value)}
                disabled={isVerified}
              />
              <button type="button" onClick={handleVerify} style={styles.verifyBtn}>
                {isVerified ? "Verified" : "Verify"}
              </button>
            </div>
          </div>
        </div>

        {/* Full Name & Email */}
        <div style={styles.row}>
          <div style={styles.col}>
            <label style={styles.label}>Full Name</label>
            <input
              style={styles.input}
              value={form.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
              disabled={!isVerified}
            />
          </div>
          <div style={styles.col}>
            <label style={styles.label}>Email</label>
            <input style={styles.input} value={form.email} disabled />
          </div>
        </div>

        {/* Mobile & Address */}
        <div style={styles.row}>
          <div style={styles.col}>
            <label style={styles.label}>Mobile</label>
            <input style={styles.input} value={form.mobile} disabled />
          </div>
          <div style={styles.col}>
            <label style={styles.label}>Address</label>
            <input
              style={styles.input}
              value={form.address}
              onChange={(e) => handleChange("address", e.target.value)}
              disabled={!isVerified}
            />
          </div>
        </div>

        {/* Gender & DOB */}
        <div style={styles.row}>
          <div style={styles.col}>
            <label style={styles.label}>Gender</label>
            <select
              style={styles.input}
              value={form.gender}
              onChange={(e) => handleChange("gender", e.target.value)}
              disabled={!isVerified}
            >
              <option value="">Select Gender</option>
              <option value="70">Male</option>
              <option value="71">Female</option>
              <option value="72">Other</option>
            </select>
          </div>
          <div style={styles.col}>
            <label style={styles.label}>DOB</label>
            <input
              style={styles.input}
              type="date"
              value={form.dob}
              onChange={(e) => handleChange("dob", e.target.value)}
              disabled={!isVerified}
            />
          </div>
        </div>

        {/* Password & Confirm Password */}
        <div style={styles.row}>
          <div style={styles.col}>
            <label style={styles.label}>Password</label>
            <input
              style={styles.input}
              type="password"
              value={form.password}
              onChange={(e) => handleChange("password", e.target.value)}
              disabled={!isVerified}
            />
          </div>
          <div style={styles.col}>
            <label style={styles.label}>Confirm Password</label>
            <input
              style={styles.input}
              type="password"
              value={form.confirmPass}
              onChange={(e) => handleChange("confirmPass", e.target.value)}
              disabled={!isVerified}
            />
          </div>
        </div>

        <button type="submit" style={styles.createBtn}>
          Create Account
        </button>
      </form>

      {showSuccessModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <div style={styles.checkCircle}>✔</div>
            <p style={styles.modalTitle}>Your account has been created successfully.</p>
            <button style={styles.okBtn} onClick={() => setShowSuccessModal(false)}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateAccount;

const styles = {
  container: { width: "100%", maxWidth: 900, margin: "20px auto", padding: 20, background: "#fdfdfd", borderRadius: 12, boxShadow: "0 4px 12px rgba(0,0,0,0.08)" },
  heading: { textAlign: "center", color: "#007AFF", fontSize: 26, fontWeight: 700, marginBottom: 20 },
  form: { display: "flex", flexDirection: "column", gap: 15 },
  row: { display: "flex", gap: 15, flexWrap: "wrap", marginBottom: 12 },
  col: { flex: 1, minWidth: 200, display: "flex", flexDirection: "column" },
  label: { marginBottom: 6, fontWeight: 600, color: "#222" },
  input: { padding: 10, borderRadius: 8, border: "1px solid #ccc", fontSize: 15 },
  verifyBtn: { background: "#2266e2", color: "#fff", border: "none", padding: "10px 14px", borderRadius: 8, cursor: "pointer" },
  createBtn: { width: "60%", margin: "20px auto 0", padding: 14, border: "none", borderRadius: 10, background: "linear-gradient(90deg,#4f93f7,#2266e2)", color: "#fff", fontSize: 16, fontWeight: 700, cursor: "pointer", display: "block", textAlign: "center" },
  modalOverlay: { position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.35)", display: "flex", justifyContent: "center", alignItems: "center" },
  modalContent: { width: "85%", backgroundColor: "#fff", borderRadius: 20, padding: 28, textAlign: "center" },
  checkCircle: { fontSize: 64, color: "#4cd964", marginBottom: 18 },
  modalTitle: { fontSize: 16, fontWeight: 700, color: "#222", marginBottom: 8 },
  okBtn: { backgroundColor: "#2266e2", borderRadius: 8, padding: "10px 36px", color: "#fff", cursor: "pointer" },
};