import React, { useState } from "react";
import { TextField, Button, Alert } from "@mui/material";
import axios from "../../api/axios";
import { useParams } from "react-router-dom";

export default function AddCommentForm(props) {
    /* Wyświetlanie formularza dodawania komentarzy */
    const [commentText, setCommentText] = useState("");
    const [showErrorAlert, setShowErrorAlert] = useState(false);
    const { post_id } = useParams();

    async function handleAddComment() {
        /* Odwołanie bezpośrednie do aplikacji serwerowej w celu dodania komentarza */
        setShowErrorAlert(false);
        await axios
            .post("/comments/" + post_id, {
                comment_text: commentText,
                comment_date: new Date().toISOString(),
            })
            .then((response) => {
                props.getComments();
                setCommentText("");
                setShowErrorAlert(false);
            })
            .catch((error) => {
                setShowErrorAlert(true);
            });
    }
    return (
        <>
            {showErrorAlert && (
                <Alert severity="error" sx={{ mb: 2 }}>
                    Can't add this comment
                </Alert>
            )}
            <TextField
                value={commentText}
                sx={{ mb: 2 }}
                autoComplete="text"
                name="text"
                id="text"
                label="Add Comment"
                fullWidth
                onChange={(e) => {
                    setCommentText(e.target.value);
                }}
            />
            <Button
                fullWidth
                variant="contained"
                onClick={() => {
                    handleAddComment();
                }}
            >
                Add Comment
            </Button>
        </>
    );
}
