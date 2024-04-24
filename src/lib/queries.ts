import {db} from '@/db/db';
import {heatMaps, mapDays} from '@/db/schema';
import {currentUser, User} from '@clerk/nextjs/server';
import {eq} from 'drizzle-orm';

export async function getUserMaps(user: User) {
  const maps = await db
    .select()
    .from(heatMaps)
    .where(eq(heatMaps.createdBy, user.id));

  return maps;
}
