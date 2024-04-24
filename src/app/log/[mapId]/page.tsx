import {db} from '@/db/db';
import {currentUser} from '@clerk/nextjs/server';
import {heatMaps, mapDays} from '@/db/schema';
import {eq} from 'drizzle-orm';
import {Label} from '@/components/ui/label';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';

export default async function Page({params}: {params: {mapId: string}}) {
  async function handleLogActivity(formData: FormData) {
    'use server';
    const user = await currentUser();
    if (!user) {
      return;
    }

    const activity = formData.get('activity') as string;
    const note = formData.get('note') as string;

    await db.insert(mapDays).values({
      userId: user.id,
      date: new Date().toLocaleDateString('en-US'),
      notes: note,
      activity: activity,
      heatMapId: params.mapId,
    });

    console.log('Activity logged');
    const days = await db
      .select()
      .from(mapDays)
      .where(eq(mapDays.userId, user.id));
    console.log(days);
  }

  return (
    <form action={handleLogActivity} className='flex flex-col gap-2'>
      <div className='grid w-full items-center gap-1.5'>
        <Label htmlFor='activity'>Activity</Label>
        <Input
          type='activity'
          id='activity'
          name='activity'
          placeholder='Activity'
        />
      </div>
      <div className='grid w-full items-center gap-1.5'>
        <Label htmlFor='note'>Note</Label>
        <Input type='note' id='note' name='note' placeholder='Note' />
      </div>
      <Button type='submit'>Submit</Button>
    </form>
  );
}
