import React, { useEffect, useRef, useState } from 'react'
import { Play, Pause, Volume2, VolumeX, Music2 } from 'lucide-react'

export default function AudioPlayer({ src, auto = false }) {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)

  useEffect(() => {
    if (auto) {
      // Attempt autoplay muted; user gesture may be required
      audioRef.current.muted = true
      audioRef.current.play().catch(() => {})
    }
  }, [auto])

  const toggle = () => {
    const a = audioRef.current
    if (!a) return
    if (a.paused) {
      a.play()
      setPlaying(true)
    } else {
      a.pause()
      setPlaying(false)
    }
  }

  const toggleMute = () => {
    const a = audioRef.current
    a.muted = !a.muted
    setMuted(a.muted)
  }

  return (
    <div className="flex items-center gap-3 rounded-full border border-fuchsia-500/30 bg-white/5 backdrop-blur px-4 py-2 text-fuchsia-200 shadow-[0_0_25px_rgba(236,72,153,0.25)]">
      <Music2 className="w-4 h-4 opacity-80" />
      <button onClick={toggle} className="p-2 rounded-full hover:bg-white/10 transition">
        {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
      </button>
      <button onClick={toggleMute} className="p-2 rounded-full hover:bg-white/10 transition">
        {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
      </button>
      <audio ref={audioRef} src={src} loop preload="auto" />
    </div>
  )
}
