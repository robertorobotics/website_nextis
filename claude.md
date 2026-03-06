# claude.md — Nextis Website

## What Nextis Is

Nextis is building the universal constructor. A robotics startup focused on autonomous assembly automation. The immediate product is a dual-arm robotic assembly system that can learn new tasks with 1-2 days of setup. The long-term vision is a machine in every factory, every workshop, every home that can assemble anything given the right instructions.

Intellectual lineage: Turing proved universal computation, and we built the PC. Von Neumann proved universal construction. We are building that machine.

The founder is Roberto, 24, physicist turned robotics engineer, based in Hamburg. This is not a cautious company. This is a company that intends to compete at the highest level.

## Brand Voice

Confident, clear, no hedging. We state what we believe and what we are building. No corporate speak, no startup jargon, no "leveraging synergies" or "disrupting paradigms."

Rules:
- Write in short, direct sentences. When a sentence can be split in two, split it.
- Never use "cutting-edge," "innovative," "revolutionary," "next-generation," "state-of-the-art," or "world-class." Describe what the thing actually does.
- Never use "we believe" or "we think" before a strong claim. Just state it.
- No exclamation marks. Confidence is quiet.
- Contractions are fine in casual copy. Manifesto and mission sections stay formal.
- The word "universal" is sacred. It refers specifically to von Neumann's universal constructor concept.
- Em dashes are banned. Use commas, periods, or restructure the sentence.

## Tone Spectrum

- Landing page hero: Bold, visionary, short. Manifesto energy.
- Product/technical sections: Clear, precise, no-nonsense. An engineer should feel respected.
- Blog: Conversational, direct. Smart founder talking to smart people.
- About/team: Human, warm, not cute. No "passionate team of dreamers."

## Design Philosophy

The site is bright, clean, alive. White background. The aesthetic is confident precision with organic warmth.

- White/light backgrounds. Clean, generous whitespace. Let content breathe.
- Typography is the primary design tool. Use size, weight, and spacing for hierarchy.
- Color palette: White backgrounds, near-black text (#111827), minimal accent color. No gradients, no neon.
- The animated dot field on the homepage is a signature element. It should feel like a living grid, the dots breathe, respond to the cursor, and flow around the title text. This is intentional and should be maintained and refined, not removed.
- Motion is used purposefully. The dot field, scroll-triggered fade-ins, and the 3D model viewer are the three allowed motion elements. Do not add parallax, slide-in animations, or decorative motion elsewhere.
- Real hardware photos and demo footage are more powerful than any illustration. When we have them, they go on the site. No stock photos. No AI-generated images.
- The 3D model viewer (RobotCanvas) opens as a full-screen overlay. This is intentional. It is the digital equivalent of picking up the product and examining it.

## Layout Principles

- Mobile-first. Most visitors come from Twitter/X, LinkedIn, and YC on phones.
- One idea per viewport section. Don't cram.
- Navigation should be minimal and elegant. A fixed header with: Home, Hardware, Blog, and a CTA.
- The landing page communicates: what we build, why it matters, one clear action.
- Footer: minimal. Copyright, social links, contact email.

## Technical Standards

- Framework: Next.js (JavaScript is fine, TypeScript optional).
- Styling: Tailwind CSS. No CSS-in-JS.
- Hosting: Vercel.
- Dependencies: minimal. Every npm package is a liability.
- Performance: Lighthouse score above 90 on all metrics. No layout shift. Lazy load heavy assets. The 3D model (GLB) must be loaded on demand only, never on initial page load.
- Semantic HTML. Proper heading hierarchy. Accessible by default.
- No cookie banners unless legally required. No tracking pixels.
- No chatbot popups.

## Site Structure

The site has these pages:
1. **Home** (/) — Hero, Problem, Product, Vision, X Feed, Contact/Waitlist
2. **Blog** (/blog) — Index of all posts. The manifesto is the first post. New posts added over time.
3. **Blog Post** (/blog/[slug]) — Individual blog post page.
4. **Hardware** (/hardware) — Product page for the AIRA Teleop Kit (follower arm + leader arm sold as a set). Built-to-order, CNC aluminum construction. No product images on launch. Sells on specs, positioning, and the request form.

## Content Rules

Content that should exist:
- Hero with tagline, CTA, and (when available) hardware image or demo video.
- Problem section: assembly is manual, expensive, inflexible.
- Product section: what the system does. Dual-arm, learns from demonstration, days not months.
- Vision section: the Turing/von Neumann framing. Link to the manifesto (now a blog post).
- X/Twitter feed section: curated posts from our X account showing daily updates, videos, demos.
- Waitlist/Contact: email signup with optional task description for serious inquiries.
- Blog: the manifesto as the first post, with ability to add more.
- Hardware page: AIRA Teleop Kit product listing. CNC aluminum dual-arm teleoperation kit. Damiao follower arm + Dynamixel XL330 leader arm + aluminum frame. Price, specs, what's included, lead time, and a request form. No placeholder images, no stock photos. Real product photos will be added once the aluminum reference unit is built. No competitor comparisons or mentions. Let the product speak for itself.

Content that must NOT exist:
- "Trusted by" logos (unless we have real customers).
- Fake testimonials or placeholder quotes.
- "Our values" grid with icons.
- "How it works" in three illustrated steps.
- Job listings page.
- Competitor comparison tables or mentions of other products by name.

## AI Writing Tells to Avoid

The site copy must avoid all of these:
- Em dashes
- Excessive bold text for emphasis
- "In today's rapidly evolving landscape..."
- "At Nextis, we..." starting sentences with "At [Company]"
- Lists where prose would work better
- The word "delve"
- The word "landscape" used metaphorically
- The word "journey" used metaphorically
- "It's not just X, it's Y" constructions
- Ending sections with rhetorical questions

## Key References

- The full manifesto is titled "The Universal Constructor" and exists in both English and German.
- The Jobs/Apple II analogy is central. Our assembly system follows the same logic.
- David Deutsch's constructor theory is a philosophical influence but stays in the background. The von Neumann framing is more concrete and more useful for communication.

## The Bar

When in doubt about any design or copy decision: would this feel at home on Apple's website circa 2007? Clean, confident, focused, human.
