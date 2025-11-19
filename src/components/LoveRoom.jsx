import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Gift, BookHeart, Lamp, Music, Frame, Star, Coffee } from 'lucide-react'
import Particles from './Particles'
import AudioPlayer from './AudioPlayer'

export default function LoveRoom({ onExit }) {
  const [showLetter, setShowLetter] = useState(false)
  const [showSlideshow, setShowSlideshow] = useState(false)
  const [showSurprise, setShowSurprise] = useState(false)
  const [quoteIndex, setQuoteIndex] = useState(0)

  const quotes = [
    'You are my favorite place to go when my mind seeks peace.',
    'In your light, I learn how to love.',
    'Every moment with you is my new best memory.',
    'You are the poem I never knew how to write.'
  ]

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#0a0a12] to-[#090012]">
      <Particles density={150} color="rgba(255,255,255,0.25)" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Our Cozy Room</h2>
          <AudioPlayer src="/audio/favorite-song.mp3" />
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6">
          <motion.div whileHover={{ scale: 1.04 }} onClick={() => setShowSlideshow(true)} className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 cursor-pointer overflow-hidden">
            <Frame className="w-6 h-6 text-fuchsia-300" />
            <p className="mt-3 text-fuchsia-100/90 font-semibold">Photo Frame</p>
            <span className="text-xs text-fuchsia-200/60">Tap for memories</span>
            <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-fuchsia-500/20 blur-2xl group-hover:bg-fuchsia-500/30 transition" />
          </motion.div>

          <motion.div whileHover={{ scale: 1.04 }} onClick={() => setShowSurprise(true)} className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 cursor-pointer overflow-hidden">
            <Gift className="w-6 h-6 text-pink-300" />
            <p className="mt-3 text-pink-100/90 font-semibold">Gift Box</p>
            <span className="text-xs text-pink-200/60">A sparkly surprise</span>
            <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-pink-500/20 blur-2xl group-hover:bg-pink-500/30 transition" />
          </motion.div>

          <motion.div whileHover={{ scale: 1.04 }} onClick={() => setShowLetter(true)} className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 cursor-pointer overflow-hidden">
            <BookHeart className="w-6 h-6 text-violet-300" />
            <p className="mt-3 text-violet-100/90 font-semibold">Diary Letter</p>
            <span className="text-xs text-violet-200/60">A handwritten note</span>
            <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-violet-500/20 blur-2xl group-hover:bg-violet-500/30 transition" />
          </motion.div>

          <motion.div whileHover={{ scale: 1.04 }} onClick={() => setQuoteIndex((quoteIndex+1)%quotes.length)} className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 cursor-pointer overflow-hidden">
            <Lamp className="w-6 h-6 text-amber-300" />
            <p className="mt-3 text-amber-100/90 font-semibold">Lamp</p>
            <span className="text-xs text-amber-200/60">Tap for a glowing quote</span>
            <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-amber-500/20 blur-2xl group-hover:bg-amber-500/30 transition" />
          </motion.div>

          <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 overflow-hidden">
            <Music className="w-6 h-6 text-sky-300" />
            <p className="mt-3 text-sky-100/90 font-semibold">Music Player</p>
            <span className="text-xs text-sky-200/60">Playing your favorite</span>
            <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-sky-500/20 blur-2xl" />
          </div>

          <motion.div whileHover={{ scale: 1.04 }} className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 overflow-hidden">
            <Star className="w-6 h-6 text-indigo-300" />
            <p className="mt-3 text-indigo-100/90 font-semibold">Window</p>
            <span className="text-xs text-indigo-200/60">Falling stars</span>
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent_50%)]" />
          </motion.div>

          <motion.div whileHover={{ scale: 1.04 }} className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 overflow-hidden">
            <Coffee className="w-6 h-6 text-rose-300" />
            <p className="mt-3 text-rose-100/90 font-semibold">Coffee & Flowers</p>
            <span className="text-xs text-rose-200/60">Tap the lamp for compliments</span>
            <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-rose-500/20 blur-2xl" />
          </motion.div>
        </div>

        <AnimatePresence>
          {showLetter && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/70 backdrop-blur flex items-center justify-center p-6">
              <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 30, opacity: 0 }} className="max-w-2xl w-full rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/15 p-8 text-fuchsia-50 shadow-2xl">
                <h3 className="text-2xl font-bold mb-4">My Letter To You</h3>
                <div className="max-h-[50vh] overflow-y-auto space-y-4 leading-7">
                  <p>My love, from the first moment our eyes met, the world felt a little softer...</p>
                  <p>Thank you for your kindness, your laughter, your sparkle. You make everyday ordinary moments shine.</p>
                  <p>Tonight and always, I choose you — in every timeline, on every star, in every universe.</p>
                  <p>Happy Birthday, my heart. I love you endlessly.</p>
                </div>
                <div className="mt-6 flex justify-end">
                  <button onClick={() => setShowLetter(false)} className="rounded-full px-5 py-2 bg-fuchsia-600 hover:bg-fuchsia-500 transition">Close</button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showSlideshow && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/80 backdrop-blur flex items-center justify-center p-6">
              <motion.div initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.96, opacity: 0 }} className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden border border-white/15 bg-black/40">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(236,72,153,0.2),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.2),transparent_40%)]" />
                <div className="relative z-10 w-full h-full grid place-items-center text-white">
                  <p className="text-sm opacity-80">Add your photos in /public/photos and update slideshow later</p>
                </div>
                <button onClick={() => setShowSlideshow(false)} className="absolute top-3 right-3 rounded-full bg-white/10 px-3 py-1 text-xs">Close</button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showSurprise && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/70 backdrop-blur flex items-center justify-center p-6">
              <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 30, opacity: 0 }} className="max-w-md w-full rounded-2xl bg-gradient-to-b from-pink-500/20 to-violet-500/20 border border-white/15 p-8 text-pink-50 shadow-2xl text-center">
                <h3 className="text-2xl font-bold mb-3">A Little Surprise ✨</h3>
                <p className="opacity-90">You light up my world. Thank you for being you. I have a final gift waiting for you...</p>
                <button onClick={() => setShowSurprise(false)} className="mt-6 rounded-full px-5 py-2 bg-pink-600 hover:bg-pink-500 transition">Close</button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-12">
          <motion.div key={quoteIndex} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center text-fuchsia-100/90">
            “{quotes[quoteIndex]}”
          </motion.div>
        </div>

        <div className="mt-12 flex justify-center">
          <button onClick={onExit} className="rounded-full px-8 py-3 text-white bg-gradient-to-r from-indigo-600 to-fuchsia-600 hover:brightness-110 transition shadow-[0_10px_40px_rgba(236,72,153,0.35)]">Enter the Magical World</button>
        </div>
      </div>
    </section>
  )
}
