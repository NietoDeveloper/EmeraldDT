🚀 Emerald DT - Mission Control (Dashboard)
High-Engineering Admin Ecosystem for Gemstone Logistics
Emerald DT Dashboard is the internal "Mission Control" designed by Nieto Laboratory. This is a private, high-security monorepo module dedicated to employees and administrators. It manages the lifecycle of Colombian emeralds—from mining origin (Muzo/Chivor/Coscuez) to global dispatch—using a Double Cluster architecture for 100% uptime.

🛰️ Dashboard Core Functions
Inventory Telemetry: Real-time tracking of high-value assets (Carats, Color, Clarity, Cut).

Employee Management: Role-based access control (RBAC) with maximum encryption.

Traceability Ledger: Digital record of the emerald's journey from Boyacá to the client.

Sales Analytics: Financial data visualization with "SpaceX-style" dark telemetry charts.

🏗️ Technical Architecture (The Double Cluster)
The Dashboard operates under a Maximum Security Architecture:

Primary Cluster (Operations): Handles daily inventory and user management.

Secondary Cluster (Security/Mirror): Redundant node for failover and encrypted backup via AWS.

Backend: Node.js (Nieto Lab Core API).

Database: MongoDB (Strict Schema for Gemstone Metadata).

Cloud: Railway (Auto-scaling) + AWS S3 (High-res certificate storage).

DevOps: Dockerized Monorepo flow.

📂 Project Structure (Internal Focus)
Plaintext

src/
├── app/                # Control Center (Private Routes)
│   ├── (auth)/         # Multi-factor Authentication (MFA)
│   ├── inventory/      # CRUD for Emeralds (Muzo/Chivor/Coscuez)
│   ├── logistics/      # Shipping & Global Tracking
│   └── layout.tsx      # Sidebar: Technical "Console" Navigation
├── components/         # Mission-Critical UI
│   ├── charts/         # Real-time Telemetry (Recharts/D3)
│   ├── forms/          # Strict Validation for Gemstone Specs
│   └── status/         # Live System Health Monitors
├── middleware.ts       # JWT & Security Boundary (The Firewall)
├── services/           # API Integration: Software DT Core
└── store/              # Zustand: Global Admin State
🛡️ Security Protocol
Session Shield: Automated logout on inactivity + Hardware key support.

Data Integrity: Every change to an emerald's status is logged with an immutable timestamp.

Responsive: Technical control from any device (310px to 1900px), optimized for field operations in Boyacá or office work in Bogotá.

🛠️ Deployment & Maintenance
Build the production image for the Nieto Lab Cluster:

Bash

docker build -t emerald-dt-dashboard .
Standard environment variables required: MONGO_URI, JWT_SECRET_KEY, AWS_ACCESS_KEY, NIETO_LAB_API_KEY.

🎨 Design Philosophy: "Mission Control"
Unlike the public site, the Dashboard prioritizes Information Density:

Grid System: Compact data tables with high contrast.

Status Indicators: Use of "System Ready" (Green), "Warning" (Yellow), and "Critical" (Red) following aerospace standards.

Typography: Monospaced fonts for technical data and numeric values.

Developed with 100% discipline by Manuel Nieto — #1 GitHub Colombia Ranking.

GitHub Profile | Nieto Laboratory

Last updated: March 6, 2026