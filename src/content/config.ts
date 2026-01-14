import { defineCollection, z } from "astro:content";

const project = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    image: z.union([z.string().url(), z.string().regex(/^\/.*/)]).optional(),
    link: z.string().url().optional(),
    code: z.string().url().optional(),
    gallery: z.array(z.string()).optional()
  })
});
export const collections = { project };