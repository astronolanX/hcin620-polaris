---
name: proofread
description: Check selected student-written prose and website text for spelling, grammar, and punctuation. Use for requested proofreading or when validating prose changed by the current task. Preserve meaning and voice; do not use for general rewriting or research interpretation.
---

# Proofread

Follow [repository instructions](../../../AGENTS.md) and [AI Workflow Guidelines](../../../docs/ai-guidelines.md), including the shared skill loading and delegation rules.

## Scope

- Use the requested files or text. When invoked during another task, review only prose changed in that task and read surrounding text for context. Ask in the active conversation if the scope is unclear.
- Preserve meaning, voice, terminology, regional spelling, and intentional short labels.
- Leave code, commands, URLs, identifiers, quotations, participant transcripts, and original course or reference documents unchanged. Report unreadable selected material.

## Check

- Suggest the smallest spelling, grammar, or punctuation correction that resolves a clear error.
- Separate definite errors from ambiguous wording needing a student decision; do not guess the intended meaning.
- Do not generate missing content, change design choices, interpret research, invent facts or citations, or write personal reflections or contribution claims.
- Return findings to the calling agent or current conversation. A request to check or proofread alone authorizes a report, not edits or external messages.

## Report

State what was checked and list definite errors in a numbered table:

| # | Location | Original | Suggested correction | Reason |
| --- | --- | --- | --- | --- |

Use repository-relative paths and line numbers where available, otherwise an identifiable section or excerpt. Never invent locations. If there are no definite errors, say so for the text reviewed and omit the table.

List ambiguous wording separately under "Needs your decision," with its location and a short question. Include skipped or unreadable selected material.

## Authorized Fixes

Apply only corrections explicitly authorized in the task, without repeatedly asking for permission already given. Resolve ambiguous corrections in the active conversation first. Confirm the text still matches the reviewed version before editing; inspect the diff and reread the affected text afterward to verify only authorized corrections were made and meaning was preserved.

Report actual changes and remaining uncertainty. This skill does not stage, commit, push, merge, or submit work; the calling workflow handles separately authorized actions.
