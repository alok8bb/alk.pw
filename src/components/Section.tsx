export interface SectionProps {
    title: string;
    button_link?: string;
}

export const SectionHeader: React.FC<SectionProps> = ({
    title,
    button_link,
}) => {
    return (
        <header className="flex w-full justify-between gap-2">
            <h3>{title}</h3>
            {button_link && (
                <a
                    className="cursor-pointer underline decoration-dashed underline-offset-8"
                    href={button_link}
                >
                    See all
                </a>
            )}
        </header>
    );
};
