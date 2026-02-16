import { createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  // It now looks for the variables you just added to .env
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
});

const builder = createImageUrlBuilder(client);
export const urlFor = (source: any) => builder.image(source);