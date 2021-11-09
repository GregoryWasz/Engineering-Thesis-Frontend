import React, { useState } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import axios from "../../api/axios";
import { useHistory } from "react-router";
import ErrorAlert from "../CommonComponents/ErrorAlert";
import {
    signInPagePath,
    createUserApiPath,
    somethingWentWrong,
} from "../Consts/paths";

export default function SignUp() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const history = useHistory();

    async function handleSignUp(e) {
        e.preventDefault();
        setIsError(false);

        await axios
            .post(createUserApiPath, { username, email, password })
            .then(() => {
                history.push(signInPagePath);
            })
            .catch((error) => {
                setIsError(true);
                setErrorMessage();
                try {
                    setErrorMessage(error.response.data.detail.Error);
                } catch {
                    setErrorMessage(somethingWentWrong);
                }
            });
    }

    return (
        <>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSignUp}
                        sx={{ mt: 3 }}
                    >
                        {isError && <ErrorAlert message={errorMessage} />}
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="username"
                                    name="username"
                                    required
                                    fullWidth
                                    id="username"
                                    label="Username"
                                    autoFocus
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="password"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href={signInPagePath} variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </>
    );
}
