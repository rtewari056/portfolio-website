import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
    name: 'experiences',
    title: 'Experiences',
    type: 'document',
    fields: [
        defineField({
            name: 'year',
            title: 'Year',
            type: 'string'
        }),
        defineField({
            name: 'works',
            title: 'Works',
            type: 'array',
            of: [
                defineArrayMember({
                    name: 'workExperience',
                    title: 'Work Experience',
                    type: 'document',
                    fields: [
                        {
                            name: 'role',
                            title: 'Role',
                            type: 'string'
                        },
                        {
                            name: 'company',
                            title: 'Company',
                            type: 'string'
                        },
                        {
                            name: 'description',
                            title: 'Description',
                            type: 'string'
                        }
                    ]

                })
            ]
        }),
    ]
})