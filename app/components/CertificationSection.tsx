"use client"

import type React from "react"

import { useState } from "react"
import { ExternalLink } from "lucide-react"
import SectionHeading from "./SectionHeading"

interface Certification {
  title: string
  issuer: string
  date: string
  credentialUrl: string
  logo: string
}

const certifications: Certification[] = [
  {
    title: "Hands on Machine Learning with Python",
    issuer: "IIT Kanpur",
    date: "Dec 2023",
    credentialUrl: "/certifications/IITK-ML_cert.pdf",
    logo: "/IIT_Kanpur_Logo.png",
  },
  {
    title: "IBM Data Science Project Certificate",
    issuer: "IBM",
    date: "April 2023",
    credentialUrl: "/certifications/IBM_proj_cert.pdf",
    logo: "/IBM.jpeg",
  },
  {
    title: "Python Programming",
    issuer: "Pluralsight",
    date: "May 2020",
    credentialUrl: "/certifications/Python_cert.pdf",
    logo: "/pluralsight.png",
  },
  {
    title: "R Programming",
    issuer: "Pluralsight",
    date: "July 2020",
    credentialUrl: "/certifications/R_prog_cert.pdf",
    logo: "/pluralsight.png",
  },
  {
    title: "Big Data Analytics",
    issuer: "Unschool",
    date: "March 2021",
    credentialUrl: "/certifications/Unschool_BD_Cert.pdf",
    logo: "/unschool.png",
  },
  {
    title: "TCS Knockdown the Lockdown",
    issuer: "Tata Consultancy Services",
    date: "June 2020",
    credentialUrl: "/certifications/TCS_cert.pdf",
    logo: "/tcs.jpeg",
  },
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
      <div className="flex h-10 w-10 items-center justify-center border border-border bg-muted font-mono text-[9px] tracking-[0.12em] text-muted-foreground">
        {label}
      </div>
    )
  }

  return (
    <img
      src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${logo}`}
      alt={`${issuer} logo`}
      className="h-10 w-10 border border-border bg-white object-contain p-1.5"
      onError={() => setHasError(true)}
    />
  )
}

const CertificationItem = ({ certification }: { certification: Certification }) => {
  return (
    <div className="flex h-[120px] w-[300px] flex-shrink-0 items-center gap-4 border border-border bg-card px-4">
      <CertificationMark issuer={certification.issuer} logo={certification.logo} />
      <div className="min-w-0 flex-1">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          {certification.date}
        </p>
        <h3 className="mt-1 truncate text-sm font-medium text-foreground">{certification.title}</h3>
        <p className="mt-1 truncate text-xs text-muted-foreground">{certification.issuer}</p>
      </div>
      <a
        href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${certification.credentialUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center border border-border px-3 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-foreground transition hover:bg-foreground hover:text-background"
      >
        Open
        <ExternalLink className="ml-1.5 h-3 w-3" />
      </a>
    </div>
  )
}

export default function CertificationsSection() {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <section id="certifications" className="section-shell">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Certifications"
          title="Credentials."
          description="A slow-moving strip — hover to pause, open to view."
        />

        <div
          className="relative overflow-hidden border border-border py-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
          <div
            className="hidden w-max animate-marquee gap-4 px-4 md:flex"
            style={{ animationDuration: "55s", animationPlayState: isPaused ? "paused" : "running" }}
          >
            {[...certifications, ...certifications].map((cert, index) => (
              <CertificationItem key={`${cert.title}-${index}`} certification={cert} />
            ))}
          </div>
          <div className="flex gap-4 overflow-x-auto px-4 md:hidden">
            {certifications.map((cert) => (
              <CertificationItem key={cert.title} certification={cert} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
