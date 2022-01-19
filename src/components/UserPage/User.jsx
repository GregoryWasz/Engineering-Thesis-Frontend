import {
    Alert,
    Button,
    Container,
    CssBaseline,
    Paper,
    Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import AchievementItem from "./AchievementItem";
import UserBasicInformations from "./UserBasicInformations";
import UserChangeButtons from "./UserChangeButtons";
import axios from "../../api/axios";

export default function User() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [calorieLimit, setCalorieLimit] = useState("");
    const [achievements, setAchievements] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [alertText, setAlertText] = useState("");

    async function handleCheckAchievements(e) {
        e.preventDefault();
        setShowAlert(false);
        await axios
            .get("/achievements/check")
            .then((response) => {
                setAlertText(response.data.Message);
                setShowAlert(true);
                getAchievements();
            })
            .catch((error) => {});
    }

    async function getUser() {
        await axios
            .get("/auth/me")
            .then((response) => {
                setUsername(response.data.username);
                setEmail(response.data.email);
                setCalorieLimit(response.data.calorie_limit);
            })
            .catch((error) => {});
    }
    async function getAchievements() {
        await axios
            .get("/achievements")
            .then((response) => {
                setAchievements(response.data);
            })
            .catch((error) => {});
    }

    useEffect(() => {
        getUser();
        getAchievements();
    }, []);
    return (
        <Box sx={{ display: "flex", bgcolor: "#f5f5f5", minHeight: "100%" }}>
            <CssBaseline />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Grid container spacing={3}>
                    <UserBasicInformations
                        username={username}
                        email={email}
                        calorieLimit={calorieLimit}
                    />
                    <UserChangeButtons
                        getUser={getUser}
                        calorieLimit={calorieLimit}
                    />

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
                                onClick={handleCheckAchievements}
                            >
                                Check achievements!
                            </Button>
                            {showAlert && (
                                <Alert sx={{ mt: 1.5 }} severity="info">
                                    {alertText}
                                </Alert>
                            )}
                        </Paper>
                    </Grid>
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
                                Your achevements are listed below
                            </Typography>
                        </Paper>
                    </Grid>
                    {achievements.map((achievement) => {
                        const {
                            achievement_name,
                            achievement_date,
                            achievement_id,
                        } = achievement;
                        return (
                            <AchievementItem
                                key={achievement_id}
                                title={achievement_name}
                                date={achievement_date}
                            />
                        );
                    })}
                </Grid>
            </Container>
        </Box>
    );
}
