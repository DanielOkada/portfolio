"use client";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

interface KeyboardTypingTextProps {
    text: string;
    speed?: number; // テキストが表示される速度（ミリ秒）
}

const KeyboardTypingText = ({ text, speed = 100 }: KeyboardTypingTextProps) => {
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        let currentIndex = -1;
        const interval = setInterval(() => {
            if (currentIndex < text.length - 1) {
                currentIndex++;
                setDisplayText((prevText) => prevText + text[currentIndex]);
            } else {
                clearInterval(interval);
            }
        }, speed); // テキストが表示される速度をプロパティから取得

        // cleanup
        return () => clearInterval(interval);
    }, [text, speed]);

    // テキストが全部表示されたときだけカーソルを点滅させる
    const animation = () => {
        if (displayText.length === text.length) {
            return {};
        }
        return { animation: "none" };
    };

    return (
        <div>
            {displayText}
            <span className={styles.cursor} style={animation()}></span>
        </div>
    );
};

export default KeyboardTypingText;
