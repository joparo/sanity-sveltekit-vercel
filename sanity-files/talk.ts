import {defineField, defineType} from 'sanity'

// @ts-check
export default defineType({
  name: 'talk',
  title: 'Talk',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'speaker',
      title: 'Speaker',
      type: 'reference',
      to: [{type: 'speaker'}],
    }),
    defineField({
      name: 'day',
      title: 'Day',
      type: 'reference',
      to: [{type: 'day'}],
    }),
    defineField({
      name: 'time',
      title: 'Time',
      type: 'datetime',
      options: {
        timeStep: 60,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      start: 'time',
      time: 'day.date',
    },
    prepare(selection) {
      const {title, start, time} = selection
      const startT = new Date(start).toTimeString().split(' ')[0]
      const day = new Date(time).toLocaleDateString('en-us', {month: 'short', day: 'numeric'})
      return {
        title: `${title}`,
        subtitle: `${day} @ ${startT}`,
      }
    },
  },
})
