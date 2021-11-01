import {
    Button,
    Card,
    Container,
    CssBaseline,
    Typography,
} from "@mui/material";
import { CardContent } from "@mui/material";
import React from "react";

export default function NotFound() {
    return (
        <>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Card sx={{ mt: 2 }}>
                    <CardContent
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Typography variant="h5" component="div">
                            This site not exist!
                        </Typography>

                        <Button href="/" size="small">
                            Go to Main Page
                        </Button>
                    </CardContent>
                </Card>
            </Container>
        </>
    );
}
