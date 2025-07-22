export const ExperienceEntry = ({
    title,
    description,
    duration,
}: {
    title: string;
    description?: React.ReactNode;
    duration: string;
}) => {
    return (
        <div className="flex items-center">
            <div className="flex-grow pl-6">
                <p className="font-semibold">{title}</p>
                {duration && (
                    <p className="text-base text-gray-400 mb-1">{duration}</p>
                )}
                <div className="text-base text-gray-300">{description}</div>
            </div>
        </div>
    );
};
