# 🚧 QoL Enhancements & Important Next Steps

## Quick Wins
- **Global SEO** component with meta + JSON‑LD FAQ.
- **Brand fonts** via Google Fonts (`Inter`, `Outfit`).
- **Image optimisation** using Astro `<Image>`.

## Phase 1 Targets
| Feature | Benefit |
|---------|---------|
| Plausible Analytics script | Privacy‑friendly usage stats |
| Formspree honeypot field | Spam reduction |
| CaseStudyCard dynamic MDX | Show portfolio wins |

## Phase 2 (AI + Monetisation)
- `/api/ai/insight` endpoint (proxy to your LLM).
- NextAuth + Stripe to gate premium resources.
- GitHub Action cross‑posting to LinkedIn & X.

## Maintenance
- Quarterly `pnpm audit fix`.
- Lighthouse CI budget: **Perf ≥ 90**, **a11y ≥ 95**.

## Maintenance Checklist

- [ ] Run `pnpm audit fix` (quarterly or before major releases)
- [ ] Review and commit any dependency/security updates
- [ ] Run Lighthouse CI and check for:
  - [ ] Performance ≥ 90
  - [ ] Accessibility ≥ 95
- [ ] Review and update guides as needed

---
For reminders, set a recurring calendar event or task in your project management tool to run `pnpm audit fix` every 3 months.
