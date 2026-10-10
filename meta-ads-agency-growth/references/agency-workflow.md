# Agency Meta Ads workflow

Use only the sections needed for the task. This is an operating worksheet, not a rigid campaign recipe.

## Intake

| Area | Questions that affect the plan |
| --- | --- |
| Agency offer | What service is sold, to whom, at what price and contract length? What outcome can the agency substantiate? |
| Economics | Gross margin, onboarding cost, sales cost, refund rate, expected retention, cash timing, and maximum acceptable CAC? |
| Market | Geography, language, business type, buyer role, minimum fit criteria, addressable demand, prior alternatives, and proof? |
| Delivery | How many new clients can be onboarded per month? Who owns creative, account management, sales, and follow-up? |
| Meta setup | Ad account and business ownership, Page/Instagram asset, payment readiness, account history, event source, Pixel/CAPI diagnostics, domain and conversion setup, campaign eligibility? |
| Funnel | Ad URL, landing or instant form, qualification logic, booking page, calendar availability, CRM statuses, follow-up, consent notices? |
| Evidence | Spend, impressions, reach, clicks, leads, qualified leads, bookings, attended qualified calls, proposals, wins, cash collected, cohorts, date range, currency, timezone, attribution window, conversion lag? |

If the operator cannot supply a value, label it unknown. Do not fill it with an outside benchmark.

## Conversion definitions and calculations

Choose a single period, currency, timezone, and deduplication rule. State whether counts are Meta-attributed, first-party, or blended. Separate booked, attended, qualified, and sold stages.

- Cost per lead = spend / unique leads.
- Cost per qualified lead = spend / qualified leads.
- Booking rate = booked calls / qualified leads, if that is the actual path.
- Qualified show rate = attended qualified calls / qualified booked calls.
- Cost per attended qualified call = spend / attended qualified calls.
- Close rate = new clients / attended qualified calls.
- CAC = acquisition spend plus attributable acquisition costs / new clients. Show the paid-media-only version separately if costs are incomplete.
- Contribution per client = collected revenue minus delivery, sales, payment, refund, and other variable costs over a stated horizon.

Never divide by zero or report a precise ratio from incomplete or lag-immature cohorts. If a user wants a target CPA, derive it from contribution and payback tolerance; state the assumptions.

## Diagnose the limiting stage

| Observed pattern | Investigate before recommending |
| --- | --- |
| Delivery or cost changed | Account restrictions, auction conditions, audience eligibility, creative fatigue evidence, placement breakdowns, budget pacing, and tracking changes. |
| Clicks but few qualified leads | Promise and audience fit, page speed and mobile view, form wording, proof, and the difference between low lead volume and overly strict qualification. |
| Qualified leads but few bookings | Ad-to-page continuity, VSL or page clarity, booking friction, available slots, and whether the call itself has a clear value. |
| Bookings but few attended calls | Calendar lead time, reminders, contactability, consent, human follow-up, rescheduling, and cancellation reasons. |
| Attended calls but few clients | Qualification accuracy, sales process, offer fit, objections, price, proof, and sales capacity. |
| Clients but weak profit or retention | Collected cash versus contracted value, delivery costs, onboarding, client outcomes, expectation setting, and churn. |

These are hypotheses, not automatic conclusions. Seek cohort data or sample calls/forms when the cause is unclear.

## Creative and funnel brief

For each angle record: prospect segment, desired outcome in the prospect's words, current failed alternative, truthful new mechanism or differentiator, evidence asset, offer, hook, format, CTA, landing-path match, and approval status. Plan both image and video executions so the campaign can learn across formats. Keep the central offer and audience comparable when testing format, and adapt the execution to how each placement is viewed. For early accounts, test a small number of materially distinct angles that the budget can support; add volume as evidence and production capacity justify it.

For the funnel, map the actual screens and events. A lead who is outside the service criteria may receive a polite alternate path or no booking invitation. Do not state or imply that a prospect is qualified before confirming the criteria. Fire real events only when the named action occurs; store qualification status and source in the CRM so downstream outcomes can be reconciled. Check permissions and consent before sending CRM data back to Meta.

## Recommended response shapes

**Plan:** objective and economics → audience and offer → creative angles → funnel and measurement map → bounded test → decision rule → dependencies and open questions.

**Audit:** account and data scope → funnel table → highest-confidence findings → 3–5 prioritized experiments or fixes → expected mechanism, owner, cap, review point → missing evidence.

**Weekly review:** spend and stage counts → changes versus a comparable period → attribution or data-quality caveats → decisions made → next actions. Avoid reporting only CTR, CPL, or platform ROAS when attended calls and clients are the business goal.

Use the [acquisition system](acquisition-system.md) as a four-part prompt for the review: ad response, explanation and qualification, attendance, and sales. Identify the first stage with credible evidence of a constraint, then assign a bounded test and owner. Review closed revenue separately from booked appointments so the agency can see whether improved booking volume leads to profitable clients.
