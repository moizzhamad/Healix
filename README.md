# 🏥 MediMeet (Healix) – AI-Powered Telehealth & Doctor Appointment Platform

[![Live Demo](https://img.shields.io/badge/Demo-Live%20on%20Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://healix-woad-nine.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/Neon-PostgreSQL-00E599?style=for-the-badge&logo=postgresql&logoColor=white)](https://neon.tech/)
[![Clerk](https://img.shields.io/badge/Auth-Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white)](https://clerk.com/)
[![Vonage](https://img.shields.io/badge/Video%20%26%20SMS-Vonage-8A2BE2?style=for-the-badge)](https://www.vonage.com/)

**MediMeet (Healix)** is a full-stack, enterprise-grade telemedicine and healthcare management platform designed to connect patients and vetted healthcare professionals seamlessly. Featuring real-time video consultations, multi-role authentication, dynamic slot scheduling, automated medicine reminders, a credit-based consultation economy, and an admin verification system.

---

## 🌐 Live Application

- **Production URL:** [https://automated-health-care-pm4k.vercel.app](https://healix-woad-nine.vercel.app/)
- **Repository:** [https://github.com/mohdshiyab/AutomatedHealthCare](https://healix-woad-nine.vercel.app/)

---

## 📋 Table of Contents

- [Key Features](#-key-features)
  - [For Patients](#-for-patients)
  - [For Doctors](#-for-doctors)
  - [For Administrators](#-for-administrators)
- [Tech Stack](#-tech-stack)
- [Database Architecture](#-database-architecture)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Local Installation](#local-installation)
  - [Environment Variables](#environment-variables)
  - [Database Migration](#database-migration)
  - [Running the App](#running-the-app)
- [Deployment on Vercel](#-deployment-on-vercel)
- [Project Directory Structure](#-project-directory-structure)
- [Author](#-author)
- [License](#-license)

---

## ✨ Key Features

### 🧑‍⚕️ For Patients
- **Doctor Discovery & Filters:** Search verified specialists across categories (Cardiology, Dermatology, Pediatrics, General Medicine, etc.) with real-time availability filters.
- **Appointment Scheduling:** Interactive calendar slot picker to book appointments with ease.
- **In-Browser Video Consultations:** Instant, secure, one-on-one WebRTC video consultations powered by the Vonage Video API.
- **Medicine Reminder System:** Built-in medication schedule tracker with customizable dosage times, notification alarms, and alternate caregiver contact info.
- **Credit-Based Booking:** Transparent credit wallet system (2 credits per consultation) with instant package subscriptions.
- **Appointment History:** View active schedules, past bookings, and doctor notes.

### 🩺 For Doctors
- **Doctor Onboarding & Credential Verification:** Profile setup with medical license, specialty, experience, and credential uploads.
- **Availability Management:** Set weekly availability slots, block timings, and manage calendar appointments.
- **Earnings & Payout Dashboard:** Track completed consultations, earnings, platform fees, and request automated payouts to PayPal.
- **Patient Records & Session Control:** Access patient details and start live video consultations right from the dashboard.

### 🛡️ For Administrators
- **Verification Portal:** Review, verify, or reject pending doctor applications and credentials.
- **Financial Controls:** Monitor consultation transactions, credit deductions, and process pending doctor payouts.
- **User Management:** Oversee system roles (Patients, Doctors, Admins).

---

## 💻 Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [Next.js 15](https://nextjs.org/) (App Router, Server Actions) |
| **Frontend** | [React 18](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/) |
| **Authentication** | [Clerk Auth](https://clerk.com/) (Role-based onboarding, middleware session protection) |
| **Database & ORM**| [Neon PostgreSQL](https://neon.tech/) (Serverless connection pooling), [Prisma ORM](https://www.prisma.io/) |
| **Video Telehealth**| [Vonage Video Client & Server SDK](https://developer.vonage.com/en/video/overview) |
| **SMS Notifications** | [Vonage SMS API](https://developer.vonage.com/en/messages/overview) |
| **Icons & UI** | [Lucide React](https://lucide.dev/), [Sonner Toast Notifications](https://sonner.emilkowal.ski/) |
| **Forms & Validation** | [React Hook Form](https://react-hook-form.com/), [Zod](https://zod.dev/) |
| **Hosting** | [Vercel](https://vercel.com/) |

---

## 🗄️ Database Architecture

The application uses **Prisma ORM** with **PostgreSQL** (Neon Serverless). Key schema models include:

- **`User`**: Manages user profiles, roles (`PATIENT`, `DOCTOR`, `ADMIN`), verification status, credits balance, and medical credentials.
- **`Availability`**: Doctor time slots with status (`AVAILABLE`, `BOOKED`, `BLOCKED`).
- **`Appointment`**: Connects patients and doctors with status (`SCHEDULED`, `COMPLETED`, `CANCELLED`) and Vonage session credentials.
- **`CreditTransaction`**: Audit log of credits purchased, appointment deductions, and adjustments.
- **`Payout`**: Tracks doctor payouts, credit conversions, platform fees, PayPal addresses, and status (`PROCESSING`, `PROCESSED`).
- **`MedicineReminder`**: Scheduled reminders, dosages, frequencies (`DAILY`, `SPECIFIC_DAYS`), and caregiver alert contacts.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:
- [Node.js](https://nodejs.org/) (v18.17+ or v20+)
- [Git](https://git-scm.com/)
- A free account on [Neon.tech](https://neon.tech) (or any PostgreSQL provider)
- A free account on [Clerk.com](https://clerk.com)
- A [Vonage Developer](https://developer.vonage.com/) account (for video calls & SMS)

### Local Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mohdshiyab/AutomatedHealthCare.git
   cd AutomatedHealthCare
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Environment Variables

Create a `.env` file in the root directory and add the following keys:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_clerk_publishable_key
CLERK_SECRET_KEY=sk_test_your_clerk_secret_key

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

# Vonage Telehealth Video & SMS
NEXT_PUBLIC_VONAGE_APPLICATION_ID=your_vonage_application_id
# Local path to key file OR the raw PEM private key string
VONAGE_PRIVATE_KEY=lib/private.key
VONAGE_API_KEY=your_vonage_api_key
VONAGE_API_SECRET=your_vonage_api_secret

# Database (Neon PostgreSQL with connection pooling)
DATABASE_URL=postgresql://username:password@ep-pooler.region.aws.neon.tech/dbname?sslmode=require
```

### Database Migration

Push your Prisma schema to your PostgreSQL database:

```bash
npx prisma db push
# or run migrations:
npx prisma migrate deploy
```

Generate Prisma client:
```bash
npx prisma generate
```

### Running the App

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## ☁️ Deployment on Vercel

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Deploy update"
   git push origin master
   ```

2. **Deploy via Vercel Dashboard:**
   - Import your repository: `moizzhamad/Healix`
   - Framework Preset: **Next.js**
   - In **Environment Variables**, add all keys from your `.env` file.
   - *Note for `VONAGE_PRIVATE_KEY`:* Paste the full text content of your private key starting with `-----BEGIN PRIVATE KEY-----`.

3. **Deploy via Vercel CLI:**
   ```bash
   npm i -g vercel
   vercel --prod
   ```

---

## 📁 Project Directory Structure

```text
├── actions/                  # Server Actions (appointments, credits, doctor, admin, etc.)
├── app/
│   ├── (auth)/               # Authentication routes (sign-in, sign-up)
│   ├── (main)/
│   │   ├── admin/            # Admin approval & payout verification dashboard
│   │   ├── appointments/     # Patient appointment history & details
│   │   ├── doctor/           # Doctor profile, availability & earnings dashboard
│   │   ├── doctors/          # Doctor listing, profile, & slot booking
│   │   ├── medicine-reminders/ # Medication scheduler & notifications
│   │   ├── onboarding/       # Role selection (Doctor vs Patient)
│   │   ├── pricing/          # Consultation credit packages
│   │   └── video-call/       # WebRTC video consultation room
│   ├── layout.js             # Root layout with Clerk & Theme Provider
│   └── page.js               # Landing page (Healix)
├── components/               # Reusable UI components & shadcn primitives
├── hooks/                    # Custom React hooks (useFetch, etc.)
├── lib/                      # Database client, SMS utilities, helper functions
├── prisma/
│   ├── schema.prisma         # Prisma database schema definition
│   └── migrations/           # SQL migration files
├── public/                   # Static assets, logos, and audio alarms
├── middleware.js             # Clerk route protection middleware
├── next.config.mjs           # Next.js configuration
└── package.json              # Project dependencies & scripts
```

---

## 👨‍💻 Author

**Moizz Ahmed**
- GitHub: [@moizzhamad](https://github.com/moizzhamad)
- Email: [moizzakhm@gmail.com](mailto:moizzakhm@gmail.com)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
