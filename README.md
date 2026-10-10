<p align="center"><img src="assets/hero.svg" alt="Meta Ads Agency Growth: attract, qualify, attend, win" width="100%"></p>

<h1 align="center">Meta Ads Skills for Digital Agency by Kai Bax</h1>

<p align="center">A portable Agent Skill for digital agencies that want to plan, audit, and improve Meta Ads client acquisition.</p>

<p align="center">
  <a href="meta-ads-agency-growth/SKILL.md"><img alt="Agent Skill" src="https://img.shields.io/badge/Agent%20Skill-SKILL.md-14b8a6?style=flat-square"></a>
  <a href="LICENSE"><img alt="MIT License" src="https://img.shields.io/badge/License-MIT-334155?style=flat-square"></a>
</p>

<p align="center"><a href="#install">Install</a> · <a href="#what-the-skill-does">What it does</a> · <a href="#try-it">Try it</a> · <a href="#testimonials">Testimonials</a></p>

---

## The idea

An agency needs more than cheap leads. This skill helps an AI agent follow the path from **Meta ad → qualified prospect → attended conversation → client**, using the agency's own economics and funnel data. It focuses on Facebook and Instagram advertising for agencies acquiring clients or delivering Meta Ads services.

| Start with | Work through | Get back |
| --- | --- | --- |
| Your offer, target client, budget, margins, account or export data, and funnel stages | Offer and creative, qualification, tracking, attendance, sales, and delivery | A plan or audit with evidence, priorities, bounded tests, owners, and review points |

## What the skill does

- **Plan acquisition:** define a credible offer, target prospect, budget, funnel, and measurement plan.
- **Audit the full path:** find where clicks, leads, bookings, attended calls, and clients diverge.
- **Improve with evidence:** propose creative and funnel tests based on actual constraints, rather than copied account settings or promised results.
- **Support agency delivery:** connect client acquisition claims to scope, reporting, and the ability to serve new clients.

It does **not** connect to a Meta Ads account by itself. Live account work needs the user's authorized connector or an export.

## Install

Install the single skill globally with the [Skills CLI](https://github.com/vercel-labs/skills):

```bash
npx skills add pritoo733/Meta-Ads-Skills-for-Digital-Agency --skill meta-ads-agency-growth -g -y
```

The CLI detects supported agents. To target one explicitly, add `-a codex` or `-a claude-code` before `-y`. Fresh project installs were checked for both Codex and Claude Code. For another agent, check whether it reads the [Agent Skills format](https://agentskills.io/specification) and where it loads skills.

**Manual install:** download the [skill ZIP](dist/meta-ads-agency-growth.zip), extract it, and place the entire `meta-ads-agency-growth` folder in your agent's documented skill directory. Keep `SKILL.md` and `references/` together.

## Try it

Give the agent enough context to make a useful decision. For example:

> Use `meta-ads-agency-growth` to build a Meta Ads acquisition plan for my web design agency. Our service is $3,000 per month, we can onboard four clients per month, and our test budget is $1,500. Show the assumptions and the numbers we need to track.

> Use `meta-ads-agency-growth` to audit this Meta Ads export, landing page, and CRM stage report. Explain why booked calls are not becoming clients, and rank the next three tests.

> Use `meta-ads-agency-growth` to develop three distinct Meta ad angles from these client interviews and approved case studies. Include the evidence behind each claim.

Actual spend, stage counts, margin, market, reporting period, and account context make the output stronger. The skill labels missing inputs and proposes tests instead of presenting creator results as forecasts.

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
    ├── agency-workflow.md           Intake, metrics, diagnosis, and deliverables
    ├── kai-bax-source-map.md        Public video ideas with links and timestamps
    └── scaleclients-site-notes.md   Public site ideas and claim boundaries
```

## Sources and scope

The skill is an **independent synthesis** informed by [Kai Bax's public YouTube channel](https://www.youtube.com/@kaibax) and [ScaleClients.io](https://scaleclients.io/). The [video source map](meta-ads-agency-growth/references/kai-bax-source-map.md) and [site notes](meta-ads-agency-growth/references/scaleclients-site-notes.md) explain what was adopted. This repository is not affiliated with or endorsed by Kai Bax or ScaleClients.

The skill covers **Meta Ads only**. It does not promise a particular number of leads, appointments, clients, or revenue. An agent should verify current Meta controls, ad rules, and privacy requirements before changing a live account.

The original skill files are [MIT licensed](LICENSE). Linked videos and website material remain their creators' works; this repository contains brief summaries and links, not their transcripts or ad scripts.

---

## Testimonials

<p align="center"><img src="assets/community.svg" alt="Real stories, clear context: share your experience using this skill" width="100%"></p>

### ScaleClients client experiences

These selected accounts appear on the [ScaleClients review page](https://go.scaleclients.io/thankyou-uq). They describe customers' experiences with **ScaleClients' paid service**, not outcomes from installing this open-source skill. The summaries are paraphrased from reviews displayed on that page; the results have not been independently audited.

| Reviewer | In their words | Context |
| --- | --- | --- |
| **Liz Carter** | “I highly recommend scaleclients.io” | Praised a quick funnel launch and frequent communication about her ads. |
| **Bruce W. Spurr** | “it's been an incredible experience” | Reported a stronger flow of leads and booked calls, while noting that his own sales process still needed work. |
| **Gareth Melia** | “The calls are magic” | Valued the tailored funnel work and the advice he received on calls. |

For a wider range of customer feedback, including critical reviews, see [ScaleClients on Trustpilot](https://www.trustpilot.com/review/scaleclients.io).

### Results from users of this skill

> We have not published a verified testimonial from a user of this GitHub skill yet. The ScaleClients stories above are not evidence of what this skill will achieve for another agency.

If this skill helped your agency plan a campaign, diagnose a funnel, or improve a measured outcome, [share your experience](https://github.com/pritoo733/Meta-Ads-Skills-for-Digital-Agency/issues/new?template=share-a-result.yml). Tell us what you used it for, the result or decision it helped with, the period measured, and what evidence you can share. You can describe a useful decision even if you do not have a revenue result.

<p align="center">
  <a href="https://github.com/pritoo733/Meta-Ads-Skills-for-Digital-Agency/issues/new?template=share-a-result.yml"><img alt="Share your result" src="https://img.shields.io/badge/Share%20your%20result-Open%20a%20GitHub%20issue-14b8a6?style=for-the-badge"></a>
</p>

We will add quotes here only with the contributor's permission and enough context to avoid implying a typical or guaranteed outcome. Please remove client names and confidential account data unless you have permission to publish them.
