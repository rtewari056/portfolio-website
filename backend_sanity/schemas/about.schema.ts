import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'about',
    title: 'About',
    type: 'document',
    fields: [
        defineField({
            name: 'description',
            title: 'Description',
            type: 'string'
        }),
        defineField({
            name: 'resumeLink',
            title: 'Resume Link',
            type: 'string'
        }),
        defineField({
            name: 'imgUrl',
            title: 'ImgUrl',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),

    ]
})