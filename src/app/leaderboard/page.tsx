import {db} from '@/db/db';
import {leaderboard} from '@/db/schema';
export default async function Page() {
  const board = await db.select().from(leaderboard);
  console.log(board);
  /* 
 [
  {
    id: 1,
    userId: 1,
    heatMapId: 1,
    score: 100,
    createdAt: '2024-04-23 18:31:29'
  },
  {
    id: 2,
    userId: 2,
    heatMapId: 2,
    score: 95,
    createdAt: '2024-04-23 18:31:29'
  }
] 
  */
  return (
    <div>
      <h1>Leaderboard</h1>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Heat Map ID</th>
            <th>Score</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {board.map((row) => (
            <tr key={row.id}>
              <td>{row.userId}</td>
              <td>{row.heatMapId}</td>
              <td>{row.score}</td>
              <td>{row.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
