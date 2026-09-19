import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const project = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/project" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    image: z.union([z.url(), z.string().regex(/^\/.*/)]).optional(),
    link: z.url().optional(),
    code: z.url().optional(),
    gallery: z.array(z.string()).optional()
  })
});

export const collections = { project };