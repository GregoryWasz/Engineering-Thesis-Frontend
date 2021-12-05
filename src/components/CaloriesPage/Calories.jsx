import {
    Button,
    Container,
    CssBaseline,
    Paper,
    Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import CaloriesTable from "./CaloriesTable";
import axios from "../../api/axios";

export default function Calories() {
    const [calorieLimit, setCalorieLimit] = useState(2000);
    const [products, setProducts] = useState([]);

    async function getProductsTable() {
        await axios
            .get("/products/")
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {});
    }

    async function getUser() {
        await axios
            .get("/auth/me")
            .then((response) => {
                setCalorieLimit(response.data.calorie_limit);
            })
            .catch((error) => {});
    }

    useEffect(() => {
        getProductsTable();
        getUser();
    }, []);

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
                            <CaloriesTable products={products} />
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
                                    You eaten {600} of {calorieLimit} your daily
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
