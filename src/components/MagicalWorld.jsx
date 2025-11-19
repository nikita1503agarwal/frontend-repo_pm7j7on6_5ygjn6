import React from 'react'
import { motion } from 'framer-motion'
import Particles from './Particles'

const Card = ({ title, subtitle, onClick, glow }) => (
  <button onClick={onClick} className={`group relative rounded-2xl border border-white/15 bg-white/5 p-6 overflow-hidden text-left w-full md:w-auto md:min-w-[280px] ${glow}`}>
    <h3 className="text-white font-semibold text-lg">{title}</h3>
    <p className="text-white/70 text-sm mt-1">{subtitle}</p>
    <div className="absolute -right-10 -bottom-10 w-48 h-48 rounded-full blur-3xl opacity-60 group-hover:opacity-80 transition" />
  </button>
)

export default function MagicalWorld({ onEnd }) {
  const open = (what) => {
    alert(`${what} — personalize with real content later!`)
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#050510] via-[#090015] to-[#02010a]">
      <Particles density={180} color="rgba(147,51,234,0.35)" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(236,72,153,0.14),transparent_45%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Magical 3D Birthday World</h2>
          <p className="mt-2 text-fuchsia-100/80">Float between glowing islands and open surprises</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="Island of Memories" subtitle="Slideshow of us" onClick={() => open('Island of Memories')} glow="[&>div]:bg-fuchsia-500/20" />
          <Card title="Island of Promises" subtitle="Soft glowing vows" onClick={() => open('Island of Love Promises')} glow="[&>div]:bg-violet-500/20" />
          <Card title="Island of Dreams" subtitle="Our future notes" onClick={() => open('Island of Future Dreams')} glow="[&>div]:bg-indigo-500/20" />
          <Card title="Island of Music" subtitle="An audio surprise" onClick={() => open('Island of Music')} glow="[&>div]:bg-sky-500/20" />
          <Card title="Island of Celebration" subtitle="Cake & fireworks" onClick={() => open('Island of Celebration')} glow="[&>div]:bg-pink-500/20" />
          <Card title="Final Chapter" subtitle="The ending scene" onClick={onEnd} glow="[&>div]:bg-purple-500/20" />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/60 to-transparent" />

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 160 160\"><g fill=\"none\" stroke=\"rgba(255,255,255,0.06)\" stroke-width=\"0.5\"><path d=\"M0 80 H160 M80 0 V160\"/></g></svg>')] opacity-30"
      />
    </section>
  )
}
