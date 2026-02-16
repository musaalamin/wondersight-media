import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: '8dtezoms',
  dataset: 'production',
  apiVersion: '2024-01-01', // Use a stable past date
  useCdn: false, // Must be false to see "instant" changes
});