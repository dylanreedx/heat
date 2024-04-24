'use client';
import Calendar from '@/components/calendar';
import MapListItem from '@/components/map-list-item';
import {Button} from '@/components/ui/button';
import React, {useMemo} from 'react';

const mockActivities = [
  {
    date: '2024-04-01',
    activity: 'Running',
    notes: 'Ran 5 miles',
  },
  {
    date: '2024-04-03',
    activity: 'Strength Training',
    notes: 'Full body workout',
  },
  {
    date: '2024-04-04',
    activity: 'Yoga',
    notes: 'Vinyasa flow class',
  },
  {
    date: '2024-04-05',
    activity: 'Running',
    notes: 'Ran 3 miles',
  },
  {
    date: '2024-04-06',
    activity: 'Strength Training',
    notes: 'Upper body workout',
  },

  {
    date: '2024-04-9',
    activity: 'Strength Training',
    notes: 'Lower body workout',
  },
  {
    date: '2024-04-11',
    activity: 'Yoga',
    notes: 'Restorative class',
  },
  {
    date: '2024-04-12',
    activity: 'Running',
    notes: 'Ran 6 miles',
  },
  {
    date: '2024-04-13',
    activity: 'Strength Training',
    notes: 'Full body workout',
  },
  {
    date: '2024-04-14',
    activity: 'Running',
    notes: 'Ran 3 miles',
  },
  {
    date: '2024-04-15',
    activity: 'Strength Training',
    notes: 'Upper body workout',
  },
  {
    date: '2024-04-18',
    activity: 'Running',
    notes: 'Ran 4 miles',
  },
  {
    date: '2024-04-20',
    activity: 'Strength Training',
    notes: 'Lower body workout',
  },
  {
    date: '2024-04-21',
    activity: 'Yoga',
    notes: 'Vinyasa flow class',
  },
];

export default function Home() {
  return (
    <main className='max-w-2xl mx-auto'>
      <section className='p-4'>
        <Calendar
          initialYear={2024}
          initialMonth={3}
          activities={mockActivities}
        />
      </section>
      <section>
        <ul className='flex gap-2'>
          <MapListItem />
          <MapListItem />
        </ul>
      </section>
    </main>
  );
}
