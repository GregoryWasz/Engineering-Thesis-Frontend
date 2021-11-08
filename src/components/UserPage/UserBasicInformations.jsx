import { Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

export default function UserBasicInformations() {
    return (
        <Grid item xs={12} md={8} lg={9}>
            <Paper
                sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    minHeight: 224,
                }}
            >
                <Typography variant="h2"> {"{Username}"}</Typography>
                <Typography variant="h3"> {"{Email}"}</Typography>
            </Paper>
        </Grid>
    );
}
