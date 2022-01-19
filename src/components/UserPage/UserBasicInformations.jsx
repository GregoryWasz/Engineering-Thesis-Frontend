import { Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

export default function UserBasicInformations(props) {
    return (
        <Grid item xs={12} md={8} lg={9}>
            <Paper
                sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    minHeight: 276,
                }}
            >
                <Typography variant="h3">Username: {props.username}</Typography>
                <Typography variant="h4">Email: {props.email}</Typography>
                <Typography variant="h5">
                    Calorie limit: {props.calorieLimit}
                </Typography>
            </Paper>
        </Grid>
    );
}
