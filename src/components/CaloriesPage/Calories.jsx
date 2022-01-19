import { Container, CssBaseline } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import CaloriesTable from "./CaloriesTable";
import axios from "../../api/axios";
import Resume from "./Resume";
import DatePickerComp from "./DatePickerComp";
import AddProductsComp from "./AddProductsComp";

export default function Calories() {
    const [calorieLimit, setCalorieLimit] = useState();
    const [products, setProducts] = useState([]);
    const [currentDate, setDate] = useState(new Date());

    function calculateCaloriesEaten() {
        var calorieCount = 0;

        for (const product of products) {
            calorieCount += product.product_calorific_value;
        }

        return calorieCount;
    }

    async function getProductsTable() {
        await axios
            .get("/products/daily", {
                params: {
                    current_date: currentDate.toISOString().split("T")[0],
                },
            })
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentDate]);

    return (
        <Box sx={{ display: "flex", bgcolor: "#f5f5f5" }}>
            <CssBaseline />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Grid container spacing={3}>
                    <AddProductsComp
                        currentDate={currentDate}
                        getProductsTable={getProductsTable}
                    />
                    <Resume
                        calculateCaloriesEaten={calculateCaloriesEaten}
                        calorieLimit={calorieLimit}
                    />
                    <DatePickerComp setDate={setDate} />
                    <CaloriesTable
                        products={products}
                        getProductsTable={getProductsTable}
                    />
                </Grid>
            </Container>
        </Box>
    );
}
