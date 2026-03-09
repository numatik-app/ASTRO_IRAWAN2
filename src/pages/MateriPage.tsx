import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Starfield from "@/components/Starfield";
import { Presentation, ArrowLeft, BookOpen } from "lucide-react";
import PageNavigation from "@/components/PageNavigation";
import { playPopSound } from "@/hooks/useAudio";
import { materiTopics } from "@/data/menuNavigasi";

type Kelas = keyof typeof materiTopics;
type Topic = typeof materiTopics[Kelas][number];

const MateriPage = () => {
  const navigate = useNavigate();
  const [selectedKelas, setSelectedKelas] = useState<Kelas | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);

  const handleBack = () => {
    playPopSound();
    if (selectedTopic) {
      setSelectedTopic(null);
    } else if (selectedKelas) {
      setSelectedKelas(null);
    } else {
      navigate("/menu");
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center gradient-space overflow-hidden">
      <Starfield />
      <PageNavigation />
      <div className="relative z-10 max-w-3xl w-full px-4 py-10">
        <h1 className="font-display text-2xl md:text-3xl font-bold text-white text-glow-cyan mb-2 text-center">
          MATERI
        </h1>
        <p className="text-white/60 text-sm text-center mb-8 font-body">
          {!selectedKelas 
            ? "Pilih tingkatan kelas" 
            : !selectedTopic 
              ? `Materi ${selectedKelas} — Pilih topik` 
              : `${selectedKelas} > ${selectedTopic.label}`}
        </p>

        {/* Level 1: Kelas Selection */}
        {!selectedKelas && (
          <div className="animate-slide-up grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg mx-auto">
            {(Object.keys(materiTopics) as Kelas[]).map((kelas, i) => (
              <button
                key={kelas}
                onClick={() => { playPopSound(); setSelectedKelas(kelas); }}
                className="group bg-card/80 backdrop-blur border border-border rounded-xl p-6 
                  hover:border-primary/60 hover:box-glow-cyan transition-all duration-300 
                  cursor-pointer text-center animate-slide-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <Presentation className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-sm font-bold text-white">{kelas}</h3>
                <p className="text-xs text-muted-foreground mt-1 font-body">
                  {materiTopics[kelas].length} topik utama
                </p>
              </button>
            ))}
          </div>
        )}

        {/* Level 2: Topic Selection */}
        {selectedKelas && !selectedTopic && (
          <div className="animate-slide-up flex flex-col gap-3">
            <button
              onClick={handleBack}
              className="flex items-center gap-1 text-sm text-white/70 hover:text-primary transition-colors cursor-pointer font-body mb-2"
            >
              <ArrowLeft className="w-4 h-4" /> Kembali ke Pilih Kelas
            </button>
            <div className="grid grid-cols-1 gap-2">
              {materiTopics[selectedKelas].map((topic, i) => (
                <button
                  key={topic.label}
                  className="group flex items-center gap-4 bg-card/80 backdrop-blur border border-border rounded-xl px-5 py-4
                    hover:border-primary/60 hover:box-glow-cyan transition-all duration-300
                    cursor-pointer text-left animate-slide-up"
                  style={{ animationDelay: `${i * 0.05}s` }}
                  onClick={() => { playPopSound(); setSelectedTopic(topic); }}
                >
                  <BookOpen className="w-5 h-5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="font-body text-sm text-white">{topic.label}</span>
                  <span className="ml-auto text-xs text-accent font-display">LIHAT SUBTOPIK →</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Level 3: Subtopic Selection */}
        {selectedKelas && selectedTopic && (
          <div className="animate-slide-up flex flex-col gap-3">
            <button
              onClick={handleBack}
              className="flex items-center gap-1 text-sm text-white/70 hover:text-primary transition-colors cursor-pointer font-body mb-2"
            >
              <ArrowLeft className="w-4 h-4" /> Kembali ke Daftar Topik
            </button>
            <div className="grid grid-cols-1 gap-2">
              {selectedTopic.subtopics.map((sub, i) => (
                <button
                  key={sub.label}
                  className="group flex items-center gap-4 bg-card/80 backdrop-blur border border-border rounded-xl px-5 py-4
                    hover:border-accent/60 hover:box-glow-accent transition-all duration-300
                    cursor-pointer text-left animate-slide-up"
                  style={{ animationDelay: `${i * 0.05}s` }}
                  onClick={() => { playPopSound(); navigate(sub.route); }}
                >
                  <Presentation className="w-5 h-5 text-accent shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="font-body text-sm text-white">{sub.label}</span>
                  <span className="ml-auto text-xs text-accent font-display">📖 BUKA MATERI</span>
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8 text-center">
          <button
            onClick={() => navigate("/menu")}
            className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer font-body"
          >
            ← Kembali ke Menu Utama
          </button>
        </div>
      </div>
    </div>
  );
};

export default MateriPage;
