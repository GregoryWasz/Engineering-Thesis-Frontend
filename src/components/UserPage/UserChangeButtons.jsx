import { Button, Paper, TextField, Alert, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { useState } from "react";
import axios from "../../api/axios";
import { useHistory } from "react-router";

export default function UserChangeButtons(props) {
    const [showChangeUsername, setShowChangeUsername] = useState(false);
    const [showChangeEmail, setShowChangeEmail] = useState(false);
    const [showChangePassword, setShowChangePassword] = useState(false);
    const [showChangeCalorieLimit, setShowChangeCalorieLimit] = useState(false);
    const [showDeleteAccount, setShowDeleteAccount] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const [newUsername, setNewUsername] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newCalorieLimit, setNewCalorieLimit] = useState(props.calorieLimit);
    const history = useHistory();

    async function handleChangeUsername() {
        setShowAlert(false);
        await axios
            .put("/users/username", { username: newUsername })
            .then((response) => {
                localStorage.removeItem("bearer");
                history.push("/");
            })
            .catch((error) => {
                setShowAlert(true);
            });
    }
    async function handleChangeEmail() {
        setShowAlert(false);
        await axios
            .put("/users/email", { email: newEmail })
            .then((response) => {
                localStorage.removeItem("bearer");
                history.push("/");
            })
            .catch((error) => {
                setShowAlert(true);
            });
    }
    async function handleChangePassword() {
        setShowAlert(false);
        await axios
            .put("/users/password", { password: newPassword })
            .then((response) => {
                localStorage.removeItem("bearer");
                history.push("/");
            })
            .catch((error) => {
                setShowAlert(true);
            });
    }
    async function handleCalorieLimit() {
        setShowAlert(false);
        await axios
            .put("/users/calorie", { calorie_limit: newCalorieLimit })
            .then((response) => {
                props.getUser();
                setNewCalorieLimit();
                setShowChangeCalorieLimit(false);
            })
            .catch((error) => {
                setShowAlert(true);
            });
    }
    async function handleDeleteAccount() {
        setShowAlert(false);
        await axios
            .delete("/users")
            .then((response) => {
                localStorage.removeItem("bearer");
                history.push("/");
            })
            .catch((error) => {
                setShowAlert(true);
            });
    }

    return (
        <>
            <Grid item xs={12} md={4} lg={3}>
                <Paper
                    sx={{
                        p: 2,
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <Button
                        variant="outlined"
                        color="warning"
                        onClick={(e) => {
                            setShowChangeUsername(true);
                            setShowChangeEmail(false);
                            setShowChangePassword(false);
                            setShowChangeCalorieLimit(false);
                            setShowDeleteAccount(false);
                        }}
                    >
                        <EditOutlinedIcon /> Change Username
                    </Button>
                    <Button
                        sx={{ mt: 2 }}
                        variant="outlined"
                        color="warning"
                        onClick={(e) => {
                            setShowChangePassword(true);
                            setShowChangeUsername(false);
                            setShowChangeEmail(false);
                            setShowChangeCalorieLimit(false);
                            setShowDeleteAccount(false);
                        }}
                    >
                        <EditOutlinedIcon />
                        Change Password
                    </Button>
                    <Button
                        sx={{ mt: 2 }}
                        variant="outlined"
                        color="warning"
                        onClick={(e) => {
                            setShowChangeEmail(true);
                            setShowChangeUsername(false);
                            setShowChangePassword(false);
                            setShowChangeCalorieLimit(false);
                            setShowDeleteAccount(false);
                        }}
                    >
                        <EditOutlinedIcon />
                        Change Email
                    </Button>
                    <Button
                        sx={{ mt: 2 }}
                        variant="outlined"
                        color="warning"
                        onClick={(e) => {
                            setShowChangeCalorieLimit(true);
                            setShowChangeUsername(false);
                            setShowChangeEmail(false);
                            setShowChangePassword(false);
                            setShowDeleteAccount(false);
                        }}
                    >
                        <EditOutlinedIcon />
                        Change Calorie Limit
                    </Button>
                    <Button
                        sx={{ mt: 2 }}
                        variant="outlined"
                        color="error"
                        onClick={(e) => {
                            setShowDeleteAccount(true);
                            setShowChangeUsername(false);
                            setShowChangeEmail(false);
                            setShowChangePassword(false);
                            setShowChangeCalorieLimit(false);
                        }}
                    >
                        <DeleteForeverOutlinedIcon />
                        Delete Account
                    </Button>
                </Paper>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
                {showAlert && (
                    <Alert sx={{ mt: 1.5, mb: 1 }} severity="error">
                        Error occured
                    </Alert>
                )}
                {showChangeUsername && (
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="h5" sx={{ mb: 1 }}>
                            Insert new username
                        </Typography>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="New Username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                            onChange={(e) => setNewUsername(e.target.value)}
                        />
                        <Button
                            variant="contained"
                            color="success"
                            sx={{ mr: 1 }}
                            onClick={(e) => handleChangeUsername()}
                        >
                            Submit
                        </Button>
                        <Button
                            variant="contained"
                            onClick={(e) => setShowChangeUsername(false)}
                        >
                            Cancel
                        </Button>
                    </Paper>
                )}
                {showChangeEmail && (
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="h5" sx={{ mb: 1 }}>
                            Insert new email address
                        </Typography>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="New email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={(e) => setNewEmail(e.target.value)}
                        />
                        <Button
                            variant="contained"
                            color="success"
                            sx={{ mr: 1 }}
                            onClick={(e) => handleChangeEmail()}
                        >
                            Submit
                        </Button>
                        <Button
                            variant="contained"
                            onClick={(e) => setShowChangeEmail(false)}
                        >
                            Cancel
                        </Button>
                    </Paper>
                )}
                {showChangePassword && (
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="h5" sx={{ mb: 1 }}>
                            Insert new password
                        </Typography>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="New Password"
                            type="password"
                            id="password"
                            autoComplete="password"
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                        <Button
                            variant="contained"
                            color="success"
                            sx={{ mr: 1 }}
                            onClick={(e) => handleChangePassword()}
                        >
                            Submit
                        </Button>
                        <Button
                            variant="contained"
                            onClick={(e) => setShowChangePassword(false)}
                        >
                            Cancel
                        </Button>
                    </Paper>
                )}

                {showChangeCalorieLimit && (
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="h5" sx={{ mb: 1 }}>
                            Insert new calorie limit
                        </Typography>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="calorie"
                            label="New Calorie Limit"
                            name="calorie"
                            autoComplete="calorie"
                            type="number"
                            autoFocus
                            onChange={(e) => setNewCalorieLimit(e.target.value)}
                        />
                        <Button
                            variant="contained"
                            color="success"
                            sx={{ mr: 1 }}
                            onClick={(e) => handleCalorieLimit()}
                        >
                            Submit
                        </Button>
                        <Button
                            variant="contained"
                            onClick={(e) => setShowChangeCalorieLimit(false)}
                        >
                            Cancel
                        </Button>
                    </Paper>
                )}
                {showDeleteAccount && (
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="h5" sx={{ mb: 1 }}>
                            Are you sure?
                        </Typography>
                        <Button
                            variant="contained"
                            color="error"
                            sx={{ mr: 1 }}
                            onClick={(e) => handleDeleteAccount()}
                        >
                            Yes
                        </Button>
                        <Button
                            variant="contained"
                            onClick={(e) => setShowDeleteAccount(false)}
                        >
                            No
                        </Button>
                    </Paper>
                )}
            </Grid>
        </>
    );
}
