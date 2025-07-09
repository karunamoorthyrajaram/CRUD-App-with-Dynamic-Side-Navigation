"use client";
import { useAppSelector } from "@/app/store/hooks";
import {
    Box,
    Typography,
} from "@mui/material";
import Link from "next/link";

import WebhookIcon from '@mui/icons-material/Webhook';

export default function Home() {
    const items = useAppSelector((state) => state.nav.items);

    return (
        <Box sx={{ display: "flex", height: "100vh" }}>
            {/* Custom Side Nav */}
            <Box
                sx={{
                    width: 200,
                    backgroundColor: "#f4f6f8",
                    boxShadow: 3,
                    height: "100vh",
                    position: "fixed",
                    top: 0,
                    left: 0,
                }}
            >
                <Typography sx={{
                    paddingBottom: "10px",
                    paddingTop: "25px",
                    display: "flex",
                    alignItems: "center",
                    paddingX: 1,
                }}>
                    <WebhookIcon /> Crud-App
                </Typography>
                <Link href={"/"} passHref>
                    <Typography color="primary" sx={{
                        paddingBottom: "5px",
                        paddingX: 3,
                        paddingY: 1,
                        borderRadius: 1,
                        cursor: "pointer",
                        "&:hover": {
                            backgroundColor: "#DEF2F1", // light teal-ish background on hover
                        },
                    }}>Home</Typography>
                </Link>
                {items.map((item) => (
                    <Box key={item.id}>
                        <Link href={`/${item.title}`} passHref>
                            <Typography color="primary" sx={{
                                paddingBottom: "5px",
                                paddingX: 3,
                                paddingY: 1,
                                borderRadius: 1,
                                cursor: "pointer",
                                "&:hover": {
                                    backgroundColor: "#DEF2F1",
                                },
                            }}>
                                {item.title}
                            </Typography>
                        </Link>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
