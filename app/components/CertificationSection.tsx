"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "./ui/card"
import { CheckCircle, BadgeIcon as Certificate, ExternalLink } from "lucide-react"
import SectionHeading from "./SectionHeading"
import { usePointerGlow } from "../hooks/usePointerGlow"

interface Certification {
  title: string
  issuer: string
  date: string
  credentialUrl: string
  logo: string
  color: string
  icon: React.ElementType
}

const certifications: Certification[] = [
  {
    title: "Hands on Machine Learning with Python",
    issuer: "IIT Kanpur",
    date: "Dec 2023",
    credentialUrl: "/certifications/IITK-ML_cert.pdf",
    logo: "/IIT_Kanpur_Logo.png",
    color: "from-blue-500 to-purple-600",
    icon: Certificate,
  },
  {
    title: "IBM Data Science Project Certificate",
    issuer: "IBM",
    date: "April 2023",
    credentialUrl: "/certifications/IBM_proj_cert.pdf",
    logo: "/IBM.jpeg",
    color: "from-orange-500 to-red-600",
    icon: Certificate,
  },
  {
    title: "Python Programming",
    issuer: "Pluralsight",
    date: "May 2020",
    credentialUrl: "/certifications/Python_cert.pdf",
    logo: "/pluralsight.png",
    color: "from-yellow-500 to-orange-600",
    icon: Certificate,
  },
  {
    title: "R Programming",
    issuer: "Pluralsight",
    date: "July 2020",
    credentialUrl: "/certifications/R_prog_cert.pdf",
    logo: "/pluralsight.png",
    color: "from-green-500 to-teal-600",
    icon: Certificate,
  },
  {
    title: "Big Data Analytics",
    issuer: "Unschool",
    date: "March 2021",
    credentialUrl: "/certifications/Unschool_BD_cert.pdf",
    logo: "/unschool.png",
    color: "from-blue-500 to-purple-600",
    icon: Certificate,
  },
  {
    title: "TCS Knockdown the Lockdown",
    issuer: "Tata Consultancy Services",
    date: "June 2020",
    credentialUrl: "/certifications/TCS_cert.pdf",
    logo: "/tcs.jpeg",
    color: "from-orange-500 to-red-600",
    icon: Certificate,
  }
]

function CertificationMark({ issuer, logo }: { issuer: string; logo: string }) {
  const [hasError, setHasError] = useState(false)
  const label = issuer
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 4)
    .toUpperCase()

  if (hasError || !logo) {
    return (
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-xs font-semibold tracking-[0.18em] text-cyan-200">
        {label}
      </div>
    )
  }

  return (
    <img
      src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${logo}`}
      alt={`${issuer} logo`}
      className="h-12 w-12 rounded-2xl object-contain bg-white p-2"
      onError={() => setHasError(true)}
    />
  )
}

const CertificationCard = ({ certification }: { certification: Certification }) => {
  const Icon = certification.icon
  const glow = usePointerGlow()

  return (
    <Card
      className="group relative h-[188px] w-[292px] flex-shrink-0 overflow-hidden rounded-[20px] border border-white/10 bg-slate-950/70 text-white shadow-panel transition-all duration-300 hover:border-cyan-300/20"
      onPointerMove={glow.handlePointerMove}
    >
      <CardContent className="relative flex h-full flex-col p-5">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background: `radial-gradient(circle at ${glow.pointer.x}% ${glow.pointer.y}%, rgba(116,255,212,0.10), transparent 34%)`,
          }}
        />
        <div className="relative mb-4 flex items-start justify-between">
          <div className="flex items-center">
            <div className="mr-3">
              <CertificationMark issuer={certification.issuer} logo={certification.logo} />
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-wide text-cyan-200">Certificate</p>
              <p className="text-xs text-slate-400">{certification.date}</p>
            </div>
          </div>
          <Icon className="h-6 w-6 text-cyan-200/60" />
        </div>

        <div className="relative mb-4 flex-1">
          <h3 className="mb-2 text-[15px] font-semibold leading-6 text-white">
            {certification.title}
          </h3>
          <p className="text-sm font-medium text-slate-300">{certification.issuer}</p>
        </div>

        <div className="relative mt-auto flex items-center justify-between gap-3">
          <div className="flex items-center space-x-1">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-xs font-medium">Verified</span>
          </div>
          <a
            href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${certification.credentialUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-w-[92px] items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Open
            <ExternalLink className="ml-2 h-3 w-3" />
          </a>
        </div>
      </CardContent>
    </Card>
  )
}

export default function CertificationsSection() {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <section id="certifications" className="section-shell">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Certifications"
          title="Professional certifications."
          description="A cleaner credential strip with a slower motion rhythm and easier interaction."
        />

        <div
          className="surface-panel relative overflow-hidden py-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="accent-line" />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-10" />
          <div
            className="hidden w-max animate-marquee gap-6 px-6 md:flex"
            style={{ animationDuration: "55s", animationPlayState: isPaused ? "paused" : "running" }}
          >
            {[...certifications, ...certifications].map((cert, index) => (
              <CertificationCard key={`${cert.title}-${index}`} certification={cert} />
            ))}
          </div>
          <div className="flex gap-6 overflow-x-auto px-6 md:hidden">
            {certifications.map((cert) => (
              <CertificationCard key={cert.title} certification={cert} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

