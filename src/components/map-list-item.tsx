import {Button} from './ui/button';

export default function MapListItem() {
  return (
    <li className='bg-muted-foreground flex overflow-hidden items-center rounded-2xl'>
      <div className='w-24 aspect-square p-2'>
        <div className='aspect-square rounded-xl bg-foreground/10'></div>
      </div>
      <div className='flex justify-between items-center w-full mx-6'>
        <div>
          <h3 className='text-xl'>Leetcode</h3>
          <p className='bg-foreground/15 text-foreground/75 rounded-full px-4 text-sm'>
            30 Logged
          </p>
        </div>
        <Button>View</Button>
      </div>
    </li>
  );
}
