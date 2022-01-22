import React from "react";
import Grid from "@mui/material/Grid";
import { Paper, Typography } from "@mui/material";

export default function AchievementItem(props) {
    /* Wyświetlanie pojedynczego osiągnięcia użytkownika */
    return (
        <Grid item xs={12} md={4} lg={4}>
            <Paper
                sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Typography sx={{ color: "Gray", fontSize: 10 }}>
                    {props.date.replace("T", " ").slice(0, -7)}
                </Typography>
                <Typography>{props.title}</Typography>
            </Paper>
        </Grid>
    );
}
