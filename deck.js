/* ════════════════════════════════════════════════════════════════
   THE DECK — this is the only file you edit to change the talk.
   ----------------------------------------------------------------
   Each { ... } block below is one slide, in the order it appears.

   • Change words: edit the text inside the quotes.
   • Remove a slide: delete its whole { ... } block (and its comma).
   • Reorder slides: move a { ... } block up or down.
   • Add a slide: copy a block of the same "type", paste, edit.
   • Toggles: e.g. on the About slide, set  ribbon: false  to hide it.

   Emphasis inside any text (all optional):
     *word*    -> brand-colored word
     **word**  -> bold word
     _word_    -> italic word

   The ONE rule: keep the quotes and the commas. A missing quote or
   comma is the usual cause of a problem; if the deck shows an error
   bar, that's what to look for. Git can always roll back.
   ════════════════════════════════════════════════════════════════ */

window.DECK = [

  // ───────── TITLE ─────────
  { type: "hero", id: "top",
    badge: "Texas AI Tech Summit · Workshop",
    title: "From Chat to Code",
    lede:  "The three levels of AI that actually matter, and how to climb them. A hands-on journey through the Claude ecosystem.",
    name:  "Ayman Kotob",
    role:  "Founder, Atmit Labs\nProduct Marketing Leader" },

  // ───────── ABOUT ─────────   (set ribbon: false to hide the chip on the photo)
  { type: "about", id: "about",
    ribbon: false,
    lead: "I help lean teams turn AI from a buzzword into measurable ROI.",
    body: "I'm Ayman Kotob, a product marketing veteran and the founder of Atmit Labs, a consultancy that makes automation and AI intuitive for people who don't write code. I build the workflows, tools, and systems that give small teams the leverage of much bigger ones.",
    creds: [
      "**One** framework you'll keep",
      "**Zero** code required from you",
      "**Three** live demos today"
    ] },

  // ───────── TABLE OF CONTENTS ─────────
  { type: "toc", id: "toc",
    title: "What we'll cover",
    items: [
      { n: "01", t: "Intentions & the room", d: "Why we're here, and who you are" },
      { n: "02", t: "First principles", d: "The mindset before the tools" },
      { n: "03", t: "Level 1 · Chat", d: "Ask, and it answers" },
      { n: "04", t: "Level 2 · Cowork", d: "Delegate, and it acts for you" },
      { n: "05", t: "Level 3 · Code", d: "Describe it, and it builds" },
      { n: "06", t: "Guardrails & recap", d: "Staying safe, and where to go next" }
    ] },

  // ───────── GET TO KNOW THE ROOM ─────────
  { type: "audience", id: "audience",
    title: "First, who's in the room?",
    intro: "A quick round of intros, tell me:",
    questions: [
      "Your name",
      "Your profession",
      "Your level of AI fluency",
      "What you're hoping to get out of this session",
      "An outcome you're hoping AI can help with"
    ] },

  // ───────── INTENTION (the means, not the end) ─────────
  { type: "intention", id: "intention",
    title: "AI is the *means*, not the end.",
    animateNote: true,
    note: "The ultimate intention is to be the best servants of Allah. AI is simply a **means**: leverage to serve our families, our communities, our Ummah, and humanity better. The tool is never the point. What matters is what we do with the time it gives back and the capabilities it unlocks." },

  // ───────── BISMILLAH ─────────
  { type: "bismillah", id: "bismillah",
    label: "So we begin with intention",
    arabic: "﷽",
    translit: "Bismillāh ir-Raḥmān ir-Raḥīm",
    translation: "In the name of Allah, the Most Gracious, the Most Merciful. Let's start with a conscious _bismillah_." },

  // ───────── FIRST PRINCIPLES ─────────
  { type: "principles", id: "principles",
    title: "Some first principles",
    sub: "Keep these things in mind as you explore AI.",
    items: [
      { t: "Give yourself grace", d: "You will not keep up with everything, and you don't need to. Pick what serves your goals and let the rest go." },
      { t: "Outcomes, not AI for its own sake", d: "Start from the result you want. Fall in love with the problem, not the tool." },
      { t: "Use AI to finish, not to start", d: "Bring your own thinking first. Let AI sharpen, expand, and accelerate. Don't let it replace your judgment." },
      { t: "Garbage in, garbage out", d: "AI learns from what you give it. Document your context, your voice, your standards, so it can sound like you." },
      { t: "Don't forget what makes you human", d: "We're storytellers, with taste, discernment, judgment, and intuition. Use AI to amplify those, never to outsource them." }
    ] },

  // ───────── THE 3 LEVELS (MAP) ─────────
  { type: "map", id: "map",
    title: "Ask, delegate, build",
    sub: "One framework, three levels. As you climb, AI does more on your behalf. We'll use the Claude ecosystem as the vehicle, but this mental model travels to any AI tool you'll ever use.",
    cols: [
      { tag: "Level 1 · Chat", verb: "Ask", prod: "Claude", desc: "You ask a question, it answers. The level almost everyone already knows.", does: "**It responds.** You stay in the driver's seat." },
      { tag: "Level 2 · Cowork", verb: "Delegate", prod: "Claude Cowork", desc: "You share an outcome and a cadence; it carries out the work for you.", does: "**It acts** on your behalf." },
      { tag: "Level 3 · Code", verb: "Build", prod: "Claude Code", desc: "You describe a tool in plain English; it builds the code and infrastructure, runs, and ships it.", does: "**It creates** a thing that lives on its own." }
    ],
    axisLo: "Less autonomy",
    axisHi: "More autonomy" },

  // ───────── LEVEL 1 DIVIDER ─────────
  { type: "divider", id: "level1",
    kicker: "Level 1",
    title: "Chat with *Claude*",
    sub: "Ask a question, get an answer. This is the level most people are already familiar with. Let's learn to get far more out of it.",
    triggerKey: "Reach for it when",
    trigger: "you have a one-off need: a question to answer, something to draft, summarize, brainstorm, or understand right now." },

  // ───────── PROMPTING ─────────
  { type: "features", id: "prompting", theme: "light",
    title: "What separates a mediocre prompt from a great one",
    items: [
      { t: "Give it a role and a goal", d: "\"You're my marketing analyst. I want X for audience Y.\" Context turns a generic answer into a useful one." },
      { t: "Show, don't just tell", d: "Paste examples, data, a past piece in your voice. AI matches what it can see." },
      { t: "Iterate; it's a two-way conversation, not an AI-monologue", d: "The first answer is a draft. Refine it: \"tighter,\" \"more skeptical,\" \"explain it for a beginner.\"" },
      { t: "Ask for the format you want", d: "Table, bullets, email, three options. Tell it the shape of the output up front." }
    ] },

  // ───────── PROMPT, LEVELLED UP ─────────
  { type: "ladder", id: "prompt-ladder",
    title: "Watch a prompt level up",
    sub: "Same goal, three versions. Each tip from the last slide makes it sharper.",
    steps: [
      { label: "Good", tier: "good",
        prompt: "Write a LinkedIn post about our new feature.",
        why: "No role, no audience, no goal, no format. You'll get generic filler." },
      { label: "Better", tier: "better",
        prompt: "You're a B2B marketer. Announce our new scheduling feature to busy clinic owners. Goal: get them to book a demo.",
        why: "Adds a **role**, an **audience**, and a **goal**, so it knows who it's for and what winning looks like." },
      { label: "Best", tier: "best",
        prompt: "…and here are two of our best-performing posts, match that voice. Lead with the pain of no-shows. Give me 3 options, each under 600 characters, with a strong first-line hook.",
        why: "Adds **examples** to copy your voice and an exact **format**. Then **iterate**: \"make #2 punchier.\"" }
    ] },

  // ───────── GET MORE OUT OF CHAT ─────────
  { type: "duo", id: "blocks",
    title: "Get more out of *Chat*",
    sub: "Two ways past a single question: customize Claude around how you work, and use the modes most people never touch.",
    columns: [
      { h: "Customize it", items: [
        { t: "Projects", d: "A workspace that remembers your context and files, so you stop re-explaining yourself." },
        { t: "Skills", d: "Reusable playbooks you teach once, then trigger on demand (a Socratic tutor, your brand-voice writer)." },
        { t: "Connectors (MCP)", d: "Plug Claude into your real tools (Drive, Gmail, calendar) so it works with your data." }
      ] },
      { h: "Power moves", items: [
        { t: "Use AI to understand AI", d: "Don't know a term? Ask Claude to explain it simply, with an example from your world." },
        { t: "Multimodal", d: "Drop in a screenshot, a whiteboard photo, a PDF. It sees images, and builds from them." },
        { t: "Voice & Artifacts", d: "Talk to it to rehearse or roleplay; ask for a calculator or chart and watch it render live." }
      ] }
    ],
    bridge: "**These building blocks carry with you** to Levels 2 and 3. Learn them once, and use them in higher levels of AI too." },

  // ───────── DEMO 1 ─────────
  { type: "demo", id: "demo1",
    badge: "Live Demo · Level 1",
    title: "Building a Socratic learning skill",
    sub: "Teaching Claude a reusable playbook to teache me about companies I'm interested in by asking questions instead of just handing over answers.",
    show: ["Creating a custom Skill from scratch"],
    watch: [ "How it reuses across chats"],
    take: "A skill is a habit you teach once and reuse across your chats." },

  // ───────── LEVEL 2 DIVIDER ─────────
  { type: "divider", id: "level2",
    kicker: "Level 2",
    title: "Delegate with *Cowork*",
    sub: "Stop doing work your AI should be doing. Share an outcome and a cadence, and it handles the rest.",
    triggerKey: "Reach for it when",
    trigger: "a task is repetitive, time-sensitive, or drowning in data: the kind of thing you'd hand to a capable assistant." },

  // ───────── COWORK ─────────
  { type: "cowork", id: "cowork",
    title: "The leap: it does things *on your behalf*",
    vs: [
      { label: "Level 1", h: "Chat", d: "You ask, it answers. You take the answer and go do the work yourself." },
      { label: "Level 2", h: "Cowork", d: "You set the outcome and cadence. It runs the task, on schedule, with your files and tools, and reports back." }
    ],
    features: [
      { t: "Plugins", d: "A bundled package of connectors, skills, and agents: a complete capability you install in one move." },
      { t: "Headless browsing and your files", d: "It can navigate the web and gather what it needs, then read, organize, and produce real documents in your workspace." },
      { t: "Runs on a cadence", d: "\"Every morning at 7,\" \"every Friday.\" Delegation that shows up without you asking." }
    ] },

  // ───────── WHAT TO DELEGATE ─────────
  { type: "criteria", id: "delegate-criteria",
    title: "What's worth handing off?",
    sub: "The best delegation candidates share three traits, and the great ones hit all three.",
    criteria: [
      { t: "Recurring", d: "It happens on a cadence, daily, weekly, or every time something lands. Set it up once, benefit every time." },
      { t: "Multi-step", d: "It's a sequence, not a single ask: gather, then sort, then draft, then send." },
      { t: "Data-heavy", d: "It pulls from real sources, your inbox, the web, files, a sheet, and turns them into something useful." }
    ],
    examplesHeading: "Example workflows",
    examples: [
      "A morning digest of news or job posts in your field, emailed daily",
      "A weekly competitor or pricing scan pulled from the web into a sheet",
      "Inbox triage: summarize new emails, label them, flag what needs you",
      "Turn raw meeting notes into action items and follow-up drafts"
    ] },

  // ───────── DEMO 2 ─────────
  { type: "demo", id: "demo2",
    badge: "Live Demo · Level 2",
    title: "A daily LinkedIn job digest, delivered to my inbox",
    sub: "Delegating a repetitive, time-sensitive task: find relevant roles, summarize them, and email me a clean digest every morning, automatically.",
    show: [ "Setting the outcome and cadence", "Connecting browsing plus email"],
    watch: [ "I describe the result, not the steps", "It acts across tools for me"],
    take: "Delegation means defining the outcome once, then receiving the value forever. This is your digital twin handling the busywork." },

  // ───────── LEVEL 3 DIVIDER ─────────
  { type: "divider", id: "level3",
    kicker: "Level 3",
    title: "Build with *Claude Code*",
    sub: "No coding background? No problem. Turn plain English into working tools, and unlock custom apps for non-technical builders.",
    triggerKey: "Reach for it when",
    trigger: "you want something custom that lives on its own (an app, a website), or a heavy analytical job that needs real computing power." },

  // ───────── CLAUDE CODE (vocabulary) ─────────
  { type: "code", id: "code-concepts",
    title: "You don't write code. You point Claude at what you want.",
    sub: "Claude Code lives in the terminal, so it doesn't just write code: it runs it, installs what's needed, manages versions, and deploys the whole chain. You stay the decision-maker, and nothing happens without your permission. Here are some terms that are helpful to know.",
    termTitle: "claude-code · your-project",
    items: [
      { t: "terminal", d: "The text-based window Claude Code works in. Instead of clicking around in apps, it types commands to get things done." },
      { t: "CLI", d: "A tool you run by typing, like the GitHub CLI. Claude Code can install these, so it can act directly in services like GitHub, Vercel, or Stripe, no web dashboard needed." },
      { t: "project folder", d: "One directory on your computer that holds everything you're building. Claude works inside it, so the project stays in one place." },
      { t: "permissions", d: "You decide what Claude can do on its own versus what needs your sign-off. Your safety dial as autonomy goes up." },
      { t: "CLAUDE.md", d: "A plain-text house-rules file. Set them globally (how you like to work) and per project (what this build needs)." },
      { t: "GitHub & repos", d: "The cloud home for what you build. A \"repo\" stores your project, its history, and lets you ship it to the world." }
    ] },

  // ───────── DEMO 3 ─────────
  { type: "demo", id: "demo3",
    badge: "Live Demo · Level 3",
    title: "A reservation app for the masjid soccer field",
    sub: "From plain English to a working tool: building a real booking app, no code written by me, to make it easier to book the soccer field.",
    show: [ "Describing the app I want", "Claude writing and running it", "Approving steps along the way" ],
    watch: [ "I speak in outcomes, not code", "It handles the technical chain", "Permissions keep me in control" ],
    take: "Building is no longer gated by knowing how to code. It's gated by knowing what you want." },

  // ───────── GUARDRAILS ─────────
  { type: "guardrails", id: "guardrails",
    title: "More autonomy means more responsibility",
    sub: "As you move up the levels, AI does more on its own. These three habits keep you in control the whole way.",
    items: [
      { t: "Mind your data", d: "Don't paste secrets, client-confidential info, or anything you wouldn't want stored. Know what's sensitive before you share it.", rail: "Rail: think before you paste" },
      { t: "Verify the output", d: "AI can sound confident and still be wrong. It can **hallucinate**. So make sure you review its work: check the facts, numbers, and claims that matter.", rail: "Rail: trust, then verify" },
      { t: "Use permissions", d: "The more it can act for you, the more you set boundaries. Approve big actions; let it run the safe, routine ones.", rail: "Rail: you hold the dial" }
    ],
    segs: [
      "**Chat** answers only, low risk",
      "**Cowork** acts for you, set boundaries",
      "**Code** builds and runs, permission first"
    ] },

  // ───────── RECAP ─────────
  { type: "recap", id: "recap",
    title: "One framework, three levels",
    items: [
      { n: "Level 1 · Chat", v: "Ask", d: "For one-off needs. Master prompting, projects, skills, and connectors." },
      { n: "Level 2 · Cowork", v: "Delegate", d: "For repetitive, recurring, and data-intensive work. Hand off the outcome; run on a cadence if needed." },
      { n: "Level 3 · Code", v: "Build", d: "For custom tools and heavy analysis. Turn your prompts into code into working applications." }
    ],
    foot: "Now go out there and *experiment*." },

  // ───────── CLOSING ─────────
  { type: "close", id: "close",
    title: "Let's make AI work for *your* team",
    lede: "If you want help finding where AI belongs in your work, and building it, that's exactly what Atmit Labs does.",
    ctas: [
      { h: "Talk to me", v: "hello@atmitlabs.ai" },
      { h: "What we do", v: "AI-powered automated workflows and systems" },
      { h: "Take home", v: "Pick one task this week, climb one level" }
    ],
    qr: { heading: "Schedule time with me", src: "assets/qr-code.png" },
    tagline: false }

];
