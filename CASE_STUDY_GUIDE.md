# How to Add, Edit, or Remove Case Studies

This guide explains how to manage case studies on your Trailblazer Analytics site. No coding experience is required—just follow these steps!

## 1. Add a New Case Study
1. Open the folder: `src/content/caseStudies/`.
2. Create a new file. Name it something short and unique, like `client-name.mdx`.
3. Copy and paste this template at the top of your new file:
   ```mdx
   ---
   title: "Case Study Title"
   date: "2025-05-14"
   client: "Client Name"
   summary: "Short summary of the project."
   ---
   
   Write the full case study details here. You can use Markdown formatting.
   ```
4. Fill in the `title`, `date`, `client`, and `summary` fields. Then write your case study content below the `---` line.
5. Save the file. The new case study will appear on the homepage automatically.

## 2. Edit an Existing Case Study
1. In `src/content/caseStudies/`, find the `.mdx` file you want to update.
2. Open it and change any of the fields or content.
3. Save the file. Your changes will show up on the site after the next build or deploy.

## 3. Remove a Case Study
1. In `src/content/caseStudies/`, find the `.mdx` file you want to remove.
2. Delete the file.
3. The case study will disappear from the homepage automatically.

## 4. Tips
- You can preview your changes locally by running `pnpm run dev` and visiting the homepage.
- All case studies are version-controlled in Git, so you can always restore previous versions if needed.
- If you want to add new fields (like a project URL or image), ask your developer to update the schema in `src/content.config.ts` and the card layout in `CaseStudyCard.jsx`.

---
If you have questions or need help, contact your developer or project lead.
