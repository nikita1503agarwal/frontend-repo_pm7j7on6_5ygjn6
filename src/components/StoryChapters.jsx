import React from 'react'
import { motion } from 'framer-motion'

const Chapter = ({ title, children, color = 'from-fuchsia-600 to-indigo-600' }) => (
  <section className="relative py-24">
    <div className={`absolute inset-0 bg-gradient-to-b ${color} opacity-10 blur-3xl`} />
    <div className="relative z-10 max-w-5xl mx-auto px-6">
      <motion.h3 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl md:text-3xl font-bold text-white">
        {title}
      </motion.h3>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="mt-6 text-fuchsia-100/90 leading-7">
        {children}
      </motion.div>
    </div>
  </section>
)

export default function StoryChapters({ onFinal }) {
  return (
    <div className="relative bg-gradient-to-b from-[#060612] via-[#090014] to-[#02010a]">
      <Chapter title="Chapter 1: How we met" color="from-pink-600 to-violet-600">
        <p>We crossed paths like stars aligning in a quiet sky. A glance, a smile — and a whole universe began to open.</p>
      </Chapter>
      <Chapter title="Chapter 2: Why you're special" color="from-violet-600 to-indigo-600">
        <p>Your kindness, your curiosity, your laughter — the softest magic I know. You make the world gentler just by being in it.</p>
      </Chapter>
      <Chapter title="Chapter 3: Our memories" color="from-indigo-600 to-sky-600">
        <p>Little moments, glowing like lanterns. Walks, late-night talks, the way our hands find each other without thinking.</p>
      </Chapter>
      <Chapter title="Chapter 4: My wish for you" color="from-fuchsia-600 to-rose-600">
        <p>May every day feel safe and warm, may your dreams come closer, and may you never doubt how deeply you are loved.</p>
      </Chapter>
      <div className="py-20 flex justify-center">
        <button onClick={onFinal} className="rounded-full px-8 py-3 text-white bg-gradient-to-r from-fuchsia-600 to-indigo-600 hover:brightness-110 transition shadow-[0_10px_40px_rgba(236,72,153,0.35)]">Go to Final Surprise</button>
      </div>
    </div>
  )
}
