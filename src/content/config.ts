import {z, defineCollection, reference} from 'astro:content'

const projectCollection = defineCollection({
  type: 'data',
  schema:  z.object({
    title: z.string(),
    subtitle: z.string(),
    overview: z.object({
      description: z.string(),
      features: z.array(
        z.object({
          title: z.string(),
          subtitle: z.string(),
          icon: z.enum(['bell', 'network', 'cloud', 'file', 'iot'])
        })
      )
    }),
    tags: z.array(
      z.object({
        title: z.string(),
        principal: z.boolean(),
        url: z.string().url().optional()
      })
    ),
    featured: z.boolean(),
    url: z.string().optional(),
    repositories: z.array(z.object({title: z.string(), url: z.string()})).optional(),
    image: z.string().url(),
    images: z.array(z.string()).optional(),
    team: z.array(reference('user'))
  })
})

const userSchema = z.object({
  name: z.string(),
  description: z.string(),
})

const userCollection = defineCollection({
  type: 'data',
  schema: userSchema
})




export const collections = {
  'project': projectCollection,
  'user': userCollection
}