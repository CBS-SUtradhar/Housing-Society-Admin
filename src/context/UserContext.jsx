// // // import React, { createContext, useState, useEffect } from "react";

// // // export const UserContext = createContext();

// // // export const UserProvider = ({ children }) => {
// // //   const [user, setUserState] = useState(null);
// // //   const [societyMap, setSocietyMap] = useState({});

// // //   // Fetch society mapping once
// // //   useEffect(() => {
// // //     const fetchSocieties = async () => {
// // //       try {
// // //         const res = await fetch("https://your-backend.com/api/societies");
// // //         const data = await res.json();
// // //         setSocietyMap(data);
// // //       } catch (err) {
// // //         console.error("Error fetching societies:", err);
// // //       }
// // //     };
// // //     fetchSocieties();
// // //   }, []);

// // //   // Normalize DB payload + enrich with helper fields
// // //   const enrichUser = (u) => {
// // //     if (!u) return null;

// // //     return {
// // //       ...u, // full DB payload (entity_id, userrole_id, descn, etc.)
// // //       towerNumber: u?.towerno ?? u?.towerNumber ?? "-",
// // //       flatNumber: u?.flatno ?? u?.flatNumber ?? "-",
// // //       societyName: societyMap[u?.tenantrecno] || u?.societyName || "-",
// // //       roleId: Number(u?.userrole_id ?? u?.roleId ?? 0), // safe fallback
// // //       memberId: Number(u?.memberId || u?.member_id || u?.recno || 0),
// // //     };
// // //   };

// // //   // Unified setUser: update state + persist to localStorage
// // //   const setUser = (newUser) => {
// // //     try {
// // //       const enrichedUser = enrichUser(newUser);
// // //       console.log("🔍 Saving user to localStorage:", enrichedUser);
// // //       setUserState(enrichedUser);
// // //       localStorage.setItem("user_details", JSON.stringify(enrichedUser));
// // //     } catch (err) {
// // //       console.error("Error setting user:", err);
// // //     }
// // //   };

// // //   // Load user from localStorage on app start
// // //   useEffect(() => {
// // //     const loadUser = () => {
// // //       try {
// // //         const storedUser = localStorage.getItem("user_details");
// // //         if (storedUser) {
// // //           const parsed = JSON.parse(storedUser);
// // //           const enrichedUser = enrichUser(parsed);
// // //           console.log("📥 Loaded user from localStorage:", enrichedUser);
// // //           setUserState(enrichedUser);
// // //         }
// // //       } catch (err) {
// // //         console.error("Error loading user from localStorage:", err);
// // //       }
// // //     };
// // //     loadUser();
// // //   }, [societyMap]);

// // //   return (
// // //     <UserContext.Provider value={{ user, setUser }}>
// // //       {children}
// // //     </UserContext.Provider>
// // //   );
// // // };


// // import React, { createContext, useState, useEffect } from "react";

// // export const UserContext = createContext();

// // export const UserProvider = ({ children }) => {
// //   const [user, setUserState] = useState(null);
// //   const [societyMap, setSocietyMap] = useState({});

// //   // 🔹 Fetch society mapping once
// //   useEffect(() => {
// //     const fetchSocieties = async () => {
// //       try {
// //         const res = await fetch("https://your-backend.com/api/societies");
// //         const data = await res.json();
// //         setSocietyMap(data);
// //       } catch (err) {
// //         console.error("❌ Error fetching societies:", err);
// //       }
// //     };
// //     fetchSocieties();
// //   }, []);

// //   // 🔹 Normalize DB payload
// //   const enrichUser = (u) => {
// //     if (!u) return null;
// //     return {
// //       ...u,
// //       towerNumber: u?.towerno ?? u?.towerNumber ?? "-",
// //       flatNumber: u?.flatno ?? u?.flatNumber ?? "-",
// //       societyName: societyMap[u?.tenantrecno] || u?.societyName || "-",
// //       roleId: Number(u?.userrole_id ?? u?.roleId ?? 0),
// //       memberId: Number(u?.memberId || u?.member_id || u?.recno || 0),
// //     };
// //   };

// //   // 🔹 Save + persist to localStorage
// //   const setUser = (newUser) => {
// //     try {
// //       const enrichedUser = enrichUser(newUser);
// //       setUserState(enrichedUser);
// //       localStorage.setItem("user_details", JSON.stringify(enrichedUser));
// //     } catch (err) {
// //       console.error("❌ Error setting user:", err);
// //     }
// //   };

// //   // 🔹 Load from localStorage
// //   useEffect(() => {
// //     try {
// //       const storedUser = localStorage.getItem("user_details");
// //       if (storedUser) {
// //         const parsed = JSON.parse(storedUser);
// //         setUserState(enrichUser(parsed));
// //       }
// //     } catch (err) {
// //       console.error("❌ Error loading user:", err);
// //     }
// //   }, [societyMap]);

// //   return (
// //     <UserContext.Provider value={{ user, setUser }}>
// //       {children}
// //     </UserContext.Provider>
// //   );
// // };



// // context/UserContext.js
// import React, { createContext, useState, useEffect } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import {
//   GetSocietyByIdApi,
//   GetBuildingApi,
//   GetWingApi,
//   GetPropertyApi, // ✅ new API for members
// } from "../APICall/APIService";

// export const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [user, setUserState] = useState(null);
//   const [society, setSociety] = useState(null);
//   const [buildings, setBuildings] = useState([]);
//   const [flats, setFlats] = useState([]);

//   // ✅ Save user + persist in AsyncStorage
//   const setUser = async (newUser) => {
//     try {
//       setUserState(newUser);
//       await AsyncStorage.setItem("user_details", JSON.stringify(newUser));

//       // Case 1: User is a MEMBER (has memberId → tied to flat)
//       if (newUser?.memberId) {
//         const propertyRes = await GetPropertyApi(newUser.memberId);
//         if (propertyRes?.Success && propertyRes.Data?.length > 0) {
//           const propertyData = propertyRes.Data;

//           // Save flat/wing/building/society from getproperty
//           setFlats(propertyData); 
//           await AsyncStorage.setItem("property_details", JSON.stringify(propertyData));

//           // You can also extract society/building info from propertyData if needed
//         }
//       } else {

//         // Case 2: User is NOT a member (Security/Admin/Visitor)
//         const societyId = newUser?.societyId || newUser?.society_id;
//         if (societyId) {
//           // ✅ Fetch society
//           const res = await GetSocietyByIdApi(societyId);
//           if (res?.Success) {
//             const societyData = res?.Data?.[0] || null;
//             setSociety(societyData);
//             if (societyData) {
//               await AsyncStorage.setItem("society_details", JSON.stringify(societyData));
//             }
//           }

//           // ✅ Fetch buildings
//           const buildingRes = await GetBuildingApi(societyId);
//           if (buildingRes?.Success) {
//             setBuildings(buildingRes?.Data || []);
//             await AsyncStorage.setItem("building_details", JSON.stringify(buildingRes.Data));
//           }

//           // ✅ Fetch wings/flats if user has buildingId
//           if (newUser?.buildingId) {
//             const flatRes = await GetWingApi(newUser.buildingId);
//             if (flatRes?.Success) {
//               setFlats(flatRes?.Data || []);
//               await AsyncStorage.setItem("flat_details", JSON.stringify(flatRes.Data));
//             }
//           }
//         }
//       }
//     } catch (err) {
//       console.error("❌ Error saving user:", err);
//     }
//   };

//   // ✅ Load user + society + building + flats from AsyncStorage on app start
//   useEffect(() => {
//     const loadData = async () => {
//       try {
//         const storedUser = await AsyncStorage.getItem("user_details");
//         const storedSociety = await AsyncStorage.getItem("society_details");
//         const storedBuildings = await AsyncStorage.getItem("building_details");
//         const storedFlats = await AsyncStorage.getItem("flat_details");
//         const storedProperty = await AsyncStorage.getItem("property_details");

//         if (storedUser) setUserState(JSON.parse(storedUser));
//         if (storedSociety) setSociety(JSON.parse(storedSociety));
//         if (storedBuildings) setBuildings(JSON.parse(storedBuildings));
//         if (storedFlats) setFlats(JSON.parse(storedFlats));
//         if (storedProperty) setFlats(JSON.parse(storedProperty)); // overwrite with property if member
//       } catch (err) {
//         console.error("❌ Error loading storage:", err);
//       }
//     };
//     loadData();
//   }, []);

//   return (
//     <UserContext.Provider
//       value={{
//         user,
//         setUser,
//         society,
//         setSociety,
//         buildings,
//         setBuildings,
//         flats,
//         setFlats,
//       }}
//     >
//       {children}
//     </UserContext.Provider>
//   );
// };


import React, { createContext, useState, useEffect } from "react";
import {
  GetSocietyByIdApi,
  GetBuildingApi,
  GetWingApi,
  GetPropertyApi,
} from "../APICall/APIService";

// Create context
export const UserContext = createContext();

// localStorage wrapper
const storage = {
  setItem: (key, value) => localStorage.setItem(key, value),
  getItem: (key) => localStorage.getItem(key),
  removeItem: (key) => localStorage.removeItem(key),
};

// Provider component
export const UserProvider = ({ children }) => {
  const [user, setUserState] = useState(null);
  const [society, setSociety] = useState(null);
  const [buildings, setBuildings] = useState([]);
  const [flats, setFlats] = useState([]);

  // Save user + related data
  const setUser = async (newUser) => {
    try {
      setUserState(newUser);
      storage.setItem("user_details", JSON.stringify(newUser));
      console.log("✅ Logged-in User Saved:", newUser);

      // Member case
      if (newUser?.memberId) {
        const propertyRes = await GetPropertyApi(newUser.memberId);
        if (propertyRes?.Success && propertyRes.Data?.length > 0) {
          setFlats(propertyRes.Data);
          storage.setItem("property_details", JSON.stringify(propertyRes.Data));
        }
      } else {
        // Admin / Security
        const societyId = newUser?.societyId || newUser?.society_id;
        if (societyId) {
          // Fetch society
          const societyRes = await GetSocietyByIdApi(societyId);
          if (societyRes?.Success) {
            const societyData = societyRes.Data?.[0] || null;
            setSociety(societyData);
            if (societyData) storage.setItem("society_details", JSON.stringify(societyData));
          }

          // Fetch buildings
          const buildingRes = await GetBuildingApi(societyId);
          if (buildingRes?.Success) {
            setBuildings(buildingRes.Data || []);
            storage.setItem("building_details", JSON.stringify(buildingRes.Data));
          }

          // Fetch flats if buildingId exists
          if (newUser?.buildingId) {
            const flatRes = await GetWingApi(newUser.buildingId);
            if (flatRes?.Success) {
              setFlats(flatRes.Data || []);
              storage.setItem("flat_details", JSON.stringify(flatRes.Data));
            }
          }
        }
      }
    } catch (err) {
      console.error("❌ Error saving user:", err);
    }
  };

  // Load user data from localStorage
  useEffect(() => {
    try {
      const storedUser = storage.getItem("user_details");
      const storedSociety = storage.getItem("society_details");
      const storedBuildings = storage.getItem("building_details");
      const storedFlats = storage.getItem("flat_details");
      const storedProperty = storage.getItem("property_details");

      if (storedUser) setUserState(JSON.parse(storedUser));
      if (storedSociety) setSociety(JSON.parse(storedSociety));
      if (storedBuildings) setBuildings(JSON.parse(storedBuildings));
      if (storedFlats) setFlats(JSON.parse(storedFlats));
      if (storedProperty) setFlats(JSON.parse(storedProperty));
    } catch (err) {
      console.error("❌ Error loading storage:", err);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        society,
        setSociety,
        buildings,
        setBuildings,
        flats,
        setFlats,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
