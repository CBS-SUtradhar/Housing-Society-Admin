import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const StatCard = ({ title, value, subtitle, color }) => (
  <Card sx={{ minWidth: 200, borderColor: color, borderWidth: 1, borderStyle: "solid" }}>
    <CardContent>
      <Typography variant="subtitle2">{title}</Typography>
      <Typography variant="h5">{value}</Typography>
      <Typography variant="body2" color="text.secondary">{subtitle}</Typography>
    </CardContent>
  </Card>
);

export default StatCard;
