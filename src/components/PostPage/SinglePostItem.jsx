import { Paper, Typography, Box, Avatar } from "@mui/material";
import React, { useState, useEffect } from "react";
import EditPostForm from "./EditPostForm";
import axios from "../../api/axios";
import { useParams } from "react-router-dom";

export default function SinglePostItem(props) {
    const [post, setPost] = useState({});
    const [wait, setWait] = useState(true);
    const { post_id } = useParams();

    // async function handleDeletePost() {
    //     await axios
    //         .delete("/posts/" + post.post_id)
    //         .then((response) => {
    //             getPost();
    //         })
    //         .catch((error) => {});
    // }

    async function getPost() {
        await axios
            .get("/posts/" + post_id)
            .then((response) => {
                setPost(response.data);
                setWait(false);
            })
            .catch((error) => {
                // setNotFoundError(true);
            });
    }

    useEffect(() => {
        getPost();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            {wait || (
                <>
                    <Paper
                        sx={{
                            p: 2,
                            mb: 2,
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            <Avatar
                                sx={{
                                    width: 10,
                                    height: 10,
                                    mr: 0.1,
                                }}
                            ></Avatar>
                            <Typography
                                sx={{
                                    flexGrow: 1,
                                    fontSize: 10,
                                }}
                            >
                                {post.post_creator.username}
                            </Typography>
                            <Typography sx={{ fontSize: 10 }}>
                                {post.post_date.replace("T", " ").slice(0, -10)}
                            </Typography>
                        </Box>
                        <Typography variant="h4">{post.post_title}</Typography>
                        <Typography>{post.post_text}</Typography>
                        {props.currentUserID === post.post_creator.user_id ? (
                            <Box>
                                <EditPostForm
                                    getPost={getPost}
                                    post_id={post_id}
                                    user_id={post.post_creator.user_id}
                                    post_title={post.post_title}
                                    post_text={post.post_text}
                                    currentUserID={props.currentUserID}
                                />
                            </Box>
                        ) : (
                            <></>
                        )}
                    </Paper>
                </>
            )}
        </>
    );
}
