type Props = { lives: number; max?: number };

export default function Lives({ lives, max = 3 }: Props) {
  return (
    <div className="flex items-center justify-center gap-2 text-2xl" aria-label={`Sisa nyawa ${lives}`}>
      {Array.from({ length: max }).map((_, i) => (
        <span key={i} className={i < lives ? "text-[#E63946]" : "text-neutral-300"}>❤️</span>
      ))}
    </div>
  );
}
