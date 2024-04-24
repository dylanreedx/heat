import {randomUUID} from 'crypto';
import {sql} from 'drizzle-orm';
import {integer, sqliteTable, text} from 'drizzle-orm/sqlite-core';

export const mapDays = sqliteTable('map_days', {
  id: text('id', {length: 36})
    .primaryKey()
    .$defaultFn(() => randomUUID()), // Generate a UUID for the id
  date: text('date').notNull(),
  activity: text('activity').notNull(),
  notes: text('notes'),
  userId: text('user_id').notNull(),
  heatMapId: integer('heat_map_id').notNull(),
  createdAt: text('created_at')
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export const heatMaps = sqliteTable('heat_maps', {
  id: text('id', {length: 36})
    .primaryKey()
    .$defaultFn(() => randomUUID()),
  name: text('name').notNull(),
  description: text('description'),
  isPublic: integer('is_public').default(0).notNull(),
  createdBy: text('created_by').notNull(),
  createdAt: text('created_at')
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export const leaderboard = sqliteTable('leaderboard', {
  id: integer('id').primaryKey(),
  userId: text('user_id').notNull(),
  heatMapId: integer('heat_map_id')
    .notNull()
    .references(() => heatMaps.id, {onDelete: 'cascade'}),
  score: integer('score').notNull(),
  createdAt: text('created_at')
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export type InsertMap = typeof heatMaps.$inferInsert;
export type SelectMap = typeof heatMaps.$inferSelect;
export type InsertDay = typeof mapDays.$inferInsert;
export type SelectDay = typeof mapDays.$inferSelect;
export type InsertLeaderboard = typeof leaderboard.$inferInsert;
