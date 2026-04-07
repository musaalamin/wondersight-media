import {defineField, defineType} from 'sanity'

export const teamMemberType = defineType({
  name: 'teamMember',
  title: 'Team Members',
  type: 'document',
  fields: [
    defineField({name: 'name', type: 'string'}),
    defineField({name: 'role', type: 'string'}),
    defineField({name: 'image', type: 'image', options: {hotspot: true}}),
    defineField({name: 'bio', type: 'text'}),
    defineField({name: 'linkedin', title: 'Social Link', type: 'url'}),
    defineField({name: 'order', title: 'Display Order', type: 'number'}),
  ],
})