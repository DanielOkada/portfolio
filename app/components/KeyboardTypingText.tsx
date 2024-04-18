"use client";
import { useEffect, useRef, useState } from "react";

interface KeyboardTypingTextProps {
    children: any;
    speed?: number; // テキストが表示される速度（ミリ秒）
    onDisplayEnd?: () => void; // テキストの表示が終了したときに呼び出すコールバック
}

const KeyboardTypingText = ({
    children,
    speed = 100,
    onDisplayEnd,
}: KeyboardTypingTextProps) => {
    const [displayText, setDisplayText] = useState("");

    const savedCallback = useRef<Function | undefined>(() => {});
    useEffect(() => {
        savedCallback.current = onDisplayEnd;
    }, [onDisplayEnd]);
    useEffect(() => {
        let currentIndex = -1;
        const interval = setInterval(() => {
            if (currentIndex < children.length - 1) {
                currentIndex++;
                setDisplayText((prevText) => prevText + children[currentIndex]);
            } else {
                clearInterval(interval);
                if (savedCallback.current) {
                    savedCallback.current();
                }
            }
        }, speed); // テキストが表示される速度をプロパティから取得

        // cleanup
        return () => clearInterval(interval);
    }, [children, speed]);

    return <span>{displayText}</span>;
};

export default KeyboardTypingText;
