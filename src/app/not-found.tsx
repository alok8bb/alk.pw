import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex items-center justify-center flex-col h-full my-auto gap-3">
            <img src="https://i.giphy.com/MDJ9IbxxvDUQM.webp" alt="cat" />
            <h1 className="text-center w-full text-xl font-semibold text-white">Resource Not Found</h1>
            <Link href="/" className="bg-white text-black px-4 py-2 rounded-md">
                Go Home
            </Link>
        </div>
    );
}
