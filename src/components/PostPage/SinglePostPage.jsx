import {
    Alert,
    Button,
    Container,
    Paper,
    Typography,
    Box,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";
import AddCommentForm from "./AddCommentForm";
import SingleCommentItem from "./SingleCommentItem";
import SinglePostItem from "./SinglePostItem";

export default function SinglePostPage() {
    const { post_id } = useParams();
    const [currentUserID, setCurrentUserID] = useState("");
    const [comments, setComments] = useState([]);
    const [notFoundError, setNotFoundError] = useState(false);

    async function getComments() {
        await axios
            .get("/comments/" + post_id)
            .then((response) => {
                setComments(response.data);
            })
            .catch((error) => {});
    }

    async function getUser() {
        await axios
            .get("/auth/me")
            .then((response) => {
                setCurrentUserID(response.data.user_id);
            })
            .catch((error) => {});
    }

    useEffect(() => {
        getUser();
        getComments();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                {notFoundError && (
                    <>
                        <Paper sx={{ p: 1 }}>
                            <Alert severity="error" sx={{ mb: 1 }}>
                                Post not found
                            </Alert>
                            <Button fullWidth href="/forum" variant="contained">
                                {" "}
                                Go Back
                            </Button>
                        </Paper>
                    </>
                )}
                {notFoundError || (
                    <SinglePostItem
                        currentUserID={currentUserID}
                        setNotFoundError={setNotFoundError}
                    />
                )}

                {notFoundError || (
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="h5"> Comments:</Typography>
                        {comments.map((comment) => (
                            <SingleCommentItem
                                key={comment.comment_id}
                                comment={comment}
                                getComments={getComments}
                                currentUserID={currentUserID}
                            />
                        ))}
                        <Box sx={{ p: 1 }}>
                            <AddCommentForm getComments={getComments} />
                        </Box>
                    </Paper>
                )}
            </Container>
        </>
    );
}
