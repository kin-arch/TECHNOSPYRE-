import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, poster, className = "" }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(true);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [showControls, setShowControls] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const progress = (current / videoRef.current.duration) * 100;
      setCurrentTime(current);
      setProgress(progress);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const seekTime = (parseFloat(e.target.value) / 100) * duration;
    if (videoRef.current) {
      videoRef.current.currentTime = seekTime;
      setProgress(parseFloat(e.target.value));
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      setIsMuted(newVolume === 0);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
      if (isMuted && volume === 0) setVolume(1);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  // Auto-play attempt on mount (muted)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        // Autoplay might be blocked
        console.log("Autoplay blocked");
      });
      setIsPlaying(true);
      setIsMuted(true);
    }
  }, []);

  return (
    <div 
      className={`group relative rounded-lg overflow-hidden bg-black/20 backdrop-blur-sm border border-white/10 shadow-2xl transition-all duration-500 ${className}`}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-[360px] aspect-video object-cover"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onClick={togglePlay}
        loop
        playsInline
      />

      {/* Custom Controls Overlay */}
      <AnimatePresence>
        {showControls && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-12"
          >
            {/* Progress Bar */}
            <div className="relative w-full h-1.5 mb-4 group/progress">
              <input
                type="range"
                min="0"
                max="100"
                step="0.1"
                value={progress}
                onChange={handleSeek}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
              <div className="absolute inset-0 bg-white/20 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-primary"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <motion.div 
                className="absolute h-3 w-3 bg-white rounded-full -translate-y-1/2 top-1/2 shadow-lg"
                style={{ left: `calc(${progress}% - 6px)` }}
                whileHover={{ scale: 1.2 }}
              />
            </div>

            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <button 
                  onClick={togglePlay}
                  className="text-white hover:text-primary transition-colors p-1"
                >
                  {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
                </button>

                <div className="flex items-center gap-2 group/volume">
                  <button 
                    onClick={toggleMute}
                    className="text-white hover:text-primary transition-colors p-1"
                  >
                    {isMuted || volume === 0 ? <VolumeX size={20} /> : <Volume2 size={20} />}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-0 group-hover/volume:w-20 transition-all duration-300 h-1 accent-primary bg-white/20 rounded-full appearance-none overflow-hidden"
                  />
                </div>

                <div className="text-white/80 text-xs font-medium tabular-nums">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-white/40 text-[10px] uppercase tracking-widest font-bold">
                  Technospyre HQ
                </div>
                <button 
                  className="text-white/60 hover:text-white transition-colors"
                  onClick={() => videoRef.current?.requestFullscreen()}
                >
                  <Maximize size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Play Overlay (when paused) */}
      {!isPlaying && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer"
          onClick={togglePlay}
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-16 h-16 rounded-full bg-primary/20 backdrop-blur-md border border-primary/40 flex items-center justify-center text-primary shadow-2xl"
          >
            <Play size={32} fill="currentColor" className="ml-1" />
          </motion.div>
        </div>
      )}
    </div>
  );
};
