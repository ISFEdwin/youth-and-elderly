# Product Specification — Vantage: The Bridge Between Eras

> **Version:** 1.0 | **Date:** April 2026 | **Status:** Ready for Development

---

## 1. Product Vision

**Vantage** is a mobile-first intergenerational skill-trading platform built on a time-bank economy. It connects seniors (the "Natural Resource" of lived experience) with youth (the "Technical Navigators") through a closed-loop V-Credit system that makes every exchange feel like a fair trade, not charity.

**Mission Statement:** *To make every generation indispensable to the other.*

---

## 2. Core Philosophy: "Value for Value"

Every product decision must pass this filter:

> *"Does this feature make both the senior and the youth feel like the more valuable party in the exchange?"*

If a feature benefits only one side, it must be re-scoped before implementation.

---

## 3. User Personas

### Persona A: "Eleanor" (Senior User)
- **Age:** 68 | **Location:** Boston, MA
- **Background:** Retired HR Director, 35 years of experience in salary negotiation and leadership
- **Motivation:** Wants to stay mentally active, leave a legacy, and finally understand how to use her new iPad
- **Frustration:** Feels condescended to by tech products; hates charity dynamics
- **Goal on Vantage:** Host a "How to Negotiate Your Salary" masterclass; hire a youth member to set up her Apple TV and organize her family photos

### Persona B: "Jaylen" (Youth User)
- **Age:** 22 | **Location:** Boston, MA (Northeastern student)
- **Background:** Computer Science junior; great at tech but has never negotiated a job offer
- **Motivation:** Build soft skills, earn Social Impact Credits for his LinkedIn, and occasionally convert V-Credits to coffee vouchers
- **Frustration:** Feels like he has no real-world mentors; internship culture feels transactional
- **Goal on Vantage:** Attend Eleanor's salary negotiation session; teach a senior how to use Notion for organizing recipes

### Persona C: "Marcus" (Corporate Buyer)
- **Age:** 44 | **Location:** Boston, MA (HR Director at a 600-person firm)
- **Motivation:** Provide a meaningful wellness perk for employees; reduce "soft skill" training costs
- **Goal:** Purchase 50 Vantage B2B seats for employees as a professional development benefit

---

## 4. Feature Specification

### 4.1 The V-Credit Time-Bank Ledger

**Overview:** V-Credits are the internal currency of Vantage. They are earned by hosting sessions and spent to attend sessions.

**Credit Economics:**
| Action | V-Credits Earned/Spent |
|--------|----------------------|
| Host a 1-hour session (any skill) | +10 credits |
| Attend a 1-hour session | −8 credits |
| Complete a Story-Nodes interview | +15 credits (interviewer) / +5 credits (subject) |
| Receive a 5-star review | +2 bonus credits |
| New user welcome bonus | +5 credits |
| Referral bonus (both parties) | +3 credits each |

**Credit Ledger Rules:**
- Credits are stored on a **blockchain ledger** (see Technical Architecture) — they cannot be forged, duplicated, or retroactively altered
- Credits expire after **24 months** of account inactivity to prevent hoarding
- **Conversion cap:** Youth users may convert a maximum of 20% of monthly earned credits to Vantage Rewards (tangible redemptions); seniors may convert unlimited credits to access premium features

**V-Credit to Vantage Rewards Conversion:**
| Reward | V-Credit Cost |
|--------|---------------|
| $5 Starbucks gift card | 25 credits |
| $10 Amazon gift card | 45 credits |
| $5 student loan micro-payment (via Spinwheel) | 25 credits |
| $5 DoorDash credit | 25 credits |
| 1 month Vantage Premium | 40 credits |
| LinkedIn "Social Impact Badge" (verified) | 10 credits |

**Why this model works:** The 20% conversion cap ensures the platform economy stays healthy (credits continue circulating) while the tangible redemption option maintains youth engagement over time.

---

### 4.2 Skill Exchange Sessions

**Session Types:**

| Type | Description | Duration | Credits |
|------|-------------|----------|---------|
| **Masterclass** | One senior teaches a skill to a group of up to 6 youth | 60–90 min | −8 credits per attendee |
| **1-on-1 Session** | Private skill exchange between one senior and one youth | 30–60 min | −8 credits |
| **Reverse Session** | Youth teaches tech skill to a senior (or group of seniors) | 30–60 min | −8 credits per attendee |
| **Story-Node Interview** | Youth interviews senior using AI prompts | 60 min | Special credit rules (see 4.3) |

**Phase 1 Skill Categories (10 categories):**
1. Career & Negotiation (salary, interviews, workplace politics)
2. Personal Finance (budgeting, real estate, investing basics)
3. Home & DIY (repairs, gardening, cooking)
4. Health & Wellness (nutrition, aging, mental health)
5. Storytelling & Writing (memoir, public speaking)
6. Technology Basics (smartphones, smart home, social media)
7. Creative Arts (photography, knitting, music)
8. Business & Entrepreneurship (starting a business, marketing)
9. Cultural Heritage (languages, traditions, family history)
10. Legal & Administrative (wills, insurance, government services)

---

### 4.3 Story-Nodes (AI-Assisted Legacy Archiving)

**Overview:** A collaborative audio/video tool where a younger partner interviews an older partner using AI-generated prompts. The output is a polished "Legacy Clip" that the senior can share with family.

**User Flow:**
1. Youth user selects "Start a Story-Node" and is matched with a willing senior
2. The **Vantage AI Prompter** generates 8–12 interview questions tailored to the senior's profile (e.g., career history, travel, family milestones)
3. The interview is conducted via in-app WebRTC video call, recorded with consent
4. The raw recording is processed by the **Vantage AI Editor**:
   - Auto-transcribes and creates chapter markers
   - Removes long pauses and filler words
   - Suggests a highlight reel (2–3 minutes)
   - Generates a written summary
5. The senior receives the edited "Legacy Clip" in their Vantage "Story Vault"
6. The youth receives a **Social Impact Credit** — a verifiable credential added to their Vantage profile and optionally exported to LinkedIn
7. **Premium option:** Families pay for "Legacy Vault" storage and can export clips to Ancestry.com (Phase 3)

**AI Prompt Examples (Career category):**
- *"What was the first day of your very first job like? What surprised you most?"*
- *"Tell me about a moment at work when you had to make a really hard decision. What did you choose?"*
- *"If you could go back and give your 22-year-old self one piece of career advice, what would it be?"*

**Privacy:** All Story-Node recordings are private by default. The senior controls who can view, download, or share the clips. Family members granted "Legacy Access" can view clips in the Guardian Mode dashboard.

---

### 4.4 Safe-Space Verification & Guardian Mode

**Identity Verification:**
- **All users** must complete identity verification before their first session
- Integration with **ID.me** (or equivalent government-ID verification service)
- Verification status is displayed on every user's profile as a badge
- Users who fail verification are blocked from hosting or attending sessions

**Guardian Mode (optional, senior-only feature):**
| Feature | Details |
|---------|---------|
| Family member setup | Senior designates up to 3 "Guardians" (family members or trusted friends) |
| Activity log | Guardians can see: session dates, session topics, user profiles of exchange partners |
| Blocked information | Guardians cannot read private messages or view Story-Node content unless the senior explicitly shares it |
| Alert triggers | Guardian receives a notification if the senior's account shows unusual activity (e.g., multiple new contacts in 24 hours, a report filed against a match) |
| Opt-in only | Senior must actively enable Guardian Mode; it cannot be enabled by the family member |

---

### 4.5 The Vantage AI Matchmaker

**Phase 2 Feature** — Matching algorithm goes beyond interest tags.

**Matching Dimensions:**

| Dimension | How It's Measured |
|-----------|------------------|
| **Skill complementarity** | Senior's offered skills vs. youth's requested skills (and vice versa) |
| **Availability** | Calendar sync to find overlapping free time |
| **Communication style** | Brief onboarding questionnaire (Myers-Briggs-inspired, 5 minutes) |
| **Pace preference** | "Do you prefer a structured agenda or open conversation?" |
| **Goal alignment** | "Are you looking for a one-time exchange or an ongoing relationship?" |
| **Temperament compatibility** | Proprietary "Vantage Compatibility Score" derived from questionnaire responses |

**Matching Output:**
- Users receive a ranked list of 3–5 matches with a **Compatibility Score** (0–100) and a plain-language explanation: *"Eleanor and Jaylen are a 92% match because both prefer structured sessions, share an interest in career development, and have complementary schedules on Tuesday evenings."*

---

## 5. UI/UX Strategy: The Dual Interface

### 5.1 Adaptive Skinning

Vantage detects the user's demographic at sign-up and applies the appropriate default UI, but allows switching at any time via Settings.

| Feature | **Senior View ("Classic" UI)** | **Youth View ("Pulse" UI)** |
|---------|-------------------------------|---------------------------|
| **Typography** | 18px minimum body text; high-contrast (WCAG AAA) | 14–16px; system default contrast |
| **Navigation** | Bottom tab bar; large icons (44px+); text labels always visible | Bottom tab bar with gesture shortcuts; icons only (labels on long-press) |
| **Animations** | Reduced/off by default (respect system accessibility settings) | Full animations; micro-interactions on tap |
| **Alerts** | Audio chime + large banner; persistent until dismissed | Haptic feedback + brief toast; auto-dismisses in 4 seconds |
| **Alerts style** | "You have an appointment tomorrow at 2 PM with Jaylen" | "Session tmr @ 2PM 🕑 Tap to review" |
| **Terminology** | "Appointments" / "Lessons" / "My Profile" | "Sessions" / "Gigs" / "My Vantage" |
| **Color palette** | Warm neutrals (cream, forest green, deep navy) | High-saturation (deep purple, electric teal, off-white) |
| **Default mode** | Light mode | Dark mode |
| **Onboarding** | Step-by-step wizard with video explainers; phone support option | Swipe-through cards; skip available |

### 5.2 Accessibility Standards

- Full **WCAG 2.2 AA** compliance minimum; AAA for Senior View
- Support for **Dynamic Type** (iOS) and **Font Size** (Android)
- **VoiceOver / TalkBack** compatible
- **Color-blind friendly** palettes (tested against Deuteranopia, Protanopia)
- **Reduced Motion** mode respects system settings

---

## 6. Product Roadmap

### Phase 1: The "Micro-Community" Pilot (Months 1–4)

**Goal:** Prove the core exchange model works. Define success as 500 active matched pairs with a 60% session-completion rate and NPS > 40.

| Milestone | Month | Deliverable |
|-----------|-------|-------------|
| Infrastructure setup | 1 | Authentication, V-Credit ledger, user profiles, ID.me integration |
| Core session flow | 2 | Session booking, WebRTC video call, post-session review & credit transfer |
| Pilot launch | 3 | Soft launch with 1 senior community + 1 university partner in Boston |
| Phase 1 retrospective | 4 | NPS survey, session analytics, credit economy health report |

**Phase 1 Skill Categories:** Career & Negotiation, Personal Finance, Technology Basics (3 of the 10, reduced for pilot simplicity)

---

### Phase 2: The AI Integration (Months 5–8)

**Goal:** Scale matching quality and introduce the full skill category set.

| Milestone | Month | Deliverable |
|-----------|-------|-------------|
| Temperament questionnaire | 5 | 5-minute onboarding quiz; compatibility score engine |
| Vantage AI Matchmaker v1 | 6 | Ranked match list with compatibility scores |
| Full skill categories | 7 | All 10 skill categories enabled |
| Corporate B2B portal | 8 | Company admin dashboard; bulk seat purchasing; employee onboarding |

---

### Phase 3: The "Legacy" Rollout (Months 9–12)

**Goal:** Introduce Story-Nodes and the Premium Legacy tier.

| Milestone | Month | Deliverable |
|-----------|-------|-------------|
| Story-Nodes v1 | 9 | AI prompter, WebRTC recording, basic AI editing |
| Legacy Vault | 10 | Senior-controlled private video library; Guardian Access |
| Ancestry.com integration | 11 | Export Story-Node clips to family tree platforms |
| Vantage Rewards v1 | 12 | V-Credit to gift card/micro-payment conversion |

---

## 7. Success Metrics

| Metric | Phase 1 Target | Phase 3 Target |
|--------|---------------|---------------|
| Active matched pairs | 500 | 15,000 |
| Session completion rate | 60% | 75% |
| Net Promoter Score (both groups) | 40+ | 55+ |
| 30-day user retention | 45% | 60% |
| V-Credit velocity (credits transacted/week) | 2,000 | 80,000 |
| Story-Nodes created | N/A | 2,000 |
| B2B seats sold | 0 | 500 |

---

## 8. Open Design Questions

1. **Should V-Credits have a visible monetary equivalent displayed to users?** (e.g., "Your 40 credits = ~$20 in value") — Risk: may create regulatory issues if perceived as a currency. Recommended: avoid explicit dollar mapping in UI.

2. **How should session disputes be handled?** (e.g., a senior no-shows) — Recommended: a 24-hour cancellation window; no-show = credits not transferred; dispute resolution via in-app support chat.

3. **Should youth users be able to offer paid sessions in addition to V-Credit sessions?** — Phase 3 consideration; would require payment processing and tax implications.
