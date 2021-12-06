import React from "react";
import { Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

export default function Resume(props) {
    return (
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
                    You eaten {props.calculateCaloriesEaten()} of{" "}
                    {props.calorieLimit} your daily calories.
                </Typography>
                {props.calculateCaloriesEaten() <= props.calorieLimit ? (
                    <Typography>Good Job!</Typography>
                ) : (
                    <Typography>
                        Not good, but tomorrow will be better!
                    </Typography>
                )}
            </Paper>
        </Grid>
    );
}
