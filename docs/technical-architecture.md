# Technical Architecture — Vantage: The Bridge Between Eras

> **Version:** 1.0 | **Date:** April 2026 | **Status:** Pre-Development Design

---

## 1. Architecture Overview

Vantage is a **mobile-first, cloud-native** platform built for reliability, security, and accessibility at scale. The architecture is designed to support two demographically distinct user groups simultaneously, with a secure internal economy and AI-powered features.

```
┌─────────────────────────────────────────────────────────────────┐
│                        CLIENT LAYER                             │
│  ┌───────────────────────┐    ┌───────────────────────────┐    │
│  │  React Native App     │    │  React Native App         │    │
│  │  "Classic" UI (Senior)│    │  "Pulse" UI (Youth)       │    │
│  └──────────┬────────────┘    └────────────┬──────────────┘    │
└─────────────┼───────────────────────────────┼───────────────────┘
              │                               │
              ▼                               ▼
┌─────────────────────────────────────────────────────────────────┐
│                      API GATEWAY (GraphQL)                       │
│               Rate Limiting | Auth | Request Routing             │
└──────────────────────────────┬──────────────────────────────────┘
                               │
        ┌──────────────────────┼──────────────────────┐
        ▼                      ▼                      ▼
┌───────────────┐    ┌──────────────────┐    ┌───────────────────┐
│  User Service │    │  Session Service  │    │  Credit Service   │
│  (Auth/Profile│    │  (Booking/WebRTC) │    │  (Blockchain      │
│   /ID.me)     │    │                  │    │   Ledger)         │
└───────────────┘    └──────────────────┘    └───────────────────┘
        │                      │                      │
        ▼                      ▼                      ▼
┌─────────────────────────────────────────────────────────────────┐
│                     AI SERVICES LAYER                           │
│  ┌─────────────────┐   ┌─────────────────┐   ┌──────────────┐  │
│  │ Matchmaker AI   │   │  Story-Nodes AI  │   │ Moderation   │  │
│  │ (Compatibility  │   │  (Prompter +     │   │ AI           │  │
│  │  Scoring)       │   │   Video Editor)  │   │              │  │
│  └─────────────────┘   └─────────────────┘   └──────────────┘  │
└─────────────────────────────────────────────────────────────────┘
        │                      │                      │
        ▼                      ▼                      ▼
┌─────────────────────────────────────────────────────────────────┐
│                     DATA LAYER                                   │
│  ┌──────────────┐  ┌──────────────┐  ┌─────────────────────┐   │
│  │ PostgreSQL   │  │ Redis Cache  │  │ Blockchain Ledger   │   │
│  │ (Users,      │  │ (Sessions,   │  │ (V-Credit           │   │
│  │  Profiles)   │  │  Presence)   │  │  Transactions)      │   │
│  └──────────────┘  └──────────────┘  └─────────────────────┘   │
│  ┌──────────────┐  ┌──────────────┐                             │
│  │ S3-Compatible│  │ CDN          │                             │
│  │ Object Store │  │ (Static      │                             │
│  │ (Videos,     │  │  Assets)     │                             │
│  │  Audio)      │  └──────────────┘                             │
│  └──────────────┘                                               │
└─────────────────────────────────────────────────────────────────┘
```

---

## 2. Technology Stack

### 2.1 Frontend

| Component | Technology | Rationale |
|-----------|-----------|-----------|
| Mobile app | **React Native 0.74+** | Single codebase for iOS and Android; strong accessibility API support; large talent pool |
| UI framework | **React Native Paper** (Senior) + **custom Pulse design system** (Youth) | Paper provides accessible Material components; custom DS enables Pulse's gesture-heavy interactions |
| State management | **Redux Toolkit + RTK Query** | Predictable state; built-in caching and API integration |
| Navigation | **React Navigation 7** | Industry standard; supports deep linking and accessibility |
| Video calls | **react-native-webrtc** | WebRTC bindings for React Native; peer-to-peer for privacy |
| Animations | **React Native Reanimated 3** | Smooth 60fps animations on the UI thread; respects Reduced Motion |
| Accessibility | **React Native Accessibility API** | VoiceOver / TalkBack support; Dynamic Type; color contrast enforcement |

### 2.2 Backend

| Component | Technology | Rationale |
|-----------|-----------|-----------|
| API layer | **Node.js + GraphQL (Apollo Server)** | Flexible querying; single endpoint for both client types; real-time subscriptions via WebSocket |
| Authentication | **Auth0** | OIDC/OAuth2 standard; MFA support; easy ID.me integration via custom connections |
| User service | **Node.js microservice** | Handles profiles, preferences, Guardian Mode settings |
| Session service | **Node.js microservice** | Booking engine, scheduling, WebRTC signaling server (mediasoup) |
| Notification service | **Firebase Cloud Messaging (FCM)** | Cross-platform push notifications; supports rich media for Senior View |
| Credit service | **Node.js microservice** | Interfaces with the blockchain ledger; handles all V-Credit transactions |
| Storage | **PostgreSQL 16** (primary DB) + **Redis 7** (cache/presence) | PostgreSQL for relational data integrity; Redis for real-time session presence and leaderboards |
| File storage | **AWS S3** (or S3-compatible) | Story-Node video storage; profile photos |
| CDN | **CloudFront / Cloudflare** | Low-latency asset delivery globally |
| Infrastructure | **AWS ECS (Fargate)** + **Terraform** | Serverless containers; IaC for reproducibility |

### 2.3 WebRTC Architecture

Vantage uses WebRTC for all in-app video/audio calls, ensuring user phone numbers and personal contact information are never exchanged.

```
Caller (Youth) ──────────────────────────────────── Callee (Senior)
     │                                                      │
     │          WebRTC Peer-to-Peer Connection              │
     │ ◄──────────────────────────────────────────────────► │
     │                                                      │
     │              ▲                      ▲                │
     │              │   STUN/TURN Server   │                │
     │              └──────────────────────┘                │
     │                  (for NAT traversal)                  │
     │                                                      │
     └──────────► Signaling Server (mediasoup) ◄────────────┘
                  (WebSocket-based; hosted on Vantage backend)
```

- **STUN servers:** Google STUN (free, for NAT discovery); Vantage TURN server as fallback
- **TURN server:** Self-hosted with **coturn** on AWS for users behind restrictive NATs (common in senior care facilities)
- **Encryption:** All WebRTC media is encrypted end-to-end via DTLS-SRTP by default
- **Recording (Story-Nodes only):** With explicit consent from both parties, the TURN server captures the stream to S3 for AI processing. Recording indicator is always visible in UI.

### 2.4 AI Services

| Service | Technology | Rationale |
|---------|-----------|-----------|
| Matchmaker AI (Phase 2) | **Python FastAPI + scikit-learn + OpenAI Embeddings** | Compatibility scoring using questionnaire response embeddings; cosine similarity matching |
| Story-Nodes Prompter | **OpenAI GPT-4o (fine-tuned)** | Generates contextually relevant interview prompts based on senior's profile |
| Story-Nodes Video Editor | **AWS MediaConvert + Whisper (transcription) + GPT-4o (chapter generation)** | Automated transcription, chapter markers, highlight reel selection |
| Content Moderation | **AWS Rekognition + OpenAI Moderation API** | Screens profile photos and session thumbnails; flags inappropriate content in chat |
| Abuse Detection | **Custom ML model (Python)** | Detects unusual account behavior (credit manipulation, rapid new contacts) |

### 2.5 Blockchain Ledger (V-Credit Economy)

The V-Credit ledger requires **immutability, transparency, and auditability** without the complexity of a public blockchain.

**Recommended approach: Private/Permissioned Blockchain**

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Platform | **Hyperledger Fabric** | Enterprise-grade; private; no cryptocurrency required; well-supported |
| Consensus | **Raft consensus** | Fast finality; appropriate for a permissioned network |
| Smart contracts | **Go chaincode** | Defines V-Credit minting, transfer, and burn rules |
| Access | **Vantage nodes only** | No public access; Vantage operates all validator nodes |
| Auditability | **Explorer dashboard (admin only)** | Internal audit tool for detecting credit anomalies |

**Why not a public blockchain (Ethereum, Solana)?**
- Regulatory risk: public tokens may be classified as securities
- Gas fees make micro-transactions economically unviable
- Unnecessary complexity for a permissioned loyalty system

**V-Credit Transaction Flow:**
```
1. Session completes (both parties confirm via in-app button)
2. Session Service emits "session_completed" event
3. Credit Service receives event
4. Credit Service submits a signed transaction to the Hyperledger Fabric chaincode
5. Chaincode validates: session ID exists, not already paid, amounts correct
6. Chaincode updates both users' ledger balances
7. Credit Service receives confirmation and updates PostgreSQL (read replica for fast queries)
8. Both users receive push notification: "Your V-Credits have been updated"
```

---

## 3. Security Architecture

### 3.1 Identity & Authentication

| Layer | Implementation |
|-------|---------------|
| Authentication | Auth0 with OIDC; JWT access tokens (15-min expiry) + refresh tokens (7-day, rotated) |
| Identity verification | **ID.me** integration via OAuth; verification status stored in User Service; cannot be self-reported |
| MFA | Required for all corporate B2B accounts; strongly encouraged (with rewards incentive) for consumer accounts |
| Session tokens | Stored in device secure storage (iOS Keychain / Android Keystore); never in AsyncStorage |

### 3.2 Data Privacy

| Data Type | Storage | Access Control |
|-----------|---------|---------------|
| User PII (name, DOB, ID verification) | PostgreSQL (encrypted at rest, AES-256) | User Service only; no cross-service PII sharing |
| Private messages | End-to-end encrypted (Signal Protocol via libsodium) | Decrypted only on client devices |
| Story-Node recordings | S3 (server-side encryption + client-side AES-256 key per video) | Only accessible by senior (owner) and designated Legacy Access family members |
| Guardian Mode activity log | PostgreSQL | Read-only access by designated guardians; senior can revoke at any time |
| V-Credit balances | Blockchain ledger | Read by Credit Service; displayed to owning user only |

### 3.3 GDPR / CCPA Compliance

- **Data minimization:** Only collect data required for the feature (e.g., no location tracking beyond city-level for matching)
- **Right to deletion:** Account deletion triggers a cascade delete of all PII; blockchain transaction records are anonymized (user ID replaced with hash) to preserve ledger integrity
- **Data portability:** Users can export all their data (sessions, Story-Nodes, credit history) via a JSON download
- **Consent management:** Granular consent UI at sign-up; consent records stored in Auth0

---

## 4. Infrastructure & DevOps

### 4.1 Cloud Infrastructure

```
Production Environment (AWS):
├── us-east-1 (Primary)
│   ├── ECS Fargate (API Gateway, microservices)
│   ├── RDS PostgreSQL (Multi-AZ)
│   ├── ElastiCache Redis (cluster mode)
│   ├── Hyperledger Fabric (EC2, 3 validator nodes)
│   ├── TURN server (coturn on EC2)
│   └── S3 + CloudFront (video storage + CDN)
└── us-west-2 (Disaster Recovery)
    ├── RDS Read Replica
    └── S3 Cross-Region Replication
```

### 4.2 CI/CD Pipeline

| Stage | Tool | Trigger |
|-------|------|---------|
| Lint + unit tests | GitHub Actions | Every PR |
| Integration tests | GitHub Actions + Docker Compose | Every PR merge to `main` |
| Security scan | GitHub Advanced Security (CodeQL + Dependabot) | Every PR |
| Build (iOS + Android) | **Expo Application Services (EAS)** | Tagged release |
| Deploy (backend) | GitHub Actions + Terraform + ECS rolling deploy | Tagged release |
| App store submission | EAS Submit | Manual approval gate |

### 4.3 Monitoring & Observability

| Concern | Tool |
|---------|------|
| Application metrics | Datadog APM |
| Error tracking | Sentry (React Native + Node.js) |
| Log aggregation | AWS CloudWatch Logs |
| Uptime monitoring | Datadog Synthetics |
| Credit ledger health | Custom Hyperledger Explorer dashboard |
| AI model drift | Datadog ML Monitoring |

---

## 5. Scalability Considerations

| Concern | Strategy |
|---------|---------|
| WebRTC at scale | mediasoup SFU (Selective Forwarding Unit) for group sessions (Masterclasses with 6 attendees) |
| Credit transaction throughput | Hyperledger Fabric supports ~3,000 TPS; more than sufficient for Phase 1-3 volumes |
| AI inference latency | OpenAI API with streaming responses; local caching of common prompt templates |
| Video storage costs | Tiered S3 storage (S3 Standard → S3 Glacier after 90 days for inactive Story-Nodes) |
| Database read load | Read replicas for PostgreSQL; Redis caching for profile and session data |

---

## 6. Third-Party Integrations

| Integration | Purpose | Phase |
|-------------|---------|-------|
| **ID.me** | Government-ID verification for all users | Phase 1 |
| **Auth0** | Authentication and MFA | Phase 1 |
| **Firebase Cloud Messaging** | Push notifications (iOS + Android) | Phase 1 |
| **Stripe** | B2B subscription billing; Vantage Rewards gift card purchasing | Phase 1 |
| **Spinwheel API** | Student loan micro-payments (V-Credit conversion) | Phase 3 |
| **OpenAI API** | Story-Nodes prompter; AI editing summaries | Phase 3 |
| **AWS MediaConvert** | Video transcoding for Story-Nodes | Phase 3 |
| **Ancestry.com API** | Story-Node export to family trees | Phase 3 |
| **LinkedIn API** | Social Impact Badge export | Phase 3 |

---

## 7. Repository Structure

```
vantage/
├── .github/
│   └── workflows/             # CI/CD pipeline definitions
├── apps/
│   └── mobile/                # React Native app (Expo)
│       ├── src/
│       │   ├── components/    # Shared UI components
│       │   ├── screens/       # Screen components
│       │   ├── navigation/    # React Navigation setup
│       │   ├── store/         # Redux Toolkit store
│       │   ├── hooks/         # Custom hooks
│       │   ├── themes/        # Classic (Senior) + Pulse (Youth) themes
│       │   └── utils/         # Helpers, constants
│       ├── app.config.ts      # Expo config
│       └── package.json
├── services/
│   ├── api-gateway/           # GraphQL API gateway (Apollo Server)
│   ├── user-service/          # Auth, profiles, Guardian Mode
│   ├── session-service/       # Booking, WebRTC signaling
│   ├── credit-service/        # V-Credit ledger interface
│   └── notification-service/  # Push notifications
├── ai/
│   ├── matchmaker/            # Compatibility scoring model
│   └── story-nodes/           # Prompt generation + video processing
├── blockchain/
│   └── v-credit-chaincode/    # Hyperledger Fabric Go chaincode
├── infrastructure/
│   └── terraform/             # AWS infrastructure as code
└── docs/                      # Planning documents
```
