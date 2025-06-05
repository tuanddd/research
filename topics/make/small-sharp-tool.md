---
title: Do one thing well
description: Explore the Unix philosophy of small, sharp tools and how it applies to modern product development and agentic AI. Learn why focused, composable solutions beat bloated all-in-one products.
date: 2025-06-05
tags:
  - product
  - unix
  - philosophy
  - ai
  - design
  - focus
---

**The best products do one thing exceptionally well.** This isn't just a nice-to-have philosophy, it's the foundation of sustainable product development. Rooted in the Unix tradition of small, sharp tools, this mindset offers a powerful alternative to the bloated, everything-and-the-kitchen-sink approach that plagues modern software.

As we move into an era of agentic AI and rapidly evolving technology, the principles behind `grep`, `curl`, and `jq` become more relevant than ever. These tools succeed because they focus, compose, and integrate seamlessly. Your products and AI systems should too.

## What are small, sharp tools?

Small, sharp tools are lightweight programs that excel at a single task. Think `grep` for searching text, `curl` for HTTP requests, or `jq` for JSON parsing. They embody the Unix philosophy Doug McIlroy articulated in 1978: "Write programs that do one thing and do it well."

These tools share key characteristics:

- **Focused scope:** They solve one problem completely rather than many problems partially
- **Composable design:** They work together through pipes, APIs, or standard interfaces
- **Clear inputs and outputs:** They use universal formats like text, JSON, or HTTP
- **Minimal complexity:** They avoid feature creep and unnecessary complications

At companies like Heroku, this approach influenced tools like their CLI, where commands are modular and chainable. You can script complex deployment workflows by combining simple, focused commands.

## Why this matters now

The small, sharp tools philosophy is more critical today than ever, especially as we build products and AI systems that need to adapt quickly:

**Products stay maintainable:** Focused features are easier to build, test, and maintain. When your note-taking app tries to be a calendar, task manager, and email client, everything suffers. When it focuses on fast, distraction-free writing, it excels.

**Teams move faster:** Small, scoped features ship quickly. You can validate assumptions, gather feedback, and iterate without the overhead of managing a monolithic feature set. This aligns perfectly with agile development and lean startup principles.

**Users understand the value:** A sharply scoped product communicates its value clearly. Stripe focuses on payments, not accounting. Calendly handles scheduling, not project management. Users know exactly what they're getting.

**Systems integrate better:** Products designed as small, sharp tools integrate seamlessly with other systems. APIs, webhooks, and standard data formats enable users to combine tools creatively, creating solutions tailored to their needs.

**Technical debt stays manageable:** Monolithic features create tangled dependencies that become harder to maintain over time. Focused components with clear boundaries are easier to refactor, replace, or remove without breaking everything else.

## Applying this to agentic AI

As we build AI agents and systems, the small, sharp tools philosophy becomes even more crucial:

**Specialized agents over generalists:** Instead of building one AI that tries to handle everything, create focused agents that excel at specific tasks. A research agent that's great at finding information, a writing agent that crafts compelling content, a data agent that analyzes patterns.

**Composable AI workflows:** Design agents to work together through clear interfaces. One agent might gather data, another processes it, and a third presents insights. This mirrors Unix pipes but for AI workflows.

**Clear failure boundaries:** When an AI agent has a narrow scope, it's easier to understand when and why it fails. A focused agent's limitations are predictable and manageable.

**Rapid iteration:** Small AI tools can be improved and deployed quickly. You can test new models, adjust parameters, or swap components without rebuilding entire systems.

## Real-world examples

The most successful products often follow this philosophy:

**Stripe:** Focuses on payment processing and provides APIs for everything else. They don't try to be an accounting platform or e-commerce builder.

**Notion's blocks:** Each block (text, database, embed) does one thing well, but they compose into powerful, customized workflows.

**Zapier:** Connects apps through automated workflows instead of trying to replace them all.

**Modern Unix tools:** Tools like `bat` (better `cat`), `ripgrep` (faster `grep`), and `fzf` (fuzzy finder) improve on classic tools while maintaining focus.

## How to build this way

To adopt this mindset in your product development:

**Define clear boundaries:** Use frameworks like jobs-to-be-done to identify your feature's core purpose. "Help users schedule meetings effortlessly" leads to focused scheduling, not a full calendar suite.

**Design for composition:** Build features with APIs, webhooks, or standard formats that let users combine them with other tools. Think Lego blocks, not monoliths.

**Resist scope creep:** When stakeholders ask for "just one more feature," ask whether it serves the core purpose. Often, integration with an existing tool is better than building from scratch.

**Start minimal:** Launch with the smallest viable feature that delivers value. Expand based on real user feedback, not hypothetical needs.

**Leverage existing ecosystems:** Instead of building everything in-house, integrate with established platforms. Use AWS for storage, Twilio for messaging, Slack for notifications.

## The challenges

This approach isn't without trade-offs:

**Integration complexity:** Making tools work together requires thoughtful design. Poor APIs or incompatible data formats frustrate users.

**Learning curves:** Users might need time to understand how to combine focused tools effectively, similar to learning Unix pipes or API-driven workflows.

**Competitive pressure:** It's tempting to match competitors feature-for-feature instead of staying focused on your core strength.

**Discovery problems:** Users might not know which small tools to combine or how to connect them.

## Key takeaways

- The Unix philosophy of small, sharp tools offers a powerful framework for modern product development and AI systems
- Focused tools are easier to build, maintain, and understand than monolithic solutions
- Composability enables users to create custom solutions by combining simple, specialized components
- This approach accelerates development cycles and reduces technical debt
- For AI systems, specialized agents that work together often outperform generalist approaches
- Success requires discipline to resist scope creep and thoughtful design for integration

The future belongs to products and AI systems that do one thing exceptionally well and compose beautifully with others. In a world of infinite possibilities, focus becomes your competitive advantage.

*Sources: Adapted from "Small, Sharp Tools" by Brandur Leach, [brandur.org](https://brandur.org/small-sharp-tools), December 12, 2014. Additional insights from "The Art of Unix Programming" by Eric S. Raymond and modern Unix tool communities.*
