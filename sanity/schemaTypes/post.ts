import {defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'News Articles',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'string'}),
    defineField({name: 'slug', type: 'slug', options: {source: 'title'}}),
    
    // 1. Header/Cover Image
    defineField({
      name: 'mainImage',
      title: 'Main Image (Cover)',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', type: 'string', title: 'Alt Text' }]
    }),

    // 2. NEW: Article Gallery (Max 3 supporting images)
    defineField({
      name: 'gallery',
      title: 'Supporting Gallery',
      type: 'array',
      description: 'Add up to 3 additional images for this report.',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', type: 'string', title: 'Alt Text' },
            { name: 'caption', type: 'string', title: 'Caption' }
          ]
        }
      ],
      validation: Rule => Rule.max(3).error('Max 3 gallery images allowed.')
    }),

    defineField({name: 'date', type: 'date'}),
    defineField({name: 'excerpt', type: 'text'}),
    
    defineField({
      name: 'category',
      type: 'string',
      options: { 
        list: [
          { title: 'Governance & Security', value: 'governance-security' },
          { title: 'Agriculture', value: 'agriculture' },
          { title: 'Youth', value: 'youth' }
        ] 
      }
    }),

    defineField({
      name: 'content',
      title: 'Full Content',
      type: 'array',
      of: [
        { type: 'block' }, 
        { 
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', type: 'string', title: 'Alt Text' },
            { name: 'caption', type: 'string', title: 'Caption' }
          ]
        }
      ]
    }),
  ],
})