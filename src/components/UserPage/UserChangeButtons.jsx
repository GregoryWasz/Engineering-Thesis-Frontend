import { Button, Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

export default function UserChangeButtons() {
    return (
        <Grid item xs={12} md={4} lg={3}>
            <Paper
                sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Button variant="outlined" color="warning">
                    <EditOutlinedIcon /> Change Username
                </Button>
                <Button sx={{ mt: 2 }} variant="outlined" color="warning">
                    <EditOutlinedIcon />
                    Change Password
                </Button>
                <Button sx={{ mt: 2 }} variant="outlined" color="warning">
                    <EditOutlinedIcon />
                    Change Email
                </Button>
                <Button sx={{ mt: 2 }} variant="outlined" color="error">
                    <DeleteForeverOutlinedIcon />
                    Delete Account
                </Button>
            </Paper>
        </Grid>
    );
}
