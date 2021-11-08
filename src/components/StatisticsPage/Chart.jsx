import { Grid, Paper } from "@mui/material";
import React from "react";

export default function Chart() {
    return (
        <Grid item xs={12} md={12} lg={12}>
            <Paper
                sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                }}
            >
                TODO: Chart
            </Paper>
        </Grid>
    );
}
