// // // src/components/Card.js
// // import React from "react";

// // const Card = ({ title, value, subtitle, color }) => {
// //   return (
// //     <div style={{ border: `1px solid ${color}`, borderRadius: '10px', padding: '40px',width:'70px', flex: 1, margin: '10px', background: '#fff' }}>
// //       <h4>{title}</h4>
// //       <h2>{value}</h2>
// //       <p style={{ color: color }}>{subtitle}</p>
// //     </div>
// //   );
// // };

// // export default Card;


// // src/components/Card.js
// import React from "react";

// const Card = ({ title, value, subtitle, color }) => {
//   return (
//     <div
//       style={{
//         border: `1px solid ${color}`,
//         borderRadius: "12px",
//         padding: "30px 20px",
//         width: "100%",       // make it responsive within parent Grid
//         maxWidth: "300px",   // optional: limit max width
//         minHeight: "150px",  // set minimum height
//         flex: 1,
//         margin: "10px",
//         background: "#fff",
//         boxShadow: "0 4px 12px rgba(0,0,0,0.1)", // optional shadow
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         textAlign: "center",
//       }}
//     >
//       <h4 style={{ margin: "0 0 10px 0", fontSize: "16px", color: "#333" }}>{title}</h4>
//       <h2 style={{ margin: "0 0 10px 0", fontSize: "32px", color: "#000" }}>{value}</h2>
//       <p style={{ color: color, margin: 0 }}>{subtitle}</p>
//     </div>
//   );
// };

// export default Card;



// src/components/StatCard.js
import React from "react";

const StatCard = ({ title, value, subtitle, color }) => {
  return (
    <div
      style={{
        border: `1px solid ${color}`,
        borderRadius: "12px",
        padding: "40px 20px",     // increase padding for bigger height
        width: "100%",            // fill Grid item width
        minHeight: "180px",       // increase min height
        background: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        margin: "10px 0",
      }}
    >
      <h4 style={{ margin: "0 0 10px", fontSize: "18px", color: "#333" }}>{title}</h4>
      <h2 style={{ margin: "0 0 10px", fontSize: "36px", color: "#000" }}>{value}</h2>
      <p style={{ color: color, margin: 0 }}>{subtitle}</p>
    </div>
  );
};

export default StatCard;
