'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import Particles from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import type { Engine } from "@tsparticles/engine"

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [showMessage, setShowMessage] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple UI feedback - just show a message for now
    setShowMessage(true)
    setTimeout(() => setShowMessage(false), 3000)
    
    // Reset form fields
    setName('')
    setEmail('')
    setSubject('')
    setMessage('')
  }

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <section id="contact" className="min-h-screen py-32 relative overflow-hidden">
      <Particles
        id="tsparticles"
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
              resize: {enable : true},
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
                enable: true
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
          Drop a message, let's connect and work together!!
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-800 shadow-xl rounded-lg p-8 border border-gray-700"
          >
            <h3 className="text-2xl font-bold text-green-400 mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit}>
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
                className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-green-400 mb-6">Get in touch</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm always excited to discuss new opportunities, collaborations, or interesting projects. 
                Let's connect and create something amazing together!
              </p>
            </div>

            <div className="space-y-6">
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 text-gray-300"
              >
                <FaEnvelope className="text-green-400 text-xl" />
                <span>anirudmohan@example.com</span>
              </motion.div>
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 text-gray-300"
              >
                <FaPhone className="text-green-400 text-xl" />
                <span>+1 (555) 123-4567</span>
              </motion.div>
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 text-gray-300"
              >
                <FaMapMarkerAlt className="text-green-400 text-xl" />
                <span>Your City, Your State</span>
              </motion.div>
            </div>

            <div className="flex space-x-6 pt-6">
              <motion.a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#0077b5" }}
                className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
              >
                <FaLinkedin size={32} />
              </motion.a>
              <motion.a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#333" }}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
              >
                <FaGithub size={32} />
              </motion.a>
              <motion.a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#1da1f2" }}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <FaTwitter size={32} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-0 left-0 right-0 bg-green-500 text-white text-center py-4 z-50 shadow-lg"
          >
            <div className="flex items-center justify-center space-x-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Form submitted! (This is just a UI demo)</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Contact

