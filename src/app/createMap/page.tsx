import MapListItem from '@/components/map-list-item';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {db} from '@/db/db';
import {heatMaps} from '@/db/schema';
import {currentUser} from '@clerk/nextjs/server';
import {eq} from 'drizzle-orm';
export default async function Page() {
  async function onSubmit(formData: FormData) {
    'use server';
    const user = await currentUser();
    if (!user) {
      return;
    }
    const count = await db
      .select()
      .from(heatMaps)
      .where(eq(heatMaps.createdBy, user.id));
    if (count.length >= 3) {
      return;
    }

    const activity = formData.get('activity') as string;
    const description = formData.get('description') as string;
    await db
      .insert(heatMaps)
      .values({name: activity, description, createdBy: user.id});
  }
  return (
    <main className='max-w-md mx-auto'>
      <div className='py-4'>
        <h1 className='text-2xl'>Create Heatmap</h1>
        <p className='text-foreground/75'>
          Track and build your habits. To keep things simple and sincere you can
          only make 3.
        </p>
      </div>
      <form action={onSubmit} className='flex flex-col gap-2'>
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
          <Label htmlFor='description'>Description</Label>
          <Input
            type='description'
            name='description'
            id='description'
            placeholder='Description'
          />
        </div>
        <Button type='submit'>Add</Button>
      </form>
      <div>
        <ul className='flex gap-2'>
          <li>
            <h3>Gym</h3>
            <Button>Create</Button>
          </li>
          <li>
            <h3>Daily Studying</h3>
            <Button>Create</Button>
          </li>
          <li>
            <h3>Running</h3>
            <Button>Create</Button>
          </li>
        </ul>
      </div>
    </main>
  );
}
