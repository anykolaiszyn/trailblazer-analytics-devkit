import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string().optional(),
    description: z.string().optional(),
  }),
});

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string().optional(),
    client: z.string().optional(),
    summary: z.string().optional(),
  }),
});

export const collections = {
  blog,
  caseStudies,
};
