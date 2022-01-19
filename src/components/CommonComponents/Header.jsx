import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import jwt_decode from "jwt-decode";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { signInPagePath } from "../Consts/paths";
import { useHistory } from "react-router";

export default function Header() {
    const history = useHistory();

    async function handleLogout(e) {
        e.preventDefault();
        localStorage.removeItem("bearer");
        history.push(signInPagePath);
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ mr: 2, flexGrow: 4 }}
                    >
                        Calorie Vault
                    </Typography>

                    <Box sx={{ flexGrow: 3 }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            href="/forum"
                        >
                            <ForumOutlinedIcon />
                            <Typography
                                sx={{ ml: 1 }}
                                display={{ xs: "none", md: "block" }}
                            >
                                Forum
                            </Typography>
                        </IconButton>

                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            href="/calories"
                        >
                            <LocalFireDepartmentOutlinedIcon />
                            <Typography
                                sx={{ ml: 1 }}
                                display={{ xs: "none", md: "block" }}
                            >
                                Calories
                            </Typography>
                        </IconButton>

                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ justifyContent: "flex-end" }}
                            href="/statistics"
                        >
                            <QueryStatsOutlinedIcon />
                            <Typography
                                sx={{ ml: 1 }}
                                display={{ xs: "none", md: "block" }}
                            >
                                Statistics
                            </Typography>
                        </IconButton>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Button color="inherit" href="/user">
                            <AccountCircleOutlinedIcon />
                            <Typography
                                sx={{ ml: 1, textTransform: "capitalize" }}
                                display={{ xs: "none", md: "block" }}
                            >
                                {
                                    jwt_decode(localStorage.getItem("bearer"))[
                                        "sub"
                                    ]
                                }
                            </Typography>
                        </Button>
                        <Button color="inherit" onClick={handleLogout}>
                            <LogoutOutlinedIcon />
                            <Typography
                                sx={{ ml: 1, textTransform: "capitalize" }}
                                display={{ xs: "none", md: "block" }}
                            >
                                Logout
                            </Typography>
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
