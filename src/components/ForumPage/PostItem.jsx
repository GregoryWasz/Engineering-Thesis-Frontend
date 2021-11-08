import { Avatar, Button, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import React from "react";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

export default function PostItem() {
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
                        {"Posted by: {Author}"}
                    </Typography>
                    <Typography sx={{ fontSize: 10 }}>{"{Date}"}</Typography>
                </Box>
                <Typography variant="h4">
                    {
                        "{Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sapien.}"
                    }
                </Typography>
                <Typography>
                    {
                        "{Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eros ex, pharetra laoreet dignissim eu, dictum at elit. Vestibulum elementum tortor vitae augue tristique, elementum venenatis felis blandit. Fusce gravida, nunc in fermentum mattis, lectus dolor ultricies quam, quis facilisis tellus turpis non turpis. Proin laoreet tellus ut ante pulvinar placerat. Vivamus laoreet, ipsum dapibus sollicitudin sodales, enim libero pellentesque turpis, ut euismod eros libero ut mauris. Nulla condimentum facilisis libero, in mollis mauris auctor non. Etiam ut nisi leo. Mauris lectus ipsum, eleifend eget molestie convallis, pretium non purus. Nam eget congue magna. Integer vehicula accumsan rutrum. Cras hendrerit.}"
                    }
                </Typography>
                <Box
                    sx={{
                        mt: 2,
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-end",
                    }}
                >
                    <Button variant="outlined" color="warning" sx={{ mr: 1 }}>
                        <EditOutlinedIcon />
                        <Typography sx={{ ml: 1 }}>EDIT</Typography>
                    </Button>
                    <Button variant="outlined" color="error" sx={{ mr: 1 }}>
                        <DeleteForeverOutlinedIcon />
                        <Typography sx={{ ml: 1 }}>DELETE</Typography>
                    </Button>
                    <Button variant="outlined" sx={{ mr: 1 }}>
                        <ShareOutlinedIcon />
                    </Button>
                    <Button variant="outlined">
                        <CommentOutlinedIcon />
                        <Typography sx={{ ml: 1 }}>{"{0}"}</Typography>
                    </Button>
                </Box>
            </Paper>
        </Grid>
    );
}
