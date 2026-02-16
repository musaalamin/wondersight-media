import {defineField, defineType} from 'sanity'

export const jobType = defineType({
  name: 'job',
  title: 'Job Postings',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'string'}),
    defineField({name: 'org', title: 'Organization', type: 'string'}),
    defineField({name: 'loc', title: 'Location', type: 'string'}),
    defineField({name: 'date', type: 'date'}),
    defineField({name: 'link', type: 'url'}),
    defineField({
      name: 'tag',
      type: 'string',
      options: { list: ['NGO', 'Agric', 'Govt', 'Creative', 'Scholarship'] }
    }),
  ],
})