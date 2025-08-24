export default function Chip({
    children,
    isActive,
    onClick,
}: {
    children: React.ReactNode;
    isActive: boolean;
    onClick: () => void;
}) {
    return (
        <button
            className={[
                'rounded-full border px-4 text-sm h-8',
                isActive
                    ? 'bg-white text-black'
                    : 'bg-transparent text-white hover:bg-white/[0.1] border-gray',
            ].join(' ')}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
