import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";

const RecentSocieties = ({ societies }) => (
  <Card>
    <CardContent>
      <Typography variant="subtitle2">Recently Registered</Typography>
      <Grid container spacing={2} mt={1}>
        {societies.map((soc, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card sx={{ p: 1, display: "flex", justifyContent: "space-between" }}>
              <div>
                <Typography variant="body1">{soc.name}</Typography>
                <Typography variant="body2" color="text.secondary">{soc.location}</Typography>
              </div>
              <div>
                <Typography variant="body2">{soc.flats} flats</Typography>
                <Typography variant="body2">{soc.members} members</Typography>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </CardContent>
  </Card>
);

export default RecentSocieties;
