import type {Activity, CalendarDay} from './types';

export function getCalendarDataForMonth(
  year: number,
  month: number,
  activities: Activity[]
): CalendarDay[] {
  const daysInMonth = getDaysInMonth(year, month);

  return daysInMonth.map((day) => {
    const activityForDay = activities.find((entry) => entry.date === day);
    return {
      date: day,
      activity: activityForDay || null,
    };
  });
}

export function getDaysInMonth(year: number, month: number): string[] {
  const date = new Date(year, month, 1);
  const days = [];

  while (date.getMonth() === month) {
    days.push(new Date(date).toISOString().split('T')[0]);
    date.setDate(date.getDate() + 1);
  }

  return days;
}
