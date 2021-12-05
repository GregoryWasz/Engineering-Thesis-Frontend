import {
    Alert,
    Button,
    Container,
    CssBaseline,
    Paper,
    TextField,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import Chart from "./Chart";
import StatisticsTable from "./StatisticsTable";
import axios from "../../api/axios";

export default function Statistics() {
    const [bodyWeights, setBodyWeights] = useState([]);
    const [showAddBodyWeightForm, setShowAddBodyWeightForm] = useState(false);
    const [bodyWeight, setBodyWeight] = useState("");
    const [showAlert, setShowAlert] = useState();

    function handleAddBodyWeightForm(e) {
        e.preventDefault();
        if (showAddBodyWeightForm === true) {
            setShowAddBodyWeightForm(false);
        } else {
            setShowAddBodyWeightForm(true);
        }
    }

    async function handleAddBodyWeight() {
        var current_date = new Date().toISOString();
        await axios
            .post("/body_weights/", {
                weight_amount: bodyWeight,
                weighting_date: current_date,
            })
            .then((response) => {
                setShowAlert(false);
                getBodyWeights();
                setBodyWeight("");
                setShowAddBodyWeightForm(false);
            })
            .catch((error) => {
                setShowAlert(true);
            });
    }

    async function getBodyWeights() {
        await axios
            .get("/body_weights/")
            .then((response) => {
                setShowAlert(false);
                setBodyWeights(response.data);
            })
            .catch((error) => {
                setShowAlert(true);
            });
    }

    useEffect(() => {
        getBodyWeights();
    }, []);
    return (
        <>
            <Box sx={{ display: "flex" }}>
                <CssBaseline />
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                    {showAlert && (
                        <Alert sx={{ mb: 1 }} severity="error">
                            Error occured
                        </Alert>
                    )}
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={12} lg={12}>
                            <Paper
                                sx={{
                                    p: 2,
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <Button
                                    variant="contained"
                                    sx={{ mb: 1 }}
                                    onClick={handleAddBodyWeightForm}
                                >
                                    Insert new bodyweight record
                                </Button>
                                {showAddBodyWeightForm && (
                                    <>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="weight"
                                            label="New weight measure"
                                            name="weight"
                                            autoComplete="weight"
                                            autoFocus
                                            type="number"
                                            onChange={(e) =>
                                                setBodyWeight(e.target.value)
                                            }
                                        ></TextField>
                                        <Button
                                            variant="contained"
                                            color="success"
                                            sx={{ mb: 1 }}
                                            onClick={(e) =>
                                                handleAddBodyWeight()
                                            }
                                        >
                                            Submit
                                        </Button>
                                        <Button
                                            variant="contained"
                                            onClick={(e) =>
                                                setShowAddBodyWeightForm(false)
                                            }
                                        >
                                            Cancel
                                        </Button>
                                    </>
                                )}
                            </Paper>
                        </Grid>
                        <Chart bodyWeights={bodyWeights} />
                        <StatisticsTable
                            bodyWeights={bodyWeights}
                            getBodyWeights={getBodyWeights}
                        />
                    </Grid>
                </Container>
            </Box>
        </>
    );
}
