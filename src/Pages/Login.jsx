// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import buildingImg from "../Assets/building.jpg"; // import the image

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     console.log("Login Data:", { email, password });
//     navigate("/dashboard"); // navigate after login
//   };

//   return (
//     <div style={{ ...styles.container, backgroundImage: `url(${buildingImg})` }}>
//       <form style={styles.card} onSubmit={handleLogin}>
//         {/* Logo */}
//         <div style={styles.logoContainer}>
//           <div style={styles.logo}></div>
//         </div>

//         <h2 style={styles.title}>Society Admin</h2>
//         <p style={styles.subtitle}>Sign in to manage housing societies</p>

//         {/* Email / Agent ID */}
//         <label style={styles.label}>Email / Agent ID</label>
//         <input
//           type="text"
//           placeholder="Enter your email or agent ID"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           style={styles.input}
//           required
//         />

//         {/* Password */}
//         <label style={styles.label}>Password</label>
//         <div style={styles.passwordWrapper}>
//           <input
//             type={showPassword ? "text" : "password"}
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             style={{ ...styles.input, marginBottom: 0 }}
//             required
//           />
//           <span
//             onClick={() => setShowPassword(!showPassword)}
//             style={styles.togglePassword}
//           >
//             {showPassword ? "Hide" : "Show"}
//           </span>
//         </div>

//         {/* Login Button */}
//         <button type="submit" style={styles.loginBtn}>
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// // Styles
// const styles = {
//   container: {
//     height: "100vh",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     fontFamily: "Segoe UI, sans-serif",
//   },
//   card: {
//     width: "400px",
//     padding: "40px 30px",
//     borderRadius: "16px",
//     background: "rgba(255, 255, 255, 0.95)", // semi-transparent so bg shows
//     boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
//     display: "flex",
//     flexDirection: "column",
//   },
//   logoContainer: {
//     display: "flex",
//     justifyContent: "center",
//     marginBottom: "20px",
//   },
//   logo: {
//     width: "60px",
//     height: "60px",
//     borderRadius: "50%",
//     background:
//       "url('https://cdn-icons-png.flaticon.com/512/3135/3135715.png') center/cover",
//   },
//   title: {
//     fontSize: "24px",
//     fontWeight: "700",
//     textAlign: "center",
//     marginBottom: "6px",
//     color: "#222",
//   },
//   subtitle: {
//     fontSize: "14px",
//     color: "#666",
//     textAlign: "center",
//     marginBottom: "25px",
//   },
//   label: {
//     fontSize: "14px",
//     fontWeight: "500",
//     color: "#333",
//     marginBottom: "6px",
//   },
//   input: {
//     width: "92%",
//     padding: "12px 14px",
//     borderRadius: "8px",
//     border: "1px solid #ccc",
//     marginBottom: "16px",
//     fontSize: "14px",
//     outline: "none",
//     transition: "0.3s",
//   },
//   passwordWrapper: {
//     position: "relative",
//     marginBottom: "16px",
//   },
//   togglePassword: {
//     position: "absolute",
//     right: "12px",
//     top: "50%",
//     transform: "translateY(-50%)",
//     fontSize: "12px",
//     color: "#007bff",
//     cursor: "pointer",
//     fontWeight: "600",
//   },
//   loginBtn: {
//     padding: "14px",
//     background: "#0d6efd",
//     color: "#fff",
//     fontSize: "16px",
//     fontWeight: "600",
//     border: "none",
//     borderRadius: "8px",
//     cursor: "pointer",
//     transition: "0.3s",
//   },
// };

// export default Login;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import buildingImg from "../Assets/building.jpg"; // import the image
// import { LoginApi } from "../APICall/APICall";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     // Prepare payload
//     const payload = {
//       email: email || "",
//       pwd: password || "",
//     };

//     try {
//       const response = await LoginApi(payload); // call your API
//       console.log("API Response:", response);

//       if (response.success) {
//         alert("✅ Login successful");
//         navigate("/dashboard"); // navigate only if login succeeds
//       } else {
//         alert(`❌ Login failed: ${response.message}`);
//       }
//     } catch (err) {
//       console.error("Login error:", err);
//       alert("❌ Something went wrong while logging in");
//     }
//   };

//   return (
//     <div style={{ ...styles.container, backgroundImage: `url(${buildingImg})` }}>
//       <form style={styles.card} onSubmit={handleLogin}>
//         <div style={styles.logoContainer}>
//           <div style={styles.logo}></div>
//         </div>

//         <h2 style={styles.title}>Society Admin</h2>
//         <p style={styles.subtitle}>Sign in to manage housing societies</p>

//         <label style={styles.label}>Email / Agent ID</label>
//         <input
//           type="text"
//           placeholder="Enter your email or agent ID"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           style={styles.input}
//           required
//         />

//         <label style={styles.label}>Password</label>
//         <div style={styles.passwordWrapper}>
//           <input
//             type={showPassword ? "text" : "password"}
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             style={{ ...styles.input, marginBottom: 0 }}
//             required
//           />
//           <span
//             onClick={() => setShowPassword(!showPassword)}
//             style={styles.togglePassword}
//           >
//             {showPassword ? "Hide" : "Show"}
//           </span>
//         </div>

//         <button type="submit" style={styles.loginBtn}>
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// // Styles remain the same as before
// const styles = {
//   container: {
//     height: "100vh",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     fontFamily: "Segoe UI, sans-serif",
//   },
//   card: {
//     width: "400px",
//     padding: "40px 30px",
//     borderRadius: "16px",
//     background: "rgba(255, 255, 255, 0.95)",
//     boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
//     display: "flex",
//     flexDirection: "column",
//   },
//   logoContainer: {
//     display: "flex",
//     justifyContent: "center",
//     marginBottom: "20px",
//   },
//   logo: {
//     width: "60px",
//     height: "60px",
//     borderRadius: "50%",
//     background:
//       "url('https://cdn-icons-png.flaticon.com/512/3135/3135715.png') center/cover",
//   },
//   title: {
//     fontSize: "24px",
//     fontWeight: "700",
//     textAlign: "center",
//     marginBottom: "6px",
//     color: "#222",
//   },
//   subtitle: {
//     fontSize: "14px",
//     color: "#666",
//     textAlign: "center",
//     marginBottom: "25px",
//   },
//   label: {
//     fontSize: "14px",
//     fontWeight: "500",
//     color: "#333",
//     marginBottom: "6px",
//   },
//   input: {
//     width: "92%",
//     padding: "12px 14px",
//     borderRadius: "8px",
//     border: "1px solid #ccc",
//     marginBottom: "16px",
//     fontSize: "14px",
//     outline: "none",
//     transition: "0.3s",
//   },
//   passwordWrapper: {
//     position: "relative",
//     marginBottom: "16px",
//   },
//   togglePassword: {
//     position: "absolute",
//     right: "12px",
//     top: "50%",
//     transform: "translateY(-50%)",
//     fontSize: "12px",
//     color: "#007bff",
//     cursor: "pointer",
//     fontWeight: "600",
//   },
//   loginBtn: {
//     padding: "14px",
//     background: "#0d6efd",
//     color: "#fff",
//     fontSize: "16px",
//     fontWeight: "600",
//     border: "none",
//     borderRadius: "8px",
//     cursor: "pointer",
//     transition: "0.3s",
//   },
// };

// export default Login;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import buildingImg from "../Assets/building.jpg"; // background image
// import { LoginApi, GetMemberApi } from "../APICall/APICall";
// import { Link } from "react-router-dom";
// const Login = () => {
//   const [email, setEmail] = useState("rani@gmail.com");
//   const [password, setPassword] = useState("Rani@1234");
//   const [showPassword, setShowPassword] = useState(false);
//   const [remember, setRemember] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");

//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setErrorMessage("");

//     if (!email.trim() || !password.trim()) {
//       setErrorMessage("Please enter both email and password.");
//       return;
//     }

//     const payload = {
//       email: email.trim(),
//       pwd: password.trim(),
//     };
// console.log("payload",payload);
//     try {
//         // const response ={
//         //     Data:[]
//         // }
//       const response = await LoginApi(payload);

//       console.log("API Response:", response);

//       if (!response || !response.Data || response.Data.length === 0) {
//         setErrorMessage("Incorrect email or password.");
//         return;
//       }

//       let user = Array.isArray(response.Data) ? response.Data[0] : response.Data;

//       // Normalize user object
//       let normalizedUser = {
//         recno: user.entity_id || 0,
//         roleId: user.userrole_id || 0,
//         fullName: user.descn || "",
//         email: user.email || "",
//         mobile: user.mobile || "",
//         password: password,
//         societyId: user.society_id || null,
//         memberId: 0, // will fix below
//         flatNumber: user.flatno || "",
//         towerNumber: user.towerno || "",
//         approved: user.approved ?? 0,
//         active: user.active ?? 0,
//       };

//       // Fetch correct memberId if needed
//       try {
//         const memberResp = await GetMemberApi(normalizedUser.recno);
//         if (memberResp?.Data?.length > 0) {
//           const foundMember = memberResp.Data.find(
//             (m) => m.entity_id === normalizedUser.recno
//           );
//           if (foundMember) {
//             normalizedUser = {
//               ...normalizedUser,
//               memberId: foundMember.member_id,
//               societyId: foundMember.society_id,
//               societyName: foundMember.societyName || "-",
//             };
//           }
//         }
//       } catch (err) {
//         console.error("GetMemberApi Error:", err);
//       }

//       // Save in localStorage if "remember me" checked
//       localStorage.setItem("user_details", JSON.stringify(normalizedUser));
//       if (remember) localStorage.setItem("remember_login", "true");

//       // Navigate based on approval status
//       if (normalizedUser.approved === 0) {
//         navigate("/approvalPending", { replace: true });
//       } else if (normalizedUser.approved === 1) {
//         navigate("/dashboard", { replace: true });
//       } else {
//         setErrorMessage("Unable to determine account status. Please contact support.");
//       }
//     } catch (err) {
//       console.error("Login Error:", err);
//       setErrorMessage("Something went wrong. Please try again later.");
//     }
//   };

//   return (
//     <div style={{ ...styles.container, backgroundImage: `url(${buildingImg})` }}>
//       <form style={styles.card} onSubmit={handleLogin}>
//         <h2 style={styles.title}>Society Admin</h2>
//         <p style={styles.subtitle}>Sign in to manage housing societies</p>

//         {errorMessage && <p style={styles.errorText}>{errorMessage}</p>}

//         <label style={styles.label}>Email / Agent ID</label>
//         <input
//           type="text"
//           placeholder="Enter your email or agent ID"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           style={styles.input}
//           required
//         />

//         <label style={styles.label}>Password</label>
//         <div style={styles.passwordWrapper}>
//           <input
//             type={showPassword ? "text" : "password"}
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             style={{ ...styles.input, marginBottom: 0 }}
//             required
//           />
//           <span
//             onClick={() => setShowPassword(!showPassword)}
//             style={styles.togglePassword}
//           >
//             {showPassword ? "Hide" : "Show"}
//           </span>
//         </div>

//         <div style={styles.row}>
//           <label style={styles.rememberText}>
//             <input
//               type="checkbox"
//               checked={remember}
//               onChange={(e) => setRemember(e.target.checked)}
//               style={{ marginRight: 6 }}
//             />
//             Remember me
//           </label>
//         </div>

//         <button type="submit" style={styles.loginBtn}>
//           Log In
//         </button>
//          <button type="button" style={styles.loginBtns}>
//   <Link to="/createaccount" style={{ color: "white", textDecoration: "none" }}>
//     Create Account
//   </Link>
// </button>
//       </form>
//     </div>
//   );
// };

// // Styles
// const styles = {
//   container: {
//     height: "100vh",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     fontFamily: "Segoe UI, sans-serif",
//   },
//   card: {
//     width: "400px",
//     padding: "40px 30px",
//     borderRadius: "16px",
//     background: "rgba(255, 255, 255, 0.95)",
//     boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
//     display: "flex",
//     flexDirection: "column",
//   },
//   title: {
//     fontSize: "24px",
//     fontWeight: "700",
//     textAlign: "center",
//     marginBottom: "6px",
//     color: "#222",
//   },
//   subtitle: {
//     fontSize: "14px",
//     color: "#666",
//     textAlign: "center",
//     marginBottom: "25px",
//   },
//   label: {
//     fontSize: "14px",
//     fontWeight: "500",
//     color: "#333",
//     marginBottom: "6px",
//   },
//   input: {
//     width: "92%",
//     padding: "12px 14px",
//     borderRadius: "8px",
//     border: "1px solid #ccc",
//     marginBottom: "16px",
//     fontSize: "14px",
//     outline: "none",
//     transition: "0.3s",
//   },
//   passwordWrapper: {
//     position: "relative",
//     marginBottom: "16px",
//   },
//   togglePassword: {
//     position: "absolute",
//     right: "12px",
//     top: "50%",
//     transform: "translateY(-50%)",
//     fontSize: "12px",
//     color: "#007bff",
//     cursor: "pointer",
//     fontWeight: "600",
//   },
//   row: {
//     display: "flex",
//     justifyContent: "space-between",
//     marginBottom: "16px",
//     alignItems: "center",
//   },
//   rememberText: {
//     fontSize: "13px",
//     color: "#666",
//   },
//   loginBtn: {
//     padding: "14px",
//     background: "#0d6efd",
//     color: "#fff",
//     fontSize: "16px",
//     fontWeight: "600",
//     border: "none",
//     borderRadius: "8px",
//     cursor: "pointer",
//     transition: "0.3s",
//   },
//   loginBtns: {
//     marginTop:10,
//     padding: "14px",
//     background: "#0d6efd",
//     color: "#fff",
//     fontSize: "16px",
//     fontWeight: "600",
//     border: "none",
//     borderRadius: "8px",
//     cursor: "pointer",
//     transition: "0.3s",
//   },
//   errorText: {
//     color: "red",
//     fontSize: "13px",
//     marginBottom: "10px",
//   },
// };

// export default Login;


//login new code 
// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import buildingImg from "../Assets/building.jpg";
// import { LoginApi, GetMemberApi, GetUserlistApi } from "../APICall/APICall";

// const Login = () => {
//   const [email, setEmail] = useState("rani@gmail.com");
//   const [password, setPassword] = useState("Rani@1234");
//   const [showPassword, setShowPassword] = useState(false);
//   const [remember, setRemember] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");

//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setErrorMessage("");

//     if (!email.trim() || !password.trim()) {
//       setErrorMessage("Please enter both email and password.");
//       return;
//     }

//     const payload = {
//       email: email.trim(),
//       pwd: password.trim(),
//     };
//     console.log("Login payload", payload);

//     try {
//       const response = await LoginApi(payload);
//       console.log("Login API Response:", response);

//       if (!response || !response.Data || response.Data.length === 0) {
//         setErrorMessage("Incorrect email or password.");
//         return;
//       }

//       let user = Array.isArray(response.Data) ? response.Data[0] : response.Data;

//       // Normalize user object
//       let normalizedUser = {
//         recno: user.entity_id || 0,
//         roleId: user.userrole_id || 0,
//         fullName: user.descn || "",
//         email: user.email || "",
//         mobile: user.mobile || "",
//         password: password,
//         societyId: user.society_id || null,
//         memberId: 0,
//         flatNumber: user.flatno || "",
//         towerNumber: user.towerno || "",
//         approved: user.approved ?? 0,
//         active: user.active ?? 0,
//       };

//       // Fetch correct memberId if needed
//       try {
//         const memberResp = await GetMemberApi(normalizedUser.recno);
//         if (memberResp?.Data?.length > 0) {
//           const foundMember = memberResp.Data.find(
//             (m) => m.entity_id === normalizedUser.recno
//           );
//           if (foundMember) {
//             normalizedUser = {
//               ...normalizedUser,
//               memberId: foundMember.member_id,
//               societyId: foundMember.society_id,
//               societyName: foundMember.societyName || "-",
//             };
//           }
//         }
//       } catch (err) {
//         console.error("GetMemberApi Error:", err);
//       }

//       // ✅ Call GetUserlistApi (Entity Id + Society Id match)
//      // ✅ Call GetUserlistApi (entity_id match करून फक्त 1 record घेण्यासाठी)
// try {
//   const userListResp = await GetUserlistApi({});
//   console.log("Userlist API Response:", userListResp);

//   if (userListResp?.Data?.length > 0) {
//     // entity_id match करुन फक्त तोच record घे
//     const matchedEntity = userListResp.Data.find(
//       (u) => u.entity_id === normalizedUser.recno
//     );

//     if (matchedEntity) {
//       normalizedUser = {
//         ...normalizedUser,
//         societyId: matchedEntity.society_id,   // ✅ society_id घेतला
//         roleId: matchedEntity.userrole_id,     // role पण set केला
//         userId: matchedEntity.user_id,         // optional पण useful
//       };
//       console.log("✅ Matched User:", matchedEntity);
//     } else {
//       console.warn("⚠️ No matching entity found in userlist");
//     }
//   }
// } catch (err) {
//   console.error("GetUserlistApi Error:", err);
// }

//       // Save in localStorage if "remember me" checked
//       localStorage.setItem("user_details", JSON.stringify(normalizedUser));
//       if (remember) localStorage.setItem("remember_login", "true");

//       // Navigate based on approval status
//       if (normalizedUser.approved === 0) {
//         navigate("/approvalPending", { replace: true });
//       } else if (normalizedUser.approved === 1) {
//         navigate("/dashboard", { replace: true });
//       } else {
//         setErrorMessage("Unable to determine account status. Please contact support.");
//       }
//     } catch (err) {
//       console.error("Login Error:", err);
//       setErrorMessage("Something went wrong. Please try again later.");
//     }
//   };

//   return (
//     <div style={{ ...styles.container, backgroundImage: `url(${buildingImg})` }}>
//       <form style={styles.card} onSubmit={handleLogin}>
//         <h2 style={styles.title}>Society Admin</h2>
//         <p style={styles.subtitle}>Sign in to manage housing societies</p>

//         {errorMessage && <p style={styles.errorText}>{errorMessage}</p>}

//         <label style={styles.label}>Email / Agent ID</label>
//         <input
//           type="text"
//           placeholder="Enter your email or agent ID"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           style={styles.input}
//           required
//         />

//         <label style={styles.label}>Password</label>
//         <div style={styles.passwordWrapper}>
//           <input
//             type={showPassword ? "text" : "password"}
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             style={{ ...styles.input, marginBottom: 0 }}
//             required
//           />
//           <span
//             onClick={() => setShowPassword(!showPassword)}
//             style={styles.togglePassword}
//           >
//             {showPassword ? "Hide" : "Show"}
//           </span>
//         </div>

//         <div style={styles.row}>
//           <label style={styles.rememberText}>
//             <input
//               type="checkbox"
//               checked={remember}
//               onChange={(e) => setRemember(e.target.checked)}
//               style={{ marginRight: 6 }}
//             />
//             Remember me
//           </label>
//         </div>

//         <button type="submit" style={styles.loginBtn}>
//           Log In
//         </button>
//         <button type="button" style={styles.loginBtns}>
//           <Link to="/createaccount" style={{ color: "white", textDecoration: "none" }}>
//             Create Account
//           </Link>
//         </button>
//       </form>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     height: "100vh",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     fontFamily: "Segoe UI, sans-serif",
//   },
//   card: {
//     width: "400px",
//     padding: "40px 30px",
//     borderRadius: "16px",
//     background: "rgba(255, 255, 255, 0.95)",
//     boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
//     display: "flex",
//     flexDirection: "column",
//   },
//   title: {
//     fontSize: "24px",
//     fontWeight: "700",
//     textAlign: "center",
//     marginBottom: "6px",
//     color: "#222",
//   },
//   subtitle: {
//     fontSize: "14px",
//     color: "#666",
//     textAlign: "center",
//     marginBottom: "25px",
//   },
//   label: {
//     fontSize: "14px",
//     fontWeight: "500",
//     color: "#333",
//     marginBottom: "6px",
//   },
//   input: {
//     width: "92%",
//     padding: "12px 14px",
//     borderRadius: "8px",
//     border: "1px solid #ccc",
//     marginBottom: "16px",
//     fontSize: "14px",
//     outline: "none",
//     transition: "0.3s",
//   },
//   passwordWrapper: {
//     position: "relative",
//     marginBottom: "16px",
//   },
//   togglePassword: {
//     position: "absolute",
//     right: "12px",
//     top: "50%",
//     transform: "translateY(-50%)",
//     fontSize: "12px",
//     color: "#007bff",
//     cursor: "pointer",
//     fontWeight: "600",
//   },
//   row: {
//     display: "flex",
//     justifyContent: "space-between",
//     marginBottom: "16px",
//     alignItems: "center",
//   },
//   rememberText: {
//     fontSize: "13px",
//     color: "#666",
//   },
//   loginBtn: {
//     padding: "14px",
//     background: "#0d6efd",
//     color: "#fff",
//     fontSize: "16px",
//     fontWeight: "600",
//     border: "none",
//     borderRadius: "8px",
//     cursor: "pointer",
//     transition: "0.3s",
//   },
//   loginBtns: {
//     marginTop:10,
//     padding: "14px",
//     background: "#0d6efd",
//     color: "#fff",
//     fontSize: "16px",
//     fontWeight: "600",
//     border: "none",
//     borderRadius: "8px",
//     cursor: "pointer",
//     transition: "0.3s",
//   },
//   errorText: {
//     color: "red",
//     fontSize: "13px",
//     marginBottom: "10px",
//   },
// };

// export default Login;

// import React, { useState, useContext } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import buildingImg from "../Assets/building.jpg";
// import { LoginApi, GetMemberApi, GetUserlistApi } from "../APICall/APICall";
// import { UserContext } from "../context/UserContext";

// const Login = () => {
//   const { setUser } = useContext(UserContext); // ✅ UserContext
//   const [email, setEmail] = useState("rani@gmail.com");
//   const [password, setPassword] = useState("Rani@1234");
//   const [showPassword, setShowPassword] = useState(false);
//   const [remember, setRemember] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setErrorMessage("");

//     if (!email.trim() || !password.trim()) {
//       setErrorMessage("Please enter both email and password.");
//       return;
//     }

//     try {
//       const response = await LoginApi({ email: email.trim(), pwd: password.trim() });
//       console.log("Login API Response:", response);

//       if (!response?.Data || response.Data.length === 0) {
//         setErrorMessage("Incorrect email or password.");
//         return;
//       }

//       let userObj = response.Data[0];

//       // Normalize user
//       let normalizedUser = {
//         recno: userObj.entity_id,
//         roleId: userObj.userrole_id,
//         fullName: userObj.descn,
//         email: userObj.email,
//         mobile: userObj.mobile,
//         password: password,
//         societyId: userObj.society_id || null,
//         memberId: 0,
//         flatNumber: userObj.flatno || "",
//         towerNumber: userObj.towerno || "",
//         approved: userObj.approved ?? 0,
//         active: userObj.active ?? 0,
//       };

//       // Get memberId if exists
//       const memberResp = await GetMemberApi(normalizedUser.recno);
//       if (memberResp?.Data?.length > 0) {
//         const foundMember = memberResp.Data.find(m => m.entity_id === normalizedUser.recno);
//         if (foundMember) {
//           normalizedUser.memberId = foundMember.member_id;
//           normalizedUser.societyId = foundMember.society_id;
//         }
//       }

//       // ✅ Match entity_id in userlist to get correct society_id
//       const userListResp = await GetUserlistApi({});
//       if (userListResp?.Data?.length > 0) {
//         const matchedEntity = userListResp.Data.find(u => u.entity_id === normalizedUser.recno);
//         if (matchedEntity) {
//           normalizedUser.societyId = matchedEntity.society_id;
//           normalizedUser.roleId = matchedEntity.userrole_id;
//           normalizedUser.userId = matchedEntity.user_id;
//           console.log("✅ Matched User:", matchedEntity);
//         } else {
//           console.warn("⚠️ No matching entity found in userlist");
//         }
//       }

//       // Save in UserContext
//       await setUser(normalizedUser);

//       // Remember me
//       if (remember) localStorage.setItem("remember_login", "true");

//       // Navigate
//       if (normalizedUser.approved === 0) navigate("/approvalPending", { replace: true });
//       else if (normalizedUser.approved === 1) navigate("/dashboard", { replace: true });
//       else setErrorMessage("Unable to determine account status. Please contact support.");

//     } catch (err) {
//       console.error("Login Error:", err);
//       setErrorMessage("Something went wrong. Please try again later.");
//     }
//   };

//   return (
//     <div style={{ ...styles.container, backgroundImage: `url(${buildingImg})` }}>
//       <form style={styles.card} onSubmit={handleLogin}>
//         <h2 style={styles.title}>Society Admin</h2>
//         <p style={styles.subtitle}>Sign in to manage housing societies</p>

//         {errorMessage && <p style={styles.errorText}>{errorMessage}</p>}

//         <label style={styles.label}>Email / Agent ID</label>
//         <input
//           type="text"
//           placeholder="Enter your email or agent ID"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           style={styles.input}
//           required
//         />

//         <label style={styles.label}>Password</label>
//         <div style={styles.passwordWrapper}>
//           <input
//             type={showPassword ? "text" : "password"}
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             style={{ ...styles.input, marginBottom: 0 }}
//             required
//           />
//           <span
//             onClick={() => setShowPassword(!showPassword)}
//             style={styles.togglePassword}
//           >
//             {showPassword ? "Hide" : "Show"}
//           </span>
//         </div>

//         <div style={styles.row}>
//           <label style={styles.rememberText}>
//             <input
//               type="checkbox"
//               checked={remember}
//               onChange={(e) => setRemember(e.target.checked)}
//               style={{ marginRight: 6 }}
//             />
//             Remember me
//           </label>
//         </div>

//         <button type="submit" style={styles.loginBtn}>Log In</button>
//         <button type="button" style={styles.loginBtns}>
//           <Link to="/createaccount" style={{ color: "white", textDecoration: "none" }}>Create Account</Link>
//         </button>
//       </form>
//     </div>
//   );
// };

// // Styles same as before
// const styles = {
//   container: { height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundSize: "cover", backgroundPosition: "center", fontFamily: "Segoe UI, sans-serif" },
//   card: { width: "400px", padding: "40px 30px", borderRadius: "16px", background: "rgba(255, 255, 255, 0.95)", boxShadow: "0 8px 30px rgba(0,0,0,0.1)", display: "flex", flexDirection: "column" },
//   title: { fontSize: "24px", fontWeight: "700", textAlign: "center", marginBottom: "6px", color: "#222" },
//   subtitle: { fontSize: "14px", color: "#666", textAlign: "center", marginBottom: "25px" },
//   label: { fontSize: "14px", fontWeight: "500", color: "#333", marginBottom: "6px" },
//   input: { width: "92%", padding: "12px 14px", borderRadius: "8px", border: "1px solid #ccc", marginBottom: "16px", fontSize: "14px", outline: "none", transition: "0.3s" },
//   passwordWrapper: { position: "relative", marginBottom: "16px" },
//   togglePassword: { position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", fontSize: "12px", color: "#007bff", cursor: "pointer", fontWeight: "600" },
//   row: { display: "flex", justifyContent: "space-between", marginBottom: "16px", alignItems: "center" },
//   rememberText: { fontSize: "13px", color: "#666" },
//   loginBtn: { padding: "14px", background: "#0d6efd", color: "#fff", fontSize: "16px", fontWeight: "600", border: "none", borderRadius: "8px", cursor: "pointer", transition: "0.3s" },
//   loginBtns: { marginTop:10, padding: "14px", background: "#0d6efd", color: "#fff", fontSize: "16px", fontWeight: "600", border: "none", borderRadius: "8px", cursor: "pointer", transition: "0.3s" },
//   errorText: { color: "red", fontSize: "13px", marginBottom: "10px" },
// };

// export default Login;




//login code backend la changes kelet ata Approval lagnar 0,1 logic nahiye direct login hoill code update kr smjl ka 
import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import buildingImg from "../Assets/building.jpg";
import { LoginApi, GetMemberApi, GetUserlistApi } from "../APICall/APICall";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const { setUser } = useContext(UserContext); // ✅ UserContext
  const [email, setEmail] = useState("rani@gmail.com");
  const [password, setPassword] = useState("Rani@1234");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!email.trim() || !password.trim()) {
      setErrorMessage("Please enter both email and password.");
      return;
    }

    try {
      const response = await LoginApi({ email: email.trim(), pwd: password.trim() });
      console.log("Login API Response:", response);

      if (!response?.Data || response.Data.length === 0) {
        setErrorMessage("Incorrect email or password.");
        return;
      }

      let userObj = response.Data[0];

      // Normalize user
      let normalizedUser = {
        recno: userObj.entity_id,
        roleId: userObj.userrole_id,
        fullName: userObj.descn,
        email: userObj.email,
        mobile: userObj.mobile,
        password: password,
        societyId: userObj.society_id || null,
        memberId: 0,
        flatNumber: userObj.flatno || "",
        towerNumber: userObj.towerno || "",
        approved: userObj.approved ?? 0,
        active: userObj.active ?? 0,
      };

      // Get memberId if exists
      const memberResp = await GetMemberApi(normalizedUser.recno);
      if (memberResp?.Data?.length > 0) {
        const foundMember = memberResp.Data.find(m => m.entity_id === normalizedUser.recno);
        if (foundMember) {
          normalizedUser.memberId = foundMember.member_id;
          normalizedUser.societyId = foundMember.society_id;
        }
      }

      // ✅ Match entity_id in userlist to get correct society_id
      const userListResp = await GetUserlistApi({});
      if (userListResp?.Data?.length > 0) {
        const matchedEntity = userListResp.Data.find(u => u.entity_id === normalizedUser.recno);
        if (matchedEntity) {
          normalizedUser.societyId = matchedEntity.society_id;
          normalizedUser.roleId = matchedEntity.userrole_id;
          normalizedUser.userId = matchedEntity.user_id;
          console.log("✅ Matched User:", matchedEntity);
        } else {
          console.warn("⚠️ No matching entity found in userlist");
        }
      }

      // Save in UserContext
      await setUser(normalizedUser);

      // Remember me
      if (remember) localStorage.setItem("remember_login", "true");

      // Navigate
      if (normalizedUser.approved === 0) navigate("/approvalPending", { replace: true });
      else if (normalizedUser.approved === 1) navigate("/dashboard", { replace: true });
      else setErrorMessage("Unable to determine account status. Please contact support.");

    } catch (err) {
      console.error("Login Error:", err);
      setErrorMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <div style={{ ...styles.container, backgroundImage: `url(${buildingImg})` }}>
      <form style={styles.card} onSubmit={handleLogin}>
        <h2 style={styles.title}>Society Admin</h2>
        <p style={styles.subtitle}>Sign in to manage housing societies</p>

        {errorMessage && <p style={styles.errorText}>{errorMessage}</p>}

        <label style={styles.label}>Email / Agent ID</label>
        <input
          type="text"
          placeholder="Enter your email or agent ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />

        <label style={styles.label}>Password</label>
        <div style={styles.passwordWrapper}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ ...styles.input, marginBottom: 0 }}
            required
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            style={styles.togglePassword}
          >
            {showPassword ? "Hide" : "Show"}
          </span>
        </div>

        <div style={styles.row}>
          <label style={styles.rememberText}>
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              style={{ marginRight: 6 }}
            />
            Remember me
          </label>
        </div>

        <button type="submit" style={styles.loginBtn}>Log In</button>
        <button type="button" style={styles.loginBtns}>
          <Link to="/createaccount" style={{ color: "white", textDecoration: "none" }}>Create Account</Link>
        </button>
      </form>
    </div>
  );
};

// Styles same as before
const styles = {
  container: { height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundSize: "cover", backgroundPosition: "center", fontFamily: "Segoe UI, sans-serif" },
  card: { width: "400px", padding: "40px 30px", borderRadius: "16px", background: "rgba(255, 255, 255, 0.95)", boxShadow: "0 8px 30px rgba(0,0,0,0.1)", display: "flex", flexDirection: "column" },
  title: { fontSize: "24px", fontWeight: "700", textAlign: "center", marginBottom: "6px", color: "#222" },
  subtitle: { fontSize: "14px", color: "#666", textAlign: "center", marginBottom: "25px" },
  label: { fontSize: "14px", fontWeight: "500", color: "#333", marginBottom: "6px" },
  input: { width: "92%", padding: "12px 14px", borderRadius: "8px", border: "1px solid #ccc", marginBottom: "16px", fontSize: "14px", outline: "none", transition: "0.3s" },
  passwordWrapper: { position: "relative", marginBottom: "16px" },
  togglePassword: { position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", fontSize: "12px", color: "#007bff", cursor: "pointer", fontWeight: "600" },
  row: { display: "flex", justifyContent: "space-between", marginBottom: "16px", alignItems: "center" },
  rememberText: { fontSize: "13px", color: "#666" },
  loginBtn: { padding: "14px", background: "#0d6efd", color: "#fff", fontSize: "16px", fontWeight: "600", border: "none", borderRadius: "8px", cursor: "pointer", transition: "0.3s" },
  loginBtns: { marginTop:10, padding: "14px", background: "#0d6efd", color: "#fff", fontSize: "16px", fontWeight: "600", border: "none", borderRadius: "8px", cursor: "pointer", transition: "0.3s" },
  errorText: { color: "red", fontSize: "13px", marginBottom: "10px" },
};

export default Login;
