'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import Particles from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import type { Engine } from "@tsparticles/engine"

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', { name, email, subject, message })
    setIsSubmitted(true)
    // Reset form fields
    setName('')
    setEmail('')
    setSubject('')
    setMessage('')
    // Reset submission state after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <section id="contact" className="min-h-screen py-32 relative overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 pt-16"
        >
          Let's work Together!!
        </motion.h2>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-gray-800 shadow-lg rounded-lg p-8"
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
              Name
            </label>
            <motion.input
              whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px rgba(74, 222, 128, 0.4)" }}
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-white transition-all duration-300"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
              Email
            </label>
            <motion.input
              whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px rgba(74, 222, 128, 0.4)" }}
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-white transition-all duration-300"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="subject" className="block text-gray-300 font-medium mb-2">
              Subject
            </label>
            <motion.input
              whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px rgba(74, 222, 128, 0.4)" }}
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-white transition-all duration-300"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
              Message
            </label>
            <motion.textarea
              whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px rgba(74, 222, 128, 0.4)" }}
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-white transition-all duration-300"
            ></motion.textarea>
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05, backgroundColor: "#22c55e" }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-green-600 text-white px-4 py-2 rounded-md transition-colors duration-300"
          >
            Send Message
          </motion.button>
        </motion.form>
        <div className="mt-12 flex justify-center space-x-6">
          <motion.a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#0077b5" }}
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FaLinkedin size={24} />
          </motion.a>
          <motion.a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#6e5494" }}
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FaGithub size={24} />
          </motion.a>
          <motion.a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#1da1f2" }}
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FaTwitter size={24} />
          </motion.a>
        </div>
      </div>
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-0 left-0 right-0 bg-green-500 text-white text-center py-4 z-50"
          >
            Thank you for your message! We'll get back to you soon.
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Contact

