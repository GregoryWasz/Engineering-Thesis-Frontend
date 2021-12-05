import { Grid, Paper } from "@mui/material";
import React from "react";
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";

export default function Chart(props) {
    return (
        <Grid item xs={12} md={12} lg={12}>
            <Paper
                sx={{
                    p: 2,
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <LineChart width={500} height={300} data={props.bodyWeights}>
                    <XAxis dataKey="weighting_date" tick={false} />
                    <YAxis dataKey="weight_amount" />
                    <CartesianGrid stroke="#ccc" />
                    <Tooltip />
                    <Line
                        type="monotone"
                        dataKey="weight_amount"
                        stroke="#ccc"
                    />
                </LineChart>
            </Paper>
        </Grid>
    );
}
