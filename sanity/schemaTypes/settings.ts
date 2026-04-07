import {defineField, defineType} from 'sanity'

export const settingsType = defineType({
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({name: 'siteName', type: 'string'}),
    defineField({name: 'heroSubtitle', title: 'Main Page Subtitle', type: 'text'}),
    defineField({name: 'footerText', type: 'text'}),
    defineField({name: 'contactEmail', type: 'string'}),
  ],
})