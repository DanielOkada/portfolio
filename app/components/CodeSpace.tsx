"use client";
import Paper from "@mui/material/Paper";

const CustomPaper = ({ children }: { children: React.ReactNode }) => {
    const style = {
        border: "2px solid lightgray", // 縁の色を設定
        borderRadius: "15px", // 角の丸みを設定
        padding: "3rem", // 適切なパディングを設定
    };

    return (
        <Paper elevation={15} style={style}>
            {children}
        </Paper>
    );
};

export default CustomPaper;
