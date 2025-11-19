import React from 'react'
import { motion } from 'framer-motion'

function Starfield() {
  return (
    <div className="absolute inset-0 -z-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(236,72,153,0.25),transparent_30%)]" />
      <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(99,102,241,0.1),transparent_30%)]" />
    </div>
  )
}

export default function EndingScene() {
  const openGift = () => {
    alert('Play your final romantic video here! Replace with your custom media.')
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#04040c] to-[#030015] grid place-items-center p-6">
      <Starfield />
      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }} className="relative z-10 text-center">
        <motion.div
          className="mx-auto mb-8 w-40 h-40 rounded-full bg-gradient-to-tr from-fuchsia-500 to-indigo-500 shadow-[0_0_70px_rgba(236,72,153,0.6)]"
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        />
        <h3 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-fuchsia-200 to-indigo-300 drop-shadow-[0_0_35px_rgba(236,72,153,0.45)]">
          I Love You Forever ❤️
        </h3>
        <button onClick={openGift} className="mt-8 rounded-full px-8 py-4 text-white bg-gradient-to-r from-fuchsia-600 to-indigo-600 hover:brightness-110 transition shadow-[0_10px_40px_rgba(236,72,153,0.35)]">
          Open Your Final Gift
        </button>
      </motion.div>
      <div className="absolute inset-0 pointer-events-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 40 40\"><g fill=\"none\" stroke=\"rgba(255,255,255,0.06)\" stroke-width=\"0.5\"><path d=\"M0 20 H40 M20 0 V40\"/></g></svg>')] opacity-30" />
    </section>
  )
}
