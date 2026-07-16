import { NextResponse } from 'next/server';

export async function GET() {
    const res = await fetch(
        'https://github-contributions-api.jogruber.de/v4/alok8bb?y=last',
        { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
        return NextResponse.json({ contributions: [] }, { status: 502 });
    }

    const data = await res.json();
    return NextResponse.json(data);
}
