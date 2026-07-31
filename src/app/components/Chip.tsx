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
            type="button"
            className={[
                'focus-visible:outline-accent active:text-accent h-10 rounded-full border px-4 text-sm transition-colors duration-100 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:transition-none',
                isActive
                    ? 'border-accent text-accent bg-transparent'
                    : 'border-outline text-muted hover:border-accent hover:text-accent bg-transparent',
            ].join(' ')}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
