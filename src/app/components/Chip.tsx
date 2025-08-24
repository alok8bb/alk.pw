export default function Chip({
    children,
    isActive,
}: {
    children: React.ReactNode;
    isActive: boolean;
}) {
    return (
        <button
            className={[
                'rounded-full border px-4 text-sm h-8',
                isActive
                    ? 'bg-white text-black'
                    : 'bg-transparent text-white hover:bg-white/[0.1] border-gray',
            ].join(' ')}
        >
            {children}
        </button>
    );
}
