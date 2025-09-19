import Image from "next/image";

const PHOTOS = ["/gallery/01.jpg","/gallery/02.jpg","/gallery/03.jpg","/gallery/04.jpg","/gallery/05.jpg"];

export default function BackgroundGallery() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 p-6">
          {PHOTOS.map((src, i) => (
            <div key={i} className="frame-mask overflow-hidden">
              <Image src={src} alt="Kegiatan Al-Fath" width={400} height={300} className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/55 to-white/90" />
    </div>
  );
}
