"use client";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
    customPaper: {
        border: "2px solid lightgray", // 縁の色を設定
        borderRadius: "15px", // 角の丸みを設定
        padding: theme.spacing(2), // 適切なパディングを設定
    },
}));

const CustomPaper = ({ children }) => {
    const classes = useStyles();

    return (
        <Paper
            className={classes.customPaper}
            elevation={15}
            style={{ width: "300px" }}
        >
            {children}
        </Paper>
    );
};

export default CustomPaper;
