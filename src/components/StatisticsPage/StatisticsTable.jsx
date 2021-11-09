import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { Button, Grid } from "@mui/material";

function createData(date, weight) {
    return { date, weight };
}

const rows = [
    createData("2005-01-02T03:01:45", 100),
    createData("2005-01-03T03:01:45", 200),
    createData("2005-01-04T03:01:45", 300),
    createData("2005-01-05T03:01:45", 350),
    createData("2005-01-06T03:01:45", 400),
];

export default function StatisticsTable() {
    return (
        <Grid item xs={12} md={12} lg={12}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Date </TableCell>
                            <TableCell align="right">
                                Weight &nbsp;(kg)
                            </TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.date}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.date}
                                </TableCell>

                                <TableCell align="right">
                                    {row.weight}
                                </TableCell>
                                <TableCell align="right">
                                    <Button
                                        size="small"
                                        variant="outlined"
                                        color="warning"
                                        sx={{ m: 0.1 }}
                                    >
                                        <EditOutlinedIcon />
                                    </Button>
                                    <Button
                                        size="small"
                                        variant="outlined"
                                        color="error"
                                        sx={{ m: 0.1 }}
                                    >
                                        <DeleteForeverOutlinedIcon />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    );
}
