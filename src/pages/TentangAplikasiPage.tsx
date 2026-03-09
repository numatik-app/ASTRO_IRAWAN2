import { Link } from "react-router-dom";
import { ArrowLeft, Info } from "lucide-react";

const TentangAplikasiPage = () => {
  return (
    <div className="min-h-screen bg-background p-4">
      <Link to="/menu" className="inline-flex items-center text-primary hover:underline mb-4">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Kembali ke Menu
      </Link>
      <h1 className="text-3xl font-bold text-center mb-8">Tentang Aplikasi</h1>
      <div className="max-w-2xl mx-auto">
        <div className="border rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Info className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-xl font-semibold">Numatik Math App</h2>
              <p className="text-sm text-muted-foreground">Versi 1.0.0</p>
            </div>
          </div>
          <p className="text-muted-foreground">
            Aplikasi pembelajaran matematika interaktif untuk siswa SMP kelas 7-9 di Indonesia.
            Dilengkapi dengan materi, latihan soal, kuis, dan fitur AI untuk membantu belajar.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TentangAplikasiPage;
