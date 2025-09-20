

import React, { useState } from "react";
import { RegisteredApi } from "../APICall/APICall";

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
    document: "",
    registrationcertificate: null,
    pancard: null,
    noc: null,
    photo: null,
    logo: "logo.png",
  });

  // handle input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  // submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
   
    const payload = {
      society_id: null,
      tenant_id: null,
      descn: formData.descn,
      address: formData.address,
      registration_number: formData.registration_number,
      year_built: formData.year_built || "2010",
      typeofsociety: formData.typeofsociety,
      state: formData.state,
      city: formData.city,
      pincode: Number(formData.pincode),
      document: formData.document?.name || "society_registration.pdf",
      registrationcertificate: formData.registrationcertificate || null,
      pancard: formData.pancard || null,
      noc: formData.noc || null,
      photo: formData.photo || null,
      logo: formData.logo || "logo.png",
      active: 1,
      date: null,
      time: null,
    };

    try {
      const res = await RegisteredApi(payload);
      alert("✅ Society Registered Successfully!");
      console.log("✅ Response:", res.data);
    } catch (err) {
      console.error("❌ API Error:", err);
      alert("❌ Failed to register society");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🏢 Society Registration Form</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        {/* Society Info */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>📋 Society Information</h3>

          <label style={styles.label}>Society Name</label>
          <input
            type="text"
            name="descn"
            value={formData.descn}
            onChange={handleChange}
            style={styles.input}
            placeholder="Enter Society Name"
            required
          />

          <label style={styles.label}>Registration Number</label>
          <input
            type="text"
            name="registration_number"
            value={formData.registration_number}
            onChange={handleChange}
            style={styles.input}
            placeholder="Enter Registration Number"
            required
          />

          <label style={styles.label}>Year Built</label>
          <input
            type="text"
            name="year_built"
            value={formData.year_built}
            onChange={handleChange}
            style={styles.input}
            placeholder="e.g. 2010"
          />

          <label style={styles.label}>Society Type</label>
          <select
            name="typeofsociety"
            value={formData.typeofsociety}
            onChange={handleChange}
            required
            style={styles.input}
          >
            <option value="">-- Select Society Type --</option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
          </select>
        </div>

        {/* Location */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>📍 Location Details</h3>

          <label style={styles.label}>Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            style={styles.textarea}
            placeholder="Enter Full Address"
            required
          />

          <div style={styles.row}>
            <div style={{ flex: 1 }}>
              <label style={styles.label}>City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </div>
            <div style={{ flex: 1 }}>
              <label style={styles.label}>State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </div>
            <div style={{ flex: 1 }}>
              <label style={styles.label}>Pin Code</label>
              <input
                type="number"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </div>
          </div>
        </div>

        {/* Documents */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>📂 Documents</h3>

          <label style={styles.label}>Main Document</label>
          <input type="file" name="document" onChange={handleChange} />

          <label style={styles.label}>Registration Certificate</label>
          <input type="file" name="registrationcertificate" onChange={handleChange} />

          <label style={styles.label}>PAN Card</label>
          <input type="file" name="pancard" onChange={handleChange} />

          <label style={styles.label}>NOC</label>
          <input type="file" name="noc" onChange={handleChange} />

          <label style={styles.label}>Upload Photo</label>
          <input type="file" name="photo" onChange={handleChange} />

          <label style={styles.label}>Society Logo</label>
          <input type="file" name="logo" onChange={handleChange} />

          <small style={{ color: "#777" }}>Allowed: PDF, JPG, PNG (Max 10MB)</small>
        </div>

        <button type="submit" style={styles.submitBtn}>
          ✅ Register Society
        </button>
      </form>
    </div>
  );
}

// Styles
const styles = {
  container: {
    maxWidth: "850px",
    margin: "40px auto",
    background: "#fff",
    padding: "35px",
    borderRadius: "12px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
  },
  title: {
    fontSize: "26px",
    fontWeight: "700",
    marginBottom: "30px",
    textAlign: "center",
    color: "#0d6efd",
  },
  form: { display: "flex", flexDirection: "column", gap: "30px" },
  section: {
    padding: "15px 20px",
    border: "1px solid #eee",
    borderRadius: "8px",
    background: "#fafafa",
  },
  sectionTitle: {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "15px",
    color: "#444",
    borderBottom: "2px solid #0d6efd",
    paddingBottom: "6px",
  },
  label: {
    display: "block",
    fontSize: "14px",
    fontWeight: "500",
    marginBottom: "6px",
    color: "#222",
  },
  input: {
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "14px",
    width: "96%",
    marginBottom: "12px",
    outline: "none",
  },
  textarea: {
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "14px",
    width: "96%",
    marginBottom: "12px",
    resize: "vertical",
    minHeight: "60px",
    outline: "none",
  },
  row: { display: "flex", gap: "20px", flexWrap: "wrap" },
  submitBtn: {
    padding: "14px",
    background: "linear-gradient(90deg, #0d6efd, #007bff)",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "600",
  },
};

export default RegisterSociety;
