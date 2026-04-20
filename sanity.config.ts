import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schema } from './sanity/schemaTypes' // This pulls in your index.ts

export default defineConfig({
  name: 'default',
  title: 'Wonder Sight Studio',
  // Using env variables for security as we discussed
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '8dtezoms', 
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  basePath: '/studio',
  
  plugins: [
    structureTool(), 
    visionTool() // This adds a cool "Query" tab to test your data
  ],
  
  schema: schema, 
})