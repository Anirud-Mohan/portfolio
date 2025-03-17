"use client"

import type React from "react"

import { useRef } from "react"
import { useAnimationFrame } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Award, CheckCircle, Medal, Star, BadgeIcon as Certificate, ExternalLink } from "lucide-react"
import Image from "next/image"

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

const CertificationCard = ({ certification }: { certification: Certification }) => {
  const Icon = certification.icon

  return (
    <Card className="bg-slate-900/60 border-none text-white hover:transform hover:scale-105 transition-all cursor-pointer w-[360px] h-[480px] flex-shrink-0 overflow-hidden relative">
      {/* Decorative corner ribbon */}
      <div className={`absolute top-0 right-0 w-32 h-32 overflow-hidden`}>
        <div
          className={`absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-40 h-10 bg-gradient-to-r ${certification.color}`}
        ></div>
      </div>

      {/* Card content */}
      <CardContent className="p-8 flex flex-col justify-between h-full">
        <div>
          {/* Certificate header with logo */}
          <div className="flex items-center mb-6">
            <div className="mr-4 bg-white rounded-full p-2 w-16 h-16 flex items-center justify-center">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${certification.logo ||'/placeholder.svg'}`}
                alt={`${certification.issuer} logo`}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <h3 className="text-green-500 text-2xl font-semibold">{certification.title}</h3>
          </div>

          {/* Certificate icon */}
          <div className="flex justify-center my-4">
            <Icon className="w-20 h-20 text-green-400 opacity-20" />
          </div>

          {/* Certificate details */}
          <div className="bg-slate-800/50 rounded-lg p-4 mb-4">
            <p className="text-gray-300 text-lg mb-2 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
              Issued by: {certification.issuer}
            </p>
            <p className="text-gray-400 text-lg flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
              Date: {certification.date}
            </p>
          </div>
        </div>

        {/* Certificate actions */}
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-xl py-4 shadow-lg">
              View Certificate <ExternalLink className="ml-2 w-5 h-5" />
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-slate-800 text-white border border-green-500">
            <DialogHeader>
              <DialogTitle className="text-2xl text-green-400 flex items-center">
                <Award className="mr-2 text-green-500" /> {certification.title}
              </DialogTitle>
            </DialogHeader>
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-center bg-slate-900/60 p-6 rounded-lg">
                <div className="bg-white rounded-full p-4 w-24 h-24 flex items-center justify-center">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${certification.logo ||'/placeholder.svg'}`}
                    alt={`${certification.issuer} logo`}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="bg-slate-900/60 p-4 rounded-lg">
                <p className="text-lg mb-2">
                  Issued by: <span className="text-green-400">{certification.issuer}</span>
                </p>
                <p className="text-lg">
                  Issue Date: <span className="text-green-400">{certification.date}</span>
                </p>
              </div>
              <Button
                className="mt-6 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-xl py-6 w-full shadow-lg"
                onClick={() => window.open(certification.credentialUrl, "_blank")}
              >
                Verify Credential <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-50"></div>
      </CardContent>
    </Card>
  )
}

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

