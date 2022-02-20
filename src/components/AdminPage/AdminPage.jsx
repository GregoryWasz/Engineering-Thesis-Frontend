import {
    Alert,
    Button,
    Container,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState, useEffect } from "react";
import axios from "../../api/axios";

function AdminPage() {
    /* Wyświetlanie strony z panelem administratora */
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [tickets, setTickets] = useState([]);
    const [isPasswordChanged, setIsPasswordChanged] = useState(false);

    async function getTickets() {
        /* Odwołanie bezpośrednie do aplikacji serwerowej w celu pobrania biletów */
        await axios
            .get("/tickets")
            .then((response) => {
                setTickets(response.data);
            })
            .catch((error) => {});
    }

    async function deleteTicket(ticket_id) {
        /* Odwołanie bezpośrednie do aplikacji serwerowej w celu usunięcia biletu */
        await axios
            .delete("/admin/ticket/" + ticket_id)
            .then((response) => {
                getTickets();
            })
            .catch((error) => {});
    }

    async function changeUserPassword() {
        /* Odwołanie bezpośrednie do aplikacji serwerowej w celu zmiany hasła */
        setIsPasswordChanged(false);
        await axios
            .put("/admin/change_user_password", {
                email: email,
                password: newPassword,
            })
            .then((response) => {
                setIsPasswordChanged(true);
                setEmail("");
                setNewPassword("");
            })
            .catch((error) => {});
    }

    useEffect(() => {
        getTickets();
    }, []);

    return (
        <Box>
            <Container>
                <Paper
                    sx={{
                        p: 2,
                        mt: 4,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Typography variant="h5" sx={{ mb: 2 }}>
                        Change password for user
                    </Typography>
                    <TextField
                        value={email}
                        sx={{ mb: 2 }}
                        label="User email"
                        onChange={(e) => setEmail(e.target.value)}
                    ></TextField>
                    <TextField
                        value={newPassword}
                        sx={{ mb: 2 }}
                        label="New Password"
                        type="password"
                        onChange={(e) => setNewPassword(e.target.value)}
                    ></TextField>
                    <Button
                        variant="contained"
                        color="success"
                        onClick={() => changeUserPassword()}
                    >
                        Change password
                    </Button>
                    {isPasswordChanged && (
                        <Alert
                            severity="success"
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                mt: 2,
                            }}
                        >
                            {" "}
                            Password for {email} successfully changed!{" "}
                            <Button onClick={() => setIsPasswordChanged(false)}>
                                Close{" "}
                            </Button>
                        </Alert>
                    )}
                </Paper>
                <Paper
                    sx={{
                        p: 2,
                        mt: 3,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Typography variant="h5" sx={{ mb: 2 }}>
                        Tickets
                    </Typography>

                    {tickets.map((ticket) => (
                        <Paper
                            sx={{
                                mb: 1,
                                p: 2,
                                display: "flex",
                                alignItems: "center",
                            }}
                            variant="outlined"
                            key={ticket.ticket_id}
                        >
                            <Typography>{ticket.message}</Typography>
                            <Button
                                sx={{ ml: 1 }}
                                color="error"
                                variant="contained"
                                size="small"
                                onClick={() => deleteTicket(ticket.ticket_id)}
                            >
                                Delete ticket
                            </Button>
                        </Paper>
                    ))}
                </Paper>
            </Container>
        </Box>
    );
}

export default AdminPage;
