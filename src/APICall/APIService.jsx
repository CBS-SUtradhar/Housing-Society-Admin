// import axios from 'axios';

// export const BASEURL = 'https://housingsociety.sutradhar.tech/dev/backend/api/v1/';


// // Extract year from date string safely
// const extractYear = (dateStr) => {
//   if (!dateStr) return '';
//   try {
//     if (dateStr.includes('-')) {
//       const y = dateStr.split('-')[0];
//       return /^\d{4}$/.test(y) ? y : '';
//     }
//     if (dateStr.includes('/')) {
//       const parts = dateStr.split('/');
//       const y = parts[2];
//       return /^\d{4}$/.test(y) ? y : '';
//     }
//     const d = new Date(dateStr);
//     if (!isNaN(d.getTime())) return String(d.getFullYear());
//     return '';
//   } catch {
//     return '';
//   }
// };

// // --------------------- Society APIs --------------------- //

// // Register Society
// export const AppSocietyApi = async (form) => {
//   try {
//     const payload = {
//       descn: form.societyName?.trim() || '',
//       address: form.address?.trim() || '',
//       registration_number: form.registrationNumber?.trim() || '',
//       year_built: extractYear(form.establishmentDate) || '',
//       typeofsociety: form.typeOfSociety?.trim() || 'Residential',
//       state: form.state?.trim() || '',
//       city: form.city?.trim() || '',
//       pincode: form.pincode ? Number(form.pincode) : null,
//       document: form.document ?? null,
//       registrationcertificate: form.registrationcertificate ?? null,
//       pancard: form.pancard ?? null,
//       noc: form.noc ?? null,
//       photo: form.photo ?? null,
//       logo: form.logo ?? null,
//       active: 1,
//     };

//     const missing = [];
//     if (!payload.descn) missing.push('Society Name');
//     if (!payload.registration_number) missing.push('Registration Number');
//     if (!payload.address) missing.push('Address');

//     if (missing.length) {
//       const e = new Error(`Please fill: ${missing.join(', ')}.`);
//       e.userFriendly = true;
//       throw e;
//     }

//     const response = await axios.post(`${BASEURL}registersociety/`, payload);
//     console.log('Register Society API response:', response.data);

//     return {
//       ...response.data,
//       societyId: response.data.Data?.[0]?.society_id ?? null
//     };
//   } catch (error) {
//     if (error.response?.data) {
//       const data = error.response.data;
//       const message =
//         data.Message ||
//         data.message ||
//         data.detail ||
//         (typeof data === 'string' ? data : 'Failed to register society.');
//       if (/already exists/i.test(message)) {
//         const e = new Error('Registration number already exists. Please use a unique number.');
//         e.code = 'DUPLICATE_REGNO';
//         e.data = data;
//         throw e;
//       }
//       const e = new Error(message);
//       e.data = data;
//       throw e;
//     }
//     throw error;
//   }
// };

// // Update Society
// export const UpdateSocietyApi = async (form) => {
//   try {
//     const payload = {
//       society_id: form.societyId || form.society_id || null,
//       descn: form.societyName?.trim() || '',
//       address: form.address?.trim() || '',
//       registration_number: form.registrationNumber?.trim() || '',
//       year_built: extractYear(form.establishmentDate) || '',
//       typeofsociety: form.typeOfSociety?.trim() || 'Residential',
//       state: form.state?.trim() || '',
//       city: form.city?.trim() || '',
//       pincode: form.pincode ? Number(form.pincode) : null,
//       document: form.document ?? null,
//       registrationcertificate: form.registrationcertificate ?? null,
//       pancard: form.pancard ?? null,
//       noc: form.noc ?? null,
//       photo: form.photo ?? null,
//       logo: form.logo ?? null,
//       active: form.active ?? 1,
//     };

//     if (!payload.society_id) {
//       const e = new Error('Missing society_id for update.');
//       e.userFriendly = true;
//       throw e;
//     }

//     const response = await axios.post(`${BASEURL}updatesociety/`, payload);

//     return {
//       ...response.data,
//       societyId: response.data.Data?.[0]?.society_id ?? response.data.society_id ?? payload.society_id,
//     };
//   } catch (error) {
//     if (error.response?.data) {
//       const data = error.response.data;
//       const message =
//         data.Message ||
//         data.message ||
//         data.detail ||
//         (typeof data === 'string' ? data : 'Failed to update society.');
//       const e = new Error(message);
//       e.data = data;
//       throw e;
//     }
//     throw error;
//   }
// };


// // Get all societies
// export const GetSocietiesApi = async () => {
//   try {
//     const response = await axios.post(`${BASEURL}getsocieties/`);
//     // response.data.Data or response.data.ObjectData depending on backend
//     return response.data;
//   } catch (error) {
//     console.log("❌ GetSocietiesApi error:", error.response?.data || error.message);
//     throw error;
//   }
// };

// // --------------------- GetSocietyByIDApi APIs --------------------- //
// export const GetSocietyByIdApi = async (societyId) => {
//   try {
//     const response = await axios.post(`${BASEURL}getsocieties/`, {
//       society_id: societyId,
//     });
//     return response.data; // { Success: true, Data: [ { ... } ] }
//   } catch (error) {
//     console.error("❌ Error fetching society:", error.response?.data || error.message);
//     return null;
//   }
// };


// // --------------------- Building APIs --------------------- //

// export const AddBuildingApi = async ({ societyId, buildingName }) => {
//   try {
//     const payload = { society_id: societyId, building_name: buildingName };
//     const response = await axios.post(`${BASEURL}addbuilding/`, payload);

//     console.log("📩 AddBuildingApi raw response:", response.data); 

//     // Safe extract buildingId
//     const buildingId =
//       response.data.building_id ??
//       response.data.Data?.[0]?.building_id ??
//       null;

//     return { ...response.data, buildingId };
//   } catch (error) {
//     console.log("❌ AddBuildingApi error:", error.response?.data || error.message);
//     throw error;
//   }
// };


// // Get Buildings
// export const GetBuildingApi = async (societyId) => {
//   try {
//     const response = await axios.post(`${BASEURL}getbuildings/?society_id=${societyId}`);
//     return response.data.Data ?? [];
//   } catch (error) {
//     console.log("GetBuildingApi error:", error.response?.data || error.message);
//     throw error;
//   }
// };

// // --------------------- Wing APIs --------------------- //

// export const AddWingApi = async ({
//   buildingId,
//   societyId,
//   wingName,
//   flatPerFloor,
//   flatPattern,
//   flatNumbers,
// }) => {
//   try {
//     if (!buildingId || !societyId) {
//       throw new Error("Missing buildingId or societyId for wing registration");
//     }

//     // 🟢 Ensure always an array
//     const cleanFlatNumbers = Array.isArray(flatNumbers)
//       ? flatNumbers
//       : (typeof flatNumbers === "string"
//           ? flatNumbers.split(",").map(f => f.trim())
//           : []);

//     const payload = {
//       building_id: buildingId,
//       society_id: societyId,
//       wingname: wingName,
//       flat_per_floor: flatPerFloor ?? 0,
//       flat_pattern: flatPattern ?? "",
//       flat_numbers: flatNumbers ?? [],
//       active: 1,
//     };

//     console.log("📤 AddWingApi Payload:", payload);

//     const response = await axios.post(`${BASEURL}addwing/`, payload);
//     console.log("📥 AddWingApi Response:", response.data);

//     return {
//       ...response.data,
//       wingId: response.data?.wing_id ?? response.data?.Data?.[0]?.wing_id ?? null,
//     };
//   } catch (error) {
//     console.log("❌ AddWingApi Error:", error.response?.data || error.message);
//     throw error;
//   }
// };

// // Get Wings
// export const GetWingApi = async (buildingId) => {
//   try {
//     const response = await axios.post(`${BASEURL}getwings/?building_id=${buildingId}`);
//     return response.data.Data ?? [];
//   } catch (error) {
//     console.log("GetWingApi error:", error.response?.data || error.message);
//     throw error;
//   }
// };

// //Get Properties
// export const GetPropertyApi = async (member_id) => {
//   try{
//     const response = await axios.post(`${BASEURL}getproperty/`, {member_id});
//     return response.data.Data ?? [];
//   } catch (error) {
//     console.log("GetPropertyApi error:", error.response?.data || error.message);
//     throw error;
//   }
// }


// // 1️⃣ Create App Key
// export const CreateAppKeyApi = async (payload) => {
//   try {
//     const response = await axios.post(`${BASEURL}createkeycode/`, payload);
//     return response.data;
//   } catch (error) {
//     console.error(
//       "CreateAppKeyApi Error:",
//       error.response?.status,
//       error.response?.data || error.message
//     );
//     throw error;
//   }
// };

// export const getbykeycodeApi = async ({ keycode }) => {
//   try {
//     const payload = { keycode };
//     const response = await axios.post(`${BASEURL}getbykeycode/`, payload);
//     return response.data; // Success + Message[]
//   } catch (error) {
//     console.error(
//       "getbykeycodeApi Error:",
//       error.response?.status,
//       error.response?.data || error.message
//     );
//     // Safe fallback so app does not crash
//     return { Success: false, Message: [] };
//   }
// };

// // Verify App Key
// export const verifyKeyCodeApi = async ({ keycode, mobileno }) => {
//   try {
//     const payload = { keycode, mobileno }; // backend expects 'mobileno'
//     const response = await axios.post(`${BASEURL}verifykeycode/`, payload);
//     return response.data; // Success + Message[]
//   } catch (error) {
//     console.error(
//       "verifyKeyCodeApi error:",
//       error.response?.status,
//       error.response?.data || error.message
//     );
//     return { Success: false, Message: [] };
//   }
// };




// import axios from 'axios';

// export const BASEURL = 'https://housingsociety.sutradhar.tech/dev/backend/api/v1/';


// // Extract year from date string safely
// const extractYear = (dateStr) => {
//   if (!dateStr) return '';
//   try {
//     if (dateStr.includes('-')) {
//       const y = dateStr.split('-')[0];
//       return /^\d{4}$/.test(y) ? y : '';
//     }
//     if (dateStr.includes('/')) {
//       const parts = dateStr.split('/');
//       const y = parts[2];
//       return /^\d{4}$/.test(y) ? y : '';
//     }
//     const d = new Date(dateStr);
//     if (!isNaN(d.getTime())) return String(d.getFullYear());
//     return '';
//   } catch {
//     return '';
//   }
// };

// // --------------------- Society APIs --------------------- //

// // Register Society
// export const AppSocietyApi = async (form) => {
//   try {
//     const payload = {
//       descn: form.societyName?.trim() || '',
//       address: form.address?.trim() || '',
//       registration_number: form.registrationNumber?.trim() || '',
//       year_built: extractYear(form.establishmentDate) || '',
//       typeofsociety: form.typeOfSociety?.trim() || 'Residential',
//       state: form.state?.trim() || '',
//       city: form.city?.trim() || '',
//       pincode: form.pincode ? Number(form.pincode) : null,
//       document: form.document ?? null,
//       registrationcertificate: form.registrationcertificate ?? null,
//       pancard: form.pancard ?? null,
//       noc: form.noc ?? null,
//       photo: form.photo ?? null,
//       logo: form.logo ?? null,
//       active: 1,
//     };

//     const missing = [];
//     if (!payload.descn) missing.push('Society Name');
//     if (!payload.registration_number) missing.push('Registration Number');
//     if (!payload.address) missing.push('Address');

//     if (missing.length) {
//       const e = new Error(`Please fill: ${missing.join(', ')}.`);
//       e.userFriendly = true;
//       throw e;
//     }

//     const response = await axios.post(`${BASEURL}registersociety/`, payload);
//     console.log('Register Society API response:', response.data);

//     return {
//       ...response.data,
//       societyId: response.data.Data?.[0]?.society_id ?? null
//     };
//   } catch (error) {
//     if (error.response?.data) {
//       const data = error.response.data;
//       const message =
//         data.Message ||
//         data.message ||
//         data.detail ||
//         (typeof data === 'string' ? data : 'Failed to register society.');
//       if (/already exists/i.test(message)) {
//         const e = new Error('Registration number already exists. Please use a unique number.');
//         e.code = 'DUPLICATE_REGNO';
//         e.data = data;
//         throw e;
//       }
//       const e = new Error(message);
//       e.data = data;
//       throw e;
//     }
//     throw error;
//   }
// };

// // Update Society
// export const UpdateSocietyApi = async (form) => {
//   try {
//     const payload = {
//       society_id: form.societyId || form.society_id || null,
//       descn: form.societyName?.trim() || '',
//       address: form.address?.trim() || '',
//       registration_number: form.registrationNumber?.trim() || '',
//       year_built: extractYear(form.establishmentDate) || '',
//       typeofsociety: form.typeOfSociety?.trim() || 'Residential',
//       state: form.state?.trim() || '',
//       city: form.city?.trim() || '',
//       pincode: form.pincode ? Number(form.pincode) : null,
//       document: form.document ?? null,
//       registrationcertificate: form.registrationcertificate ?? null,
//       pancard: form.pancard ?? null,
//       noc: form.noc ?? null,
//       photo: form.photo ?? null,
//       logo: form.logo ?? null,
//       active: form.active ?? 1,
//     };

//     if (!payload.society_id) {
//       const e = new Error('Missing society_id for update.');
//       e.userFriendly = true;
//       throw e;
//     }

//     const response = await axios.post(`${BASEURL}updatesociety/`, payload);

//     return {
//       ...response.data,
//       societyId: response.data.Data?.[0]?.society_id ?? response.data.society_id ?? payload.society_id,
//     };
//   } catch (error) {
//     if (error.response?.data) {
//       const data = error.response.data;
//       const message =
//         data.Message ||
//         data.message ||
//         data.detail ||
//         (typeof data === 'string' ? data : 'Failed to update society.');
//       const e = new Error(message);
//       e.data = data;
//       throw e;
//     }
//     throw error;
//   }
// };


// // Get all societies
// export const GetSocietiesApi = async () => {
//   try {
//     const response = await axios.post(`${BASEURL}getsocieties/`);
//     // response.data.Data or response.data.ObjectData depending on backend
//     return response.data;
//   } catch (error) {
//     console.log("❌ GetSocietiesApi error:", error.response?.data || error.message);
//     throw error;
//   }
// };

// // --------------------- GetSocietyByIDApi APIs --------------------- //
// export const GetSocietyByIdApi = async (societyId) => {
//   try {
//     const response = await axios.post(`${BASEURL}getsocieties/`, {
//       society_id: societyId,
//     });
//     return response.data; // { Success: true, Data: [ { ... } ] }
//   } catch (error) {
//     console.error("❌ Error fetching society:", error.response?.data || error.message);
//     return null;
//   }
// };


// // --------------------- Building APIs --------------------- //

// export const AddBuildingApi = async ({ societyId, buildingName }) => {
//   try {
//     const payload = { society_id: societyId, building_name: buildingName };
//     const response = await axios.post(`${BASEURL}addbuilding/`, payload);

//     console.log("📩 AddBuildingApi raw response:", response.data);

//     // Safe extract buildingId
//     const buildingId =
//       response.data.building_id ??
//       response.data.Data?.[0]?.building_id ??
//       null;

//     return { ...response.data, buildingId };
//   } catch (error) {
//     console.log("❌ AddBuildingApi error:", error.response?.data || error.message);
//     throw error;
//   }
// };


// // Get Buildings
// export const GetBuildingApi = async (societyId) => {
//   try {
//     const response = await axios.post(`${BASEURL}getbuildings/?society_id=${societyId}`);
//     return response.data.Data ?? [];
//   } catch (error) {
//     console.log("GetBuildingApi error:", error.response?.data || error.message);
//     throw error;
//   }
// };

// // --------------------- Wing APIs --------------------- //

// export const AddWingApi = async ({
//   buildingId,
//   societyId,
//   wingName,
//   flatPerFloor,
//   flatPattern,
//   flatNumbers,
// }) => {
//   try {
//     if (!buildingId || !societyId) {
//       throw new Error("Missing buildingId or societyId for wing registration");
//     }

//     // 🟢 Ensure always an array
//     const cleanFlatNumbers = Array.isArray(flatNumbers)
//       ? flatNumbers
//       : (typeof flatNumbers === "string"
//           ? flatNumbers.split(",").map(f => f.trim())
//           : []);

//     const payload = {
//       building_id: buildingId,
//       society_id: societyId,
//       wingname: wingName,
//       flat_per_floor: flatPerFloor ?? 0,
//       flat_pattern: flatPattern ?? "",
//       flat_numbers: flatNumbers ?? [],
//       active: 1,
//     };

//     console.log("📤 AddWingApi Payload:", payload);

//     const response = await axios.post(`${BASEURL}addwing/`, payload);
//     console.log("📥 AddWingApi Response:", response.data);

//     return {
//       ...response.data,
//       wingId: response.data?.wing_id ?? response.data?.Data?.[0]?.wing_id ?? null,
//     };
//   } catch (error) {
//     console.log("❌ AddWingApi Error:", error.response?.data || error.message);
//     throw error;
//   }
// };

// // Get Wings
// export const GetWingApi = async (buildingId) => {
//   try {
//     const response = await axios.post(`${BASEURL}getwings/?building_id=${buildingId}`);
//     return response.data.Data ?? [];
//   } catch (error) {
//     console.log("GetWingApi error:", error.response?.data || error.message);
//     throw error;
//   }
// };

// //Get Properties
// export const GetPropertyApi = async (member_id) => {
//   try{
//     const response = await axios.post(`${BASEURL}getproperty/`, {member_id});
//     return response.data.Data ?? [];
//   } catch (error) {
//     console.log("GetPropertyApi error:", error.response?.data || error.message);
//     throw error;
//   }
// }


// // 1️⃣ Create App Key
// export const CreateAppKeyApi = async (payload) => {
//   try {
//     const response = await axios.post(`${BASEURL}createappkey/`, payload);
//     return response.data;
//   } catch (error) {
//     console.error(
//       "CreateAppKeyApi Error:",
//       error.response?.status,
//       error.response?.data || error.message
//     );
//     throw error;
//   }
// };

// export const GetEntityByAppKeyApi = async ({ keycode }) => {
//   try {
//     const payload = { keycode };
//     const response = await axios.post(`${BASEURL}getentitybyappkey/`, payload);
//     return response.data; // Success + Message[]
//   } catch (error) {
//     console.error(
//       "getbykeycodeApi Error:",
//       error.response?.status,
//       error.response?.data || error.message
//     );
//     // Safe fallback so app does not crash
//     return { Success: false, Message: [] };
//   }
// };

// // Verify App Key
// export const verifyKeyCodeApi = async ({ keycode, mobile }) => {
//   try {
//     const payload = { keycode, mobile }; // backend expects 'mobileno'
//     const response = await axios.post(`${BASEURL}verifyappcode/`, payload);
//     return response.data; // Success + Message[]
//   } catch (error) {
//     console.error(
//       "verifyKeyCodeApi error:",
//       error.response?.status,
//       error.response?.data || error.message
//     );
//     return { Success: false, Message: [] };
//   }
// };
//  // Get Common Master by Method (Generic)
// export const getCommonMasterApi = async (methodName) => {
//   try {
//     const response = await axios.post(`${BASEURL}getcommonmasterbymethod/`, {
//       method: methodName
//     });
//     return response.data; // { Success: true, Data: [...] }
//   } catch (error) {
//     console.error("getCommonMasterApi error:", error.response?.data || error.message);
//     return { Success: false, Data: [] };
//   }
// };

// // Old aliases (optional - so existing code won't break)
// export const getUserTypesApi = () => getCommonMasterApi("UserRole");
// export const getGenderApi = () => getCommonMasterApi("Gender");


// // -------------------- --------------------- //


import axios from 'axios';

export const BASEURL = 'https://housingsociety.sutradhar.tech/dev/backend/api/v1/';


// Extract year from date string safely
const extractYear = (dateStr) => {
  if (!dateStr) return '';
  try {
    if (dateStr.includes('-')) {
      const y = dateStr.split('-')[0];
      return /^\d{4}$/.test(y) ? y : '';
    }
    if (dateStr.includes('/')) {
      const parts = dateStr.split('/');
      const y = parts[2];
      return /^\d{4}$/.test(y) ? y : '';
    }
    const d = new Date(dateStr);
    if (!isNaN(d.getTime())) return String(d.getFullYear());
    return '';
  } catch {
    return '';
  }
};

// --------------------- Society APIs --------------------- //

// Register Society
export const AppSocietyApi = async (form) => {
  try {
    const payload = {
      descn: form.societyName?.trim() || '',
      address: form.address?.trim() || '',
      registration_number: form.registrationNumber?.trim() || '',
      year_built: extractYear(form.establishmentDate) || '',
      typeofsociety: form.typeOfSociety?.trim() || 'Residential',
      state: form.state?.trim() || '',
      city: form.city?.trim() || '',
      pincode: form.pincode ? Number(form.pincode) : null,
      document: form.document ?? null,
      registrationcertificate: form.registrationcertificate ?? null,
      pancard: form.pancard ?? null,
      noc: form.noc ?? null,
      photo: form.photo ?? null,
      logo: form.logo ?? null,
      active: 1,
    };

    const missing = [];
    if (!payload.descn) missing.push('Society Name');
    if (!payload.registration_number) missing.push('Registration Number');
    if (!payload.address) missing.push('Address');

    if (missing.length) {
      const e = new Error(`Please fill: ${missing.join(', ')}.`);
      e.userFriendly = true;
      throw e;
    }

    const response = await axios.post(`${BASEURL}registersociety/`, payload);
    console.log('Register Society API response:', response.data);

    return {
      ...response.data,
      societyId: response.data.Data?.[0]?.society_id ?? null
    };
  } catch (error) {
    if (error.response?.data) {
      const data = error.response.data;
      const message =
        data.Message ||
        data.message ||
        data.detail ||
        (typeof data === 'string' ? data : 'Failed to register society.');
      if (/already exists/i.test(message)) {
        const e = new Error('Registration number already exists. Please use a unique number.');
        e.code = 'DUPLICATE_REGNO';
        e.data = data;
        throw e;
      }
      const e = new Error(message);
      e.data = data;
      throw e;
    }
    throw error;
  }
};

// Update Society
export const UpdateSocietyApi = async (form) => {
  try {
    const payload = {
      society_id: form.societyId || form.society_id || null,
      descn: form.societyName?.trim() || '',
      address: form.address?.trim() || '',
      registration_number: form.registrationNumber?.trim() || '',
      year_built: extractYear(form.establishmentDate) || '',
      typeofsociety: form.typeOfSociety?.trim() || 'Residential',
      state: form.state?.trim() || '',
      city: form.city?.trim() || '',
      pincode: form.pincode ? Number(form.pincode) : null,
      document: form.document ?? null,
      registrationcertificate: form.registrationcertificate ?? null,
      pancard: form.pancard ?? null,
      noc: form.noc ?? null,
      photo: form.photo ?? null,
      logo: form.logo ?? null,
      active: form.active ?? 1,
    };

    if (!payload.society_id) {
      const e = new Error('Missing society_id for update.');
      e.userFriendly = true;
      throw e;
    }

    const response = await axios.post(`${BASEURL}updatesociety/`, payload);

    return {
      ...response.data,
      societyId: response.data.Data?.[0]?.society_id ?? response.data.society_id ?? payload.society_id,
    };
  } catch (error) {
    if (error.response?.data) {
      const data = error.response.data;
      const message =
        data.Message ||
        data.message ||
        data.detail ||
        (typeof data === 'string' ? data : 'Failed to update society.');
      const e = new Error(message);
      e.data = data;
      throw e;
    }
    throw error;
  }
};


// Get all societies
export const GetSocietiesApi = async () => {
  try {
    const response = await axios.post(`${BASEURL}getsocieties/`);
    // response.data.Data or response.data.ObjectData depending on backend
    return response.data;
  } catch (error) {
    console.log("❌ GetSocietiesApi error:", error.response?.data || error.message);
    throw error;
  }
};

// --------------------- GetSocietyByIDApi APIs --------------------- //
export const GetSocietyByIdApi = async (societyId) => {
  try {
    const response = await axios.post(`${BASEURL}getsocieties/`, {
      society_id: societyId,
    });
    return response.data; // { Success: true, Data: [ { ... } ] }
  } catch (error) {
    console.error("❌ Error fetching society:", error.response?.data || error.message);
    return null;
  }
};


// --------------------- Building APIs --------------------- //

export const AddBuildingApi = async ({ societyId, buildingName }) => {
  try {
    const payload = { society_id: societyId, building_name: buildingName };
    const response = await axios.post(`${BASEURL}addbuilding/`, payload);

    console.log("📩 AddBuildingApi raw response:", response.data);

    // Safe extract buildingId
    const buildingId =
      response.data.building_id ??
      response.data.Data?.[0]?.building_id ??
      null;

    return { ...response.data, buildingId };
  } catch (error) {
    console.log("❌ AddBuildingApi error:", error.response?.data || error.message);
    throw error;
  }
};


// Get Buildings
export const GetBuildingApi = async (societyId) => {
  try {
    const response = await axios.post(`${BASEURL}getbuildings/?society_id=${societyId}`);
    return response.data.Data ?? [];
  } catch (error) {
    console.log("GetBuildingApi error:", error.response?.data || error.message);
    throw error;
  }
};

export const GetBuildingApii = async (payload) => {
  return fetch("/api/getbuilding", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  }).then(res => res.json());
};


// --------------------- Wing APIs --------------------- //

export const AddWingApi = async ({
  buildingId,
  societyId,
  wingName,
  flatPerFloor,
  flatPattern,
  flatNumbers,
}) => {
  try {
    if (!buildingId || !societyId) {
      throw new Error("Missing buildingId or societyId for wing registration");
    }

    // 🟢 Ensure always an array
    const cleanFlatNumbers = Array.isArray(flatNumbers)
      ? flatNumbers
      : (typeof flatNumbers === "string"
          ? flatNumbers.split(",").map(f => f.trim())
          : []);

    const payload = {
      building_id: buildingId,
      society_id: societyId,
      wingname: wingName,
      flat_per_floor: flatPerFloor ?? 0,
      flat_pattern: flatPattern ?? "",
      flat_numbers: flatNumbers ?? [],
      active: 1,
    };

    console.log("📤 AddWingApi Payload:", payload);

    const response = await axios.post(`${BASEURL}addwing/`, payload);
    console.log("📥 AddWingApi Response:", response.data);

    return {
      ...response.data,
      wingId: response.data?.wing_id ?? response.data?.Data?.[0]?.wing_id ?? null,
    };
  } catch (error) {
    console.log("❌ AddWingApi Error:", error.response?.data || error.message);
    throw error;
  }
};

// Get Wings
export const GetWingApi = async (buildingId) => {
  try {
    const response = await axios.post(`${BASEURL}getwings/?building_id=${buildingId}`);
    return response.data.Data ?? [];
  } catch (error) {
    console.log("GetWingApi error:", error.response?.data || error.message);
    throw error;
  }
};

//Get Properties
export const GetPropertyApi = async (member_id) => {
  try{
    const response = await axios.post(`${BASEURL}getproperty/`, {member_id});
    return response.data.Data ?? [];
  } catch (error) {
    console.log("GetPropertyApi error:", error.response?.data || error.message);
    throw error;
  }
}


// 1️⃣ Create App Key
export const CreateAppKeyApi = async (payload) => {
  try {
    const response = await axios.post(`${BASEURL}createappkey/`, payload);
    return response.data;
  } catch (error) {
    console.error(
      "CreateAppKeyApi Error:",
      error.response?.status,
      error.response?.data || error.message
    );
    throw error;
  }
};

export const GetEntityByAppKeyApi = async ({ keycode }) => {
  try {
    const payload = { keycode };
    const response = await axios.post(`${BASEURL}getentitybyappkey/`, payload);
    return response.data; // Success + Message[]
  } catch (error) {
    console.error(
      "getbykeycodeApi Error:",
      error.response?.status,
      error.response?.data || error.message
    );
    // Safe fallback so app does not crash
    return { Success: false, Message: [] };
  }
};

// Verify App Key
export const verifyKeyCodeApi = async ({ keycode, mobile }) => {
  try {
    const payload = { keycode, mobile }; // backend expects 'mobileno'
    const response = await axios.post(`${BASEURL}verifyappcode/`, payload);
    return response.data; // Success + Message[]
  } catch (error) {
    console.error(
      "verifyKeyCodeApi error:",
      error.response?.status,
      error.response?.data || error.message
    );
    return { Success: false, Message: [] };
  }
};
 // Get Common Master by Method (Generic)
export const getCommonMasterApi = async (methodName) => {
  try {
    const response = await axios.post(`${BASEURL}getcommonmasterbymethod/`, {
      method: methodName, // correct payload
    });
    return response.data; // { Success: true, Data: [...] }
  } catch (error) {
    console.error(
      "getCommonMasterApi error:",
      error.response?.data || error.message
    );
    return { Success: false, Data: [] };
  }
};

// Optional old alias
export const getUserTypesApi = () => getCommonMasterApi("UserRole");
export const getGenderApi = () => getCommonMasterApi("Gender");


// -------------------- --------------------- //
