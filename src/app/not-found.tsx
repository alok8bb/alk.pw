import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="my-auto flex h-full flex-col items-center justify-center gap-3">
            <img src="https://i.giphy.com/MDJ9IbxxvDUQM.webp" alt="cat" />
            <h1 className="text-foreground w-full text-center text-xl font-semibold">
                Resource Not Found
            </h1>
            <Link
                href="/"
                className="bg-accent text-accent-foreground focus-visible:outline-accent inline-flex min-h-10 items-center rounded-md px-4 py-2 focus-visible:outline-2 focus-visible:outline-offset-4"
            >
                Go Home
            </Link>
        </div>
    );
}
