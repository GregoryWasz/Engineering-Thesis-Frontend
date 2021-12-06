import React from "react";
import { Button, Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
function AddProductsComp() {
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
                <Button variant="contained">Quick add new product</Button>
                <Button variant="contained">
                    Calculate and add new product
                </Button>
            </Paper>
        </Grid>
    );
}

export default AddProductsComp;
