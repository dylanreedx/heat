export interface Activity {
  date: string; // in the format 'YYYY-MM-DD'
  activity: string;
  notes: string;
}

export interface CalendarDay {
  date: string;
  activity: Activity | null;
}
