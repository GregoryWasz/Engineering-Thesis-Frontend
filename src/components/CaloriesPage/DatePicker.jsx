import React from "react";
import Grid from "@mui/material/Grid";
import { Paper, Typography } from "@mui/material";

function DatePicker() {
    return (
        <Grid item xs={12} md={12} lg={12}>
            <Paper
                sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                    Select date: TODO Datepicker
                </Typography>
            </Paper>
        </Grid>
    );
}

export default DatePicker;
