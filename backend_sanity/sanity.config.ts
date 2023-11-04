import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import schemas from './schemas/schema'

export default defineConfig({
  title: process.env.SANITY_STUDIO_TITLE as string,

  projectId: process.env.SANITY_STUDIO_PROJECT_ID as string,
  dataset: process.env.SANITY_STUDIO_DATASET_ID as string,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemas,
  },
})
