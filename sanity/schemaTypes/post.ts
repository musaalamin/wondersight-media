import {defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'News Articles',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'string'}),
    defineField({name: 'slug', type: 'slug', options: {source: 'title'}}),
    
    // 1. This is your Header/Cover Image
    defineField({
      name: 'mainImage',
      title: 'Main Image (Cover)',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),

    defineField({name: 'date', type: 'date'}),
    defineField({name: 'excerpt', type: 'text'}),
    
    defineField({
      name: 'category',
      type: 'string',
      options: { list: [
      // We change the label but keep the value consistent for the URL
      { title: 'Governance & Security', value: 'governance-security' },
      { title: 'Agriculture', value: 'agriculture' },
      { title: 'Youth', value: 'youth' }
    ] }
    }),

    // 2. This is the "Full Content" section you were asking about
    // We REPLACE the old simple content field with this one:
    defineField({
      name: 'content',
      title: 'Full Content',
      type: 'array',
      of: [
        { type: 'block' }, // This allows normal text paragraphs
        { 
          type: 'image',   // This allows images INSIDE the text body
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            }
          ]
        }
      ]
    }),
  ],
})