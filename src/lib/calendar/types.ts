export interface Activity {
  date: string; // in the format 'YYYY-MM-DD'
  activity: string;
  notes: string;
}
export type CalendarDayData = {
  id: string | null;
  date: string;
  activity: string | null;
  notes: string | null;
  userId: string | null;
  heatMapId: string;
  createdAt: string;
};
