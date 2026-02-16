import {defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'News Articles',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'string'}),
    defineField({name: 'slug', type: 'slug', options: {source: 'title'}}),
    defineField({name: 'date', type: 'date'}),
    defineField({name: 'excerpt', type: 'text'}),
    defineField({
      name: 'category',
      type: 'string',
      options: { list: ['Governance', 'Agriculture', 'Security', 'Youth'] }
    }),
    defineField({name: 'content', title: 'Full Content', type: 'array', of: [{type: 'block'}]}),
  ],
})