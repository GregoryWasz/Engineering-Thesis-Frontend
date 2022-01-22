import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Paper, Typography } from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Box } from "@mui/system";

function DatePickerComp(props) {
    /* Wyświetlanie komponentu do wybierania daty */
    const [startDate, setStartDate] = useState(new Date());

    return (
        <Grid item xs={12} md={3} lg={3}>
            <Paper
                sx={{
                    pl: 2,
                    pt: 2,
                    pr: 2,
                    pb: 2,

                    minHeight: 112,
                }}
            >
                <Box>
                    <Typography variant="h5" sx={{ mb: 0.5 }}>
                        Select Date
                    </Typography>
                    <DatePicker
                        selected={startDate}
                        dateFormat="yyyy/MM/dd"
                        onChange={(date) => {
                            setStartDate(date);
                            props.setDate(date);
                        }}
                    />
                </Box>
            </Paper>
        </Grid>
    );
}

export default DatePickerComp;
