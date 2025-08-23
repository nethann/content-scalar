import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/lib/schema.js',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.NEON_DATABASE_URL,
  },
  verbose: true,
  strict: true,
});