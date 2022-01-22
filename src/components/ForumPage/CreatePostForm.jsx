import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Alert, Button, Paper, TextField, Typography } from "@mui/material";
import axios from "../../api/axios";

function CreatePostForm(props) {
    /* Formularz dodający wpis */
    const [showCreatePostForm, setShowCreatePostForm] = useState(false);
    const [showErrorAlert, setShowErrorAlert] = useState(false);
    const [postTitle, setPostTitle] = useState("");
    const [postText, setPostText] = useState("");

    async function handleAddPost() {
        /* Odwołanie bezpośrednie do aplikacji serwerowej w celu dodania wpisu */
        setShowErrorAlert(false);
        await axios
            .post("/posts", {
                post_title: postTitle,
                post_text: postText,
                post_date: new Date(),
            })
            .then((response) => {
                props.getPosts(response.data);
                setShowCreatePostForm(false);
                setPostTitle("");
                postText("");
                setShowErrorAlert(false);
            })
            .catch((error) => {
                // setShowErrorAlert(true);
            });
    }

    return (
        <Grid item xs={12} md={12} lg={12}>
            <Paper
                sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Button
                    variant="contained"
                    onClick={() => {
                        setShowCreatePostForm(true);
                        if (showCreatePostForm === true) {
                            setShowCreatePostForm(false);
                        }
                    }}
                >
                    Create new Post
                </Button>
            </Paper>
            {showErrorAlert && (
                <Alert severity="error" sx={{ mt: 3 }}>
                    Error occured
                </Alert>
            )}
            {showCreatePostForm && (
                <Paper sx={{ mt: 3, p: 2 }}>
                    <Typography
                        variant="h4"
                        sx={{ textAlign: "center", mb: 1 }}
                    >
                        Add new post
                    </Typography>
                    <TextField
                        sx={{ mb: 2 }}
                        autoComplete="title"
                        name="title"
                        id="title"
                        label="Title"
                        fullWidth
                        onChange={(e) => setPostTitle(e.target.value)}
                    />
                    <TextField
                        sx={{ mb: 2 }}
                        autoComplete="text"
                        name="text"
                        id="text"
                        label="Text"
                        fullWidth
                        onChange={(e) => setPostText(e.target.value)}
                    />
                    <Button
                        sx={{ mb: 1 }}
                        variant="contained"
                        color="success"
                        fullWidth
                        onClick={() => handleAddPost()}
                    >
                        Submit
                    </Button>
                    <Button
                        variant="contained"
                        fullWidth
                        onClick={() => setShowCreatePostForm(false)}
                    >
                        Cancel
                    </Button>
                </Paper>
            )}
        </Grid>
    );
}

export default CreatePostForm;
