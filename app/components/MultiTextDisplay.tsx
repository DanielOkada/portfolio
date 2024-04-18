"use client";
import React, { useState, useEffect } from "react";
import KeyboardTypingText from "./KeyboardTypingText";
import styles from "./styles.module.css";

interface MultiTextDisplayProps {
    texts: string[];
}

const MultiTextDisplay: React.FC<MultiTextDisplayProps> = ({ texts }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [end, setEnd] = useState(false);
    const [components, setComponents] = useState<React.ReactNode[]>([]);

    const handleTextDisplayEnd = () => {
        setEnd(true);
        setCurrentIndex((prevIndex) => prevIndex + 1);
    };

    useEffect(() => {
        if (texts[currentIndex] == null) {
            return;
        }

        const timer = setTimeout(() => {
            setEnd(false);

            const newComponent = (
                <KeyboardTypingText
                    key={currentIndex}
                    onDisplayEnd={handleTextDisplayEnd}
                >
                    {texts[currentIndex]}
                </KeyboardTypingText>
            );
            setComponents((prevComponents) => [
                ...prevComponents,
                newComponent,
            ]);
        }, texts[currentIndex].length * 10 + 1000);

        return () => clearTimeout(timer);
    }, [currentIndex, texts]);

    // カーソルを点滅させるかどうか
    const animation = () => {
        return end ? {} : { animation: "none" };
    };

    return (
        <div>
            {components.map((component, i) => (
                <div key={i}>
                    {component}
                    {i === components.length - 1 && (
                        <span
                            className={styles.cursor}
                            style={animation()}
                        ></span>
                    )}
                </div>
            ))}
        </div>
    );
};

export default MultiTextDisplay;
