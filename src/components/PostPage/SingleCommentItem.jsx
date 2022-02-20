import React from "react";
import EditCommentForm from "./EditCommentForm";
import { Avatar, Box, Typography, Paper, Button } from "@mui/material";
import axios from "../../api/axios";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

export default function SingleCommentItem(props) {
    /* Wyświetlanie pojedynczego komentarza */

    async function handleAdminDeleteComment() {
        /* Odwołanie bezpośrednie do aplikacji serwerowej w celu usunięcia wpisu */
        await axios
            .delete("/admin/comment/" + props.comment.comment_id)
            .then((response) => {
                props.getComments();
            })
            .catch((error) => {});
    }

    return (
        <Paper sx={{ m: 1, p: 2, display: "flex", flexDirection: "column" }}>
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
                    {props.comment.comment_creator.username}
                </Typography>
                <Typography sx={{ fontSize: 10 }}>
                    {props.comment.comment_date.replace("T", " ").slice(0, -10)}
                </Typography>
            </Box>
            <Typography>{props.comment.comment_text}</Typography>

            {props.comment.comment_creator.user_id === props.currentUserID && (
                <Box sx={{ mt: 1 }}>
                    <EditCommentForm
                        getComments={props.getComments}
                        comment_id={props.comment.comment_id}
                        comment_text={props.comment.comment_text}
                    />
                </Box>
            )}
            {props.isAdmin && (
                <Box>
                    <Button
                        variant="outlined"
                        color="error"
                        sx={{ mt: 1 }}
                        onClick={() => handleAdminDeleteComment()}
                    >
                        <AdminPanelSettingsIcon />
                        Admin Delete Comment
                        <DeleteForeverOutlinedIcon />
                    </Button>
                </Box>
            )}
        </Paper>
    );
}
