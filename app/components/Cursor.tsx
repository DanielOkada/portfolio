import styles from "./styles.module.css";

const CursorTypingText = ({ blink = false }) => {
    // カーソルを点滅させるかどうか
    const animation = () => {
        return blink ? {} : { animation: "none" };
    };

    return <span className={styles.cursor} style={animation()}></span>;
};

export default CursorTypingText;
