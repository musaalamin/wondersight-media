import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {jobType} from './sanity/schemaTypes/job'
import {postType} from './sanity/schemaTypes/post'

export default defineConfig({
  name: 'default',
  title: 'Wonder Sight CMS',
  projectId: '8dtezoms',
  dataset: 'production',
  basePath: '/studio',
  plugins: [structureTool()],
  schema: {
    types: [jobType, postType],
  },
})