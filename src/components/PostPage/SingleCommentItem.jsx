import React from "react";
import EditCommentForm from "./EditCommentForm";
import { Avatar, Box, Typography, Paper } from "@mui/material";

export default function SingleCommentItem(props) {
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

            {props.comment.comment_creator.user_id === props.currentUserID ? (
                <Box sx={{ mt: 1 }}>
                    <EditCommentForm
                        getComments={props.getComments}
                        comment_id={props.comment.comment_id}
                        comment_text={props.comment.comment_text}
                    />
                </Box>
            ) : (
                <></>
            )}
        </Paper>
    );
}
