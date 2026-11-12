import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const rows = await db.favorite.findMany({ select: { effectId: true } });
    return NextResponse.json({ favorites: rows.map((r) => r.effectId) });
  } catch (error) {
    console.error('GET /api/favorites failed:', error);
    return NextResponse.json({ favorites: [] });
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { effectId?: string; favorite?: boolean };
    const { effectId, favorite } = body;

    if (!effectId || typeof effectId !== 'string' || typeof favorite !== 'boolean') {
      return NextResponse.json(
        { error: 'Invalid payload: expects { effectId: string, favorite: boolean }' },
        { status: 400 },
      );
    }

    if (favorite) {
      await db.favorite.upsert({
        where: { effectId },
        update: {},
        create: { effectId },
      });
    } else {
      await db.favorite.deleteMany({ where: { effectId } });
    }

    return NextResponse.json({ ok: true, effectId, favorite });
  } catch (error) {
    // Ephemeral hosts (e.g. Vercel serverless) have no writable SQLite file.
    // The client keeps localStorage as the source of truth, so acknowledge the
    // toggle politely instead of surfacing a 500.
    console.error('POST /api/favorites failed:', error);
    return NextResponse.json({ ok: true, effectId, favorite, persisted: false });
  }
}
