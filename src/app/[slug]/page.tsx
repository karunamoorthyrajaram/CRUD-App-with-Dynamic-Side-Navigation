"use client"
import { Box, Button, Typography } from "@mui/material";
import { useParams, useRouter } from "next/navigation";
import { useAppSelector } from "../store/hooks";

export default function DynamicPage() {
    const items = useAppSelector((state) => state.nav.items);
    console.log(items)
    const { slug } = useParams();
    const router = useRouter();

    function back() {
        router.push("/")
    }

    return (
        <Box sx={{ display: "flex" }}>
            <Box sx={{paddingLeft: "380px", paddingTop: "20%"}}>
                <Box>
                    <Typography variant="body1" gutterBottom>
                        You are viewing: <strong className="text-lg">{slug} Page</strong>
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={back}
                    >
                        Back to Home Page
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
