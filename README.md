<p align="center"><img src="assets/hero.svg" alt="Meta Ads Agency Growth: attract, qualify, attend, win" width="100%"></p>

<h1 align="center">Meta Ads Skills for Digital Agency</h1>

<p align="center">A portable Agent Skill for digital agencies that want to plan, audit, and improve Meta Ads client acquisition.</p>

<p align="center">
  <a href="#install"><img alt="Install for Codex" src="https://img.shields.io/badge/Install-For%20Codex-14b8a6?style=for-the-badge"></a>
  <a href="dist/meta-ads-agency-growth.zip"><img alt="Download skill ZIP" src="https://img.shields.io/badge/Download-Skill%20ZIP-0f766e?style=for-the-badge"></a>
  <a href="LICENSE"><img alt="MIT License" src="https://img.shields.io/badge/License-MIT-334155?style=for-the-badge"></a>
</p>

<p align="center"><a href="#how-it-works">How it works</a> · <a href="#install">Install</a> · <a href="#try-it">Try it</a> · <a href="#whats-inside">What's inside</a></p>

<p align="center"><strong>Quick install for Codex — copy this exact command</strong></p>

```bash
npx --yes --package=https://github.com/pritoo733/Meta-Ads-Skills-for-Digital-Agency/archive/refs/heads/main.tar.gz meta-ads-skill-install
```

---

## How it works

More leads do not always mean more clients. This skill helps an AI agent plan and improve the full path from **Meta ad → qualified prospect → booked call → attended call → client**, using the agency's own evidence.

| 01 · Decide | 02 · Build | 03 · Improve |
| --- | --- | --- |
| Validate the offer, buyer, economics, and capacity. | Create image and video ads, a qualification-first funnel, and reliable measurement. | Review qualified bookings, attendance, sales, and collected revenue; test the weakest stage. |

The [operating runbook](meta-ads-agency-growth/references/appointment-operating-runbook.md) gives each stage a readiness gate. The agent should show what it verified, what evidence it used, and what still needs attention.

### What you can use it for

| Request | What the agent returns |
| --- | --- |
| Build or assess an offer | Buyer-specific package options, evidence gaps, economics, and a test recommendation. |
| Plan campaigns and ads | Campaign and ad set hypotheses, image and video concepts, copy, landing path, and measurement plan. |
| Audit an account or funnel | Findings grounded in the connected account or supplied exports, with gaps labeled clearly. |
| Improve performance | A prioritized test tied to qualified bookings, attendance, sales, and business economics. |

**The skill does not guarantee results or connect to an ad account by itself.** Account audits require authorized access or current exports. Results depend on the offer, market, budget, tracking, follow-up, and sales process.

## Install

Install for Codex using the repository's direct installer. This command works in Windows PowerShell, macOS, and Linux with Node.js 18 or newer and npm:

```bash
npx --yes --package=https://github.com/pritoo733/Meta-Ads-Skills-for-Digital-Agency/archive/refs/heads/main.tar.gz meta-ads-skill-install
```

The installer copies and verifies all nine skill files in `~/.agents/skills/meta-ads-agency-growth`. It installs only for Codex and does not invoke the Skills CLI or PromptScript. The skill will be available next turn. Run the command again to update the bundled files; your additional files and other skills are preserved.

If you cloned the repository, you can also run:

```bash
node scripts/install.mjs
```

**Installing through an AI agent:** copy this request:

> Install Meta Ads Agency Growth for Codex by running this exact command: `npx --yes --package=https://github.com/pritoo733/Meta-Ads-Skills-for-Digital-Agency/archive/refs/heads/main.tar.gz meta-ads-skill-install`. Use this repository's direct installer. Verify the installed files and report its actual output.

Older instructions using the third-party `npx skills add` command still invoke a different installer and can encounter its [PromptScript warning](https://github.com/vercel-labs/skills/issues/1496), even after this repository is updated. Replace saved install commands with the command above.

**Other agents or manual install:** download the [skill ZIP](dist/meta-ads-agency-growth.zip), extract it, and place the entire `meta-ads-agency-growth` folder in your agent's documented skill directory. The agent must support the [Agent Skills format](https://agentskills.io/specification). Keep `SKILL.md` and `references/` together.

## Try it

Give the agent enough context to make a useful decision. For example:

> Use `meta-ads-agency-growth` to build a Meta Ads acquisition plan for my web design agency. Our service is $3,000 per month, we can onboard four clients per month, and our test budget is $1,500. Show the assumptions and the numbers we need to track.

> Use `meta-ads-agency-growth` to help my agency choose a Meta Ads service offer. Here are our services, target industries, delivery capacity, costs, and client results. Build two or three realistic packages, compare them, and show what we must validate before running ads.

> Use `meta-ads-agency-growth` to audit this Meta Ads export, landing page, and CRM stage report. Explain why booked calls are not becoming clients, and rank the next three tests.

> Use `meta-ads-agency-growth` to develop three distinct Meta ad angles from these client interviews and approved case studies. Include the evidence behind each claim.

Actual spend, stage counts, margin, market, reporting period, and account context make the output stronger. The skill labels missing inputs and proposes tests instead of treating outside examples as forecasts.

### Get more useful recommendations

| Give the agent | Why it matters |
| --- | --- |
| Your real offer, ideal client, margin, and sales capacity | Keeps the plan tied to what your agency can sell and deliver. |
| Spend and counts for leads, qualified prospects, bookings, attended calls, and clients | Shows which stage needs attention before changing ads. |
| The date range, attribution setting, and CRM definitions | Keeps unlike numbers from being compared as if they were the same. |
| Approved case studies and customer language | Supports stronger creative without inventing proof. |

Ask for **one prioritized test with a budget cap and review point** when you want a concrete next step.

## What's inside

```text
meta-ads-agency-growth/
├── SKILL.md                         Main instructions and decision boundaries
├── LICENSE                          Skill license
└── references/
    ├── appointment-operating-runbook.md  Readiness gates from offer through follow-up
    ├── agency-workflow.md           Intake, metrics, diagnosis, and deliverables
    ├── acquisition-system.md        A practical framework for the agency acquisition funnel
    ├── validation-and-decisions.md  Offer validation, economic targets, and pilot decisions
    ├── offer-building.md            Turn agency capabilities into testable offer options
    ├── offer-assessment.md          Offer verdict, evidence checks, and research notes
    └── meta-lead-generation.md      Meta lead-quality features and implementation checks
```

## Sources and scope

This is an independent, community-maintained Agent Skill for **Meta Ads only**. It does not promise a particular number of leads, appointments, clients, or revenue. An agent should verify current Meta controls, ad rules, and privacy requirements before changing a live account. The project is not affiliated with or endorsed by Meta.

The skill files are [MIT licensed](LICENSE). Recommendations should be grounded in the agency's own account, funnel, and financial evidence.

---

## Results and testimonials

<p align="center"><img src="assets/community.svg" alt="Real stories, clear context: share your experience using this skill" width="100%"></p>

We have not published verified testimonials from users of this skill yet. If it helped your agency make a decision or improve a measured outcome, [share your experience](https://github.com/pritoo733/Meta-Ads-Skills-for-Digital-Agency/issues/new?template=share-a-result.yml). Include what you used it for, the result or decision it supported, the period measured, and any evidence you can share. A useful decision is worth sharing even without a revenue result.

<p align="center">
  <a href="https://github.com/pritoo733/Meta-Ads-Skills-for-Digital-Agency/issues/new?template=share-a-result.yml"><img alt="Share your result" src="https://img.shields.io/badge/Share%20your%20result-Open%20a%20GitHub%20issue-14b8a6?style=for-the-badge"></a>
</p>

Quotes will be published only with the contributor's permission and enough context to avoid implying a typical or guaranteed outcome. Remove client names and confidential account data unless you have permission to publish them.
