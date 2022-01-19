import { Container, CssBaseline } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import PostItem from "./PostItem";
import CreatePostForm from "./CreatePostForm";
import axios from "../../api/axios";

export default function Forum() {
    const [currentUserID, setCurrentUserID] = useState("");
    const [posts, setPosts] = useState([]);

    async function getUser() {
        await axios
            .get("/auth/me")
            .then((response) => {
                setCurrentUserID(response.data.user_id);
            })
            .catch((error) => {});
    }
    async function getPosts() {
        await axios
            .get("/posts")
            .then((response) => {
                setPosts(response.data);
            })
            .catch((error) => {});
    }

    useEffect(() => {
        getUser();
        getPosts();
    }, []);
    return (
        <Box sx={{ display: "flex", bgcolor: "#f5f5f5" }}>
            <CssBaseline />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Grid container spacing={3}>
                    <CreatePostForm getPosts={getPosts} />
                    {posts.map((post) => (
                        <PostItem
                            key={post.post_id}
                            post={post}
                            currentUserID={currentUserID}
                            getPosts={getPosts}
                        />
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
