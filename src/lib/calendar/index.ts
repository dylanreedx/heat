import {heatMaps, mapDays, SelectDay, SelectMap} from '@/db/schema';
import {db} from '@/db/db';
import {and, eq} from 'drizzle-orm';
import {CalendarDayData} from './types';

export function getCalendarDataForMonth(
  year: number,
  month: number,
  activities: SelectDay[]
): CalendarDayData[] {
  const daysInMonth = getDaysInMonth(year, month);

  // @ts-ignore
  return daysInMonth.map((day) => {
    const activityForDay = activities.find((entry) => entry.date === day);
    return {
      id: activityForDay?.id || null,
      date: day,
      activity: activityForDay?.activity || null,
      notes: activityForDay?.notes || null,
      userId: activityForDay?.userId || '', // or any other default value
      heatMapId: activityForDay?.heatMapId || null,
      createdAt: activityForDay?.createdAt || null,
    };
  });
}

function getDaysInMonth(year: number, month: number): string[] {
  const date = new Date(year, month, 1);
  const days = [];

  while (date.getMonth() === month) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const formattedDate = `${month}/${day}/${year}`;
    days.push(formattedDate);
    date.setDate(date.getDate() + 1);
  }

  return days;
}

export async function getMapDaysForHeatMap(
  heatMapId: string,
  userId: string
): Promise<SelectDay[]> {
  return await db
    .select()
    .from(mapDays)
    .where(and(eq(mapDays.heatMapId, heatMapId), eq(mapDays.userId, userId)));
}

export async function getHeatMapDetails(
  heatMapId: string
): Promise<SelectMap | null> {
  const result = await db
    .select()
    .from(heatMaps)
    .where(eq(heatMaps.id, heatMapId));
  return result.length > 0 ? result[0] : null;
}
