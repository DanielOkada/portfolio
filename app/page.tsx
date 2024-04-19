"use client";
import CodeSpace from "./components/CodeSpace";
import KeyboardTypingText from "./components/KeyboardTypingText";
import Cursor from "./components/Cursor";
import PartialDisplay from "./components/PartialDisplay";
import { useState } from "react";
import styles from "./page.module.css";

const Hello = () => {
    const [blink, setBlink] = useState(false);
    const [index, setIndex] = useState(1);
    const [currentIndex, setCurrentIndex] = useState(1);

    const handleDisplayEnd = () => {
        setBlink(true);
        setTimeout(() => {
            setBlink(false);
            setCurrentIndex(currentIndex + 2);
        }, 1500);
    };

    return (
        <CodeSpace>
            <PartialDisplay currentIndex={currentIndex}>
                <PartialDisplay currentIndex={index}>
                    <KeyboardTypingText
                        speed={50}
                        onDisplayEnd={() => setIndex((prev) => prev + 1)}
                    >
                        Hi, I&apos;m&nbsp;
                    </KeyboardTypingText>
                    <KeyboardTypingText
                        speed={50}
                        style={{ color: "red" }}
                        onDisplayEnd={() => handleDisplayEnd()}
                    >
                        Daniel Okada!
                    </KeyboardTypingText>
                </PartialDisplay>
                <br />
                <KeyboardTypingText
                    speed={50}
                    onDisplayEnd={() => handleDisplayEnd()}
                >
                    I&apos;m a master&apos;s student studying Computer Science.
                </KeyboardTypingText>
                <br />
                <KeyboardTypingText
                    speed={50}
                    onDisplayEnd={() => handleDisplayEnd()}
                >
                    I love programming.
                </KeyboardTypingText>
                <br />
                <KeyboardTypingText
                    speed={50}
                    style={{ color: "green" }}
                    onDisplayEnd={() => setBlink(true)}
                >
                    Enjoy exploring my portfolio!
                </KeyboardTypingText>
            </PartialDisplay>

            <Cursor blink={blink} />
        </CodeSpace>
    );
};

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.code}>
                <Hello />
            </div>
        </main>
    );
}
