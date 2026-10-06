import React, { useState, useEffect, useRef } from "react";
import {
  Volume2,
  VolumeX,
  Volume1,
  Music,
  Upload,
  Link as LinkIcon,
  Sliders,
  Check,
  X,
  RotateCcw,
  Sparkles,
  Play,
  Pause,
  Repeat,
  Heart,
} from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { FIXED_WEDDING_SONG } from "../config/weddingMusic";
import {
  saveAudioBlobToIndexedDB,
  getAudioBlobFromIndexedDB,
  removeAudioBlobFromIndexedDB,
} from "../utils/audioStorage";

interface AudioTrack {
  id: string;
  title: string;
  subtitle: string;
  src?: string; // MP3 URL or blob URL
  isFixed?: boolean;
}

const PRESET_TRACKS: AudioTrack[] = [
  {
    id: "fixed-default-song",
    title: FIXED_WEDDING_SONG.title,
    subtitle: FIXED_WEDDING_SONG.artist,
    src: FIXED_WEDDING_SONG.src,
    isFixed: true,
  },
];

export const AudioPlayer: React.FC = () => {
  const { t, language } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTrackId, setSelectedTrackId] =
    useState<string>("fixed-default-song");
  const [customTrack, setCustomTrack] = useState<{
    title: string;
    src: string;
    isFile?: boolean;
  } | null>(null);
  const [customUrlInput, setCustomUrlInput] = useState("");
  const [volume, setVolume] = useState(FIXED_WEDDING_SONG.defaultVolume ?? 0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [isLooping, setIsLooping] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [uploadMessage, setUploadMessage] = useState<string | null>(null);

  // Audio elements & file picker refs
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Restore saved audio settings & uploaded MP3 from IndexedDB & localStorage on mount
  useEffect(() => {
    // 1. Check if there's a stored custom MP3 URL
    try {
      const savedUrl = localStorage.getItem("wedding_custom_mp3_url");
      const savedTitle = localStorage.getItem("wedding_custom_mp3_title");
      const savedTrackId = localStorage.getItem("wedding_active_track_id");

      if (savedUrl) {
        setCustomTrack({
          title: savedTitle || "Custom Wedding Song",
          src: savedUrl,
        });
        if (savedTrackId === "custom") {
          setSelectedTrackId("custom");
        }
      } else if (savedTrackId) {
        setSelectedTrackId(savedTrackId);
      }
    } catch {
      // ignore
    }

    // 2. Check IndexedDB for uploaded MP3 file blob
    getAudioBlobFromIndexedDB().then((blob) => {
      if (blob) {
        const objectUrl = URL.createObjectURL(blob);
        const savedTitle =
          localStorage.getItem("wedding_custom_mp3_title") ||
          "Uploaded Wedding MP3";
        setCustomTrack({ title: savedTitle, src: objectUrl, isFile: true });
        setSelectedTrackId("custom");
      }
    });

    // Clean up audio element on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
      }
    };
  }, []);

  // Resolve current active audio track
  const activeTrack: AudioTrack = (() => {
    if (selectedTrackId === "custom" && customTrack) {
      return {
        id: "custom",
        title: customTrack.title,
        subtitle: customTrack.isFile
          ? language === "km"
            ? "ឯកសារ MP3 ដែលបានបញ្ចូល"
            : "Uploaded Local MP3 File"
          : language === "km"
            ? "តំណភ្ជាប់ MP3 ផ្ទាល់ខ្លួន"
            : "Custom MP3 Link",
        src: customTrack.src,
      };
    }
    const preset = PRESET_TRACKS.find((p) => p.id === selectedTrackId);
    return preset || PRESET_TRACKS[0];
  })();

  // Synchronize playing state with the actual audio element
  const playAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (activeTrack.src && (!audio.src || !audio.src.endsWith(activeTrack.src))) {
      audio.src = activeTrack.src;
    }

    audio.volume = isMuted ? 0 : volume;
    audio.loop = isLooping;

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // Autoplay blocked by browser policy until interaction
          setIsPlaying(false);
        });
    }
  };

  const pauseAudio = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
    }
    setIsPlaying(false);
  };

  // Keep volume & muted state in sync with audio element
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
      audioRef.current.loop = isLooping;
    }
  }, [volume, isMuted, isLooping]);

  // Attempt autoplay on mount and unlock playback on first user gesture anywhere
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !activeTrack.src) return;

    if (!audio.src || !audio.src.endsWith(activeTrack.src)) {
      audio.src = activeTrack.src;
    }
    audio.volume = isMuted ? 0 : volume;
    audio.loop = isLooping;

    // Try direct autoplay
    const promise = audio.play();
    if (promise !== undefined) {
      promise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          setIsPlaying(false);
        });
    }

    // Fallback: Unlock and start playing on the very first touch/click/scroll interaction
    const unlockAndPlay = () => {
      const el = audioRef.current;
      if (el && el.paused) {
        el.play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {});
      }
      removeListeners();
    };

    const removeListeners = () => {
      document.removeEventListener("click", unlockAndPlay, { capture: true });
      document.removeEventListener("touchstart", unlockAndPlay, { capture: true });
      document.removeEventListener("pointerdown", unlockAndPlay, { capture: true });
      document.removeEventListener("keydown", unlockAndPlay, { capture: true });
      window.removeEventListener("scroll", unlockAndPlay, { capture: true } as any);
    };

    document.addEventListener("click", unlockAndPlay, { capture: true, once: true });
    document.addEventListener("touchstart", unlockAndPlay, { capture: true, once: true });
    document.addEventListener("pointerdown", unlockAndPlay, { capture: true, once: true });
    document.addEventListener("keydown", unlockAndPlay, { capture: true, once: true });
    window.addEventListener("scroll", unlockAndPlay, { capture: true, once: true } as any);

    return () => {
      removeListeners();
    };
  }, [activeTrack.src]);

  // Handle Play / Pause Toggle
  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      playAudio();
    } else {
      pauseAudio();
    }
  };

  // Switch Track
  const handleSelectTrack = (trackId: string) => {
    setSelectedTrackId(trackId);
    try {
      localStorage.setItem("wedding_active_track_id", trackId);
    } catch {
      // ignore
    }

    const wasPlaying = isPlaying;
    pauseAudio();

    setTimeout(() => {
      if (wasPlaying) {
        playAudio();
      }
    }, 150);
  };

  // Handle Local MP3 File Upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check if it's an audio file
    if (
      !file.type.startsWith("audio/") &&
      !file.name.toLowerCase().endsWith(".mp3")
    ) {
      alert(
        language === "km"
          ? "សូមជ្រើសរើសឯកសារ MP3"
          : "Please select an MP3 audio file",
      );
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    const cleanTitle = file.name.replace(/\.[^/.]+$/, "");

    setCustomTrack({
      title: cleanTitle,
      src: objectUrl,
      isFile: true,
    });
    setSelectedTrackId("custom");

    // Save in IndexedDB & localStorage
    saveAudioBlobToIndexedDB(file).catch(() => {});
    try {
      localStorage.setItem("wedding_custom_mp3_title", cleanTitle);
      localStorage.setItem("wedding_active_track_id", "custom");
    } catch {
      // ignore
    }

    setUploadMessage(
      language === "km"
        ? `បានបញ្ចូលបទ «${cleanTitle}» ដោយជោគជ័យ!`
        : `Uploaded "${cleanTitle}" successfully!`,
    );
    setTimeout(() => setUploadMessage(null), 3500);

    // Switch to playing custom track
    pauseAudio();
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.src = objectUrl;
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => {});
      }
    }, 200);
  };

  // Handle Custom MP3 URL submission
  const handleApplyUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customUrlInput.trim()) return;

    const url = customUrlInput.trim();
    const guessedTitle =
      url
        .split("/")
        .pop()
        ?.split("?")[0]
        .replace(/\.[^/.]+$/, "") || "Custom Wedding MP3";

    setCustomTrack({
      title: guessedTitle,
      src: url,
      isFile: false,
    });
    setSelectedTrackId("custom");

    try {
      localStorage.setItem("wedding_custom_mp3_url", url);
      localStorage.setItem("wedding_custom_mp3_title", guessedTitle);
      localStorage.setItem("wedding_active_track_id", "custom");
    } catch {
      // ignore
    }

    setUploadMessage(
      language === "km"
        ? `បានកំណត់តំណភ្ជាប់ MP3 រួចរាល់!`
        : `Custom MP3 link applied!`,
    );
    setTimeout(() => setUploadMessage(null), 3500);

    pauseAudio();
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.src = url;
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => {});
      }
    }, 200);
  };

  // Remove custom track
  const handleRemoveCustom = () => {
    removeAudioBlobFromIndexedDB();
    try {
      localStorage.removeItem("wedding_custom_mp3_url");
      localStorage.removeItem("wedding_custom_mp3_title");
    } catch {
      // ignore
    }
    setCustomTrack(null);
    handleSelectTrack("fixed-default-song");
  };

  // Track progress listeners
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration || 0);
    };

    const handleEnded = () => {
      if (!isLooping) {
        setIsPlaying(false);
      }
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [isLooping]);

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const seekTime = Number(e.target.value);
    setCurrentTime(seekTime);
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime;
    }
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs === 0) return "0:00";
    const mins = Math.floor(secs / 60);
    const remainder = Math.floor(secs % 60);
    return `${mins}:${remainder.toString().padStart(2, "0")}`;
  };

  return (
    <div className="relative inline-flex items-center gap-1.5">
      {/* Hidden HTML5 Audio Element for reliable playback */}
      <audio
        ref={audioRef}
        src={activeTrack.src}
        preload="auto"
        loop={isLooping}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* 1. Quick Navbar Play / Pause Button with Equalizer animation */}
      <button
        onClick={togglePlay}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 border ${
          isPlaying
            ? "bg-[#FCE7ED] border-[#F295B4] text-[#9D174D] shadow-xs"
            : "bg-white/80 border-[#FCE7ED] text-[#713F5B] hover:bg-white hover:text-[#9D174D]"
        }`}
        title={isPlaying ? t.audio.pause : t.audio.play}
        aria-label="Toggle wedding music"
      >
        {isPlaying ? (
          <>
            {/* Animated Sound Equalizer Bars */}
            <div className="flex items-end gap-0.5 h-3.5 w-3.5">
              <span
                className="w-0.5 bg-[#D13F72] rounded-full animate-bounce h-2"
                style={{ animationDuration: "0.6s" }}
              />
              <span
                className="w-0.5 bg-[#D13F72] rounded-full animate-bounce h-3.5"
                style={{ animationDuration: "0.4s" }}
              />
              <span
                className="w-0.5 bg-[#D13F72] rounded-full animate-bounce h-2.5"
                style={{ animationDuration: "0.5s" }}
              />
            </div>
            <span className="hidden sm:inline font-medium">
              {t.audio.playing}
            </span>
          </>
        ) : (
          <>
            <Music className="w-3.5 h-3.5 text-[#D13F72]" />
            <span className="hidden sm:inline">{t.audio.play}</span>
          </>
        )}
      </button>

      {/* 2. Audio Settings / "Add MP3" Button */}
      {/* <button
        onClick={() => setIsModalOpen(true)}
        className="p-1.5 rounded-full bg-white/80 hover:bg-[#FFF0F4] border border-[#FCE7ED] text-[#713F5B] hover:text-[#D13F72] transition-colors"
        title={
          language === "km"
            ? "បន្ថែម ឬប្តូរបទចម្រៀង MP3"
            : "Add or Change MP3 Song"
        }
        aria-label="Open wedding audio player settings"
      >
        <Sliders className="w-3.5 h-3.5" />
      </button> */}

      {/* 3. Comprehensive Audio Player & MP3 Customizer Modal */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#FCE7ED] p-6 sm:p-7 flex flex-col justify-between animate-in zoom-in-95 duration-200"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#FCE7ED] mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#FFF0F4] border border-[#FCE7ED] flex items-center justify-center text-[#D13F72]">
                    <Music className="w-4 h-4 fill-[#D13F72]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-medium text-[#2D1522]">
                      {t.audio.title}
                    </h3>
                    <p className="text-xs text-[#713F5B]">{t.audio.subtitle}</p>
                  </div>
                </div>

                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
                  aria-label="Close audio modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Status Message Notification */}
              {uploadMessage && (
                <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center gap-2 animate-in fade-in">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{uploadMessage}</span>
                </div>
              )}

              {/* Now Playing Card with Playback Controls */}
              <div className="bg-gradient-to-br from-[#FFF9FA] via-[#FFF0F4] to-[#FCE7ED]/50 rounded-2xl p-5 border border-[#FCE7ED] mb-6 shadow-2xs">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D13F72] animate-ping" />
                    <span className="text-[11px] uppercase tracking-wider text-[#9D174D] font-semibold">
                      {t.audio.nowPlaying}
                    </span>
                  </div>
                  <span className="text-[11px] text-[#713F5B] px-2 py-0.5 rounded-full bg-white/70 border border-[#FCE7ED]">
                    MP3 Audio
                  </span>
                </div>

                <h4 className="font-serif text-2xl font-medium text-[#2D1522] mb-0.5 truncate">
                  {activeTrack.title}
                </h4>
                <p className="text-xs text-[#713F5B] mb-4 truncate font-light">
                  {activeTrack.subtitle}
                </p>

                {/* Scrubber Progress Bar for MP3 */}
                <div className="mb-4">
                  <input
                    type="range"
                    min={0}
                    max={duration || 100}
                    value={currentTime}
                    onChange={handleSeek}
                    className="w-full h-1.5 bg-[#F9CAD8] rounded-lg appearance-none cursor-pointer accent-[#D13F72]"
                  />
                  <div className="flex justify-between text-[10px] text-[#713F5B] mt-1 font-mono">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>

                {/* Primary Player Controls */}
                <div className="flex items-center justify-between pt-1">
                  {/* Volume Control */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="text-[#713F5B] hover:text-[#D13F72] transition-colors"
                      title={isMuted ? "Unmute" : "Mute"}
                    >
                      {isMuted || volume === 0 ? (
                        <VolumeX className="w-4 h-4" />
                      ) : volume < 0.5 ? (
                        <Volume1 className="w-4 h-4" />
                      ) : (
                        <Volume2 className="w-4 h-4" />
                      )}
                    </button>
                    <input
                      type="range"
                      min={0}
                      max={1}
                      step={0.05}
                      value={isMuted ? 0 : volume}
                      onChange={(e) => {
                        setVolume(Number(e.target.value));
                        setIsMuted(false);
                      }}
                      className="w-18 sm:w-24 h-1 bg-[#F9CAD8] rounded-lg appearance-none cursor-pointer accent-[#D13F72]"
                    />
                  </div>

                  {/* Play / Pause Big Button */}
                  <button
                    onClick={togglePlay}
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-[#D13F72] via-[#BE185D] to-[#9D174D] text-white shadow-md hover:scale-105 active:scale-95 transition-all flex items-center justify-center"
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5 fill-white" />
                    ) : (
                      <Play className="w-5 h-5 fill-white ml-0.5" />
                    )}
                  </button>

                  {/* Loop Toggle */}
                  <button
                    onClick={() => setIsLooping(!isLooping)}
                    className={`p-2 rounded-full border transition-colors ${
                      isLooping
                        ? "bg-[#FCE7ED] border-[#D13F72] text-[#D13F72]"
                        : "bg-white border-[#FCE7ED] text-[#713F5B]"
                    }`}
                    title={t.audio.loop}
                  >
                    <Repeat className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Section 1: Upload Your Own MP3 File */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Upload className="w-4 h-4 text-[#D13F72]" />
                  <label className="text-xs uppercase font-semibold tracking-wider text-[#9D174D]">
                    {t.audio.uploadMp3}
                  </label>
                </div>
                <p className="text-xs text-[#713F5B] mb-3 font-light">
                  {t.audio.uploadDesc}
                </p>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="audio/mp3,audio/mpeg,audio/wav,audio/ogg,audio/*"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="mp3-file-picker"
                />

                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full py-3 px-4 rounded-xl border-2 border-dashed border-[#F9CAD8] hover:border-[#D13F72] bg-[#FFF9FA] hover:bg-[#FFF0F4] text-[#713F5B] hover:text-[#9D174D] transition-all flex items-center justify-center gap-2 text-xs font-medium cursor-pointer"
                >
                  <Upload className="w-4 h-4 text-[#D13F72]" />
                  <span>
                    {customTrack?.isFile
                      ? language === "km"
                        ? `ផ្លាស់ប្តូរឯកសារ MP3 (${customTrack.title})`
                        : `Replace MP3 File (${customTrack.title})`
                      : language === "km"
                        ? "ជ្រើសរើសឯកសារ MP3 ពីឧបករណ៍របស់អ្នក"
                        : "Choose MP3 File from Device"}
                  </span>
                </button>
              </div>

              {/* Section 2: Paste an MP3 Web Link (URL) */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <LinkIcon className="w-4 h-4 text-[#D13F72]" />
                  <label className="text-xs uppercase font-semibold tracking-wider text-[#9D174D]">
                    {t.audio.orPasteUrl}
                  </label>
                </div>

                <form onSubmit={handleApplyUrl} className="flex gap-2">
                  <input
                    type="url"
                    placeholder={t.audio.urlPlaceholder}
                    value={customUrlInput}
                    onChange={(e) => setCustomUrlInput(e.target.value)}
                    className="flex-1 px-3.5 py-2.5 rounded-xl border border-[#FCE7ED] focus:border-[#D13F72] text-xs text-[#2D1522] outline-none"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#D13F72] to-[#BE185D] hover:from-[#BE185D] hover:to-[#9D174D] text-white text-xs font-semibold whitespace-nowrap shadow-xs active:scale-95 transition-all"
                  >
                    {t.audio.applyUrl}
                  </button>
                </form>
              </div>

              {/* Section 3: Select from Curated Wedding Presets */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-[#D13F72]" />
                  <span className="text-xs uppercase font-semibold tracking-wider text-[#9D174D]">
                    {t.audio.presets}
                  </span>
                </div>

                <div className="space-y-2">
                  {/* Custom Track Option (if uploaded or URL entered) */}
                  {customTrack && (
                    <div
                      onClick={() => handleSelectTrack("custom")}
                      className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        selectedTrackId === "custom"
                          ? "border-[#D13F72] bg-[#FFF0F4] shadow-xs"
                          : "border-[#FCE7ED] hover:bg-[#FFF9FA]"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        <Heart className="w-4 h-4 text-[#D13F72] fill-[#D13F72] shrink-0" />
                        <div className="truncate">
                          <span className="text-xs font-semibold text-[#2D1522] block truncate">
                            {customTrack.title}
                          </span>
                          <span className="text-[10px] text-[#713F5B]">
                            {t.audio.customTrack} ·{" "}
                            {customTrack.isFile ? "Local File" : "URL Link"}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {selectedTrackId === "custom" && (
                          <span className="w-2 h-2 rounded-full bg-[#D13F72]" />
                        )}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRemoveCustom();
                          }}
                          className="p-1 hover:text-rose-600 text-slate-400"
                          title={t.audio.removeCustom}
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Preset Tracks */}
                  {PRESET_TRACKS.map((track) => (
                    <div
                      key={track.id}
                      onClick={() => handleSelectTrack(track.id)}
                      className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        selectedTrackId === track.id
                          ? "border-[#D13F72] bg-[#FFF0F4] shadow-xs"
                          : "border-[#FCE7ED] hover:bg-[#FFF9FA]"
                      }`}
                    >
                      <div className="truncate">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-semibold text-[#2D1522] block truncate">
                            {track.title}
                          </span>
                          {track.isFixed && (
                            <span className="text-[9px] uppercase px-1.5 py-0.5 rounded-full bg-white border border-[#F9CAD8] text-[#9D174D] font-semibold shrink-0">
                              {language === "km"
                                ? "កំណត់ក្នុងកូដ"
                                : "Fixed in Code"}
                            </span>
                          )}
                        </div>
                        <span className="text-[10px] text-[#713F5B] truncate block">
                          {track.subtitle}
                        </span>
                      </div>
                      {selectedTrackId === track.id && (
                        <Check className="w-4 h-4 text-[#D13F72] shrink-0" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Close */}
            <div className="pt-5 border-t border-[#FCE7ED] flex justify-end mt-5">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#D13F72] to-[#BE185D] shadow-xs hover:shadow-md transition-all"
              >
                {language === "km" ? "រួចរាល់" : "Done"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
