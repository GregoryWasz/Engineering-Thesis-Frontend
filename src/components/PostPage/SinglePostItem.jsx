import { Paper, Typography, Box, Avatar, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import EditPostForm from "./EditPostForm";
import { useHistory } from "react-router-dom";
import axios from "../../api/axios";
import { useParams } from "react-router-dom";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

export default function SinglePostItem(props) {
    /* Wyświetlanie pojedynczego wpisu na dedykowanej podstronie na forum */
    const [post, setPost] = useState({});
    const [wait, setWait] = useState(true);
    const { post_id } = useParams();
    let history = useHistory();

    async function getPost() {
        /* Odwołanie bezpośrednie do aplikacji serwerowej w celu pobrania zawartości wpisu */
        await axios
            .get("/posts/" + post_id)
            .then((response) => {
                setPost(response.data);
                setWait(false);
            })
            .catch((error) => {});
    }

    async function handleAdminDeletePost() {
        /* Odwołanie bezpośrednie do aplikacji serwerowej w celu usunięcia wpisu */
        await axios
            .delete("/admin/post/" + post_id)
            .then((response) => {
                history.push("/forum");
            })
            .catch((error) => {});
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
                        {props.currentUserID === post.post_creator.user_id && (
                            <Box>
                                <EditPostForm
                                    getPost={getPost}
                                    post_id={post_id}
                                    user_id={post.post_creator.user_id}
                                    post_title={post.post_title}
                                    post_text={post.post_text}
                                    currentUserID={props.currentUserID}
                                    isAdmin={props.isAdmin}
                                />
                            </Box>
                        )}
                        {props.isAdmin && (
                            <Box>
                                <Button
                                    variant="outlined"
                                    color="error"
                                    sx={{ mt: 1 }}
                                    onClick={() => handleAdminDeletePost()}
                                >
                                    <AdminPanelSettingsIcon />
                                    Admin Delete post
                                    <DeleteForeverOutlinedIcon />
                                </Button>
                            </Box>
                        )}
                    </Paper>
                </>
            )}
        </>
    );
}
