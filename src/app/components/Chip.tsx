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
            aria-pressed={isActive}
            className={[
                'focus-visible:outline-accent min-h-9 rounded-full border px-3.5 text-xs font-medium capitalize transition-colors duration-100 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:transition-none',
                isActive
                    ? 'border-foreground bg-foreground text-background'
                    : 'border-outline text-muted hover:border-foreground hover:bg-surface-low hover:text-foreground bg-transparent',
            ].join(' ')}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
