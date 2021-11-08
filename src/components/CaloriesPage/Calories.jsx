import {
    Button,
    Container,
    CssBaseline,
    Paper,
    Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import React from "react";
import CaloriesTable from "./CaloriesTable";

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
                                <Typography
                                    variant="h5"
                                    sx={{ textAlign: "center" }}
                                >
                                    Select date: TODO Datepicker
                                </Typography>
                                <Button
                                    sx={{ p: 1, mt: 1 }}
                                    variant="contained"
                                >
                                    Add new product
                                </Button>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={12} lg={12}>
                            <CaloriesTable />
                        </Grid>
                        <Grid item xs={12} md={12} lg={12}>
                            <Paper
                                sx={{
                                    p: 2,
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <Typography variant="h5">Resume</Typography>
                                <Typography>
                                    You eaten {600} of {1500} your daily
                                    Calories
                                </Typography>
                                <Typography>Good Luck!</Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}
