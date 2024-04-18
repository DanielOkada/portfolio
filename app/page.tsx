"use client";
import CodeSpace from "./components/CodeSpace";
import KeyboardTypingText from "./components/KeyboardTypingText";
import Cursor from "./components/Cursor";
import PartialDisplay from "./components/PartialDisplay";
import { useState } from "react";

export default function Home() {
    const [blink, setBlink] = useState(false);
    const [index, setIndex] = useState(1);
    const [currentIndex, setCurrentIndex] = useState(1);

    const handleDisplayEnd = () => {
        setBlink(true);
        setTimeout(() => {
            setBlink(false);
            setCurrentIndex(currentIndex + 2);
        }, 1000);
    };

    return (
        <main>
            <CodeSpace>
                <PartialDisplay currentIndex={currentIndex}>
                    <PartialDisplay currentIndex={index}>
                        <KeyboardTypingText
                            speed={50}
                            onDisplayEnd={() => setIndex((prev) => prev + 1)}
                        >
                            Hello,
                        </KeyboardTypingText>
                        <KeyboardTypingText
                            speed={50}
                            style={{ color: "red" }}
                            onDisplayEnd={() => handleDisplayEnd()}
                        >
                            world!
                        </KeyboardTypingText>
                    </PartialDisplay>
                    <br />
                    <KeyboardTypingText
                        speed={50}
                        style={{ color: "blue" }}
                        onDisplayEnd={() => handleDisplayEnd()}
                    >
                        This is a multi-text display component.
                    </KeyboardTypingText>
                    <br />
                    <KeyboardTypingText
                        speed={50}
                        style={{ color: "grey" }}
                        onDisplayEnd={() => handleDisplayEnd()}
                    >
                        It displays each text one by one.
                    </KeyboardTypingText>
                    <br />
                    <KeyboardTypingText
                        speed={50}
                        style={{ color: "green" }}
                        onDisplayEnd={() => setBlink(true)}
                    >
                        Enjoy using it!
                    </KeyboardTypingText>
                </PartialDisplay>

                <Cursor blink={blink} />
            </CodeSpace>
        </main>
    );
}
