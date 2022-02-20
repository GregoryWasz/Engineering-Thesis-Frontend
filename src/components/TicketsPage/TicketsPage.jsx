import {
    Alert,
    Box,
    Button,
    Container,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "../../api/axios";

function TicketsPage() {
    /* Wyświetlanie strony i do tworzenia biletów */
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    let history = useHistory();

    async function handleRaiseTicket(e) {
        /* Odwołanie bezpośrednie do aplikacji serwerowej w celu utworzenia biletu */
        if (email.length === 0) {
            return;
        }
        if (message.length === 0) {
            return;
        }

        await axios
            .post("/tickets/", { message: email + ": " + message })
            .then((response) => {
                history.push("/");
            })
            .catch((error) => {});
    }

    return (
        <Box>
            <Container>
                <Paper
                    sx={{
                        mt: 10,
                        p: 2,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Typography sx={{ mb: 2 }} variant="h4">
                        Rise ticket to our support
                    </Typography>
                    <TextField
                        sx={{ mb: 2 }}
                        label="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    ></TextField>
                    <TextField
                        sx={{ mb: 2 }}
                        label="Message"
                        onChange={(e) => setMessage(e.target.value)}
                    ></TextField>
                    <Button
                        color="success"
                        variant="contained"
                        onClick={() => handleRaiseTicket()}
                    >
                        Send
                    </Button>
                    <Alert sx={{ mt: 2 }} severity="info">
                        After successfull request you will be redirected to main
                        page.
                    </Alert>
                </Paper>
            </Container>
        </Box>
    );
}

export default TicketsPage;
