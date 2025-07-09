"use client";

import SideNav from "@/component/SideNav";
import Header from "@/component/Header";
import Footer from "@/component/Footer";
import { Box } from "@mui/material";
import React from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box sx={{ display: "flex" }}>
      <SideNav />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          flexGrow: 1,
          marginLeft: "200px", // Offset to match SideNav width
        }}
      >
        {/* Header (Fixed height, offset children) */}
        <Header />

        {/* Page content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            paddingTop: "84px",
            paddingX: 3,
            paddingBottom: "20px",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
