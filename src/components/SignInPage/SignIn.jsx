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
import {
    caloriesPagePath,
    loginApiPath,
    signUpPagePath,
    somethingWentWrong,
} from "../Consts/paths";
import { useHistory } from "react-router";
import axios from "../../api/axios";
import ErrorAlert from "../CommonComponents/ErrorAlert";

export default function SignIn() {
    /* Wyświetlanie strony i formularza logowania */
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const history = useHistory();

    async function handleSignIn(e) {
        /* Odwołanie bezpośrednie do aplikacji serwerowej w celu próby logowania użytkownika */
        e.preventDefault();
        setIsError(false);

        const params = new URLSearchParams();

        params.append("username", username);
        params.append("password", password);

        const config = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        };

        await axios
            .post(loginApiPath, params, config)
            .then((response) => {
                localStorage.removeItem("bearer");
                localStorage["bearer"] = "Bearer " + response.data.access_token;
                history.push(caloriesPagePath);
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
                        Sign in
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSignIn}
                        sx={{ mt: 1 }}
                    >
                        {isError && <ErrorAlert message={errorMessage} />}
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href={signUpPagePath} variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </>
    );
}
