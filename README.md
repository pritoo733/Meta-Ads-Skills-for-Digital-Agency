# Meta Ads Agency Growth skill

An independent, portable Agent Skill inspired by [Kai Bax's public YouTube channel](https://www.youtube.com/@kaibax). It helps digital agencies plan, audit, and improve their own Meta Ads client acquisition, with qualified attended calls and acquired clients as the main outcomes. The workflow can also support an agency's Meta Ads service delivery when the user asks for it.

This repository currently contains one installable skill: [`meta-ads-agency-growth/`](meta-ads-agency-growth/SKILL.md). It includes a source map with linked video timestamps. It is an independent synthesis and is not affiliated with or endorsed by Kai Bax.

For a single-file download, use the [skill ZIP](dist/meta-ads-agency-growth.zip) and extract its top-level folder into your agent's skill directory.

## Install

With the [Skills CLI](https://github.com/vercel-labs/skills), install it globally for a supported agent:

```bash
npx skills add pritoo733/meta-ads-agency-growth-skill --skill meta-ads-agency-growth -g -y
```

For a manual install, copy the **entire** `meta-ads-agency-growth` folder into a skill directory recognized by your agent. Keep `SKILL.md` and `references/` together. Examples:


| Agent | Personal skill folder | Project skill folder |
| --- | --- | --- |
| Codex | `~/.codex/skills/meta-ads-agency-growth/` | `.agents/skills/meta-ads-agency-growth/` |
| Claude Code | `~/.claude/skills/meta-ads-agency-growth/` | `.claude/skills/meta-ads-agency-growth/` |

Check the current [Codex](https://developers.openai.com/blog/skills-agents-sdk) and [Claude Code](https://code.claude.com/docs/en/skills) documentation if your installation uses a different location. Other agents need to support the [Agent Skills format](https://agentskills.io/specification) or provide their own adapter. Installation gives the agent instructions; live Meta Ads access still requires the user's authorized connector or export.

## Use

Examples:

- "Use meta-ads-agency-growth to build a Meta Ads acquisition plan for my web design agency. Our offer is $3,000/month and we can onboard four clients a month."
- "Audit this Meta Ads export, landing page, and CRM stage report. Find why booked calls are not becoming clients."
- "Develop three distinct Meta ad angles from these client interviews and our approved case studies."

Supply actual spend, funnel counts, margin, target market, and account context where possible. The skill will label unknowns and propose tests instead of promising the results shown in creator videos.

## Scope and sources

The package uses the open [`SKILL.md` format](https://agentskills.io/specification). The [source map](meta-ads-agency-growth/references/kai-bax-source-map.md) records the public videos reviewed and the specific ideas adopted. Because Meta products and advertising rules change, an agent should verify current controls and policies when acting on a live account.

The skill's original files are available under the [MIT license](LICENSE). The linked videos remain their creators' works; this repository contains brief summaries and source links, not their transcripts or ad scripts.
