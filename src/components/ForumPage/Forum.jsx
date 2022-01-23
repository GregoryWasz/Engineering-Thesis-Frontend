import { Container, CssBaseline, Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import PostItem from "./PostItem";
import CreatePostForm from "./CreatePostForm";
import axios from "../../api/axios";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function Forum() {
    /* Wyświetlanie strony forum */
    const paginationValue = 5;
    const [currentUserID, setCurrentUserID] = useState("");
    const [posts, setPosts] = useState([]);
    const [postsPage, setPostsPage] = useState([]);
    const [page, setPage] = useState(0);

    async function getUser() {
        /* Odwołanie bezpośrednie do aplikacji serwerowej w celu zautoryzowania użytkownika */
        await axios
            .get("/auth/me")
            .then((response) => {
                setCurrentUserID(response.data.user_id);
            })
            .catch((error) => {});
    }
    async function getPosts() {
        /* Odwołanie bezpośrednie do aplikacji serwerowej w celu pobrania wpisów */
        await axios
            .get("/posts")
            .then((response) => {
                setPosts(response.data);
                setPostsPage(response.data.slice(0, paginationValue));
                setPage(1);
            })
            .catch((error) => {});
    }

    function handlePagination(value) {
        /* Stronicowanie po zmianie strony */
        setPage(value);
        value -= 1;
        setPostsPage(
            posts.slice(
                value * paginationValue,
                value * paginationValue + paginationValue,
            ),
        );
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
                    {postsPage.map((post) => (
                        <PostItem
                            key={post.post_id}
                            post={post}
                            currentUserID={currentUserID}
                            getPosts={getPosts}
                        />
                    ))}
                </Grid>
                <Paper
                    sx={{
                        mt: 3,
                        p: 1,
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Stack spacing={2}>
                        <Pagination
                            count={Math.ceil(posts.length / paginationValue)}
                            page={page}
                            onChange={(e, value) => {
                                handlePagination(value);
                            }}
                        />
                    </Stack>
                </Paper>
            </Container>
        </Box>
    );
}
