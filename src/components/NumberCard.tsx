type Props = {
  n: number;
  disabled?: boolean;
  onPick: (n: number) => void;
  state?: "idle" | "correct" | "wrong" | "used";
};

export default function NumberCard({
  n,
  onPick,
  disabled,
  state = "idle",
}: Props) {
  const visual = {
    idle: "bg-white hover:bg-alfath-gold/10",
    used: "bg-neutral-100 text-neutral-400 cursor-not-allowed",
    wrong: "bg-red-50 text-red-600 ring-1 ring-red-100",
    correct: "bg-green-50 text-green-700 ring-1 ring-green-100",
  }[state];

  return (
    <button
      type="button"
      disabled={disabled || state === "used"}
      onClick={() => onPick(n)}
      className={`card h-16 md:h-20 w-full transition-colors ${visual}`}
      aria-label={`Pilih angka ${n}`}
    >
      <span className="text-xl md:text-2xl font-bold">{n}</span>
    </button>
  );
}
