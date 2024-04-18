interface PartialDisplayProps {
    children: React.ReactNode[];
    currentIndex?: number;
}

const PartialDisplay: React.FC<PartialDisplayProps> = ({
    children,
    currentIndex = 0,
}) => {
    const components = children.slice(0, currentIndex);

    return (
        <span>
            {components.map((component, i) => (
                <span key={i}>{component}</span>
            ))}
        </span>
    );
};

export default PartialDisplay;
