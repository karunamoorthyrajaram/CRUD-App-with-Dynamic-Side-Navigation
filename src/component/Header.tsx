"use client";

import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import WebhookIcon from '@mui/icons-material/Webhook';

export default function Header() {
  return (
    <AppBar
      position="fixed"
      elevation={3}
      color="primary"
      sx={{
        zIndex: 1201,
        marginLeft: "200px",
        width: "calc(100% - 200px)",
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        backdropFilter: "blur(6px)",
        // backgroundColor: "rgba(43, 122, 120, 0.9)", // Teal w/ transparency
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
      }}
    >
      <Toolbar sx={{ paddingX: 3 }}>
        <Box display="flex" alignItems="center" width="100%">
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontWeight: 600,
              letterSpacing: 1,
              fontSize: "1.25rem",
            }}
          >
            <WebhookIcon/> CRUD App
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
