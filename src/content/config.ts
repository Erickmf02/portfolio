import {z, defineCollection, reference} from 'astro:content'


const projectSchema = z.object({
  title: z.string(),
  summary: z.string(),
  description: z.string(),
  url: z.string().optional(),
  repositories: z.array(z.object({title: z.string(), url: z.string()})).optional(),
  image: z.string(),
  images: z.array(z.string()).optional(),
  tags: z.array(z.string()),
  team: z.array(reference('user'))
});


const projectCollection = defineCollection({
  type: 'content',
  schema:  projectSchema
})

const userSchema = z.object({
  name: z.string(),
  description: z.string(),
})

const userCollection = defineCollection({
  type: 'content',
  schema: userSchema
})



export const collections = {
  'project': projectCollection,
  'user': userCollection
}