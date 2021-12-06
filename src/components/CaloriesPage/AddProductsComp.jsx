import React, { useState } from "react";
import { Button, Paper, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import axios from "../../api/axios";

function AddProductsComp(props) {
    const [productName, setProductName] = useState("");
    const [productCalorificValue, setProductCalorificValue] = useState(0);
    const [showQuickAddProductForm, setShowQuickAddProductForm] =
        useState(false);
    const [showAddProductForm, setShowAddProductForm] = useState(false);
    const [CalorieIn100, setCalorieIn100] = useState(false);
    const [MealWeight, setMealWeight] = useState(false);

    async function handleAddProduct(calory) {
        await axios
            .post("/products/", {
                product_name: productName,
                product_date: props.currentDate,
                product_calorific_value: calory,
            })
            .then(() => {
                props.getProductsTable();
                setShowQuickAddProductForm(false);
                setShowAddProductForm(false);
            })
            .catch((error) => {});
    }

    return (
        <Grid item xs={12} md={12} lg={12}>
            <Paper
                sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                }}
            >
                <Button
                    variant="contained"
                    onClick={() => {
                        setShowQuickAddProductForm(true);
                        setShowAddProductForm(false);
                        if (showQuickAddProductForm === true) {
                            setShowQuickAddProductForm(false);
                        }
                    }}
                >
                    Quick add new product
                </Button>
                <Button
                    variant="contained"
                    onClick={() => {
                        setShowQuickAddProductForm(false);
                        setShowAddProductForm(true);
                        if (showAddProductForm === true) {
                            setShowAddProductForm(false);
                        }
                    }}
                >
                    Calculate and add new product
                </Button>
            </Paper>
            {showQuickAddProductForm && (
                <Paper
                    sx={{
                        mt: 2,
                        p: 2,
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <Typography variant="h4" sx={{ textAlign: "center" }}>
                        Add new product
                    </Typography>
                    <TextField
                        margin="normal"
                        id="productName"
                        label="Product name"
                        name="productName"
                        onChange={(e) => setProductName(e.target.value)}
                    />
                    <TextField
                        sx={{ mb: 1 }}
                        margin="normal"
                        id="calorificValue"
                        label="Calorie in product"
                        name="calorificValue"
                        type="number"
                        onChange={(e) =>
                            setProductCalorificValue(e.target.value)
                        }
                    />

                    <Button
                        variant="contained"
                        color="success"
                        sx={{ mb: 1 }}
                        onClick={() => handleAddProduct(productCalorificValue)}
                    >
                        Submit
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => setShowQuickAddProductForm(false)}
                    >
                        Cancel
                    </Button>
                </Paper>
            )}
            {showAddProductForm && (
                <Paper
                    sx={{
                        mt: 2,
                        p: 2,
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <Typography variant="h4" sx={{ textAlign: "center" }}>
                        Add new product
                    </Typography>
                    <TextField
                        margin="normal"
                        id="productName"
                        label="Product name"
                        name="productName"
                        onChange={(e) => setProductName(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        id="calorieIn100"
                        label="Calorie in 100g"
                        name="calorieIn100"
                        type="number"
                        onChange={(e) => setCalorieIn100(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        id="mealWeight"
                        label="Meal Weight"
                        name="mealWeight"
                        type="number"
                        onChange={(e) => setMealWeight(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        color="success"
                        sx={{ mb: 1 }}
                        onClick={() =>
                            handleAddProduct((CalorieIn100 * MealWeight) / 100)
                        }
                    >
                        Submit
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => setShowAddProductForm(false)}
                    >
                        Cancel
                    </Button>
                </Paper>
            )}
        </Grid>
    );
}

export default AddProductsComp;
