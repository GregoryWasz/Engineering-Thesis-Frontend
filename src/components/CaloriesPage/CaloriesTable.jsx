import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { Alert, Button, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import axios from "../../api/axios";

export default function CaloriesTable(props) {
    const [productId, setProductId] = useState();
    const [showProductChangeForm, setShowProductChangeForm] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [productName, setProductName] = useState("");
    const [productCalorificValue, setProductCalorificValue] = useState("");

    function prepareDate(date) {
        try {
            return date.replace("T", " ").slice(0, -3);
        } catch (TypeError) {
            return "";
        }
    }

    async function handleEditProduct() {
        setShowAlert(false);
        await axios
            .put("/products/name/" + productId, { product_name: productName })
            .then((response) => {
                axios
                    .put("/products/calorific_value/" + productId, {
                        product_calorific_value: productCalorificValue,
                    })
                    .then((response) => {
                        setShowProductChangeForm(false);
                        props.getProductsTable();
                    })
                    .catch((error) => {
                        setShowAlert(true);
                    });
            })
            .catch((error) => {
                setShowAlert(true);
            });
    }

    async function handleDeleteProduct(id) {
        setShowAlert(false);
        await axios
            .delete("/products/" + id)
            .then((response) => {
                props.getProductsTable();
            })
            .catch((error) => {
                setShowAlert(true);
            });
    }

    return (
        <Grid item xs={12} md={12} lg={12}>
            {showAlert && (
                <Alert severity="error" sx={{ mb: 3 }}>
                    Error occured
                </Alert>
            )}
            {showProductChangeForm && (
                <Paper
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        mb: 3,
                        p: 2,
                    }}
                >
                    <TextField
                        value={productName}
                        margin="normal"
                        id="productName"
                        label="New product name"
                        name="productName"
                        onChange={(e) => setProductName(e.target.value)}
                    />
                    <TextField
                        value={productCalorificValue}
                        sx={{ mb: 3 }}
                        margin="normal"
                        id="calorificValue"
                        label="New calorific value"
                        name="calorificValue"
                        type="number"
                        onChange={(e) =>
                            setProductCalorificValue(e.target.value)
                        }
                    />
                    <>
                        <Button
                            variant="contained"
                            color="success"
                            sx={{ mb: 1 }}
                            onClick={(e) => handleEditProduct()}
                        >
                            Submit
                        </Button>
                        <Button
                            variant="contained"
                            onClick={(e) => setShowProductChangeForm(false)}
                        >
                            Cancel
                        </Button>
                    </>
                </Paper>
            )}
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 350 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product </TableCell>
                            <TableCell align="right">
                                Calories &nbsp;(kcal)
                            </TableCell>
                            <TableCell align="right">Date</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.products.map((row) => (
                            <TableRow
                                key={row.product_id}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.product_name}
                                </TableCell>
                                <TableCell align="right">
                                    {row.product_calorific_value}
                                </TableCell>
                                <TableCell align="right">
                                    {prepareDate(row.product_date)}
                                </TableCell>
                                <TableCell align="right">
                                    <Button
                                        size="small"
                                        variant="outlined"
                                        color="warning"
                                        sx={{ m: 0.1 }}
                                        onClick={(e) => {
                                            setProductId(row.product_id);
                                            setProductName(row.product_name);
                                            setProductCalorificValue(
                                                row.product_calorific_value,
                                            );
                                            setShowProductChangeForm(true);
                                        }}
                                    >
                                        <EditOutlinedIcon />
                                    </Button>
                                    <Button
                                        size="small"
                                        variant="outlined"
                                        color="error"
                                        sx={{ m: 0.1 }}
                                        onClick={(e) =>
                                            handleDeleteProduct(row.product_id)
                                        }
                                    >
                                        <DeleteForeverOutlinedIcon />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    );
}
