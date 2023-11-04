import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({
      name: 'profilePic',
      title: 'profilePic',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'circleImg1',
      title: 'circleImg1',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'circleImg2',
      title: 'circleImg2',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'circleImg3',
      title: 'circleImg3',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
});
