import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import Particles from './Particles'
import AudioPlayer from './AudioPlayer'

export default function CinematicIntro({ onStart }) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#0b0b12] via-[#0a0014] to-[#00010b]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <Particles density={180} color="rgba(236,72,153,0.55)" />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center p-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight bg-clip-text text-transparent bg-[radial-gradient(circle_at_50%_0%,#ff3ea5,transparent_30%),linear-gradient(90deg,#f0abfc,#60a5fa)] drop-shadow-[0_0_35px_rgba(236,72,153,0.45)]"
        >
          Happy Birthday My Love ❤️
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4 max-w-xl text-fuchsia-100/80"
        >
          A little cinematic journey through our story. Ready?
        </motion.p>

        <div className="mt-8">
          <AudioPlayer src="/audio/soft-magic.mp3" />
        </div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          onClick={onStart}
          className="mt-10 rounded-full px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-fuchsia-600 to-indigo-600 shadow-[0_10px_40px_rgba(99,102,241,0.35)] hover:shadow-[0_10px_55px_rgba(236,72,153,0.5)] hover:scale-[1.02] transition"
        >
          Start the Journey
        </motion.button>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.18),transparent_50%)]" />
    </section>
  )
}
