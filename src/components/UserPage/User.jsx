import {
    Button,
    Container,
    CssBaseline,
    Paper,
    Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import React from "react";
import AchievementItem from "./AchievementItem";
import UserBasicInformations from "./UserBasicInformations";
import UserChangeButtons from "./UserChangeButtons";

export default function User() {
    return (
        <>
            <Box sx={{ display: "flex" }}>
                <CssBaseline />
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                    <Grid container spacing={3}>
                        <UserBasicInformations />
                        <UserChangeButtons />

                        <Grid item xs={12} md={12} lg={12}>
                            <Paper
                                sx={{
                                    p: 2,
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <Button variant="contained">
                                    Check achievements!
                                </Button>
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

                        <AchievementItem
                            title="Poster!"
                            description="You posted 25 times!"
                        />
                        <AchievementItem
                            title="Measure Master!"
                            description="You Measured yourself 25 times!"
                        />
                        <AchievementItem
                            title="Comentator!"
                            description="You Commented post 25 times!"
                        />
                        <AchievementItem
                            title="Comentator!"
                            description="You Commented post 5 times!"
                        />
                        <AchievementItem
                            title="Comentator!"
                            description="You Commented post 10 times!"
                        />
                        <AchievementItem
                            title="Comentator!"
                            description="You Commented post 15 times!"
                        />
                    </Grid>
                </Container>
            </Box>
        </>
    );
}
