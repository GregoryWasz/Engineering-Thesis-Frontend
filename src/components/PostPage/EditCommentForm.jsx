import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import axios from "../../api/axios";

export default function EditCommentForm(props) {
    const [showForm, setShowForm] = useState(false);
    const [newCommentText, setNewCommentText] = useState(props.comment_text);

    async function handleEditComment() {
        await axios
            .put("/comments/text/" + props.comment_id, {
                comment_text: newCommentText,
            })
            .then((response) => {
                props.getComments();
                setNewCommentText(newCommentText);
                setShowForm(false);
            })
            .catch((error) => {});
    }

    async function handleDeleteComment() {
        await axios
            .delete("/comments/" + props.comment_id)
            .then((response) => {
                props.getComments();
            })
            .catch((error) => {});
    }

    return (
        <>
            <Button
                color="warning"
                variant="outlined"
                onClick={() => {
                    setShowForm(!showForm);
                }}
            >
                Edit Comment
            </Button>
            <Button
                color="error"
                variant="outlined"
                sx={{ ml: 1 }}
                onClick={() => handleDeleteComment()}
            >
                Delete Comment
            </Button>
            {showForm && (
                <>
                    <TextField
                        value={newCommentText}
                        sx={{ mb: 1, mt: 2 }}
                        autoComplete="text"
                        name="text"
                        id="text"
                        label="Edit Comment"
                        fullWidth
                        onChange={(e) => {
                            setNewCommentText(e.target.value);
                        }}
                    />
                    <Button
                        variant="contained"
                        onClick={() => handleEditComment()}
                    >
                        Apply changes
                    </Button>
                    <Button
                        variant="contained"
                        color="error"
                        sx={{ ml: 1 }}
                        onClick={() => setShowForm(false)}
                    >
                        Cancel
                    </Button>
                </>
            )}
        </>
    );
}
