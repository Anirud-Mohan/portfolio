"use client"

import { useRef } from "react"
import { useAnimationFrame } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"

interface Certification {
  title: string
  issuer: string
  date: string
  credentialUrl: string
}

const certifications: Certification[] = [
  {
    title: "Hands-On Machine Learning",
    issuer: "IIT Kanpur",
    date: "Dec 2023",
    credentialUrl: "/certifications/IITK-ML_cert.pdf",
  },
  {
    title: "IBM Data Science Professional - Prject Certificate",
    issuer: "IBM",
    date: "April 2023",
    credentialUrl: "/certifications/IBM_proj_cert.pdf",
  },
  {
    title: "R Programming",
    issuer: "PluralSight",
    date: "July 2020",
    credentialUrl: "/certifications/R_prog_cert.pdf",
  },
  {
    title: "TCS Knocdown the Lockdown",
    issuer: "TCS",
    date: "June 2020",
    credentialUrl: "/certifications/TCS_cert.pdf",
  },
  {
    title: "Big Data Analytics",
    issuer: "Unschool",
    date: "March 2021",
    credentialUrl: "/certifications/Unschool_BD_cert.pdf",
  },
  {
    title: "Python Programming",
    issuer: "Pluralsight",
    date: "May 2020",
    credentialUrl: "/certifications/Python_cert.pdf",
  },

]

const CertificationCard = ({ certification }: { certification: Certification }) => (
  <Card className="bg-slate-900/60 border-none text-white hover:transform hover:scale-105 transition-all cursor-pointer w-[360px] h-[480px] flex-shrink-0">
    <CardContent className="p-8 flex flex-col justify-between h-full">
      <div>
        <h3 className="text-green-500 text-3xl font-semibold mb-4">{certification.title}</h3>
        <p className="text-gray-300 text-xl mb-2">Issued by: {certification.issuer}</p>
        <p className="text-gray-400 text-lg">Date: {certification.date}</p>
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full bg-green-500 hover:bg-green-600 text-white text-xl py-4">View Details</Button>
        </DialogTrigger>
        <DialogContent className="bg-slate-800 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl">{certification.title}</DialogTitle>
          </DialogHeader>
          <div className="mt-4 text-lg">
            <p>Issued by: {certification.issuer}</p>
            <p>Date: {certification.date}</p>
            <Button
              className="mt-6 bg-green-500 hover:bg-green-600 text-white text-xl py-4 w-full"
              onClick={() => window.open(certification.credentialUrl, "_blank")}
            >
              View Credential
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </CardContent>
  </Card>
)

export default function CertificationsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const xRef = useRef(0)

  useAnimationFrame(() => {
    if (containerRef.current) {
      xRef.current -= 1 // Reduced speed due to larger cards
      if (xRef.current <= -containerRef.current.scrollWidth / 2) {
        xRef.current = 0
      }
      containerRef.current.style.transform = `translateX(${xRef.current}px)`
    }
  })

  return (
    <section id="certifications" className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <h2 className="text-5xl font-bold mb-16 text-[#66FFEE]">Certifications</h2>

      <div className="w-full max-w-7xl relative overflow-hidden">
        <div ref={containerRef} className="flex space-x-8" style={{ width: "fit-content" }}>
          {[...certifications, ...certifications].map((cert, index) => (
            <CertificationCard key={index} certification={cert} />
          ))}
        </div>
      </div>
    </section>
  )
}

