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
import { Alert, Button, Grid, TextField } from "@mui/material";
import axios from "../../api/axios";

export default function StatisticsTable(props) {
    const [weightAmount, setWeightAmount] = useState();
    const [showWeightAmountForm, setShowWeightAmountFrom] = useState(false);
    const [rowId, setRowId] = useState();
    const [showAlert, setShowAlert] = useState();

    async function handleUpdateBodyWeight() {
        await axios
            .put("/body_weights/weight/" + rowId, {
                weight_amount: weightAmount,
            })
            .then((response) => {
                setWeightAmount();
                props.getBodyWeights();
                setShowWeightAmountFrom(false);
                setShowAlert(false);
            })
            .catch((error) => {
                setShowAlert(true);
            });
    }

    async function handleDeleteBodyWeight(id) {
        await axios
            .delete("/body_weights/" + id)
            .then((response) => {
                props.getBodyWeights();
                setShowAlert(false);
            })
            .catch((error) => {
                setShowAlert(true);
            });
    }

    return (
        <Grid item xs={12} md={12} lg={12}>
            {showAlert && (
                <Alert sx={{ mb: 1 }} severity="error">
                    Error occured
                </Alert>
            )}
            {showWeightAmountForm && (
                <Paper sx={{ p: 2, mb: 2, display: "flex" }}>
                    <TextField
                        autoComplete="weight"
                        name="weight"
                        fullWidth
                        id="weight"
                        label="New weight"
                        autoFocus
                        type="number"
                        onChange={(e) => setWeightAmount(e.target.value)}
                    ></TextField>
                    <>
                        <Button
                            variant="contained"
                            color="success"
                            sx={{ ml: 2 }}
                            onClick={(e) => handleUpdateBodyWeight()}
                        >
                            Submit
                        </Button>
                        <Button
                            variant="contained"
                            sx={{ ml: 2 }}
                            onClick={(e) => setShowWeightAmountFrom(false)}
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
                            <TableCell>Date </TableCell>
                            <TableCell align="right">
                                Weight &nbsp;(kg)
                            </TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.bodyWeights.map((row) => (
                            <TableRow
                                key={row.body_weight_measure_id}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.weighting_date
                                        .replace("T", " ")
                                        .slice(0, -7)}
                                </TableCell>

                                <TableCell align="right">
                                    {row.weight_amount}
                                </TableCell>
                                <TableCell align="right">
                                    <Button
                                        size="small"
                                        variant="outlined"
                                        color="warning"
                                        sx={{ m: 0.1 }}
                                        onClick={(e) => {
                                            setShowWeightAmountFrom(true);
                                            setRowId(
                                                row.body_weight_measure_id,
                                            );
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
                                            handleDeleteBodyWeight(
                                                row.body_weight_measure_id,
                                            )
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
