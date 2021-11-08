import React from "react";
import Grid from "@mui/material/Grid";
import { Paper, Typography } from "@mui/material";

export default function AchievementItem(props) {
    return (
        <Grid item xs={12} md={4} lg={4}>
            <Paper
                sx={{
                    p: 2,

                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Typography>{props.title}</Typography>
                <Typography>{props.description}</Typography>
            </Paper>
        </Grid>
    );
}
