import { type SchemaTypeDefinition } from 'sanity'

import works from './works.schema';
import testimonials from './testimonials.schema';
import brands from './brands.schema';
import about from './about.schema';
import experiences from './experiences.schema';
import skills from './skills.schema';
// import workExperience from './workExperience.schema';
import contact from './contact.schema';
import openSource from './openSource.schema';
import home from './home.schema';


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    home,
    works,
    testimonials,
    brands,
    about,
    skills,
    // workExperience,
    experiences,
    contact,
    openSource
  ]
}
