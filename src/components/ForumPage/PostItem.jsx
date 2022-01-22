import {
    Avatar,
    Button,
    Paper,
    Snackbar,
    Typography,
    Alert,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import React, { useState } from "react";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { Link } from "react-router-dom";
import StarPurple500OutlinedIcon from "@mui/icons-material/StarPurple500Outlined";

export default function PostItem(props) {
    /* Wyświetlanie pojedynczego wpisu dla forum */
    const [open, setOpen] = useState(false);

    return (
        <Grid item xs={12} md={12} lg={12}>
            <Paper
                sx={{
                    p: 2,
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
                        {props.post.post_creator.username}
                    </Typography>
                    <Typography sx={{ fontSize: 10 }}>
                        {props.post.post_date.replace("T", " ").slice(0, -10)}
                    </Typography>
                </Box>
                <Typography variant="h4">{props.post.post_title}</Typography>
                <Typography>{props.post.post_text}</Typography>
                <Box
                    sx={{
                        mt: 2,
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-end",
                    }}
                >
                    {" "}
                    {props.currentUserID === props.post.user_id ? (
                        <>
                            <Link to={"/forum/post/" + props.post.post_id}>
                                <Button
                                    variant="outlined"
                                    color="warning"
                                    sx={{ mr: 1 }}
                                >
                                    <StarPurple500OutlinedIcon />
                                </Button>
                            </Link>
                        </>
                    ) : (
                        <></>
                    )}
                    <Button variant="outlined" sx={{ mr: 1 }}>
                        <ShareOutlinedIcon
                            onClick={() => {
                                navigator.clipboard.writeText(
                                    document.URL +
                                        "/post/" +
                                        props.post.post_id,
                                );
                                setOpen(true);
                            }}
                        />
                        <Snackbar
                            open={open}
                            autoHideDuration={3000}
                            onClick={() => setOpen(false)}
                        >
                            <Alert severity="info">
                                Link copied to clipboard
                            </Alert>
                        </Snackbar>
                    </Button>
                    <Link to={"/forum/post/" + props.post.post_id}>
                        <Button variant="outlined">
                            <CommentOutlinedIcon />
                        </Button>
                    </Link>
                </Box>
            </Paper>
        </Grid>
    );
}
