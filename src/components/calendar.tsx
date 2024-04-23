'use client';
import {getCalendarDataForMonth} from '@/lib/calendar';
import {Activity, CalendarDay} from '@/lib/calendar/types';
import React, {useMemo} from 'react';

interface CalendarProps {
  initialYear: number;
  initialMonth: number;
  activities: Activity[];
}

export default function Calendar({
  initialYear,
  initialMonth,
  activities,
}: CalendarProps) {
  const [year, setYear] = React.useState(initialYear);
  const [month, setMonth] = React.useState(initialMonth);

  const calendarData: CalendarDay[] = useMemo(
    () => getCalendarDataForMonth(year, month, activities),
    [year, month, activities]
  );

  const monthName = new Date(year, month).toLocaleString('en-US', {
    month: 'long',
  });

  return (
    <div className='flex flex-col'>
      <h2 className='text-2xl font-bold mb-4'>
        {monthName} {year}
      </h2>

      <div className='flex flex-wrap gap-2 max-w-xl'>
        {calendarData.map((day) => (
          <div
            key={day.date}
            className={`w-8 h-8 rounded-md ${
              day.activity ? 'bg-accent text-white' : 'bg-muted-foreground'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
