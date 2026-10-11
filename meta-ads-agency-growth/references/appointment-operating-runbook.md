# Qualified appointment operating runbook

Use this runbook when an agency wants to move from a Meta campaign to qualified appointments. Work through the gates in order. At each gate, record the decision, evidence, owner, and unresolved issue. A report may recommend or describe a setup; say that it is configured only when the live setting was changed and verified.

## End-to-end delivery sequence

Use this sequence when the user asks for the complete process. It combines preparation, launch, and ongoing work; it is not a promise that every step takes a fixed number of days or months. For each stage, return the artifact, owner, evidence, and next dependency. Apply the gates below before spend.

| Stage | Required output | Completion check |
| --- | --- | --- |
| 1. Strategy and foundation | Approved offer, ideal client, market evidence, eligibility, pricing or terms, unit economics, capacity, funnel map, and KPI definitions. | Buyer and offer are specific enough to write truthful ads; spend and appointment targets come from agency economics. |
| 2. Funnel and measurement design | Page or form outline, qualification questions, booking and thank-you flow, CRM stages, event map, consent, and lead owner. | Both qualified and unqualified paths are clear; the qualified-booked event has one source of truth. |
| 3. Build and connect | Mobile page or form, calendar, CRM pipeline, notifications, reminders, Meta Pixel or supported data source, and permitted CRM feedback integration. | Real submissions and bookings reach the right records; only a qualified confirmed booking creates the appointment-quality feedback event. |
| 4. Sales explanation | Page copy, proof with permission, objections answered, and a clear call purpose. Add a VSL only if it improves understanding or qualification. | Ad promise, service terms, page, booking, and sales conversation agree. |
| 5. Image and video creative | Approved image and video assets, distinct angles, claim evidence, destination links, and a test log. | Each asset accurately represents the offer and can be traced to a hypothesis and downstream appointment outcome. |
| 6. Meta account and campaign setup | Account and asset ownership check, eligible objective, conversion location and event, geography, audience, placements, budget cap, and naming. | Current controls and access are verified in the identified account; settings match the approved offer and event path. |
| 7. Prelaunch QA and launch | Test journeys, event and deduplication checks, mobile and calendar checks, approved ads, launch record, and monitoring owner. | Critical gates pass; after authorized launch, delivery, destination, event receipt, and CRM handoff are observed. |
| 8. Lead and appointment operations | Response queue, qualification decisions, booked and attended status, no-show follow-up, sales outcomes, and collected cash. | Every lead has a disposition and owner; booking feedback to Meta stays limited to actual qualified booked appointments. |
| 9. Optimization and creative renewal | Cohort review, earliest verified constraint, one prioritized test, new image and video concepts as needed, cap, and review condition. | Changes follow measured appointment quality and economics; old and new creatives are compared using consistent cohort definitions. |
| 10. Account and funnel stewardship | Routine delivery and tracking checks, page and offer updates, CRM automation review, access inventory, and change log. | The system still works after edits; failures have an owner and rollback or repair plan. |
| 11. Client delivery or handover, when relevant | Reporting, decision log, asset inventory, account and funnel ownership, access, and operating instructions. | The responsible team can maintain the campaign, funnel, tracking, and lead handling without depending on undocumented setup. |

Do not treat coaching calls, chat support, or a fixed handover day as requirements for making Meta Ads work. Set review and handover timing from the actual sales cycle, campaign evidence, and contract. Keep this workflow focused on Meta Ads acquisition and service delivery; general agency hiring or operations sit outside it.

## First establish what can be inspected or changed

An installed skill does not grant access to Meta, a CRM, website, or calendar. A browser tab may show a public page or a partial account view. An export, screenshot, or user description is evidence for the time and scope it covers, not proof of the current live configuration.

| Available evidence or access | What can be reported |
| --- | --- |
| Skill only | Strategy, questions, draft copy, checklists, and a plan based on stated assumptions. No live account inspection. |
| Screenshots, exports, or URLs | Findings about the supplied snapshot or visible page, with date and scope. Do not claim hidden settings or current events were verified. |
| Authorized read-only connector | Findings from the connected account and fields the connector exposes. State missing surfaces and data freshness. |
| Authorized write-capable connector | Draft or apply only the specifically authorized changes it supports; verify the returned state and independently test the user journey where possible. |

For every finding, use one of these labels: **observed live**, **checked in supplied evidence**, **user-reported**, **inferred**, or **not verified**. Do not turn “recommended” into “done.”

## Gate 1: Approve offer, economics, and capacity

Record the ideal client, service and deliverables, price or terms, eligibility, exclusions, approved claims and proof, sales owner, delivery capacity, test budget, maximum acceptable loss, and response-time commitment. Use [validation and decisions](validation-and-decisions.md) to record demand evidence, media cost targets, cohort definitions, and pilot decision rules. If a material term or the offer itself is undecided, prepare options and stop before writing final ads or launching.

## Gate 2: Define who may book

Write objective, client-approved qualification criteria before building forms or automations. Record which form answers, CRM fields, or human checks establish each criterion. Define the stages separately:

1. **Lead:** a valid submission or contact, whether or not the person qualifies.
2. **Qualified lead:** a reachable prospect who meets every agreed fit criterion.
3. **Qualified booked appointment:** a qualified lead has selected and successfully booked a real calendar slot.
4. **Qualified attended appointment:** the qualified prospect actually attends.
5. **Client and value:** a sale is recorded, then report collected cash separately from contracted or attributed value.

Do not use protected traits or sensitive personal data as a shortcut. Let ineligible prospects reach a respectful end screen or a separate nurture path where consent permits; do not expose the qualified booking calendar to them.

## Gate 3: Map the actual system and ownership

Draw the live path and name the owner for each handoff:

**Ad → form submission and CRM capture → qualification check → booking calendar → confirmed booking and qualified-booked Meta feedback → reminders and lead response → attendance → sale and collected cash**

Store valid leads in the CRM even when they do not qualify or book; keep them out of the Meta appointment-quality signal. Send that signal after qualification and confirmed booking, without waiting for attendance. Record attendance and sales separately. Notify the response owner at the appropriate lead or booking stage so incomplete bookings remain visible.

Record the source of truth for each stage, required fields, event name, deduplication method, notification recipient, fallback owner, and consent/privacy notice. Verify the calendar's timezone, availability, appointment duration, lead time, buffers, and booking horizon. Any timing rule—such as routing submissions after a particular local time to the next business day—must have an explicit timezone, owner, disclosed response expectation, and test. Never infer that “10:30” or another cutoff is universal.

## Gate 4: Build the offer-matched ads and path

Create image and video executions from the same approved offer and test hypothesis. State the intended prospect, desired outcome, what the agency will do, proof context, and next step. Keep the destination consistent with each ad. Before a prospect books, make the purpose of the call and material eligibility or price terms clear when approved. Use a VSL only when it helps explain a complex offer and enough traffic exists to evaluate its effect on qualified bookings and attendance.

Choose campaign objective, conversion location, optimization event, geography, budget, placements, and structure from current account evidence and available Meta features. Do not present broad targeting, a particular number of creatives, or a VSL as universal requirements.

## Gate 5: Test both paths before spend

Use test records and a test booking; do not send test or fabricated outcomes as real Meta conversion events. Verify:

- A qualified test lead passes the correct gate, can book, appears once in the CRM, receives the expected notification, and creates the qualified-booked event only after the calendar confirms the booking.
- Unqualified or incomplete answers cannot access the qualified calendar or create the outcome event. Revalidate changed answers using the final agreed criteria; a genuinely eligible prospect may book.
- Duplicate submissions, webhook retries, and rescheduling do not create duplicate qualified-booked outcomes for the same appointment. Allow legitimate rescheduling, preserve the agreed booking identity, and reconcile cancellations in CRM reporting.
- Timezone, date, cutoff rules, available slots, mobile page behavior, confirmation, reminders, cancellation, rescheduling, and owner fallback work as intended.
- Source fields, consent records, event matching, and deduplication are correct. Explain that Meta may still count an instant-form submission as a native lead even when that lead never qualifies.

If any critical path or event check fails, mark **NO-GO**, name the fix and owner, and retest. If a surface cannot be accessed, mark it **NOT VERIFIED**; do not mark it passed.

## Gate 6: Authorize and launch

Present the final offer, ads, destinations, audience and placement settings, budget cap, event map, qualification rules, test duration or review condition, and stop rules. Do not publish or change a live budget unless the user has authorized the identified account and action and the available tool permits it. If the user asked only for a report or plan, deliver the draft and clearly state that nothing was launched.

After an authorized launch, verify the live campaign status, destination, budget, delivery, event receipt, and CRM handoff using the surfaces actually available. Report which were verified and which remain unverified.

## Gate 7: Operate, record, and improve

Respond to each lead within the agreed service window. Record contact attempts and outcomes, qualification reason, booking, attendance, sales stage, and collected revenue in the CRM. Send Meta only the approved qualified-booked outcome after qualification and a successful booking, when the account supports that setup and the data use is permitted. Do not send raw leads as a substitute quality signal. Track attendance and sales as separate CRM outcomes.

Review a mature cohort from spend through collected cash: leads → qualified leads → qualified booked → qualified attended → proposals → clients → collected revenue. Show counts, rates, cost per qualified booking, cost per qualified attended call, show rate, close rate, CAC, contribution, dates, attribution source, and lag. If there are no appointments, diagnose the earliest failed handoff. If bookings do not attend, inspect lead time, availability, confirmations, reminders, contactability, and rescheduling. If calls attend but do not sell, investigate fit, offer, sales handling, and delivery. Change one evidenced constraint at a time, set a budget cap and review point, and scale only when quality, economics, and capacity support it.

In the first monitoring period, check delivery and the live lead path frequently enough to catch a broken destination, missed notification, bad calendar, or missing event before the cap is spent. Then review at a cadence suited to spend and outcome volume. Keep a dated change log with the hypothesis, affected campaign or page, spend, stage counts, and result. Maintain an image and video creative backlog from real objections and performance evidence; replace weak concepts and test new ones without scattering a small budget across too many ads. Recheck landing pages, forms, CRM fields, automations, and event deduplication after material edits. If a client owns the assets, document account access and handover responsibilities so the process can continue after the initial build.

## Readiness summary

Return one status for each gate: **PASS**, **BLOCKED**, or **NOT VERIFIED**. A campaign is **READY TO LAUNCH** only when all critical offer, qualification, booking, tracking, consent, capacity, and budget gates pass. Otherwise give the next owner-specific action. Never label a campaign “ready” solely because a written report is complete.
