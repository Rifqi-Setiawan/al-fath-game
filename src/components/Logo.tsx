import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex flex-col items-center gap-4 select-none">
      <div className="relative w-28 h-28 rounded-2xl bg-white p-4 shadow-[0_12px_30px_rgba(0,0,0,0.08)] border-4 border-yellow-200">
        <Image src="/al-fath-logo.png" alt="Al-Fath Logo" fill className="object-contain p-1" />
      </div>
      <div className="text-center">
        <h1
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent"
          style={{ fontFamily: 'var(--font-inter), sans-serif' }}
        >
          Al-Fath FIF
        </h1>
        <p className="text-amber-700 font-medium">Game Menebak Angka</p>
      </div>
    </div>
  );
}
