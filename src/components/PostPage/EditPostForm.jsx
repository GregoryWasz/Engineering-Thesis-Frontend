import { Button, Box, TextField } from "@mui/material";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "../../api/axios";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

export default function EditPostForm(props) {
    const [newPostTitle, setNewPostTitle] = useState(props.post_title);
    const [newPostText, setNewPostText] = useState(props.post_text);
    const [showForm, setShowForm] = useState(false);
    let history = useHistory();

    async function handleEditPostTitle() {
        await axios
            .put("/posts/title/" + props.post_id, {
                post_title: newPostTitle,
            })
            .then((response) => {
                props.getPost();
                setNewPostTitle(newPostTitle);
                setShowForm(false);
            })
            .catch((error) => {});
    }
    async function handleEditPostText() {
        await axios
            .put("/posts/text/" + props.post_id, {
                post_text: newPostText,
            })
            .then((response) => {
                props.getPost();
                setNewPostText(newPostText);
                setShowForm(false);
            })
            .catch((error) => {});
    }

    async function handleDeletePost() {
        await axios
            .delete("/posts/" + props.post_id)
            .then((response) => {
                history.push("/forum");
            })
            .catch((error) => {});
    }

    return (
        <>
            <Box sx={{ mt: 1 }}>
                <Button
                    variant="outlined"
                    color="warning"
                    onClick={() => setShowForm(!showForm)}
                >
                    <EditOutlinedIcon />
                    Edit post
                </Button>
                <Button
                    variant="outlined"
                    color="error"
                    sx={{ ml: 1 }}
                    onClick={() => handleDeletePost()}
                >
                    <DeleteForeverOutlinedIcon />
                    Delete post
                </Button>
            </Box>

            {showForm && (
                <>
                    <TextField
                        value={newPostTitle}
                        sx={{ mb: 1, mt: 2 }}
                        autoComplete="title"
                        name="title"
                        id="title"
                        label="Edit title"
                        fullWidth
                        onChange={(e) => {
                            setNewPostTitle(e.target.value);
                        }}
                    />
                    <TextField
                        value={newPostText}
                        sx={{ mb: 1, mt: 1 }}
                        autoComplete="text"
                        name="text"
                        id="text"
                        label="Edit text"
                        fullWidth
                        onChange={(e) => {
                            setNewPostText(e.target.value);
                        }}
                    />
                    <Button
                        variant="contained"
                        color="success"
                        onClick={() => {
                            handleEditPostTitle();
                            handleEditPostText();
                        }}
                    >
                        Submit
                    </Button>
                    <Button
                        variant="contained"
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
