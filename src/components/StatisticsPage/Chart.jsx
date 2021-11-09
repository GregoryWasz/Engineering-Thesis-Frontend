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

const data = [
    { date: "2005-01-02T03:01:45", weight: 100 },
    { date: "2005-01-03T03:01:45", weight: 200 },
    { date: "2005-01-04T03:01:45", weight: 300 },
    { date: "2005-01-05T03:01:45", weight: 350 },
    { date: "2005-01-06T03:01:45", weight: 400 },
];

export default function Chart() {
    return (
        <Grid item xs={12} md={12} lg={12}>
            <Paper
                sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <LineChart width={500} height={300} data={data}>
                    <Line type="monotone" dataKey="weight" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="date" />
                    <YAxis dataKey="weight" />
                    <Tooltip />
                </LineChart>
            </Paper>
        </Grid>
    );
}
