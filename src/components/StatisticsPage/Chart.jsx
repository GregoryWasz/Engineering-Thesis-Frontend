import { Grid, Paper } from "@mui/material";
import React, { useState } from "react";
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";

export default function Chart(props) {
    var chartData = props.bodyWeights.map((ele) => {
        return {
            weight_amount: ele.weight_amount,
            weighting_date: ele.weighting_date.replace("T", " ").slice(0, -16),
        };
    });

    return (
        <Grid item xs={12} md={12} lg={12}>
            <Paper
                sx={{
                    p: 2,
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <LineChart width={500} height={300} data={chartData}>
                    <XAxis dataKey="weighting_date" />
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
