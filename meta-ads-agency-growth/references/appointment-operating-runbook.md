# Qualified appointment operating runbook

Use this runbook when an agency wants to move from a Meta campaign to qualified appointments. Work through the gates in order. At each gate, record the decision, evidence, owner, and unresolved issue. A report may recommend or describe a setup; say that it is configured only when the live setting was changed and verified.

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

Record the ideal client, service and deliverables, price or terms, eligibility, exclusions, approved claims and proof, sales owner, delivery capacity, test budget, maximum acceptable loss, and response-time commitment. Confirm that the market and likely client value can support a paid test. If a material term or the offer itself is undecided, prepare options and stop before writing final ads or launching.

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

**Ad → form or landing page → qualification check → booking calendar → confirmation → CRM → lead response → appointment outcome → Meta feedback**

Record the source of truth for each stage, required fields, event name, deduplication method, notification recipient, fallback owner, and consent/privacy notice. Verify the calendar's timezone, availability, appointment duration, lead time, buffers, and booking horizon. Any timing rule—such as routing submissions after a particular local time to the next business day—must have an explicit timezone, owner, disclosed response expectation, and test. Never infer that “10:30” or another cutoff is universal.

## Gate 4: Build the offer-matched ads and path

Create image and video executions from the same approved offer and test hypothesis. State the intended prospect, desired outcome, what the agency will do, proof context, and next step. Keep the destination consistent with each ad. Before a prospect books, make the purpose of the call and material eligibility or price terms clear when approved. Use a VSL only when it helps explain a complex offer and enough traffic exists to evaluate its effect on qualified bookings and attendance.

Choose campaign objective, conversion location, optimization event, geography, budget, placements, and structure from current account evidence and available Meta features. Do not present broad targeting, a particular number of creatives, or a VSL as universal requirements.

## Gate 5: Test both paths before spend

Use test records and a test booking; do not send test or fabricated outcomes as real Meta conversion events. Verify:

- A qualified test lead passes the correct gate, can book, appears once in the CRM, receives the expected notification, and creates the qualified-booked event only after the calendar confirms the booking.
- An unqualified, incomplete, changed-answer, or duplicate test cannot create that event or access the qualified calendar.
- Timezone, date, cutoff rules, available slots, mobile page behavior, confirmation, reminders, cancellation, rescheduling, and owner fallback work as intended.
- Source fields, consent records, event matching, and deduplication are correct. Explain that Meta may still count an instant-form submission as a native lead even when that lead never qualifies.

If any critical path or event check fails, mark **NO-GO**, name the fix and owner, and retest. If a surface cannot be accessed, mark it **NOT VERIFIED**; do not mark it passed.

## Gate 6: Authorize and launch

Present the final offer, ads, destinations, audience and placement settings, budget cap, event map, qualification rules, test duration or review condition, and stop rules. Do not publish or change a live budget unless the user has authorized the identified account and action and the available tool permits it. If the user asked only for a report or plan, deliver the draft and clearly state that nothing was launched.

After an authorized launch, verify the live campaign status, destination, budget, delivery, event receipt, and CRM handoff using the surfaces actually available. Report which were verified and which remain unverified.

## Gate 7: Operate, record, and improve

Respond to each lead within the agreed service window. Record contact attempts and outcomes, qualification reason, booking, attendance, sales stage, and collected revenue in the CRM. Send Meta only the approved qualified-booked outcome after qualification and a successful booking, when the account supports that setup and the data use is permitted. Do not send raw leads as a substitute quality signal. Track attendance and sales as separate CRM outcomes.

Review a mature cohort from spend through collected cash: leads → qualified leads → qualified booked → qualified attended → proposals → clients → collected revenue. Show counts, rates, cost per qualified booking, cost per qualified attended call, show rate, close rate, CAC, contribution, dates, attribution source, and lag. If there are no appointments, diagnose the earliest failed handoff. If bookings do not attend, inspect lead time, availability, confirmations, reminders, contactability, and rescheduling. If calls attend but do not sell, investigate fit, offer, sales handling, and delivery. Change one evidenced constraint at a time, set a budget cap and review point, and scale only when quality, economics, and capacity support it.

## Readiness summary

Return one status for each gate: **PASS**, **BLOCKED**, or **NOT VERIFIED**. A campaign is **READY TO LAUNCH** only when all critical offer, qualification, booking, tracking, consent, capacity, and budget gates pass. Otherwise give the next owner-specific action. Never label a campaign “ready” solely because a written report is complete.
