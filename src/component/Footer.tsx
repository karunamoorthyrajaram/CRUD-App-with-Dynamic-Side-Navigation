// src/components/Footer.tsx
"use client";

import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#2B7A78",
        color: "white",
        py: 2,
        px: 3,
        textAlign: "center",
        marginTop: "auto",
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} CRUD App. All rights reserved.
      </Typography>
    </Box>
  );
}
