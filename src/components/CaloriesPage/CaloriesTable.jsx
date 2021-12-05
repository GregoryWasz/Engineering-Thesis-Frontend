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
import { Button } from "@mui/material";

export default function CaloriesTable(props) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Product </TableCell>
                        <TableCell align="right">
                            Kcal in 100g serving
                        </TableCell>
                        <TableCell align="right">
                            Calories &nbsp;(kcal)
                        </TableCell>
                        <TableCell align="right">Date</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.products.map((row) => (
                        <TableRow
                            key={row.product_name}
                            sx={{
                                "&:last-child td, &:last-child th": {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell component="th" scope="row">
                                {row.product_name}
                            </TableCell>
                            <TableCell align="right">
                                {row.product_calorific_value}
                            </TableCell>
                            <TableCell align="right">
                                {row.product_calorific_value}
                            </TableCell>
                            <TableCell align="right">
                                {row.product_date}
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
    );
}
