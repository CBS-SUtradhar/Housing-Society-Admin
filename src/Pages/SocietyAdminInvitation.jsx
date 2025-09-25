


// import React, { useState } from "react";
// import axios from "axios";

// function SocietyAdminInvitation() {
//   const [formData, setFormData] = useState({
//     name: "",
//     mobile: "",
//     email: "",
//     societyId: "",
//     societyName: "",
//     role: "Society Admin",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       // 🔹 API to send invitation (backend should handle email + token link)
//       const response = await axios.post("/api/invitations/send", formData);

//       alert("✅ Invitation sent successfully to " + formData.email);
//       console.log("API Response:", response.data);
//     } catch (error) {
//       console.error("❌ Error sending invitation:", error);
//       alert("❌ Failed to send invitation. Try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.title}>Invite Society Admin</h2>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Full Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//           style={styles.input}
//         />
//         <input
//           type="text"
//           name="mobile"
//           placeholder="Mobile Number"
//           value={formData.mobile}
//           onChange={handleChange}
//           required
//           style={styles.input}
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email Address"
//           value={formData.email}
//           onChange={handleChange}
//           required
//           style={styles.input}
//         />
//         <input
//           type="text"
//           name="societyId"
//           placeholder="Society ID"
//           value={formData.societyId}
//           onChange={handleChange}
//           required
//           style={styles.input}
//         />
//        <select
//   name="role"
//   value={formData.role}
//   onChange={handleChange}
//   style={styles.input}
//   required
// >
//   <option value="">Select Role</option>
//   <option value="Society Admin">Society Admin</option>
//   <option value="Super Admin">Super Admin</option>
//   <option value="Member">Member</option>
// </select>

//         <button type="submit" style={styles.button} disabled={loading}>
//           {loading ? "Sending..." : "Send Invitation"}
//         </button>
//       </form>
//     </div>
//   );
// }

// // 🔹 Simple Inline CSS
// const styles = {
//   container: {
//     width: "40%",
//     margin: "40px auto",
//     padding: "20px",
//     border: "1px solid #ddd",
//     borderRadius: "10px",
//     boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
//   },
//   title: {
//     textAlign: "center",
//     marginBottom: "20px",
//     fontSize: "20px",
//     fontWeight: "600",
//     color: "#2266e2",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "15px",
//   },
//   input: {
//     padding: "10px",
//     borderRadius: "6px",
//     border: "1px solid #ccc",
//     fontSize: "16px",
//   },
//   button: {
//     padding: "12px",
//     border: "none",
//     borderRadius: "6px",
//     background: "linear-gradient(90deg,#4f93f7,#2266e2)",
//     color: "#fff",
//     fontSize: "16px",
//     fontWeight: "600",
//     cursor: "pointer",
//   },
// };

// export default SocietyAdminInvitation;



// import React, { useState, useEffect } from "react";
// import { getCommonMasterApi } from "../APICall/APIService";
// import 
// function SocietyAdminInvitation() {
//   const [formData, setFormData] = useState({
//     name: "",
//     mobile: "",
//     email: "",
//     societyId: "",
//     societyName: "",
//     role: "",
//   });

//   const [roles, setRoles] = useState([]); // API fetched roles

//   useEffect(() => {
//     const fetchRoles = async () => {
//       try {
//         // 🔹 method: "UserRole" पास करून role fetch करतो
//         const res = await getCommonMasterApi({ method: "UserRole" });
//         if (res.Success && Array.isArray(res.data)) {
//           setRoles(res.Data);
//           setFormData((prev) => ({
//             ...prev,
//             role: res.data[0]?.value || "", // default selected role
//           }));
//         }
//       } catch (err) {
//         console.error("Roles API error:", err);
//       }
//     };
//     fetchRoles();
//   }, []);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const subject = `Invitation to join ${formData.societyName || "Housing Society"}`;
//     const body = `Hello ${formData.name},

// You are invited as a ${formData.role} for society: ${formData.societyName} (ID: ${formData.societyId}).

// 📱 Mobile: ${formData.mobile}

// Please accept the invitation and create your account.

// Regards,
// Housing Society Team`;

//     const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
//       formData.email
//     )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

//     window.open(gmailLink, "_blank");
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.title}>Invite Society Admin</h2>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Full Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//           style={styles.input}
//         />
//         <input
//           type="text"
//           name="mobile"
//           placeholder="Mobile Number"
//           value={formData.mobile}
//           onChange={handleChange}
//           required
//           style={styles.input}
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email Address"
//           value={formData.email}
//           onChange={handleChange}
//           required
//           style={styles.input}
//         />
//         <input
//           type="text"
//           name="societyId"
//           placeholder="Society ID"
//           value={formData.societyId}
//           onChange={handleChange}
//           required
//           style={styles.input}
//         />
//         <input
//           type="text"
//           name="societyName"
//           placeholder="Society Name"
//           value={formData.societyName}
//           onChange={handleChange}
//           required
//           style={styles.input}
//         />
//         <select
//           name="role"
//           value={formData.role}
//           onChange={handleChange}
//           style={styles.input}
//           required
//         >
//           <option value="">Select Role</option>
//           {roles.map((roleItem) => (
//             <option key={roleItem.id} value={roleItem.value}>
//               {roleItem.label || roleItem.value}
//             </option>
//           ))}
//         </select>

//         <button type="submit" style={styles.button}>
//           Send Invitation
//         </button>
//       </form>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     width: "40%",
//     margin: "40px auto",
//     padding: "20px",
//     border: "1px solid #ddd",
//     borderRadius: "10px",
//     boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
//   },
//   title: {
//     textAlign: "center",
//     marginBottom: "20px",
//     fontSize: "20px",
//     fontWeight: "600",
//     color: "#2266e2",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "15px",
//   },
//   input: {
//     padding: "10px",
//     borderRadius: "6px",
//     border: "1px solid #ccc",
//     fontSize: "16px",
//   },
//   button: {
//     padding: "12px",
//     border: "none",
//     borderRadius: "6px",
//     background: "linear-gradient(90deg,#4f93f7,#2266e2)",
//     color: "#fff",
//     fontSize: "16px",
//     fontWeight: "600",
//     cursor: "pointer",
//   },
// };

// export default SocietyAdminInvitation;


// import React, { useState, useEffect } from "react";
// import { SocietyAdminInvitationApi } from "../APICall/APICall";
// import { getCommonMasterApi } from "../APICall/APIService";
// function SocietyAdminInvitation() {
//   const [formData, setFormData] = useState({
//     name: "",
//     mobile: "",
//     email: "",
//     societyId: "",
//     societyName: "",
//     role: "",
//     appcode: "MYAPP001", // Default AppCode
//   });

//   const [roles, setRoles] = useState([]); // API fetched roles
//   const [loading, setLoading] = useState(false);

//   // Fetch roles from API
//   useEffect(() => {
//     const fetchRoles = async () => {
//       try {
//         const res = await getCommonMasterApi({ method: "UserRole" });
//         if (res.Success && Array.isArray(res.Data)) {
//           setRoles(res.Data);
//           setFormData((prev) => ({
//             ...prev,
//             role: res.Data[0]?.id || "", // default selected role ID
//           }));
//         }
//       } catch (err) {
//         console.error("Roles API error:", err);
//       }
//     };
//     fetchRoles();
//   }, []);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       // 🔹 Gmail compose URL
//       const subject = `Invitation to join ${formData.societyName || "Housing Society"}`;
//       const body = `Hello ${formData.name},

// You are invited as a ${roles.find(r => r.id === Number(formData.role))?.value || formData.role} for society: ${formData.societyName} (ID: ${formData.societyId}).

// 📱 Mobile: ${formData.mobile}

// Please accept the invitation and create your account.

// Regards,
// Housing Society Team`;

//       const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
//         formData.email
//       )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

//       window.open(gmailLink, "_blank"); // Open Gmail compose

//       // 🔹 Call API to save invitation in backend
//       const payload = {
//         descn: formData.name,
//         email: formData.email,
//         mobile: formData.mobile,
//         society_id: Number(formData.societyId),
//         userrole_id: Number(formData.role),
//         appcode: formData.appcode,
//       };

//       const res = await SocietyAdminInvitationApi(payload);
//       if (res.Success) {
//         alert("✅ Invitation API saved successfully!");
//       } else {
//         alert("❌ Invitation API failed: " + res.Message);
//       }
//     } catch (err) {
//       console.error("Invitation error:", err);
//       alert("❌ Failed to send invitation. Check console.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.title}>Invite Society Admin</h2>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Full Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//           style={styles.input}
//         />
//         <input
//           type="text"
//           name="mobile"
//           placeholder="Mobile Number"
//           value={formData.mobile}
//           onChange={handleChange}
//           required
//           style={styles.input}
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email Address"
//           value={formData.email}
//           onChange={handleChange}
//           required
//           style={styles.input}
//         />
//         <input
//           type="text"
//           name="societyId"
//           placeholder="Society ID"
//           value={formData.societyId}
//           onChange={handleChange}
//           required
//           style={styles.input}
//         />
//         <input
//           type="text"
//           name="societyName"
//           placeholder="Society Name"
//           value={formData.societyName}
//           onChange={handleChange}
//           required
//           style={styles.input}
//         />
//         <select
//           name="role"
//           value={formData.role}
//           onChange={handleChange}
//           style={styles.input}
//           required
//         >
//           <option value="">Select Role</option>
//           {roles.map((roleItem) => (
//             <option key={roleItem.id} value={roleItem.id}>
//               {roleItem.value}
//             </option>
//           ))}
//         </select>

//         <button type="submit" style={styles.button} disabled={loading}>
//           {loading ? "Sending..." : "Send Invitation"}
//         </button>
//       </form>
//     </div>
//   );
// }

// // 🔹 Inline CSS
// const styles = {
//   container: {
//     width: "40%",
//     margin: "40px auto",
//     padding: "20px",
//     border: "1px solid #ddd",
//     borderRadius: "10px",
//     boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
//   },
//   title: {
//     textAlign: "center",
//     marginBottom: "20px",
//     fontSize: "20px",
//     fontWeight: "600",
//     color: "#2266e2",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "15px",
//   },
//   input: {
//     padding: "10px",
//     borderRadius: "6px",
//     border: "1px solid #ccc",
//     fontSize: "16px",
//   },
//   button: {
//     padding: "12px",
//     border: "none",
//     borderRadius: "6px",
//     background: "linear-gradient(90deg,#4f93f7,#2266e2)",
//     color: "#fff",
//     fontSize: "16px",
//     fontWeight: "600",
//     cursor: "pointer",
//   },
// };

// export default SocietyAdminInvitation;

// import React, { useState, useEffect } from "react";
// import { getCommonMasterApi } from "../APICall/APIService";
// import { SocietyAdminInvitationApi } from "../APICall/APICall";

// function SocietyAdminInvitation() {
//   const [formData, setFormData] = useState({
//     name: "",
//     mobile: "",
//     email: "",
//     societyId: "",
//     societyName: "",
//     role: "",
//     appcode: "MYAPP001", // Default AppCode
//   });

//   const [roles, setRoles] = useState([]); // API fetched roles
//   const [loading, setLoading] = useState(false);

//   // 🔹 Fetch roles from backend
//   useEffect(() => {
//     const fetchRoles = async () => {
//       try {
//         const res = await getCommonMasterApi("UserRole"); // payload: { method: "UserRole" }
//         if (res.Success && Array.isArray(res.Data)) {
//           setRoles(res.Data);
//           setFormData((prev) => ({
//             ...prev,
//             role: res.Data[0]?.recno || "", // default selected role ID
//           }));
//         }
//       } catch (err) {
//         console.error("Roles API error:", err);
//       }
//     };
//     fetchRoles();
//   }, []);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       // 🔹 Gmail compose URL
//       const subject = `Invitation to join ${formData.societyName || "Housing Society"}`;
//       const roleLabel = roles.find(r => r.recno === Number(formData.role))?.descn || formData.role;
//       const body = `Hello ${formData.name},

// You are invited as a ${roleLabel} for society: ${formData.societyName} (ID: ${formData.societyId}).

// 📱 Mobile: ${formData.mobile}

// Please accept the invitation and create your account.

// Regards,
// Housing Society Team`;

//       const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
//         formData.email
//       )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

//       window.open(gmailLink, "_blank"); // Open Gmail compose

//       // 🔹 Call backend API to save invitation
//       const payload = {
//         descn: formData.name,
//         email: formData.email,
//         mobile: formData.mobile,
//         society_id: Number(formData.societyId),
//         userrole_id: Number(formData.role),
//         appcode: formData.appcode,
//       };

//       const res = await SocietyAdminInvitationApi(payload);

//       // 🔹 Safe alert for backend response
//       const msg = res.Message || res.message || "Invitation API response received.";
//       if (res.Success) {
//         alert("✅ " + msg);
//       } else {
//         alert("⚠️ " + msg); // Show message even if Success is false
//       }
//     } catch (err) {
//       console.error("Invitation error:", err);
//       alert("❌ Failed to send invitation. Check console.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.title}>Invite Society Admin</h2>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Full Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//           style={styles.input}
//         />
//         <input
//           type="text"
//           name="mobile"
//           placeholder="Mobile Number"
//           value={formData.mobile}
//           onChange={handleChange}
//           required
//           style={styles.input}
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email Address"
//           value={formData.email}
//           onChange={handleChange}
//           required
//           style={styles.input}
//         />
//         <input
//           type="text"
//           name="societyId"
//           placeholder="Society ID"
//           value={formData.societyId}
//           onChange={handleChange}
//           required
//           style={styles.input}
//         />
//         <input
//           type="text"
//           name="societyName"
//           placeholder="Society Name"
//           value={formData.societyName}
//           onChange={handleChange}
//           required
//           style={styles.input}
//         />
//         <select
//           name="role"
//           value={formData.role}
//           onChange={handleChange}
//           style={styles.input}
//           required
//         >
//           <option value="">Select Role</option>
//           {roles.map((roleItem) => (
//             <option key={roleItem.recno} value={roleItem.recno}>
//               {roleItem.descn}
//             </option>
//           ))}
//         </select>

//         <button type="submit" style={styles.button} disabled={loading}>
//           {loading ? "Sending..." : "Send Invitation"}
//         </button>
//       </form>
//     </div>
//   );
// }

// // 🔹 Inline CSS
// const styles = {
//   container: {
//     width: "40%",
//     margin: "40px auto",
//     padding: "20px",
//     border: "1px solid #ddd",
//     borderRadius: "10px",
//     boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
//   },
//   title: {
//     textAlign: "center",
//     marginBottom: "20px",
//     fontSize: "20px",
//     fontWeight: "600",
//     color: "#2266e2",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "15px",
//   },
//   input: {
//     padding: "10px",
//     borderRadius: "6px",
//     border: "1px solid #ccc",
//     fontSize: "16px",
//   },
//   button: {
//     padding: "12px",
//     border: "none",
//     borderRadius: "6px",
//     background: "linear-gradient(90deg,#4f93f7,#2266e2)",
//     color: "#fff",
//     fontSize: "16px",
//     fontWeight: "600",
//     cursor: "pointer",
//   },
// };

// export default SocietyAdminInvitation;


// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { getCommonMasterApi } from "../APICall/APIService";
// import { SocietyAdminInvitationApi } from "../APICall/APICall";

// function SocietyAdminInvitation() {
//   const location = useLocation();
//   const prefill = location.state?.prefill;

//   const [formData, setFormData] = useState({
//     name: prefill?.descn || "",
//     mobile: prefill?.mobile || "",
//     email: prefill?.email || "",
//     societyId: prefill?.society_id || "",
//     societyName: prefill?.descn || "",
//     role: "",
//     appcode: "MYAPP001",
//   });

//   const [roles, setRoles] = useState([]);
//   const [loading, setLoading] = useState(false);

//   // Fetch roles from backend
//   useEffect(() => {
//     const fetchRoles = async () => {
//       try {
//         const res = await getCommonMasterApi("UserRole");
//         if (res.Success && Array.isArray(res.Data)) {
//           setRoles(res.Data);
//           setFormData(prev => ({ ...prev, role: res.Data[0]?.recno || "" }));
//         }
//       } catch (err) {
//         console.error("Roles API error:", err);
//       }
//     };
//     fetchRoles();
//   }, []);

//   const handleChange = e => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const roleLabel = roles.find(r => r.recno === Number(formData.role))?.descn || formData.role;
//       const subject = `Invitation to join ${formData.societyName || "Housing Society"}`;
//       const body = `Hello ${formData.name},

// You are invited as a ${roleLabel} for society: ${formData.societyName} (ID: ${formData.societyId}).

// 📱 Mobile: ${formData.mobile}

// Please accept the invitation and create your account.

// Regards,
// Housing Society Team`;

//       // Open Gmail compose
//       const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(formData.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
//       window.open(gmailLink, "_blank");

//       // Save invitation in backend
//       const payload = {
//         descn: formData.name,
//         email: formData.email,
//         mobile: formData.mobile,
//         society_id: Number(formData.societyId),
//         userrole_id: Number(formData.role),
//         appcode: formData.appcode,
//       };

//       const res = await SocietyAdminInvitationApi(payload);

//       const msg = res.Message || res.message || "Invitation API response received.";
//       if (res.Success) {
//         alert("✅ " + msg);
//       } else {
//         alert("⚠️ " + msg);
//       }
//     } catch (err) {
//       console.error("Invitation error:", err);
//       alert("❌ Failed to send invitation. Check console.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.title}>Invite Society Admin</h2>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Full Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//           style={styles.input}
//         />
//         <input
//           type="text"
//           name="mobile"
//           placeholder="Mobile Number"
//           value={formData.mobile}
//           onChange={handleChange}
//           required
//           style={styles.input}
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email Address"
//           value={formData.email}
//           onChange={handleChange}
//           required
//           style={styles.input}
//         />
//         <input
//           type="text"
//           name="societyId"
//           placeholder="Society ID"
//           value={formData.societyId}
//           onChange={handleChange}
//           required
//           style={styles.input}
//         />
//         <input
//           type="text"
//           name="societyName"
//           placeholder="Society Name"
//           value={formData.societyName}
//           onChange={handleChange}
//           required
//           style={styles.input}
//         />
//         <select
//           name="role"
//           value={formData.role}
//           onChange={handleChange}
//           style={styles.input}
//           required
//         >
//           <option value="">Select Role</option>
//           {roles.map(roleItem => (
//             <option key={roleItem.recno} value={roleItem.recno}>
//               {roleItem.descn}
//             </option>
//           ))}
//         </select>

//         <button type="submit" style={styles.button} disabled={loading}>
//           {loading ? "Sending..." : "Send Invitation"}
//         </button>
//       </form>
//     </div>
//   );
// }

// // Inline CSS
// const styles = {
//   container: {
//     width: "40%",
//     margin: "40px auto",
//     padding: "20px",
//     border: "1px solid #ddd",
//     borderRadius: "10px",
//     boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
//   },
//   title: {
//     textAlign: "center",
//     marginBottom: "20px",
//     fontSize: "20px",
//     fontWeight: "600",
//     color: "#2266e2",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "15px",
//   },
//   input: {
//     padding: "10px",
//     borderRadius: "6px",
//     border: "1px solid #ccc",
//     fontSize: "16px",
//   },
//   button: {
//     padding: "12px",
//     border: "none",
//     borderRadius: "6px",
//     background: "linear-gradient(90deg,#4f93f7,#2266e2)",
//     color: "#fff",
//     fontSize: "16px",
//     fontWeight: "600",
//     cursor: "pointer",
//   },
// };

// export default SocietyAdminInvitation;


// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { getCommonMasterApi } from "../APICall/APIService";
// import { SocietyAdminInvitationApi } from "../APICall/APICall";

// function SocietyAdminInvitation() {
//   const location = useLocation();
//   const prefill = location.state?.prefill; // From SocietyList row

//   const [formData, setFormData] = useState({
//     name: "",
//     mobile: "",
//     email: "",
//     societyId: "",
//     societyName: "",
//     role: "",
//     appcode: "MYAPP001",
//   });

//   const [roles, setRoles] = useState([]);
//   const [loading, setLoading] = useState(false);

//   // Prefill society details from navigation
//   useEffect(() => {
//     if (prefill) {
//       setFormData(prev => ({
//         ...prev,
//         societyId: prefill.society_id || "",
//         societyName: prefill.descn || "",
//       }));
//     }
//   }, [prefill]);

//   // Fetch roles from backend
//   useEffect(() => {
//     const fetchRoles = async () => {
//       try {
//         const res = await getCommonMasterApi("UserRole");
//         if (res.Success && Array.isArray(res.Data)) {
//           setRoles(res.Data);
//           setFormData(prev => ({ ...prev, role: res.Data[0]?.recno || "" }));
//         }
//       } catch (err) {
//         console.error("Roles API error:", err);
//       }
//     };
//     fetchRoles();
//   }, []);

//   const handleChange = e => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const roleLabel = roles.find(r => r.recno === Number(formData.role))?.descn || formData.role;
//       const subject = `Invitation to join ${formData.societyName || "Housing Society"}`;
//       const body = `Hello ${formData.name},

// You are invited as a ${roleLabel} for society: ${formData.societyName} (ID: ${formData.societyId}).

// 📱 Mobile: ${formData.mobile}

// Please accept the invitation and create your account.

// Regards,
// Housing Society Team`;

//       // Open Gmail compose
//       const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(formData.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
//       window.open(gmailLink, "_blank");

//       // Save invitation in backend
//       const payload = {
//         descn: formData.name,
//         email: formData.email,
//         mobile: formData.mobile,
//         society_id: Number(formData.societyId),
//         userrole_id: Number(formData.role),
//         appcode: formData.appcode,
//       };

//       const res = await SocietyAdminInvitationApi(payload);
//       const msg = res.Message || res.message || "Invitation API response received.";
//       if (res.Success) {
//         alert("✅ " + msg);
//       } else {
//         alert("⚠️ " + msg);
//       }
//     } catch (err) {
//       console.error("Invitation error:", err);
//       alert("❌ Failed to send invitation. Check console.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.title}>Invite Society Admin</h2>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Full Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//           style={styles.input}
//         />
//         <input
//           type="text"
//           name="mobile"
//           placeholder="Mobile Number"
//           value={formData.mobile}
//           onChange={handleChange}
//           required
//           style={styles.input}
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email Address"
//           value={formData.email}
//           onChange={handleChange}
//           required
//           style={styles.input}
//         />
//        <input
//   type="text"
//   name="societyId"
//   placeholder="Society ID"
//   value={formData.societyId}
//   readOnly // 👈 only read-only, value will submit
//   style={styles.input}
// />

//         <input
//           type="text"
//           name="societyName"
//           placeholder="Society Name"
//           value={formData.societyName}
//           disabled // ✅ Disable input
//           style={styles.input}
//         />
//         <select
//           name="role"
//           value={formData.role}
//           onChange={handleChange}
//           style={styles.input}
//           required
//         >
//           <option value="">Select Role</option>
//           {roles.map(roleItem => (
//             <option key={roleItem.recno} value={roleItem.recno}>
//               {roleItem.descn}
//             </option>
//           ))}
//         </select>

//         <button type="submit" style={styles.button} disabled={loading}>
//           {loading ? "Sending..." : "Send Invitation"}
//         </button>
//       </form>
//     </div>
//   );
// }

// // Inline CSS
// const styles = {
//   container: {
//     width: "40%",
//     margin: "40px auto",
//     padding: "20px",
//     border: "1px solid #ddd",
//     borderRadius: "10px",
//     boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
//   },
//   title: {
//     textAlign: "center",
//     marginBottom: "20px",
//     fontSize: "20px",
//     fontWeight: "600",
//     color: "#2266e2",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "15px",
//   },
//   input: {
//     padding: "10px",
//     borderRadius: "6px",
//     border: "1px solid #ccc",
//     fontSize: "16px",
//   },
//   button: {
//     padding: "12px",
//     border: "none",
//     borderRadius: "6px",
//     background: "linear-gradient(90deg,#4f93f7,#2266e2)",
//     color: "#fff",
//     fontSize: "16px",
//     fontWeight: "600",
//     cursor: "pointer",
//   },
// };

// export default SocietyAdminInvitation;


//final code 
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getCommonMasterApi } from "../APICall/APIService";
import { SocietyAdminInvitationApi } from "../APICall/APICall";

function SocietyAdminInvitation() {
  const location = useLocation();
  const prefill = location.state?.prefill;

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    societyId: "",
    societyName: "",
    role: "",
    appcode: "MYAPP001",
  });

  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   if (prefill) {
  //     setFormData(prev => ({
  //       ...prev,
  //       societyId: prefill.society_id || "",
  //       societyName: prefill.descn || "",
  //     }));
  //   }
  // }, [prefill]);
  useEffect(() => {
  console.log("Prefill data:", prefill);
  if (prefill) {
    setFormData(prev => ({
      ...prev,
      societyId: prefill.society_id || "",
      societyName: prefill.descn || "",
    }));
  }
}, [prefill]);


  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const res = await getCommonMasterApi("UserRole");
        if (res.Success && Array.isArray(res.Data)) {
          setRoles(res.Data);
          setFormData(prev => ({ ...prev, role: res.Data[0]?.recno || "" }));
        }
      } catch (err) {
        console.error("Roles API error:", err);
      }
    };
    fetchRoles();
  }, []);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async e => {
  e.preventDefault();
  setLoading(true);
  try {
    const roleLabel = roles.find(r => r.recno === Number(formData.role))?.descn || formData.role;
    const subject = `Invitation to join ${formData.societyName || "Housing Society"}`;
    const body = `Hello ${formData.name},

You are invited as a ${roleLabel} for society: ${formData.societyName} (ID: ${formData.societyId}).

📱 Mobile: ${formData.mobile}

Please accept the invitation and create your account.

Regards,
Housing Society Team`;

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(formData.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailLink, "_blank");

    const payload = {
      descn: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      society_id: Number(formData.societyId),
      userrole_id: Number(formData.role),
      appcode: formData.appcode,
    };

    const res = await SocietyAdminInvitationApi(payload);

    console.log("Invitation API Response:", res);

    if (res.success) {
      alert(
        `✅ ${res.message}\n\n🔑 Keycode: ${res.keycode}\nAppcode: ${res.appcode}`
      );
    } else {
      const msg = res.message || "Invitation API failed.";
      alert("⚠️ " + msg);
    }
  } catch (err) {
    console.error("Invitation error:", err);
    alert("❌ Failed to send invitation. Check console.");
  } finally {
    setLoading(false);
  }
};

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Invite Society Admin</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required style={styles.input} />
        <input type="text" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} required style={styles.input} />
        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required style={styles.input} />

        <input type="text" name="societyId" placeholder="Society ID" value={formData.societyId} readOnly style={styles.input} />
        <input type="text" name="societyName" placeholder="Society Name" value={formData.societyName} readOnly style={styles.input} />

        <select name="role" value={formData.role} onChange={handleChange} style={styles.input} required>
          <option value="">Select Role</option>
          {roles.map(roleItem => (<option key={roleItem.recno} value={roleItem.recno}>{roleItem.descn}</option>))}
        </select>

        <button type="submit" style={styles.button} disabled={loading}>{loading ? "Sending..." : "Send Invitation"}</button>
      </form>
    </div>
  );
}

const styles = {
  container: { width: "40%", margin: "40px auto", padding: "20px", border: "1px solid #ddd", borderRadius: "10px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" },
  title: { textAlign: "center", marginBottom: "20px", fontSize: "20px", fontWeight: "600", color: "#2266e2" },
  form: { display: "flex", flexDirection: "column", gap: "15px" },
  input: { padding: "10px", borderRadius: "6px", border: "1px solid #ccc", fontSize: "16px" },
  button: { padding: "12px", border: "none", borderRadius: "6px", background: "linear-gradient(90deg,#4f93f7,#2266e2)", color: "#fff", fontSize: "16px", fontWeight: "600", cursor: "pointer" },
};

export default SocietyAdminInvitation;
