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
    <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 text-white hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300 cursor-pointer w-[380px] h-[280px] flex-shrink-0 overflow-hidden relative group">
      {/* Premium green accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-green-500 to-green-400"></div>
      
      {/* Subtle corner accent */}
      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-green-400/30"></div>

      <CardContent className="p-6 flex flex-col h-full relative">
        {/* Header section */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center">
            <div className="mr-3 bg-white/95 rounded-lg p-2 w-12 h-12 flex items-center justify-center shadow-md">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${certification.logo ||'/placeholder.svg'}`}
                alt={`${certification.issuer} logo`}
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-green-400 text-sm font-medium uppercase tracking-wide">Certificate</p>
              <p className="text-slate-300 text-xs">{certification.date}</p>
            </div>
          </div>
          <Icon className="w-6 h-6 text-green-400/60" />
        </div>

        {/* Title section */}
        <div className="flex-1 mb-4">
          <h3 className="text-white text-lg font-semibold leading-tight mb-2 group-hover:text-green-50 transition-colors">
            {certification.title}
          </h3>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
            <p className="text-slate-300 text-sm font-medium">{certification.issuer}</p>
          </div>
        </div>

        {/* Professional badge/verification */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-xs font-medium">Verified</span>
          </div>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                size="sm"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-sm font-semibold px-4 py-2 rounded-md shadow-md hover:shadow-lg transition-all duration-200"
              >
                View Details
                <ExternalLink className="ml-1 w-3 h-3" />
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-gradient-to-br from-slate-800 to-slate-900 text-white border border-slate-700/50 max-w-md">
              <DialogHeader>
                <DialogTitle className="text-xl text-green-400 flex items-center">
                  <Award className="mr-2 text-green-500" /> Certificate Details
                </DialogTitle>
              </DialogHeader>
              <div className="mt-6 space-y-4">
                {/* Enhanced modal header */}
                <div className="flex items-center justify-center bg-slate-900/60 p-6 rounded-lg border border-slate-700/30">
                  <div className="bg-white rounded-lg p-3 w-20 h-20 flex items-center justify-center shadow-lg">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${certification.logo ||'/placeholder.svg'}`}
                      alt={`${certification.issuer} logo`}
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                </div>
                
                {/* Certificate information */}
                <div className="bg-slate-900/60 p-4 rounded-lg border border-slate-700/30 space-y-3">
                  <h4 className="text-lg font-semibold text-white">{certification.title}</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      <span className="text-slate-300">Issued by: </span>
                      <span className="text-green-400 font-medium ml-1">{certification.issuer}</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      <span className="text-slate-300">Issue Date: </span>
                      <span className="text-green-400 font-medium ml-1">{certification.date}</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                      <span className="text-emerald-400 text-sm font-medium">Verified Credential</span>
                    </div>
                  </div>
                </div>
                
                <Button
                  className="mt-6 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 w-full shadow-lg hover:shadow-xl transition-all duration-200"
                  onClick={() => window.open(`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${certification.credentialUrl}`, "_blank")}
                >
                  <ExternalLink className="mr-2 w-4 h-4" />
                  Open Certificate
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Subtle background pattern */}
        <div className="absolute bottom-0 right-0 w-20 h-20 opacity-5">
          <Icon className="w-full h-full text-green-400" />
        </div>
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
    <section id="certifications" className="min-h-screen flex flex-col items-center justify-center px-4 py-16 relative bg-transparent">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Professional Certifications
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full"></div>
        <p className="text-slate-400 mt-4 text-lg">Validated expertise and continuous learning</p>
      </div>

      <div className="w-full max-w-7xl relative overflow-hidden">
        <div ref={containerRef} className="flex space-x-6" style={{ width: "fit-content" }}>
          {[...certifications, ...certifications].map((cert, index) => (
            <CertificationCard key={index} certification={cert} />
          ))}
        </div>
      </div>
    </section>
  )
}

