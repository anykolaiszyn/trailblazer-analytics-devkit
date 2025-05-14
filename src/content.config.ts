import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    // Define your frontmatter schema here, e.g.:
    title: z.string(),
    date: z.string().optional(),
    // Add more fields as needed
  }),
});

export const collections = {
  blog,
};
