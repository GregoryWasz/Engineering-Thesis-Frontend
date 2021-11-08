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
import Chart from "./Chart";
import StatisticsTable from "./StatisticsTable";

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
                                <Button variant="contained" sx={{ mb: 1 }}>
                                    Insert new bodyweight record
                                </Button>
                                <Typography>
                                    Displaying last: {22} Records
                                </Typography>
                            </Paper>
                        </Grid>

                        <Chart />

                        <StatisticsTable />
                    </Grid>
                </Container>
            </Box>
        </>
    );
}
