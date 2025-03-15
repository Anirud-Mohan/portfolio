"use client"

import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"

const educationData = [
  {
    institution: "University of Maryland, College Park",
    degree: "Master of Science in Applied Machine Learning",
    period: "2024 - present",
    logo: "/umd-logo.jpeg",
    details: {
      courses: ["Advanced Machine Learning", "Deep Learning", "Natural Language Processing", "Computer Vision"],
      achievements: ["Research Assistant in AI Lab", "4.0 GPA", "Published paper in ML conference"],
    },
  },
  {
    institution: "Misrimal Navajee Munoth Jain Engineering College",
    degree: "Bachelor of Engineering in Computer Science",
    period: "2019 - 2023",
    logo: "/mnmjec_logo.png",
    details: {
      courses: ["Data Structures", "Algorithms", "Database Management", "Software Engineering"],
      achievements: ["Class Representative", "First Class with Distinction", "Technical Club Lead"],
    },
  },
]

export default function EducationSection() {
  return (
    <section id="education" className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <h2 className="text-5xl font-bold mb-16 text-[#66FFEE]">Education</h2>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {educationData.map((edu, index) => (
          <Dialog key={index}>
            <DialogTrigger className="w-full">
              <Card className="bg-slate-900/60 border-none text-white hover:transform hover:scale-105 transition-all cursor-pointer w-full">
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="w-64 h-64 mb-6 bg-white rounded-lg overflow-hidden">
                    <Image
                      src={edu.logo || "/placeholder.svg"}
                      alt={`${edu.institution} logo`}
                      width={256}
                      height={256}
                      className="object-contain"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-green-500 text-2xl font-semibold mb-2">{edu.institution}</h3>
                    <p className="text-xl mb-2">{edu.degree}</p>
                    <p className="text-gray-400 text-lg">{edu.period}</p>
                  </div>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="bg-slate-900/95 text-white border-slate-800">
              <DialogHeader>
                <DialogTitle className="text-2xl text-green-500">{edu.institution}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Key Courses</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {edu.details.courses.map((course, i) => (
                      <li key={i}>{course}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Achievements</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {edu.details.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  )
}

