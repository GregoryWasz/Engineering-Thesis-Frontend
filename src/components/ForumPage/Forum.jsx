import { Button, Container, CssBaseline, Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import React from "react";
import PostItem from "./PostItem";

export default function Forum() {
    return (
        <>
            <Box sx={{ display: "flex" }}>
                <CssBaseline />
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={12} lg={12}>
                            <Paper
                                sx={{
                                    p: 2,
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <Button variant="contained">
                                    Create new Post
                                </Button>
                            </Paper>
                        </Grid>
                        <PostItem />
                    </Grid>
                </Container>
            </Box>
        </>
    );
}
