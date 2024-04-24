'use client';
import {Plus} from '@phosphor-icons/react';
import Link from 'next/link';
export default function FloatingNav() {
  return (
    <div className='absolute bottom-10 right-0 left-0 mx-auto bg-muted-foreground flex px-6 py-2 w-fit rounded-full'>
      <ul className='flex gap-4 items-center'>
        <li>
          <Link href='/leaderboard'>Leaderboard</Link>
        </li>
        <li>
          <Link href='/log'>
            <Plus className='h-6 w-6' />
          </Link>
        </li>
        <li>
          <Link href='/'>Heatmaps</Link>
        </li>
      </ul>
    </div>
  );
}
