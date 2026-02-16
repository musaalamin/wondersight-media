import { createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: '8dtezoms',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
});

// Use the correct builder function
const builder = createImageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);