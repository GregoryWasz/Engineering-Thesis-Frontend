import { Alert } from "@mui/material";
import React from "react";

export default function ErrorAlert(props) {
    /* Wyświetlanie błędu wraz z informacją */
    return (
        <Alert sx={{ mb: 1.5 }} severity="error">
            {props.message}
        </Alert>
    );
}
