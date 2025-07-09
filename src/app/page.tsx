"use client";

import { Box, Grid } from "@mui/material";
import React from "react";

import Crud from "@/component/crud";
import DynamicCrud from "@/component/dynamicCrud";

export default function Home() {

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box>
            <DynamicCrud />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box>
            <Crud />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
