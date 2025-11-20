import React from "react";
import { Box, Typography, Grid, Divider, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#0B1A30", // Air Force Dark Navy
        color: "white",
        mt: 8,
        pt: 6,
        pb: 3,
      }}
    >
      {/* Top Section */}
      <Grid container spacing={4} sx={{ px: { xs: 3, md: 10 } }}>
        {/* Logo + Motto */}
        <Grid item xs={12} md={4}>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            GHANA AIR FORCE
          </Typography>
          <Typography sx={{ mt: 1, color: "#AFC6E8" }}>
            "Service, Excellence, Integrity"
          </Typography>

          <Box sx={{ mt: 3 }}>
            <Typography variant="body2" sx={{ color: "#B8C7DA" }}>
              The Ghana Air Force is responsible for the defense of Ghana’s
              airspace, providing tactical airlift, peacekeeping, and national
              security operations.
            </Typography>
          </Box>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={6} md={2}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            Quick Links
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Link href="#" underline="none" color="#AFC6E8">
              About Us
            </Link>
            <Link href="#" underline="none" color="#AFC6E8">
              Commands
            </Link>
            <Link href="#" underline="none" color="#AFC6E8">
              Recruitment
            </Link>
            <Link href="#" underline="none" color="#AFC6E8">
              Careers
            </Link>
          </Box>
        </Grid>

        {/* Operations */}
        <Grid item xs={6} md={2}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            Operations
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Link href="#" underline="none" color="#AFC6E8">
              Air Support
            </Link>
            <Link href="#" underline="none" color="#AFC6E8">
              Peacekeeping
            </Link>
            <Link href="#" underline="none" color="#AFC6E8">
              Training
            </Link>
            <Link href="#" underline="none" color="#AFC6E8">
              Medical Outreach
            </Link>
          </Box>
        </Grid>

        {/* Contact */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            Contact
          </Typography>
          <Typography sx={{ color: "#AFC6E8", mb: 1 }}>
            Air Force Headquarters, Burma Camp, Accra - Ghana
          </Typography>
          <Typography sx={{ color: "#AFC6E8" }}>📞 +233 302 773 900</Typography>
          <Typography sx={{ color: "#AFC6E8" }}>✉️ info@airforce.mil.gh</Typography>
        </Grid>
      </Grid>

      {/* Divider */}
      <Divider sx={{ mt: 4, mb: 2, borderColor: "#2A3A55" }} />

      {/* Bottom Bar */}
      <Box
        sx={{
          textAlign: "center",
          color: "#AFC6E8",
          px: 3,
          fontSize: "0.9rem",
        }}
      >
        © {new Date().getFullYear()} Ghana Air Force. All Rights Reserved.  
        <br />
        Official Website of the Ghana Armed Forces – Air Force.
      </Box>
    </Box>
  );
};

export default Footer;
