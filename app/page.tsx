import CodeSpace from "./components/CodeSpace";
import MultiTextDisplay from "./components/MultiTextDisplay";

export default function Home() {
    const texts = [
        "Hello, world!",
        "This is a multi-text display component.",
        "It displays each text one by one.",
        "Enjoy using it!",
    ];

    return (
        <main>
            <CodeSpace>
                <MultiTextDisplay texts={texts} />
            </CodeSpace>
        </main>
    );
}
