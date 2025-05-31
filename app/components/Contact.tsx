'use client'

import { useState, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import Particles from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import type { Engine } from "@tsparticles/engine"
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      // EmailJS configuration - you'll need to set these up in your environment
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      // Check if EmailJS is configured
      if (!serviceId || !templateId || !publicKey || 
          serviceId === 'service_default' || templateId === 'template_default' || publicKey === 'your_public_key') {
        // Fallback to mailto if EmailJS is not configured
        const mailtoLink = `mailto:anirudmohan@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`
        window.open(mailtoLink, '_blank')
        setIsSubmitted(true)
        setTimeout(() => setIsSubmitted(false), 5000)
        return
      }

      if (formRef.current) {
        const result = await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
        
        if (result.status === 200) {
          setIsSubmitted(true)
          // Reset form fields
          setName('')
          setEmail('')
          setSubject('')
          setMessage('')
          // Reset submission state after 5 seconds
          setTimeout(() => setIsSubmitted(false), 5000)
        } else {
          setError('Failed to send message. Please try again.')
        }
      }
    } catch (err) {
      // Fallback to mailto if EmailJS fails
      const mailtoLink = `mailto:anirudmohan@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`
      window.open(mailtoLink, '_blank')
      setIsSubmitted(true)
      setTimeout(() => setIsSubmitted(false), 5000)
    } finally {
      setIsLoading(false)
    }
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
        <motion.form
          ref={formRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-gray-800 shadow-xl rounded-lg p-8 border border-gray-700"
        >
          <div className="mb-6">
            <label htmlFor="user_name" className="block text-gray-300 font-medium mb-2">
              Name
            </label>
            <motion.input
              whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px rgba(74, 222, 128, 0.4)" }}
              type="text"
              id="user_name"
              name="user_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-white transition-all duration-300"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="user_email" className="block text-gray-300 font-medium mb-2">
              Email
            </label>
            <motion.input
              whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px rgba(74, 222, 128, 0.4)" }}
              type="email"
              id="user_email"
              name="user_email"
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
              name="subject"
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
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-white transition-all duration-300"
            ></motion.textarea>
          </div>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-red-600/20 border border-red-500 rounded-md text-red-300"
            >
              {error}
            </motion.div>
          )}
          <motion.button
            type="submit"
            disabled={isLoading}
            whileHover={!isLoading ? { scale: 1.05, backgroundColor: "#22c55e" } : {}}
            whileTap={!isLoading ? { scale: 0.95 } : {}}
            className={`w-full px-4 py-2 rounded-md transition-colors duration-300 ${
              isLoading 
                ? 'bg-gray-600 cursor-not-allowed text-gray-300' 
                : 'bg-green-600 text-white hover:bg-green-700'
            }`}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </div>
            ) : (
              'Send Message'
            )}
          </motion.button>
        </motion.form>
        <div className="mt-12 flex justify-center space-x-8">
          <motion.a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#0077b5" }}
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FaLinkedin size={28} />
          </motion.a>
          <motion.a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#333" }}
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FaGithub size={28} />
          </motion.a>
          <motion.a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#1da1f2" }}
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FaTwitter size={28} />
          </motion.a>
        </div>
      </div>
      <AnimatePresence>
        {isSubmitted && (
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
              <span>Message sent successfully! I'll get back to you soon.</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Contact

